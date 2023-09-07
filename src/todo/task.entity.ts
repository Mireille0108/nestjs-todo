import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tests')
export class Test {
  @PrimaryGeneratedColumn({
    comment: 'The test unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;
}
