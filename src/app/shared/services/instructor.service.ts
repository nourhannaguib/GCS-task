import { Injectable } from '@angular/core';
import { Iinstructor } from 'src/app/shared/models/interfaces/Iinstructor';
import { Http, HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class InstructorService {
    instructors:Iinstructor[];
    instructor:Iinstructor;
    editFlag:boolean;
    url = "http://localhost:55694/api/instructors";
   
    getInstructors() {
    this.http.get<Iinstructor[]>(this.url).subscribe(res => { this.instructors = res });
      return this.http.get<Iinstructor[]>(this.url);
    }
  
    add(instructor): Observable<Iinstructor> {
      return this.http.post<Iinstructor>(this.url, instructor);
    }
  
    public getInstructor(id) {
      return this.instructors.find(instructor => instructor.id == id);
  }
    delete(id: number){    
      const url = `${this.url}/${id}`;
      this.http.delete(url).subscribe(
        (isSuccess)=>
        {
          if(isSuccess)
          { 
            var i =this.instructors.findIndex(a=> a.id === id);
            this.instructors.splice(i,1);
            this.http.delete(url);
          }
        },
        (error)=> {
          alert('you can not delete this instructor since it has a relation with courses and students');
        }
      );
    }
  
    edit(instructor): Observable<Iinstructor> {
      const url = `${this.url}/${instructor.id}`;
      console.log(url);
      return this.http.put<Iinstructor>(url, instructor);
    }
  
    constructor(private http: HttpClient) {
      this.getInstructors();
    }
  
}
