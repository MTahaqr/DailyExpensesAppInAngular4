import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { RegisterService } from '../../services/register.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm;
  constructor(private registerService:RegisterService) { 
    this.registerService.toCheckUserAuthState();
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('admin@admin.com', Validators.compose([Validators.required])),
      password: new FormControl('admin@admin.com', Validators.compose([Validators.required])),
    });
  }

  signIn(form:any) {
    this.registerService.signIn(form);
  }

}
