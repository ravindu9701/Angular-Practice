import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent implements OnInit {

  tasks!: Task[];

  newTaskName!: string;

  priorityLevel!: string;

  constructor(private taskService: AssignmentService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  addTask(taskName: string, priorityLevel: any) {
    this.taskService.addTask(taskName, priorityLevel)
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task)
  }

  removeTask(taskId: number) {
    this.taskService.removeTask(taskId);
  }


}
