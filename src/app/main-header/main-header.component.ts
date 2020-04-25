import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Route } from '@angular/compiler/src/core';
 
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  firstName: string;
  lastName: string;
  constructor(
    private router: Router
  ) {
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

  navigateTo(path: string) {
    this.router.navigate([path])
  }

  ngOnInit(): void {
  }

}
