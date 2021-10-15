import { DefaultCrudRepository } from '@loopback/repository';
import { MongoAtlasDataSource } from '../datasources';
import { Evento, EventoRelations } from '../models';
export declare class EventoRepository extends DefaultCrudRepository<Evento, typeof Evento.prototype.id, EventoRelations> {
    constructor(dataSource: MongoAtlasDataSource);
}
