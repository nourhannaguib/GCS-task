import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Icourse } from 'src/app/shared/models/interfaces/Icourse';
import { Iinstructor } from 'src/app/shared/models/interfaces/Iinstructor';
import { Istudent } from 'src/app/shared/models/interfaces/Istudent';
import { CourseService } from 'src/app/shared/services/course.service';
import { InstructorService } from 'src/app/shared/services/instructor.service';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  myForm: FormGroup;
  course: Icourse;
  instructors: Iinstructor[] = [];
  students: Istudent[] = [];
  id:number;
  constructor(private cs: CourseService,
    private is: InstructorService,
    private ss: StudentService,
    private r: Router,
    private ar:ActivatedRoute) { }

  ngOnInit() {
    this.is.getInstructors().subscribe(data => this.instructors = data);
    this.ss.getStudents().subscribe(data => this.students = data);

    this.ar.params.subscribe((params)=>{this.id=params['id'];});
    this.course = this.cs.getCourse(this.id);

    this.myForm = new FormGroup({
      code: new FormControl(),
      name: new FormControl,
      hours: new FormControl(),
      students: new FormControl(),
      instructors: new FormControl()
    });
    this.myForm.patchValue({
      code: this.course.code,
      name: this.course.name,
      hours: this.course.hours,
      students: this.course.students,
      instructors:this.course.instructors
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
