import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Evento } from '../models';
import { EventoRepository } from '../repositories';
export declare class EventoController {
    eventoRepository: EventoRepository;
    constructor(eventoRepository: EventoRepository);
    create(evento: Omit<Evento, 'id'>): Promise<Evento>;
    count(where?: Where<Evento>): Promise<Count>;
    find(filter?: Filter<Evento>): Promise<Evento[]>;
    updateAll(evento: Evento, where?: Where<Evento>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Evento>): Promise<Evento>;
    updateById(id: string, evento: Evento): Promise<void>;
    replaceById(id: string, evento: Evento): Promise<void>;
    deleteById(id: string): Promise<void>;
}
