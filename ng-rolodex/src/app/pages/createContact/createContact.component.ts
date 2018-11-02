import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './createContact.component.html',
  styleUrls: ['./createContact.component.scss']
})
export class CreateContactComponent implements OnInit {

  formData: {
    name: string,
    email: string,
    class: string
  } = {
    name: '',
    email: '',
    class: 'test'
  };

  validName: boolean = false;
  validEmail: boolean = false;

  constructor() {
   
  }
    
  validateName() {
    if (!this.formData.name) {
      this.validName = false;
    }
    else if (this.formData.name.length < 3) {
      this.validName = false;
    }
    else {
      this.validName = true;
    }
  }


  validateEmail() {
    if (!this.formData.email) {
      this.validEmail = false;
    }
    else if (!this.formData.email.includes('@')) {
      this.validEmail = false;
    }
    else if(this.formData.email.length < 3) {
      this.validEmail = false;
    }
    else {
      this.validEmail = true;
    }
  }
  
  isDisabled() {
    return !this.validName || !this.validEmail;
  }

    submit() {
      console.log(this.formData);
    }


  ngOnInit() {

  }

}
