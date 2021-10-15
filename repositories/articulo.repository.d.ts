import { DefaultCrudRepository } from '@loopback/repository';
import { MongoAtlasDataSource } from '../datasources';
import { Articulo, ArticuloRelations } from '../models';
export declare class ArticuloRepository extends DefaultCrudRepository<Articulo, typeof Articulo.prototype.id, ArticuloRelations> {
    constructor(dataSource: MongoAtlasDataSource);
}
