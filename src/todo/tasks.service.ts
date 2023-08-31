import { Injectable } from '@nestjs/common';
import { TaskModel } from './tasks.model';

@Injectable()
export class TasksService {
  _tasks: TaskModel[] = [
    { id: 1, description: 'Feed the cat', is_complete: false },
    { id: 2, description: 'clean the window', is_complete: false },
    {
      id: 3,
      description: 'Finish recording YoutubebVideo',
      is_complete: false,
    },
  ];

  findAllTasks(): TaskModel[] {
    return this._tasks;
  }
  findTaskById(id: number): TaskModel {
    return this._tasks.find((t)=> t.id == id);

  }
}
