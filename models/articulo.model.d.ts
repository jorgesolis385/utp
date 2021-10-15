import { Entity } from '@loopback/repository';
export declare class Articulo extends Entity {
    id?: string;
    nombre?: string;
    cantidad?: number;
    fecha_creacion?: string;
    estado?: string;
    constructor(data?: Partial<Articulo>);
}
export interface ArticuloRelations {
}
export declare type ArticuloWithRelations = Articulo & ArticuloRelations;
