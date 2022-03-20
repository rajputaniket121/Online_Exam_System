import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExampageComponent } from './exampage/exampage.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EmailsentComponent } from './emailsent/emailsent.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExampageComponent,
    FeedbackComponent,
    AdminComponent,
    ForgotpasswordComponent,
    EmailsentComponent,
    PasswordresetComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
