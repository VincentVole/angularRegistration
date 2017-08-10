import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  user = {
  	firstName: '',
  	lastName: '',
  	email: '',
  	password: '',
  	confirm: '',
  	street: '',
  	unit: '',
  	city: '',
  	state: '',
  	lucky: ""
  };
  submit(){
  	this.submitted = true;
  }
}