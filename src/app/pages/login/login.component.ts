import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
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
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$")]]
  })

 
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.loginForm.value.email == this.user.email && this.loginForm.value.password == this.user.password ){
      console.log("works well")
      this.router.navigateByUrl('/home');
    }
    else{
      console.log("!work well")
      alert("insert valid email address and password");
    }
  }
}
