import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'existingContacts-page',
  templateUrl: './existingContacts.component.html',
  styleUrls: ['./existingContacts.component.scss']
})
export class ExistingContactsComponent implements OnInit { 
  constructor(private backend: BackendService) {}
  
  users: any;
  allUsers: any;
  allContacts: any;
  deleteContact: any;
  
  // get user by id/delete function
  delete(id) {
    // this.backend.getUser(id)
    // .then(data => {
    //   console.log('id', id)
    //   console.log('data', data)
      this.deleteContact = id;
      console.log('data coming back deleteContact', this.deleteContact)
      console.log('all contacts', this.allContacts)
      this.backend.deleteContact(this.deleteContact)
      this.allContacts.splice(id, 1);
      console.log('all contacts deleted', this.allContacts)
      // window.alert('Deleted');
      // window.location.href = '/existingContacts'
    // })

  }
  
  ngOnInit() {
    
    
    
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
