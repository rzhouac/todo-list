import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input()
  item;

  @Output()
  handleFinisheItem = new EventEmitter();

  ngOnInit() {
  }

  finishItem() {
    this.handleFinisheItem.emit(this.item);
  }

}
