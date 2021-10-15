"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticuloController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ArticuloController = class ArticuloController {
    constructor(articuloRepository) {
        this.articuloRepository = articuloRepository;
    }
    async create(articulo) {
        return this.articuloRepository.create(articulo);
    }
    async count(where) {
        return this.articuloRepository.count(where);
    }
    async find(filter) {
        return this.articuloRepository.find(filter);
    }
    async updateAll(articulo, where) {
        return this.articuloRepository.updateAll(articulo, where);
    }
    async findById(id, filter) {
        return this.articuloRepository.findById(id, filter);
    }
    async updateById(id, articulo) {
        await this.articuloRepository.updateById(id, articulo);
    }
    async replaceById(id, articulo) {
        await this.articuloRepository.replaceById(id, articulo);
    }
    async deleteById(id) {
        await this.articuloRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/articulos'),
    rest_1.response(200, {
        description: 'Articulo model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Articulo) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Articulo, {
                    title: 'NewArticulo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticuloController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/articulos/count'),
    rest_1.response(200, {
        description: 'Articulo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Articulo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticuloController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/articulos'),
    rest_1.response(200, {
        description: 'Array of Articulo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Articulo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Articulo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticuloController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/articulos'),
    rest_1.response(200, {
        description: 'Articulo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Articulo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Articulo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Articulo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticuloController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/articulos/{id}'),
    rest_1.response(200, {
        description: 'Articulo model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Articulo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Articulo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticuloController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/articulos/{id}'),
    rest_1.response(204, {
        description: 'Articulo PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Articulo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Articulo]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticuloController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/articulos/{id}'),
    rest_1.response(204, {
        description: 'Articulo PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Articulo]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticuloController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/articulos/{id}'),
    rest_1.response(204, {
        description: 'Articulo DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticuloController.prototype, "deleteById", null);
ArticuloController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ArticuloRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ArticuloRepository])
], ArticuloController);
exports.ArticuloController = ArticuloController;
//# sourceMappingURL=articulo.controller.js.map