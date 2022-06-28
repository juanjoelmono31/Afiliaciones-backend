"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const affiliation_routes_1 = __importDefault(require("./routes/affiliation.routes"));
// import UserRoutes from './routes/users.routes'
// import ProyectRoutesPruebas from './routes/proyectosPruebas.routes'
// import ProyectRoutes from './routes/proyectos.routes'
// import authRoutes from './routes/auth.routes'
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
//createRole();
//settings
app.set('port', process.env.PORT || 4000);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
//middlewares
//routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome' });
});
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
// app.use('/users', UserRoutes)
app.use('/afiliacion', affiliation_routes_1.default);
// app.use('/auth', authRoutes)
// app.use('/proyectosprueba', ProyectRoutesPruebas)
// app.use('/proyectos', ProyectRoutes)
exports.default = app;
//# sourceMappingURL=app.js.map