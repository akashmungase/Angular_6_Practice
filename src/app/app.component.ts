import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public spinkit = Spinkit;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Check for user preference or system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      this.themeService.toggleTheme(); // Set to dark mode
    }
  }
}