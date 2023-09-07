import { Estante } from "src/estante/entities/estante.entity";
import { RecursoBibliografico } from "src/recurso-bibliografico/entities/recurso-bibliografico.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Biblioteca {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;

    @Column()
    abreviacion: string;

    @ManyToOne(() => RecursoBibliografico, (recursoBibliografico) => recursoBibliografico.biblioteca,{eager:true})
     recursoBibliografico: RecursoBibliografico

    @Column()
    administrador: string;

    @OneToMany(() => Estante, (estante) => estante.biblioteca)
    estante: Estante[]

}
