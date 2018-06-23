import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/shared/services/instructor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Iinstructor } from 'src/app/shared/models/interfaces/Iinstructor';
import { Icourse } from 'src/app/shared/models/interfaces/Icourse';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {

  myForm: FormGroup;
  id:number;
  instructor:Iinstructor;
  courses:Icourse[];
  constructor(private cs:CourseService,private InstructorService:InstructorService,private ar:ActivatedRoute,private r:Router) { }

  ngOnInit() {
    this.cs.getCourses().subscribe(data=>this.courses=data);
    this.ar.params.subscribe((params)=>{this.id=params['id'];});
    this.instructor = this.InstructorService.getInstructor(this.id);

    this.myForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl,
      email: new FormControl(),
      department: new FormControl(),
      courses: new FormControl()
    });
    this.myForm.patchValue({
      name: this.instructor.name,
      phone: this.instructor.phone,
      email: this.instructor.email,
      department: this.instructor.department,
      courses: this.instructor.courses
    })
  }
  onSubmit() {
    var i = this.InstructorService.instructors.indexOf(this.instructor);    
    this.instructor = {
      id:this.instructor.id,
      name: this.myForm.get('name').value,
      phone: this.myForm.get('phone').value,
      email: this.myForm.get('email').value,
      department: this.myForm.get('department').value,
      courses: this.myForm.get('courses').value
    }
    this.InstructorService.instructors[i] = this.instructor;
    this.InstructorService.edit(this.instructor).subscribe();
    this.r.navigate(['/instructors','listing']);
    console.log(this.instructor);

  }

}
