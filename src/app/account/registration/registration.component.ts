import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from '../accountservice.service';
import {Accountinfo} from '../accountinfo';
import {  ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  regForm: FormGroup | any;
  datasaved = false ;
  massage: string |undefined;

  constructor(private formbuilder: FormBuilder, private accountservice:AccountService, private Router :Router) { 
    if(localStorage.getItem('Loginuser')){
      this.Router.navigate(['/']);
     }
  }
 
  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
       Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
 
  onSubmit() {
    let userinfo = this.regForm.value;
    console.log(userinfo);
    this.createuserAccount(userinfo);
    this.regForm.reset();
  }
  createuserAccount(accinfo:Accountinfo) {
    this.accountservice.createaccount(accinfo).subscribe(
      (res:any) => {
        let response=JSON.stringify(res);
        console.log("res",response)
        this.datasaved = true;
        if(res['index']==0){
          res['msg']="Email already Exist Try With another Email.."
        }
        this.massage =res['msg'] || res['message'] ;
        this.regForm.reset();
      }
    )
  }
}
