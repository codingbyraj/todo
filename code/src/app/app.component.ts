import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Todo App';
  todos: Todo[];
  editable: boolean = false;

  constructor() {
    this.todos = [];
  }

  makeEditable(id) {
    console.log("make editable called ", id)
    for (let i in this.todos) {
      console.log("hi", this.todos[i].isEditable)
      if (this.todos[i].id == id) {
        this.todos[i].isEditable = !this.todos[i].isEditable;
      }
      console.log(this.todos)
    }
  }

  updateAfterAddTodo(updatedTodos) {
    this.todos = updatedTodos;
  }
  
  updatedTaskByChild(updatedData) {
    console.log("Before ", this.todos)
    for (let i in this.todos) {
      if (this.todos[i].id == updatedData.id) {
        this.todos[i].data = updatedData.data;
        this.todos[i].isEditable = !this.todos[i].isEditable;
      }
    }
    console.log("After ", this.todos)
    // this.makeEditable();
  }

  deleteTodo(taskId) {
    let deleteStatus, deleteIndex;
    for (let i in this.todos) {
      if (this.todos[i].id == taskId) {
        if (this.todos[i].status == false) {
          let deleteConfirm = confirm("Your task is not completed! Do you want to delete it?");
          if (!deleteConfirm) {
            deleteStatus = false;
          }
          else {
            deleteStatus = true;
            deleteIndex = i;
          }
        }
        else {
          deleteStatus = true;
          deleteIndex = i;
          break;
        }

      }
    }
    if (deleteStatus) {
      this.todos.splice(deleteIndex, 1);
    }
  }
}