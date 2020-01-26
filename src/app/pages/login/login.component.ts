import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = {
   email:"guest@pseu.edu",
   password:"GUEST@guest"
 }
  loginForm = this.fb.group({
    email:['', [
      Validators.required,
      Validators.maxLength(180),
      Validators.pattern("^[a-z0-9._%+-]+@pseu.edu$")]],
    password: ['',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
      // Validators.pattern("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])[A-Za-z\d@$!%*#?&]")]]
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$")]]
      // Validators.pattern("^([a-z])[a-zA-Z\d@$!%*#?&]")]]
      // Validators.pattern("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])[A-Za-z\d@$!%*#?&]")]]
  })

 
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
