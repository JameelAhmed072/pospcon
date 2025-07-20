import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainProgramComponent } from './main-program/main-program.component';
import { DeformityCorrectionCourseComponent } from './deformity-correction-course/deformity-correction-course.component';




const routes: Routes = [
  // Define your routes here
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'main-program', component: MainProgramComponent },
  { path: 'deformity-correction-course', component: DeformityCorrectionCourseComponent },
  

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RegistrationComponent,
    MainProgramComponent,
    DeformityCorrectionCourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
