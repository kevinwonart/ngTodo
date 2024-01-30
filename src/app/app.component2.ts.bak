import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './common/Todo';
import { TodoChildComponent } from './todo-child/todo-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoangular';
  delButtonDisabled = true;
  @ViewChild(TodoChildComponent) childComponent!: TodoChildComponent;

  onAdd(task: HTMLInputElement, description: HTMLInputElement): void {
    const childTodo: Todo = new Todo(task.value, description.value, false);
    this.childComponent.addTodo(childTodo);
    task.value = "";
    description.value = "";
  }

  onEventTodoListLen (todoListLen: number): void {
    this.delButtonDisabled = !(todoListLen > 0);
  }

  onDelete (): void {
    this.childComponent.deleteTodo();
  }
}
