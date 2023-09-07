import { Biblioteca } from "src/biblioteca/entities/biblioteca.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecursoBibliografico {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;

    @OneToMany(() => Biblioteca, (biblioteca) => biblioteca.recursoBibliografico)
    biblioteca: Biblioteca[]

}
