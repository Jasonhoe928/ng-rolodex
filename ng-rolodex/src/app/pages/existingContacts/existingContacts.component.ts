import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'existingContacts-page',
  templateUrl: './existingContacts.component.html',
  styleUrls: ['./existingContacts.component.scss']
})
export class ExistingContactsComponent implements OnInit { 
  constructor(private backend: BackendService) {}

  allUsers: any;
  allContacts: any;
  
  ngOnInit() {
    
    // get user by id
    // this.backend.getUser(1)
    // .then(data => {
    //   this.users = data
    //   console.log('this.users', this.users)
    // })

    //get all users
    this.backend.getAllUsers()
      .then(data => {
        console.log('data all users', data)
        this.allUsers = data
        console.log('allUsers', this.allUsers)
      })
      .catch( err => {
        console.log('getAllUsers error', err)
      })

    // get all contacts
    this.backend.getAllContacts()
    .then(data => {
      this.allContacts = data
      console.log('allContacts', this.allContacts);
    })
    .catch( err => {
      console.log('contact error', err);
    })
  }
  }
