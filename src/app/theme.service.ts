import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable();

  toggleTheme() {
    this.isDarkMode.next(!this.isDarkMode.value);
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isDarkMode.value) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}