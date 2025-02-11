import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  FirstName: string = 'First Name';
  toDosList: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((response: any) => {
      this.toDosList = response;
    })


  }

}
