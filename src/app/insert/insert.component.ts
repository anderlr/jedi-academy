import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'jad-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor() {
  }
  @Output() newStudentEvent = new EventEmitter<string>();
  @Output() newStudentJedi = new EventEmitter<boolean>();
  ngOnInit(): void {
  }
  isChecked:boolean =false
  sendName(item: string) {
    this.newStudentEvent.emit(item);
    //console.log(item)
  }

  sendJedi(){
    this.newStudentJedi.emit(this.isChecked);
  }




}

