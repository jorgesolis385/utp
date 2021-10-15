import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Articulo } from '../models';
import { ArticuloRepository } from '../repositories';
export declare class ArticuloController {
    articuloRepository: ArticuloRepository;
    constructor(articuloRepository: ArticuloRepository);
    create(articulo: Omit<Articulo, 'id'>): Promise<Articulo>;
    count(where?: Where<Articulo>): Promise<Count>;
    find(filter?: Filter<Articulo>): Promise<Articulo[]>;
    updateAll(articulo: Articulo, where?: Where<Articulo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Articulo>): Promise<Articulo>;
    updateById(id: string, articulo: Articulo): Promise<void>;
    replaceById(id: string, articulo: Articulo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
