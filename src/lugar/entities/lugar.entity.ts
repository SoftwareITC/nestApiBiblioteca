import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lugar {

@PrimaryGeneratedColumn()
id: number;

@Column({ unique: true })
nombre: string;

@Column({ unique: true })
codigo: string;

}
