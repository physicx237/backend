import { Injectable } from '@nestjs/common';
import { Task } from './types/task.type';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: Omit<Task, 'id'>) {
    this.tasks.push({
      id: Date.now(),
      ...task,
    });
  }

  editTask(id: number, task: Omit<Task, 'id'>) {
    this.tasks.map((taskItem) => {
      if (taskItem.id === id) {
        taskItem.description = task.description;
        taskItem.isCompleted = task.isCompleted;

        return taskItem;
      }
    });
  }

  deleteTask(id: number) {
    let taskIndex: number;

    this.tasks.forEach((taskItem, index) => {
      if (taskItem.id === id) {
        taskIndex = index;
      }
    });

    this.tasks.splice(taskIndex, 1);
  }
}
