import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmailsentComponent } from './emailsent/emailsent.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { RegisterComponent } from './register/register.component';
import { ReportcardComponent } from './reportcard/reportcard.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'emailsent',component:EmailsentComponent},
  {path:'admin',component:AdminComponent},
  {path:'passwordreset',component:PasswordresetComponent},
  {path:'home',component:HomeComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'reportcard',component:ReportcardComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
