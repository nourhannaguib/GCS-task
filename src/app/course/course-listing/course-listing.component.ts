import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/services/course.service';
import { Icourse } from 'src/app/shared/models/interfaces/Icourse';

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.css']
})
export class CourseListingComponent implements OnInit {
  course:Icourse;
  courses: Icourse[]=[];
  //courses:Icourse[];
  constructor(private CourseService:CourseService) { }
  getCourses() {
    this.CourseService.getCourses().subscribe(res => {
      this.CourseService.courses = res;
      this.courses=this.CourseService.courses;
    });
    
  }
  ngOnInit() {
    //this.courses=this.CourseServiceService.getCourses();
    this.getCourses();
    console.log(this.courses);
  }
  delete(id){
    this.CourseService.delete(id);
  }

}
