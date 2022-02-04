import { Component } from "@angular/core";

@Component({
  selector:'pm-root',
  template:`  
         <div><h1>{{pageTitle}}</h1>
         <pm-products></pm-products>
         </div>
         `
}) // backtick for type scripts 


export class AppComponent{
  pageTitle: String='Acme Product management';
}