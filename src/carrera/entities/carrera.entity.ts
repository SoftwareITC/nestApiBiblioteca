import { FichaLibro } from "src/ficha-libro/entities/ficha-libro.entity";
import { Prueba } from "src/prueba/entities/prueba.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carrera {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    nombre: string;

    @OneToMany(() => Prueba, (prueba) => prueba.carrera)
    prueba: Prueba[]

    @Column()
    codigo: string;

    @OneToMany(() => FichaLibro, (fichaLibro) => fichaLibro.carrera)
    fichaLibro: FichaLibro[]
    
}
