"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Articulo = class Articulo extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Articulo.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Articulo.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Articulo.prototype, "cantidad", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Articulo.prototype, "fecha_creacion", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Articulo.prototype, "estado", void 0);
Articulo = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Articulo);
exports.Articulo = Articulo;
//# sourceMappingURL=articulo.model.js.map