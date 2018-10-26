import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './createContact.component.html',
  styleUrls: ['./createContact.component.scss']
})
export class CreateContactComponent implements OnInit {


  title: string = 'Contact Page';
  subtitle: string;
  formData: {
    name: string,
    email: string,
    class: string
  } = {
    name: '',
    email: '',
    class: 'test'
  };
  // data: {
  //   header: string
  // } = {
  //   header: 'header'
  // }

  constructor() {
    const subtitle: string =
      'This is really awesome';
    this.subtitle = subtitle;
  }
    
    submit() {
      console.log(this.formData);
    }
  ngOnInit() {

  }

}
