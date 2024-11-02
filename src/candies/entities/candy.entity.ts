import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'candies' })
export class Candy {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 255, nullable: false })
  name: string;
  
  @Column({ default: 1, nullable: false })
  quantity: number;
}
