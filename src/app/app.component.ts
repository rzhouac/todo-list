import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo = '';
  todoList: Array<any> = [];

  onAddTodo() {
    this.todoList.push({name: this.newTodo, finished: false});
    this.newTodo = '';
  }

  finishItem(index) {
    this.todoList[index].finished = true;
  }
}
