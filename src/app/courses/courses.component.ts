import { Component, OnInit } from '@angular/core';


interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  studentArray: Array<IStudent> = [];
  disableAddButton = false;

  constructor() { }

  ngOnInit(): void {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Gurkanwar',
        lastName: 'Singh',
        course: 'Programming',
        editMode: false

      },
      {
        id: 2,
        firstName: 'Tyson',
        lastName: 'Singh',
        course: 'Boxing',
        editMode: false

      },
      {
        id: 3,
        firstName: 'Mohammid',
        lastName: 'Sidhu',
        course: 'Kick boxing',
        editMode: false

      }
    ];
  }



addStudent() {
  this.studentArray.unshift({
    id: null,
    firstName: null,
    lastName: null,
    course: null,
    editMode: true
  });
  this.disableAddButton = true;

}

removeStudent(index: number) {
  this.studentArray.splice(index, 1);
  this.disableAddButton = false;

}




saveStudent() {
  this.studentArray[0].editMode = false;
  this.disableAddButton = false;

  this.sort();
}
sort() {
  this.studentArray.sort((a: IStudent, b: IStudent) => {
    return a.id < b.id ? -1 : 1;

  });
}

}
