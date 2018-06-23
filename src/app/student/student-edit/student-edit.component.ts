import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CourseService } from 'src/app/shared/services/course.service';
import { InstructorService } from 'src/app/shared/services/instructor.service';
import { Icourse } from 'src/app/shared/models/interfaces/Icourse';
import { Iinstructor } from 'src/app/shared/models/interfaces/Iinstructor';
import { Istudent } from 'src/app/shared/models/interfaces/Istudent';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  myForm: FormGroup;
  id:number;
  instructor:Iinstructor;
  courses:Icourse[];
  student:Istudent;
  constructor(private cs:CourseService,
    private InstructorService:InstructorService,
    private ar:ActivatedRoute,
    private ss:StudentService,
    private r:Router) { }

  ngOnInit() {
    this.cs.getCourses().subscribe(data=>this.courses=data);
    this.ar.params.subscribe((params)=>{this.id=params['id'];});
    this.student = this.ss.getStudent(this.id);

    this.myForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl,
      email: new FormControl(),
      dateOfBirth: new FormControl(),
      courses: new FormControl(),
      instructors:new FormControl()
    });
    this.myForm.patchValue({
      name: this.student.name,
      phone: this.student.phone,
      email: this.student.email,
      dateOfBirth: this.student.dateOfBirth,
      courses: this.student.courses,
      instructors:this.student.instructors
    })
  }
  onSubmit() {
    var i = this.ss.students.indexOf(this.student);    
    this.student = {
      id:this.student.id,
      name: this.myForm.get('name').value,
      phone: this.myForm.get('phone').value,
      email: this.myForm.get('email').value,
      dateOfBirth: this.myForm.get('dateOfBirth').value,
      courses: this.myForm.get('courses').value,
      instructors:this.myForm.get('instructors').value
    }
    this.ss.students[i] = this.student;
    this.ss.edit(this.student).subscribe();
    this.r.navigate(['/students','listing']);
    console.log(this.student);

  }

}
