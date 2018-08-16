import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  open: boolean;

  constructor() { }

  ngOnInit() {
    this.open = false;
  }

  toggleClass() {
    this.open = !this.open;
    if (this.open) {
      document.body.className += 'bodyOpen';
    } else {
      document.body.className = '';
    }
  }

}
