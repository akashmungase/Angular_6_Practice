import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  toDoList: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages: number;
  pagedToDoList: any[] = [];
  pages: number[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getToDoList();
  }

  getToDoList() {
    this.http.get<any[]>('http://localhost:3000/ToDoList').subscribe((result: any[]) => {
      this.toDoList = result;
      this.calculateTotalPages();
      this.updatePage();
    });
  }

  calculateTotalPages() {
    this.totalPages = (this.toDoList.length / this.itemsPerPage);
    this.getPages();
  }

  updatePage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedToDoList = this.toDoList.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePage();
  }

  getPages() {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }
}