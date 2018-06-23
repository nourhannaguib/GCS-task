import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/models/interfaces/Istudent';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrls: ['./student-listing.component.css']
})
export class StudentListingComponent implements OnInit {
  students:any[]=[];
  student:Istudent;
   constructor(private StudentService:StudentService) { }
   getStudents() {
     this.StudentService.getStudents().subscribe(res => {
       this.StudentService.students = res;
       this.students=this.StudentService.students;
     });
   }
   ngOnInit() {
  
     this.getStudents();
   }
   delete(id){
     this.StudentService.delete(id);
   }

}
