import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  firstName: string;
  lastName: string;
  constructor() {
    this.firstName = 'Gurkanwar';
    this.lastName = 'Singh';

  }

  showGreeting() {

    const banner = document.getElementById('banner');
    banner.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
  }
  resetGreeting() {
    const banner = document.getElementById('banner');

    banner.innerHTML = 'r1c2';


  }

  ngOnInit(): void {
  }

}
