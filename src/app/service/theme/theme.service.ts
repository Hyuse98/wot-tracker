import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private currentTheme: string = 'light-theme';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.loadTheme();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    document.body.className = this.currentTheme;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.currentTheme);
    }
  }

  private loadTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.currentTheme = savedTheme;
        document.body.className = this.currentTheme;
      }
    }
  }
}
