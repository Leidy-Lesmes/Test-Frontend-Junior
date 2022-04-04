import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageLoggerInComponent } from './page-logger-in/page-logger-in.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post/:variable',
    component: PageLoggerInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
