import { IsBoolean, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analista {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    esAdmin: boolean;

    @Column()
    nombre:string;

    @Column()
    nombreUsuario: string;

    @Column()
    contrasena: string;

    @Column({default:false})
    isActivo: boolean

}
