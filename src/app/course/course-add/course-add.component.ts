import { Component, OnInit } from '@angular/core';
import { Icourse } from 'src/app/shared/models/interfaces/Icourse';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CourseService } from 'src/app/shared/services/course.service';
import { Iinstructor } from 'src/app/shared/models/interfaces/Iinstructor';
import { Istudent } from 'src/app/shared/models/interfaces/Istudent';
import { InstructorService } from 'src/app/shared/services/instructor.service';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  myForm: FormGroup;
  course: Icourse;
  instructors: Iinstructor[] = [];
  students: Istudent[] = [];
  constructor(private cs: CourseService,
    private is: InstructorService,
    private ss: StudentService,
    private r: Router) { }

  ngOnInit() {
    this.is.getInstructors().subscribe(data => this.instructors = data);
    this.ss.getStudents().subscribe(data => this.students = data);
    this.myForm = new FormGroup({
      code: new FormControl(),
      name: new FormControl,
      hours: new FormControl(),
      students: new FormControl(),
      instructors: new FormControl()
    });
  }
  onSubmit() {
    this.course = {
      code: this.myForm.get('code').value,
      name: this.myForm.get('name').value,
      hours: this.myForm.get('hours').value,
      students: this.myForm.get('students').value,
      instructors: this.myForm.get('instructors').value
    }
    this.cs.courses.push(this.course);
    this.cs.add(this.course).subscribe(course => this.cs.courses.push(course));
    this.r.navigate(['/courses', 'listing']);


  }

}
