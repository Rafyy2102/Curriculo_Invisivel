import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'CurriculoVirtual';
  logo:any = "./assets/img/logo.png";
  messageSuccess = true

v
ngOnInit() {

  setTimeout(()=>{
        this.messageSuccess = false;
   }, 2000);
}
}
