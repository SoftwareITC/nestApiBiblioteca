import { EjemplarLibro } from "src/ejemplar-libros/entities/ejemplar-libro.entity";
import { FichaPublicacionPeriodica } from "src/ficha-publicacion-periodica/entities/ficha-publicacion-periodica.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proveedor {

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

    @OneToMany(() => EjemplarLibro, (ejemplarLibro) => ejemplarLibro.proveedor)
    ejemplarLibro: EjemplarLibro[]

    @OneToMany(() => FichaPublicacionPeriodica, (fichaPublicacionPeriodica) => fichaPublicacionPeriodica.proveedor)
    fichaPublicacionPeriodica: FichaPublicacionPeriodica[]

}
