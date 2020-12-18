import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Student } from './student.model'

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student!: Student
  @Output() deleteStudentEvent = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteName() {
    // console.log(`Deletar: ${this.student.name}`)
    this.deleteStudentEvent.emit(this.student.name)
  }

  trainStudent() {
    if (this.student.skill < 1000) {
      let incremento: number = Math.floor(Math.random() * (100) + 1) //gera um numero pseudoaleatorio entre 1 e 100

      if ((this.student.skill + incremento) > 1000) this.student.skill = 1000
      else {
        this.student.skill += incremento
      }
    }
    else{
      alert(`Nothing more to learn, there is, young ${this.student.name}`)
    }


  }
}
