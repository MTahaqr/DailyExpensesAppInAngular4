import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {RegisterService} from '../../services/register.service';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

signUpForm;
  constructor(private rs:RegisterService) { }

  ngOnInit() {
     this.signUpForm = new FormGroup({
      name: new FormControl('',Validators.compose([Validators.required])),       
      email: new FormControl('',Validators.compose([Validators.required])),
      password: new FormControl('',Validators.compose([Validators.required])),
    });
  }
  signUp(form){
    this.rs.signUp(form);
  }

}
