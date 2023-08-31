
import { IsEmail } from "class-validator";
import { FichaLibro } from "src/ficha-libro/entities/ficha-libro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editorial {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    nombre: string;

    @Column({nullable: true})
    direccion: string;

    @Column({nullable: true, type: "bigint"})
    telefono: number;

    @Column({nullable: true})
    email: string;

    @OneToMany(() => FichaLibro, (fichaLibro) => fichaLibro.editorial)
    fichaLibro: FichaLibro[]

}
