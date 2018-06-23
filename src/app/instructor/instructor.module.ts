import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor.component';
import { InstructorListingComponent } from './instructor-listing/instructor-listing.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { InstructorAddComponent } from './instructor-add/instructor-add.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';
import { InstructorItemComponent } from './instructor-item/instructor-item.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes,ActivatedRoute} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';


//import { CourseService } from 'src/app/shared/services/course.service';


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
  declarations: [InstructorComponent,
    InstructorListingComponent,
    InstructorDetailsComponent,
    InstructorAddComponent,
    InstructorEditComponent,
    InstructorItemComponent
]
})
export class InstructorModule { }
