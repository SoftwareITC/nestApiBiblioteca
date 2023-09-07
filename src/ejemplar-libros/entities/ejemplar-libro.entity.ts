import { Accesibilidad } from "src/accesibilidad/entities/accesibilidad.entity";
import { Analista } from "src/analista/entities/analista.entity";
import { Estante } from "src/estante/entities/estante.entity";
import { FichaLibro } from "src/ficha-libro/entities/ficha-libro.entity";
import { Proveedor } from "src/proveedor/entities/proveedor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EjemplarLibro {

    @PrimaryGeneratedColumn()
    id: number;

    //FK ficha libro
    @ManyToOne(() => FichaLibro, (fichaLibro) => fichaLibro.id,{eager:true})
     fichaLibro: FichaLibro

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
    @ManyToOne(() => Estante, (estante) => estante.id,{eager:true})
     estante: Estante

    //FK analista
    @ManyToOne(() => Analista, (analista) => analista.id,{eager:true})
     analista: Analista
  

    @Column()
    fechaRegistro: Date;

    @Column()
    fechaUltimaModificacion: Date;

    @Column({default:false})
    disponibilidadPrestamo: boolean;

}
