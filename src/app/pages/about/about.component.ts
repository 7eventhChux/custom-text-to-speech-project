import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../app.component.css']
})
export class AboutComponent {

  currentYear = new Date().getFullYear();

}
