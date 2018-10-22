import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroAnguar7Component } from './intro-anguar7/intro-anguar7.component';
import { CourseComponent } from './course/course.component';
import { TheBasicsComponent } from './the-basics/the-basics.component';
import { TheBasicsCopntComponent } from './the-basics-copnt/the-basics-copnt.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TheCourseBasicsComponent } from './the-course-basics/the-course-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroAnguar7Component,
    CourseComponent,
    TheBasicsComponent,
    TheBasicsCopntComponent,
    ServerComponent,
    ServersComponent,
    TheCourseBasicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '', component : IntroAnguar7Component },
      { path : 'course', component : CourseComponent },
      { path : 'the-basics', component : TheBasicsComponent },
      { path : 'components', component : TheBasicsCopntComponent },
      { path : 'Course Project - The Basics', component : TheCourseBasicsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
