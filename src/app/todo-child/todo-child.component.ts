import { Component, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Todo } from "../common/todo";

@Component({
  selector: 'app-todo-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-child.component.html',
  styleUrl: './todo-child.component.css'
})
export class TodoChildComponent {
  @Output() eventTodoListLen = new EventEmitter();

  todoList: Todo[] = [];
  selectIndex: number = -1;

  onSelect (index: number): void {
    if (this.selectIndex >= 0) {
      this. todoList[this.selectIndex].active = false;
    }
    this.selectIndex = index;
    this.todoList[this.selIndex].active = true;
  }

  deleteTodo (): void {
    if (this.selectIndex >= 0) {
      this.todoList.splice(this.selectIndex, 1);
      this.eventTodoListLen.emit(this.todoList.length);
    }
    this.selIndex = -1;
  }

  addTodo (todo: Todo): void {
    this.todoList.push(todo);
    this.eventTodoListLen.emit(this.todoList.length);
  }
}
