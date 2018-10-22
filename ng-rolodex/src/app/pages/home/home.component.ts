import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // title: string = 'Home Page';
  
  constructor(private backend: BackendService) {

  }
    
  ngOnInit() {
  //   this.characters = this.backend.characters;
  //   this.backend.addCharacter({ name: 'ed' })
  //   this.characters.push({ name: 'baseem' })

  //   this.backend.getCharacter(1)
  //   .then((Data) => {
  //     console.log('data', Data)
  //   })
  }

  }
