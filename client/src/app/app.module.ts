import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { JobComponent } from './components/job/job.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/account/account.component';
import { ResumeComponent } from './components/resume/resume.component';
import { InfoComponent } from './components/info/info.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ResumesComponent } from './components/resumes/resumes.component';
import { CreateresumeComponent } from './components/createresume/createresume.component';
import { ResumeToSendComponent } from './components/resume/resume-to-send/resume-to-send.component';
import { PersonalComponent } from './components/personal/personal.component';
import { MaterialModule } from './material/material.module';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { NewVacancyComponent } from './components/vacancy/new-vacancy/new-vacancy.component';


import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgForOf, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SearchComponent,
    JobComponent,
    LoginComponent,
    FooterComponent,
    AccountComponent,
    ResumeComponent,
    InfoComponent,
    FavoriteComponent,
    ResumesComponent,
    CreateresumeComponent,
    ResumeToSendComponent,
    PersonalComponent,
    VacancyComponent,
    NewVacancyComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      BrowserModule,
      NgbModule,
      FormsModule,
      Ng2SearchPipeModule,
      RouterModule,
      MaterialModule,
      MatFormFieldModule,
      MatInputModule,
      MatAutocompleteModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
