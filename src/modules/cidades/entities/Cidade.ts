import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cidades")
class Cidade {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  estado: string;

  @CreateDateColumn()
  created_at: Date

  constructor() {}

}

export { Cidade }