import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl: string = 'https://swapi.co/api/';

  characters: any[] = [];

  constructor(private http: HttpClient) { }

  getCharacter(id: number) {
    const url = this.baseUrl + 'people/' + id;
    return this.http.get(url).toPromise();
  }
  
  addCharacter(character) {
    this.characters.push(character);
  }

  // showCard() {
  //   let cards = document.getElementsByClassName("existingContactsCards")

  // }

  register(data) {
    return Promise.resolve({});
  }

  login(data) {
    return Promise.resolve({ username: data.username });
  }

  logout() {
    return Promise.resolve({});
  }



//   nameArray: any[] = ["Harsh", "Jamie", "Jason"];

//   getNameList(id: number) {
//     return this.nameArray[id];
//   }

//   nameFunc = () => {
//     for(var i =0; i < this.nameArray.length; i++) {
//       console.log('name array', this.nameArray[i])
//     }
//   }
}