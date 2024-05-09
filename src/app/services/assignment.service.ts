import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  
  tasks: Task[] = [];

  constructor() { }

  private generateId(): number {
    return this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
  }


  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(taskName: string, priority: 'Low' | 'Medium' | 'High') {
    const newTask: Task = {
      id: this.generateId(),
      name: taskName,
      priority: priority
    };
    this.tasks.push(newTask);
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id != taskId);
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if(index != -1) {
      this.tasks[index] = { ...updatedTask }
    }
  }
}
