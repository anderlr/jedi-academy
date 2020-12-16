import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

import {Student} from './student.model'

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student!: Student
  @Output() deleteStudentEvent = new EventEmitter<string>();
  
  constructor() {
   }

  ngOnInit(): void {
  }
  clicked(){
    // console.log(`Student: ${this.student.name}`)
  }

  deleteName(){
    // console.log(`Deletar: ${this.student.name}`)
    this.deleteStudentEvent.emit(this.student.name);
  }
}
