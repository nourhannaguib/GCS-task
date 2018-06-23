import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { Iinstructor } from 'src/app/shared/models/interfaces/Iinstructor';
import { InstructorService } from 'src/app/shared/services/instructor.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Icourse } from 'src/app/shared/models/interfaces/Icourse';
import { Istudent } from 'src/app/shared/models/interfaces/Istudent';
import { StudentService } from 'src/app/shared/services/student.service';
import { CourseService } from 'src/app/shared/services/course.service';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  myForm: FormGroup;
  courses: Icourse[] = [];
  student: Istudent;
  instructors: Iinstructor[]=[];
  constructor(private StudentService: StudentService,
    private is: InstructorService,
    private cs: CourseService,
    private r: Router) { }

  ngOnInit() {
    this.cs.getCourses().subscribe(data => this.courses = data);
    this.is.getInstructors().subscribe(data=> this.instructors = data);
    this.myForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl,
      email: new FormControl(),
      dateOfBirth: new FormControl(),
      courses: new FormControl(),
      instructors: new FormControl()
    });
  }

  onSubmit() {
    this.student = {
      name: this.myForm.get('name').value,
      phone: this.myForm.get('phone').value,
      email: this.myForm.get('email').value,
      dateOfBirth: this.myForm.get('dateOfBirth').value,
      courses: this.myForm.get('courses').value,
      instructors: this.myForm.get('instructors').value
    }
    this.StudentService.students.push(this.student);
    this.StudentService.add(this.student).subscribe(student => this.StudentService.students.push(student));
    this.r.navigate(['/students', 'listing']);


  }

}
