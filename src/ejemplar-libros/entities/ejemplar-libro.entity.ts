import { Accesibilidad } from "src/accesibilidad/entities/accesibilidad.entity";
import { Proveedor } from "src/proveedor/entities/proveedor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EjemplarLibro {

    @PrimaryGeneratedColumn()
    id: number;

    //FK ficha libro

    @Column()
    numeroEjemplar: number;

    @Column()
    numeroVolumen: number;

    @Column()
    numeroTomo: number;

    //FK accesibilidad
    @ManyToOne(() => Accesibilidad, (accesibilidad) => accesibilidad.id,{eager:true})
     accesibilidad: Accesibilidad

    //FK proveedor
    @ManyToOne(() => Proveedor, (proveedor) => proveedor.id,{eager:true})
     proveedor: Proveedor

    @Column()
    tipoAdquisicion: string;

    //FK estante

    //FK analista

    @Column()
    fechaRegistro: Date;

    @Column()
    fechaUltimaModificacion: Date;

    @Column({default:false})
    disponibilidadPrestamo: boolean;

}
