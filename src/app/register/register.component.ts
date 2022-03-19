import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
 loading = false;
  submitted = false;
  user: User = {
      fullname: '',
      username: '',
      password: '',
      mobileno: '',
      city: '',
      dob: '',
      state: '',
      year: '',
      qualification: ''
  }
   result : User;
  
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router:Router)
     {
     this.form  = this.formBuilder.group({
        fullname: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        mobileno: ['', Validators.required],
        city: ['', Validators.required],
        dob: ['', Validators.required],
        state: ['', Validators.required],
        year: ['', Validators.required],
        qualification:['', Validators.required]
     });
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Data insert');
    this.submitted = true;
    this.user.fullname = this.form.value.fullname;
    this.user.username = this.form.value.username;
    this.user.password = this.form.value.password;
    this.user.mobileno = this.form.value.mobileno;
    this.user.city = this.form.value.city;
    this.user.dob = this.form.value.dob;
    this.user.state = this.form.value.state;
    this.user.year = this.form.value.year;
    this.user.qualification = this.form.value.qualification;
    console.log('This is data from form',this.user);
    localStorage.setItem("user",JSON.stringify(this.user));
    this.userService.insertUser(this.user)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });   
    this.router.navigate(['../login']);
    if (this.form.invalid) {
        return;
    }

} 
}
