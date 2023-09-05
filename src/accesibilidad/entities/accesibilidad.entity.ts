import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accesibilidad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

}
