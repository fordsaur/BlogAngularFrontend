import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../accountservice.service';
import {Userloginfo} from '../userloginfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup |any;
  datasaved = false;
  message: string="";
  status:string="";
 
  constructor(private formbuilder: FormBuilder, private accountservice: AccountService,private Router:Router) {
    if(localStorage.getItem('Loginuser')){
      this.Router.navigate(['/']);
     }
   }
 
  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
 
  onSubmit() {
    
    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
  }
  userLogin(logininfo:Userloginfo) {
    this.accountservice.userlogin(logininfo).subscribe(
      (resResult:Userloginfo |any) => {
       let resp=JSON.stringify(resResult);
       console.log(resp);
        this.datasaved = true;
        this.message = resResult['msg'];
        this.status = resResult['status'];
        if(resResult['status']=='success'){
        localStorage.setItem('Loginuser',resp)
        setTimeout(() => {
          window.location.reload();
          this.Router.navigate(["/"]);
        }, 1000);
   
        }else{
          localStorage.removeItem('Loginuser');
        }
       this.loginForm.reset();
      }
    )
   }
}
