import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './types/task.type';
import { AddTaskDto, EditTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Post()
  addTasks(@Body() task: AddTaskDto) {
    return this.taskService.addTask(task);
  }

  @Put(':id')
  editTask(@Param('id') id: number, @Body() task: EditTaskDto) {
    return this.taskService.editTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }
}
