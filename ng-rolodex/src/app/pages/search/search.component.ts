import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// import { Component, OnInit } from '@angular/core';
// import { BackendService } from '../../services/backend.service';
// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.scss']
// })
// export class SearchComponent implements OnInit {
//   value = ''
//   testNames: object[]
//   constructor(private backend: BackendService) {
//    }
//   onKeyUp(event: any) {
//     this.value = event.target.value;
//     console.log('new type', this.value.toLowerCase());
//     let cardName = document.getElementsByClassName('testName');
//     let card = document.getElementsByClassName('test');
//     for (let i=0; i<cardName.length; i++) {
//       if (cardName[i].innerHTML.toString().toLowerCase().startsWith(this.value.toLowerCase())) {
//         card[i].style.display = 'block';
//       } else {
//         card[i].style.display = 'none';
//       }
//       if (this.value === '') {
//         card[i].style.display = 'none';
//       }
//     }
//   }
//   ngOnInit() {
//     this.testNames = this.backend.testNames;
//   }
// }