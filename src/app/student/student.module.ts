import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentListingComponent } from './student-listing/student-listing.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes,ActivatedRoute} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule
  ],
  declarations: [StudentComponent,
    StudentListingComponent,
    StudentAddComponent,
    StudentEditComponent
]
})
export class StudentModule { }
