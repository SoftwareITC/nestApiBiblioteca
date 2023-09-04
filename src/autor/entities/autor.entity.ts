import { FichaLibro } from "src/ficha-libro/entities/ficha-libro.entity";
import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from "typeorm";

@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    nombre: string;

    @ManyToMany(() => FichaLibro, fichaLibro => fichaLibro.id)
    fichaLibro: FichaLibro

}
