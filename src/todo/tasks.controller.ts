import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
// import { TaskModel } from './tasks.model';

@Controller('tasks')
export class TasksController {
  _tasks: any;
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.findAllTasks();
  }

 @Get(':taskId')
  getTaskById(@Param(':taskId')id: number) {
    let task = this.tasksService.findTaskById(id);
    
    if(!task) {
    throw new NotFoundException(`Task with id ${id} notb found`);
    }

  }
}