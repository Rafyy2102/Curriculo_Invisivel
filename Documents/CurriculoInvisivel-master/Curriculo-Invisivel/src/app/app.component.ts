import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{
  title = 'Curriculo-Invisivel';
  logo:any = "./img/logo.png";
  messageSuccess = true;
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

ngOnInit() {

setTimeout(()=>{
      this.messageSuccess = false;
 }, 2000);
}
}
