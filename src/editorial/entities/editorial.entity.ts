
import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
