import { EjemplarLibro } from "src/ejemplar-libros/entities/ejemplar-libro.entity";
import { EjemplarTesi } from "src/ejemplar-tesis/entities/ejemplar-tesi.entity";
import { FichaLibro } from "src/ficha-libro/entities/ficha-libro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accesibilidad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(() => EjemplarLibro, (ejemplarLibro) => ejemplarLibro.accesibilidad)
    ejemplarLibro: EjemplarLibro[]

    @OneToMany(() => EjemplarTesi, (ejemplarTesi) => ejemplarTesi.accesibilidad)
    ejemplarTesi: EjemplarTesi[]

}
