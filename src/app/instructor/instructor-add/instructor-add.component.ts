import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Icourse } from 'src/app/shared/models/interfaces/Icourse';
import { CourseService } from 'src/app/shared/services/course.service';
import { MatSelectModule } from '@angular/material/select';
import { Iinstructor } from 'src/app/shared/models/interfaces/Iinstructor';
import { InstructorService } from 'src/app/shared/services/instructor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-instructor-add',
  templateUrl: './instructor-add.component.html',
  styleUrls: ['./instructor-add.component.css']
})
export class InstructorAddComponent implements OnInit {

  myForm: FormGroup;
  courses: Icourse[];
  instructor: Iinstructor;

  constructor(private cs: CourseService, private InstructorService: InstructorService, private r:Router) {
    
  }

  ngOnInit() {
    this.cs.getCourses().subscribe(data=>this.courses=data);
    this.myForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl,
      email: new FormControl(),
      department: new FormControl(),
      courses: new FormControl()
    });
  }

  onSubmit() {
    this.instructor = {
      name: this.myForm.get('name').value,
      phone: this.myForm.get('phone').value,
      email: this.myForm.get('email').value,
      department: this.myForm.get('department').value,
      courses: this.myForm.get('courses').value
    }
    this.InstructorService.instructors.push(this.instructor);
    this.InstructorService.add(this.instructor).subscribe(instructor => this.InstructorService.instructors.push(instructor));
    this.r.navigate(['/instructors','listing']);
    console.log(this.instructor);

  }
}
