import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {

students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Gurry',
      lastName: 'Singh',
      course: 'Programming'
    };
    this.students[1] = {
      id: 1,
      firstName: 'Tomy',
      lastName: 'Cool',
      course: 'BasketBall'
    };
    this.students[2] = {
      id: 1,
      firstName: 'Marky',
      lastName: 'Singh',
      course: 'Music'
    };
    this.students[3] = {
      id: 1,
      firstName: 'kite',
      lastName: 'Shin',
      course: 'HipHop'
    };
   }

  ngOnInit(): void {
  }

  addStudent() {
    const student: IStudent = {
      id: 1,
      firstName: 'Mike',
      lastName: 'Tyson',
      course: 'Boxing'
    }
    this.students.push(student);
  }

}
