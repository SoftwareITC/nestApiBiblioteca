import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Tema {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    nombre: string;

}
