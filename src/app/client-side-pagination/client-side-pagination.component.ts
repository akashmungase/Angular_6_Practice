import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-side-pagination',
  templateUrl: './client-side-pagination.component.html',
  styleUrls: ['./client-side-pagination.component.css']
})
export class ClientSidePaginationComponent implements OnInit {

  toDoList: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages: number;
  pages: any[] = [];
  pageList: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getToDoList();
  }

  getToDoList() {
    this.http.get('http://localhost:3000/ToDoList').subscribe((response: any) => {
      this.toDoList = response;
      this.totalPages = (this.toDoList.length / this.itemsPerPage);
      this.getPages();
      this.onPagesChange(1);
    })
  }

  getPages() {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  onPagesChange(page) {
    this.currentPage = page;
    let startIndex = (this.currentPage - 1) * this.itemsPerPage;
    let endIndex = this.currentPage * this.itemsPerPage;
    this.pageList = this.toDoList.slice(startIndex, endIndex);
  }
}
