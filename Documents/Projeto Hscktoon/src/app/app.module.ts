import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NeedAuthGuard} from './auth.guard';
import { LoginPageModule } from './login-page/login-page.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { TesteComponent } from './teste/teste.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    TesteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginPageModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

