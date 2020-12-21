import { Component } from '@angular/core';

import { Student } from './student/student.model'
@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscant' , skill: 10},
    { name: 'Obi-Wan', isJedi: true, temple: 'Coruscant', skill: 10 },
    { name: 'Han Solo', isJedi: false , skill: 10},
  ]


  // isChecked! : boolean

  change_jedi!: boolean

  changeJedi(jedi: boolean) {
    this.change_jedi = jedi
  }

  addStudent(name: string) {

    let name_repeat: boolean = false

    this.students.forEach(function (item, indice, array) {
      if (array[indice].name == name) {
        name_repeat = true
        alert("This student already exists.Another name, you must choose")
      }
    }
    );
    if(name_repeat==false)
    {
      let new_student: Student = {
        name: '', isJedi: false, skill: 10
      }
      new_student.name = name
      new_student.isJedi = this.change_jedi
      if(this.change_jedi== true) new_student.temple = 'Coruscant'
      this.students.push(new_student)
    }
  }

deleteStudent(target: string){
  this.students.forEach(function (item, indice, array) {
    if (item.name == target) {
      //  alert("vrau")
      array.splice(indice, 1)
    }
  });
  // var pos = this.students.indexOf(target);
}
  }




  //students.push(new_student)


