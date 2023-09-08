import { FichaLibro } from "src/ficha-libro/entities/ficha-libro.entity";
import { FichaTesi } from "src/ficha-tesis/entities/ficha-tesi.entity";
import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from "typeorm";

@Entity()
export class Tema {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    nombre: string;

    @ManyToMany(() => FichaLibro, fichaLibro => fichaLibro.id)
    fichaLibro: FichaLibro

    @ManyToMany(() => FichaTesi, fichaTesi => fichaTesi.id)
    fichaTesi: FichaTesi

}
