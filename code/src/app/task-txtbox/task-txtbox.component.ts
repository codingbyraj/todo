import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-txtbox',
  templateUrl: './task-txtbox.component.html',
  styleUrls: ['./task-txtbox.component.css']
})
export class TaskTxtboxComponent implements OnInit {
  @Input() task; // it comes from app-component
  @Output() updateParentTask = new EventEmitter<any>(); // it goes to app-component
  focus:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  updateTask(){
    console.log("task in txtbox = ", this.task);
    this.updateParentTask.emit(this.task);
  }
}
