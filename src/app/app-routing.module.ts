import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,title:'Home - Lazare M.'},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'projects',component:ProjectsComponent,title:'Projects - Lazare M.'},
  {path:'services',component:ServicesComponent,title:'Services - Lazare M.'},
  {path:'contact',component:ContactComponent,title:'Contact - Lazare M.'},
  {path:'create',component:CreateFormComponent,title:'Create - Lazare M.'},
  {path:'courses',component:CoursesFormComponent,title:'Courses - Lazare M.'},
  {path:'**',component:PageNotFoundComponent,title:'Page Not Found - Lazare M.'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
