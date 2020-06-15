import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { Students } from '../Students';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  students: Student[];
  newStudent: any = {};
  constructor() { }

  ngOnInit(): void {
    this.students = this.newStudent;
  }
  addStudent(newStudent): any {
    console.log('Add new user');
    this.students.unshift(newStudent);
  }
}
