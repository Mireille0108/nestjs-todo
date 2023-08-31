import { Injectable } from '@nestjs/common';
import { TaskModel } from './tasks.model';

@Injectable()
export class TasksService {
  private _tasks: TaskModel[] = [
    { id: 1, description: 'Feed the cat', is_complete: true },
    { id: 2, description: 'clean the window', is_complete: true },
    {
      id: 3,
      description: 'Finish recording YoutubebVideo',
      is_complete: true,
    },
  ];

  findAllTasks(): TaskModel[] {
    return this._tasks;
  }

  findTaskById(id: number) {
    const task2 = this._tasks.find((t) => t.id === id);
    console.log('task2', task2);
    return task2;
  }
}