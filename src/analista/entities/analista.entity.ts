import { EjemplarLibro } from "src/ejemplar-libros/entities/ejemplar-libro.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { EjemplarTesi } from "src/ejemplar-tesis/entities/ejemplar-tesi.entity";
import { EjemplarPublicacionPeriodica } from "src/ejemplar-publicacion-periodica/entities/ejemplar-publicacion-periodica.entity";



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

    @OneToMany(() => EjemplarTesi, (ejemplarTesi) => ejemplarTesi.analista)
    ejemplarTesi: EjemplarTesi[]

    @OneToMany(() => EjemplarPublicacionPeriodica, (ejemplarPublicacionPeriodica) => ejemplarPublicacionPeriodica.analista)
    ejemplarPublicacionPeriodica: EjemplarPublicacionPeriodica[]

}
