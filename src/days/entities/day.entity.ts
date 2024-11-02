import { Controller } from '@nestjs/common';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'days' })
export class Day {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ nullable: false })
  dayNum: number;

  @Column({ nullable: false })
  factText: string;

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: true })
  imageInfo: string;
}
