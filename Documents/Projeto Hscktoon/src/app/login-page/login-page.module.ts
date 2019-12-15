import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { QuizComponent } from '../quiz/quiz.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [LoginPageComponent],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }