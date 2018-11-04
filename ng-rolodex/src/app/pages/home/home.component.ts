import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private backend: BackendService) {}
  search = null;
  existingContactsCards = null;
  existingCards = null;
  characters: object[] = [];
  charName = null;

  users: any;
  allUsers: any;  

  showHide() {
    this.search = document.getElementById('search');
    this.existingCards = document.getElementsByClassName('existingCards');
    this.charName = document.getElementsByClassName('charName');
    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.charName[i].innerHTML.toString().toLowerCase().startsWith(this.search.value.toLowerCase())) {
        this.existingCards[i].style.display = 'inline-block';
      } else {
        this.existingCards[i].style.display = 'none';
      }
      if (this.search.value === '') {
        this.existingCards[i].style.display = 'none';
      }
    }
    console.log(this.search.value)
  }

  ngOnInit() {
    this.characters = this.backend.characters;
    this.users = this.backend.users

    // get user by id
    // this.backend.getUser(1)
    // .then(data => {
    //   this.users = data
    //   console.log('this.users', this.users)
    // })

    //get all users
    this.backend.getAllUsers()
      .then(data => {
        this.allUsers = data
        console.log('allUsers', this.allUsers)
      })
      .catch( err => {
        console.log('\n*** getAllUsers ERR from view-contacts', err)
      })
  }
}
