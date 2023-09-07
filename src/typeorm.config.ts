import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Test } from './todo/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'test@emboh123',
  database: 'todo_task',
  entities: [Test],
  synchronize: true,
};
