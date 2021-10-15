"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EventoController = class EventoController {
    constructor(eventoRepository) {
        this.eventoRepository = eventoRepository;
    }
    async create(evento) {
        return this.eventoRepository.create(evento);
    }
    async count(where) {
        return this.eventoRepository.count(where);
    }
    async find(filter) {
        return this.eventoRepository.find(filter);
    }
    async updateAll(evento, where) {
        return this.eventoRepository.updateAll(evento, where);
    }
    async findById(id, filter) {
        return this.eventoRepository.findById(id, filter);
    }
    async updateById(id, evento) {
        await this.eventoRepository.updateById(id, evento);
    }
    async replaceById(id, evento) {
        await this.eventoRepository.replaceById(id, evento);
    }
    async deleteById(id) {
        await this.eventoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/eventos'),
    rest_1.response(200, {
        description: 'Evento model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Evento) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Evento, {
                    title: 'NewEvento',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/eventos/count'),
    rest_1.response(200, {
        description: 'Evento model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Evento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventoController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/eventos'),
    rest_1.response(200, {
        description: 'Array of Evento model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Evento, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Evento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/eventos'),
    rest_1.response(200, {
        description: 'Evento PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Evento, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Evento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Evento, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventoController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/eventos/{id}'),
    rest_1.response(200, {
        description: 'Evento model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Evento, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Evento, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventoController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/eventos/{id}'),
    rest_1.response(204, {
        description: 'Evento PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Evento, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Evento]),
    tslib_1.__metadata("design:returntype", Promise)
], EventoController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/eventos/{id}'),
    rest_1.response(204, {
        description: 'Evento PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Evento]),
    tslib_1.__metadata("design:returntype", Promise)
], EventoController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/eventos/{id}'),
    rest_1.response(204, {
        description: 'Evento DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EventoController.prototype, "deleteById", null);
EventoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EventoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EventoRepository])
], EventoController);
exports.EventoController = EventoController;
//# sourceMappingURL=evento.controller.js.map