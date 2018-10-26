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

  ngOnInit() {
    // console.log('nameArray data', this.backend.getNameList(1))
    // this.backend.nameFunc()

    // this.characters = this.backend.characters;

    for(var i = 1; i <= 10; i++) {
      // console.log('chars', this.backend.getCharacter(i))
      this.backend.getCharacter(i)
      .then(data => {
        this.backend.characters.push(data)
        console.log('chars', this.backend.characters)

      })
    }
  }
  
  }
