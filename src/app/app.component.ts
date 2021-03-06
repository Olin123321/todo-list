import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';
  config: { [key: string]: string | Date } | null = null;
  tasks: Task[] = [
    {
    name: 'Zrobić zakupy',
    deadline: '2022-06-15',
    done: false,
    },
    {
      name: 'Pranie',
      deadline: '2022-06-15',
      done: false,
    },
    {
      name: 'Angular',
      deadline: '2022-06-15',
      done: false,
    }
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: ' © Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString(),
      };
    }, 500);
    this.sortTasks();
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskDate = '';
    this.taskName = '';
    this.sortTasks();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleateTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) => 
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }

}
