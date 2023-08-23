import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    nombre: string;

}
