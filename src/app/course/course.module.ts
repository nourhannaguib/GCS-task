import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes,ActivatedRoute} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule
  ],
  declarations: [CourseComponent,
    CourseListingComponent,
    CourseAddComponent,
    CourseEditComponent
]
})
export class CourseModule { }
