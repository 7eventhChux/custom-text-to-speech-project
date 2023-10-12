import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../app.component.css']
})
export class AboutComponent implements OnInit {


  currentYear = new Date().getFullYear();

  showReadMore = false;
  isMobile = false;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 640;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 640;
  }

  toggleReadMore() {
    const readMoreParagraphs = document.querySelectorAll('.read-more');
  
    for (let i = 0; i < readMoreParagraphs.length; i++) {
      const paragraph = readMoreParagraphs[i] as HTMLElement;
      if (this.showReadMore) {
        paragraph.style.maxHeight = '300px';
      } else {
        paragraph.style.maxHeight = 'none';
      }
    }
  
    this.showReadMore = !this.showReadMore;
  }
  


}
