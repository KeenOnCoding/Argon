import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CreateresumeComponent } from './components/createresume/createresume.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { JobComponent } from './components/job/job.component';
import { LoginComponent } from './components/login/login.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ResumesComponent } from './components/resumes/resumes.component';

const routes: Routes = [
    { path: 'favorites', component: FavoriteComponent },
    { path: 'personal', component: InfoComponent },
    { path: 'resume/create', component: CreateresumeComponent },
    { path: 'resumes', component: ResumesComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'account', component: AccountComponent },
    { path: 'login', component: LoginComponent },
    { path: 'job', component: JobComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
