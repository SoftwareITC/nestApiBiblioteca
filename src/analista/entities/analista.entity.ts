import { IsBoolean, IsString } from "class-validator";
import { EjemplarLibro } from "src/ejemplar-libros/entities/ejemplar-libro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analista {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    esAdmin: boolean;

    @Column()
    nombre:string;

    @Column({unique: true})
    nombreUsuario: string;

    @Column()
    contrasena: string;

    @Column({default:false})
    isActivo: boolean

    @OneToMany(() => EjemplarLibro, (ejemplarLibro) => ejemplarLibro.analista)
    ejemplarLibro: EjemplarLibro[]

}
