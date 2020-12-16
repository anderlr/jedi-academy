import { Component } from '@angular/core';

import { Student } from './student/student.model'
@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { name: 'Obi-Wan', isJedi: true, temple: 'Coruscant' },
    { name: 'Han Solo', isJedi: false },
  ]


  // isChecked! : boolean

  change_jedi!: boolean

  changeJedi(jedi: boolean) {
    this.change_jedi = jedi
  }

  addStudent(name: string) {

    let new_student: Student = {
        name: '', isJedi: false
      }
    new_student.name = name
    new_student.isJedi = this.change_jedi
    if(this.change_jedi==true)new_student.temple = 'Coruscant'
    this.students.push(new_student)

  }
  }
 
  


  //students.push(new_student)


