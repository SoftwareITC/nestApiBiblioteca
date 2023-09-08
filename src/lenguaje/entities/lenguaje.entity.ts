import { FichaLibro } from "src/ficha-libro/entities/ficha-libro.entity";
import { FichaTesi } from "src/ficha-tesis/entities/ficha-tesi.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lenguaje {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    nombre: string;
    
    @Column({ unique: true })
    codigo: string;

    @OneToMany(() => FichaLibro, (fichaLibro) => fichaLibro.lenguaje)
    fichaLibro: FichaLibro[]

    @OneToMany(() => FichaTesi, (fichaTesi) => fichaTesi.lenguaje)
    fichaTesi: FichaTesi[]

}
