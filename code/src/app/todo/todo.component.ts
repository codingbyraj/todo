import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {  
  @Input() todos;
  @Output() result = new EventEmitter<any>();

  addTodo(item:string) {    
    if (item.length > 0) {
      let newTodo = new Todo(this.todos.length + 1, item, false, false);
      this.todos.push(newTodo);
      console.log("after add todo ", this.todos)
      this.result.emit(this.todos);
    }
    else{
      alert("Task Can't be Empty")
    }
  }
  ngOnInit() {
  }
}