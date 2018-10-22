import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


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
