import { Entity } from '@loopback/repository';
export declare class Evento extends Entity {
    id?: string;
    tipo: string;
    fecha_inicio?: string;
    fecha_fin?: string;
    articulo_id: string;
    quien_alquila: string;
    quien_entrega?: string;
    cantidad?: number;
    constructor(data?: Partial<Evento>);
}
export interface EventoRelations {
}
export declare type EventoWithRelations = Evento & EventoRelations;
