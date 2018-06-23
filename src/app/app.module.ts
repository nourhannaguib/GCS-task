import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {RouterModule,Routes,ActivatedRoute} from '@angular/router';
import { InstructorComponent } from 'src/app/instructor/instructor.component';
import { InstructorModule } from 'src/app/instructor/instructor.module';
import { InstructorService } from 'src/app/shared/services/instructor.service';
import { InstructorListingComponent } from 'src/app/instructor/instructor-listing/instructor-listing.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CourseService } from 'src/app/shared/services/course.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { InstructorEditComponent } from 'src/app/instructor/instructor-edit/instructor-edit.component';
import { InstructorAddComponent } from 'src/app/instructor/instructor-add/instructor-add.component';
import { StudentListingComponent } from 'src/app/student/student-listing/student-listing.component';
import { StudentModule } from 'src/app/student/student.module';
import { CourseListingComponent } from 'src/app/course/course-listing/course-listing.component';
import { CourseModule } from 'src/app/course/course.module';
import { StudentAddComponent } from 'src/app/student/student-add/student-add.component';
import { StudentEditComponent } from 'src/app/student/student-edit/student-edit.component';
import { CourseAddComponent } from 'src/app/course/course-add/course-add.component';
import { CourseEditComponent } from 'src/app/course/course-edit/course-edit.component';

const routes:Routes = [
  {path :'instructors/listing', component : InstructorListingComponent},
  {path :'instructors/edit/:id',component: InstructorEditComponent},
  {path :'instructors/add',component: InstructorAddComponent},

  {path :'students/listing', component : StudentListingComponent},
  {path :'students/add', component : StudentAddComponent},
  {path :'students/edit/:id',component: StudentEditComponent},

  {path :'courses/listing', component : CourseListingComponent},
  {path :'courses/add', component : CourseAddComponent},
  {path :'courses/edit/:id', component : CourseEditComponent},
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    RouterModule.forRoot(routes),
    InstructorModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatSelectModule,
    StudentModule,
    CourseModule
    
  ],
  providers: [
    InstructorService,
    CourseService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
