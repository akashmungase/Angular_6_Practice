import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { DemoComponent } from './demo/demo.component';
import { UppercasePipe } from './uppercase.pipe';
import { ListComponent } from './list/list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.service';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { PaginationComponent } from './pagination/pagination.component';
import { ClientSidePaginationComponent } from './client-side-pagination/client-side-pagination.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialComponent } from './dial/dial.component';
import { ChildArrayComponent } from './child-array/child-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    ContentProjectionComponent,
    ThemeToggleComponent,
    DemoComponent,
    UppercasePipe,
    ListComponent,
    ReactiveFormComponent,
    FormArrayComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    PaginationComponent,
    ClientSidePaginationComponent,
    CarouselComponent,
    DialComponent,
    ChildArrayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgHttpLoaderModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
