import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl: string = 'http://18.236.174.78:8989';

  characters: any[] = [];

  users: any[] = [];

  constructor(private http: HttpClient) { }

  getCharacter(id: number) {
    const url = this.baseUrl + 'people/' + id;
    return this.http.get(url).toPromise();
  }
  
  addCharacter(character) {
    this.characters.push(character);
  }

  //get user by id
  // getUser(id: number) {
  //   const url = this.baseUrl + '/users/' + id;
  //   // console.log('url', url)
  //   return this.http.get(url).toPromise();
  // }

  //get all users
  getAllUsers() {
    // console.log('get all users backend fired')
    const url = this.baseUrl + '/users';
    console.log('users', url)
    return this.http.get(url).toPromise();
  }

  // get all contacts
  getAllContacts() {
    console.log('get all contacts backend fired')
    const contactUrl = this.baseUrl + '/contacts';
    return this.http.get(contactUrl).toPromise();
  }

  //post new contact form
  createNewContact() {
    const newContactUrl = this.baseUrl + '/newContact';
    return this.http.get(newContactUrl).toPromise();
  }


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