"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAtlasDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mongoAtlas',
    connector: 'mongodb',
    url: 'mongodb+srv://root:C0l0mb14@serverdb.jznds.mongodb.net/utp?retryWrites=true&w=majority',
    host: 'serverdb-shard-00-02.jznds.mongodb.net',
    port: 27017,
    user: 'root',
    password: 'C0l0mb14',
    database: 'utp',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongoAtlasDataSource = class MongoAtlasDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongoAtlasDataSource.dataSourceName = 'mongoAtlas';
MongoAtlasDataSource.defaultConfig = config;
MongoAtlasDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.mongoAtlas', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongoAtlasDataSource);
exports.MongoAtlasDataSource = MongoAtlasDataSource;
//# sourceMappingURL=mongo-atlas.datasource.js.map