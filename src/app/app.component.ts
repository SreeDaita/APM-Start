import { Component } from "@angular/core";

@Component({
  selector:'pm-root',
  template:`  
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'> {{pageTitle}}</a>
  <ul class ='nav nav-pills'>
    <li> <a class ='nav-link' routerLink='/welcome'>Home</a></li>
    <li> <a class ='nav-link' routerLink='/products'>product list</a></li>
  </ul>
  </nav>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
         `
}) // backtick for type scripts 


export class AppComponent{
  pageTitle: String='Acme Product management';
}