import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "../../cidades/entities/Cidade";

@Entity("clientes")
class Cliente {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  sexo: string;
  
  @Column()
  data_nascimento: Date;
  
  @Column()
  idade: number;
  
  @ManyToOne(type => Cidade, cidade=> cidade.id)
  @JoinColumn({ name: "cidade_id"})
  cidade: Cidade;

  @Column()
  cidade_id: number;

  @CreateDateColumn()
  created_at: Date

  constructor(){}
}

export { Cliente }