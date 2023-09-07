import { Biblioteca } from "src/biblioteca/entities/biblioteca.entity";
import { EjemplarLibro } from "src/ejemplar-libros/entities/ejemplar-libro.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estante {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    nombre: string;

    @ManyToOne(() => Biblioteca, (biblioteca) => biblioteca.id,{eager:true})
     biblioteca: Biblioteca

     @OneToMany(() => EjemplarLibro, (ejemplarLibro) => ejemplarLibro.estante)
    ejemplarLibro: EjemplarLibro[]

}
