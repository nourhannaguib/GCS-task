import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/shared/services/instructor.service';
import { Iinstructor } from 'src/app/shared/models/interfaces/Iinstructor';

@Component({
  selector: 'app-instructor-listing',
  templateUrl: './instructor-listing.component.html',
  styleUrls: ['./instructor-listing.component.css']
})
export class InstructorListingComponent implements OnInit {

   //instructors:Iinstructor[];
 instructors:any[]=[];
 instructor:Iinstructor;
  constructor(private InstructorService:InstructorService) { }
  getInstructors() {
    this.InstructorService.getInstructors().subscribe(res => {
      this.InstructorService.instructors = res;
      this.instructors=this.InstructorService.instructors;
    });
  }
  ngOnInit() {
    this.getInstructors();    
  }

  delete(id){
    this.InstructorService.delete(id);
  }
  edit(i){
    this.InstructorService.editFlag = true;
    this.InstructorService.instructor = Object.assign({},i);
    alert("from edit");
    console.log(this.InstructorService.instructor);
  }


  // instructors: any[]=[];
  // instructor: Iinstructor;
 
  // getInstructors() {
  //   this.InstructorService.getInstructors().subscribe(res => {
  //     this.InstructorService.instructors = res;
  //     this.instructors=this.InstructorService.instructors;
  //   });
  // }
  // delete(id: number) {
  //   this.InstructorService.delete(id);
  // }
  // constructor(private InstructorService: InstructorService) { }
  // ngOnInit() {
  //   this.getInstructors();
  // }


}
