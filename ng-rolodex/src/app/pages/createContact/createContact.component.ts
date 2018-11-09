import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'contact-page',
  templateUrl: './createContact.component.html',
  styleUrls: ['./createContact.component.scss']
})
export class CreateContactComponent implements OnInit {

  formData: {
    name: string,
    address: string,
    mobile: string,
    work: string,
    home: string,
    email: string,
    twitter: string,
    instagram: string,
    github: string
  } = {
    name: '',
    address: '',
    mobile: '',
    work: '',
    home: '',
    email: '',
    twitter: '',
    instagram: '',
    github: ''

  };

  validName: boolean = false;
  validEmail: boolean = false;

  newContact: any;


  constructor(private backend: BackendService) { }
    
  //post contact
  postContact() {
    console.log('postContact fired', this.formData)
    this.backend.createNewContact(this.formData)
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

  ngOnInit() { }

}
