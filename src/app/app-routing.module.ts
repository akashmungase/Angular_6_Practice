import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildComponent } from './child/child.component';
import { ListComponent } from './list/list.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ClientSidePaginationComponent } from './client-side-pagination/client-side-pagination.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DemoComponent } from './demo/demo.component';
import { DialComponent } from './dial/dial.component';
import { ChildArrayComponent } from './child-array/child-array.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'first', component: FirstComponent },
  { path: 'list', component: ListComponent },
  { path: 'second', component: SecondComponent },
  { path: 'theme', component: ThemeToggleComponent },
  { path: 'content', component: ContentProjectionComponent },
  { path: 'form', component: ReactiveFormComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'client-pagination', component: ClientSidePaginationComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'dail', component: DialComponent },
  { path: 'child-array', component: ChildArrayComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }