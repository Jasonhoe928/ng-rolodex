import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'existingContacts-page',
  templateUrl: './existingContacts.component.html',
  styleUrls: ['./existingContacts.component.scss']
})
export class ExistingContactsComponent implements OnInit { 
  constructor(private backend: BackendService) {

  }
  search = null;
  existingContactsCards = null;
  existingCards = null;
  characters: object[] = [];
  charName = null;

  showHide() {
    this.search = document.getElementById('search');
    this.existingCards = document.getElementsByClassName('existingCards');
    this.charName = document.getElementsByClassName('charName');
    for (let i = 0; i < this.characters.length; i++) {
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
    // console.log('nameArray data', this.backend.getNameList(1))
    // this.backend.nameFunc()
    
    this.characters = this.backend.characters;
    if(this.characters.length > 0) {
      return
    } else {
      for(var i = 1; i <= 10; i++) {
        this.backend.getCharacter(i)
        .then(data => {
          this.characters.push(data)
        })
      }
    }
  }
  
  }
