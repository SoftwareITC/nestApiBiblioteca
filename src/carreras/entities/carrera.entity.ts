import { Prueba } from "src/prueba/entities/prueba.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carrera {

@PrimaryGeneratedColumn()
id: number;

@Column({ unique: true })
nombre: string;

@OneToMany(() => Prueba, (prueba) => prueba.carrera)
prueba: Prueba[];

@DeleteDateColumn()
deletedAt: Date;

}
