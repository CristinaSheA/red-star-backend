import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'activities' })
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 255, nullable: false })
  name: string;
}
