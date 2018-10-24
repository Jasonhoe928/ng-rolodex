import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'existingContacts-page',
  templateUrl: './existingContacts.component.html',
  styleUrls: ['./existingContacts.component.scss']
})
export class ExistingContactsComponent implements OnInit {


  // title: string = 'Home Page';
  
  constructor(private backend: BackendService) {

  }
    
  ngOnInit() {
  }

  }
