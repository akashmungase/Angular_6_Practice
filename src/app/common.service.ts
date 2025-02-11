import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registration } from './Modal/registration';
import * as CryptoJS from 'crypto-js';
import { map } from 'rxjs/operators';
import { Login } from './Modal/login';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private secretKey: string = 'jH5kCl18ZzG9OIVkxwZ09Oszq0HHvnms';

  passDataFromFirstToSecond = new BehaviorSubject<any>(null);
  passDataFromDemo = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
  }

  createUser(userData: Registration): Observable<Registration> {
    return this.http.post<Registration>('http://localhost:3000/registration', userData);
  }

  login(login: Login) {
    return this.http.get<any[]>('http://localhost:3000/registration').pipe(
      map(users => users.find(user => user.email === login.email && user.password === login.password))
    );
  }

  // keypress event only decimal number allow
  onlyDecimalNumber(event: any) {
    if (event.which != 13 && event.which != 8 && event.which != 0 && event.which != 46 && (event.which < 48 || event.which > 57)) {
      // Decimal numbers only
      return (false);
    }
    if (event.which == 46 && event.target.value.indexOf(".") != -1) {
      // Only one period allowed in decimal numbers
      return (false);   // only one decimal allowed
    }
    if (event.which == 13) {
      event.preventDefault();
    }
  }

  // Method to encrypt user data
  encryptData(data: any): string {
    const userString = JSON.stringify(data);
    const encryptedData = CryptoJS.AES.encrypt(userString, this.secretKey).toString();
    return encryptedData;
  }

  // Method to decrypt data
  decryptData(encryptedData: string): any {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData ? JSON.parse(decryptedData) : null;
  }

}
