
import { Carrera } from "src/carrera/entities/carrera.entity";
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Prueba {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    edad: number;
  
    @Column()
    matricula: string;

     @ManyToOne(() => Carrera, (carrera) => carrera.id,{eager:true})
     carrera: Carrera
  
    @DeleteDateColumn()
    deletedAt: Date;

}
