import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent, data: {animation: 'AboutPage', position: 1}},
  {path: 'resume', component: ResumeComponent, data: {animation: 'ResumePage', position: 2}},
  {path: 'projects', component: ProjectsComponent, data: {animation: 'ProjectsPage', position: 3}},
  {path: 'contact', component: ContactComponent, data: {animation: 'ContactPage', position: 4}},
  { path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
