import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { error } from 'util';
import { Istudent } from 'src/app/shared/models/interfaces/Istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Istudent[];
  url = "http://localhost:55694/api/students";
 
  getStudents() {
  this.http.get<Istudent[]>(this.url).subscribe(res => { this.students = res });
    return this.http.get<Istudent[]>(this.url);
  }

  add(student): Observable<Istudent> {
    console.log(student);
    return this.http.post<Istudent>(this.url, student);
  }
  public getStudent(id) {
    return this.students.find(student => student.id == id);
}

  delete(id: number){    
    const url = `${this.url}/${id}`;
    this.http.delete(url).subscribe(
      (isSuccess)=>
      {
        if(isSuccess)
        { 
          debugger
          var i =this.students.findIndex(a=> a.id === id);
          this.students.splice(i,1);
          this.http.delete(url);
        }
      },
      (error)=> {
        alert('you can not delete this student since it has a relation with courses and instructors');
      }
    );
  }

  edit(student): Observable<Istudent> {
    const url = `${this.url}/${student.id}`;
    //console.log(url);
    return this.http.put<Istudent>(url, student);
  }

  constructor(private http: HttpClient) {
    this.getStudents();
  }

}
