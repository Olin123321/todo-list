import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask(name: string, deadline: string) {
    const task: Task = {
      name,
      deadline,
      done: false,
    };
    this.tasks.push(task);
  }

}
