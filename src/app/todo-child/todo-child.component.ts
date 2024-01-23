import { Component, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Todo } from "../common/Todo";

@Component({
  selector: 'app-todo-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    this.todoList[this.selectIndex].active = true;
  }

  deleteTodo (): void {
    if (this.selectIndex >= 0) {
      this.todoList.splice(this.selectIndex, 1);
      this.eventTodoListLen.emit(this.todoList.length);
    }
    this.selectIndex = -1;
  }

  addTodo (todo: Todo): void {
    this.todoList.push(todo);
    this.eventTodoListLen.emit(this.todoList.length);
  }
}
