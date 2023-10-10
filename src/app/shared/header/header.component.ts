import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle: string = ''; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    const activeUrl = this.router.url;
    console.log('Active URL:', activeUrl);

    const textAfterLastSlash = this.getTextAfterLastSlash(activeUrl);
    this.pageTitle = this.capitalizeAndRemoveHyphens(textAfterLastSlash);
  }

  private getTextAfterLastSlash(inputString: string): string {
    const lastIndex = inputString.lastIndexOf("/");
    const textAfterSlash = inputString.substring(lastIndex + 1);

    // Check if the text contains a hyphen
    if (textAfterSlash.includes('-')) {
      return textAfterSlash;
    } else {
      return textAfterSlash; // If no hyphen, use the text as is
    }
  }

  private capitalizeAndRemoveHyphens(inputString: string): string {
    // Split the string by hyphens and capitalize each part
    const words = inputString.split('-').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the words with spaces
    return words.join(' ');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }
}
