import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,title:'Home - Lazare Mirziashvili'},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'projects',component:ProjectsComponent,title:'Projects - Lazare Mirziashvili'},
  {path:'services',component:ServicesComponent,title:'Services - Lazare Mirziashvili'},
  {path:'contact',component:ContactComponent,title:'Contact - Lazare Mirziashvili'},
  {path:'**',component:PageNotFoundComponent,title:'Page Not Found - Lazare Mirziashvili'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
