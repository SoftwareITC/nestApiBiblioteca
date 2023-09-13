import { IsBoolean, IsString } from "class-validator";
import { EjemplarLibro } from "src/ejemplar-libros/entities/ejemplar-libro.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

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

    @BeforeInsert()
    @BeforeUpdate()
    private async hashPassword() {
        const rounds = 10;
        const salt = await bcrypt.genSalt(rounds);
        this.contrasena = await bcrypt.hash(this.contrasena, salt);
      }

    @Column({default:true})
    isActivo: boolean

    @OneToMany(() => EjemplarLibro, (ejemplarLibro) => ejemplarLibro.analista)
    ejemplarLibro: EjemplarLibro[]

}
