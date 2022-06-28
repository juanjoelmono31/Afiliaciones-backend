"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAffiliation = exports.updateAffiliation = exports.findOneAffiliation = exports.findAllAffiliation = exports.creatAffiliation = void 0;
const Affiliation_1 = __importDefault(require("../models/Affiliation"));
//Creacion de una afiliacion 
function creatAffiliation(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { cedula, nombre, apellido, genero, fecha_nacimiento, direccion, correo, celular, telefono, nombre_emergencia, celular_emergencia, fecha_ingreso, examen_ingreso, salario, cargo, curso_alturas, rut, eps, arl, fondo_pensiones, caja_compensacion, estado, numero_cuenta, entidad_bancaria, aux_admin_revision } = req.body;
        console.log(req.files);
        const newAffiliation = {
            cedula: cedula, nombre: nombre, apellido: apellido, genero: genero, fecha_nacimiento: fecha_nacimiento,
            direccion: direccion, correo: correo, celular: celular, telefono: telefono, nombre_emergencia: nombre_emergencia,
            celular_emergencia: celular_emergencia, fecha_ingreso: fecha_ingreso, examen_ingreso: examen_ingreso, salario: salario,
            cargo: cargo, curso_alturas: curso_alturas, rut: rut, eps: eps, arl: arl, fondo_pensiones: fondo_pensiones, caja_compensacion: caja_compensacion,
            estado: estado, numero_cuenta: numero_cuenta, entidad_bancaria: entidad_bancaria, aux_admin_revision: aux_admin_revision,
            cedula_frontal: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path, cedula_posterior: (_b = req.file) === null || _b === void 0 ? void 0 : _b.path
        };
        const affiliation = new Affiliation_1.default(newAffiliation);
        yield affiliation.save();
        return res.json({
            message: 'Affiliation successfuly saved',
            affiliation
        });
    });
}
exports.creatAffiliation = creatAffiliation;
// Buscar todas las afiliaciones
function findAllAffiliation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const affiliation = yield Affiliation_1.default.find();
        return res.json(affiliation);
    });
}
exports.findAllAffiliation = findAllAffiliation;
//Buscar afiliacion por id
function findOneAffiliation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const affiliation = yield Affiliation_1.default.findById(id);
        return res.json(affiliation);
    });
}
exports.findOneAffiliation = findOneAffiliation;
//Actualizar por id 
function updateAffiliation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { estado } = req.body;
        const updateAffiliation = yield Affiliation_1.default.findByIdAndUpdate(id, {
            estado
        });
        return res.json({
            message: 'Succesfully update',
            updateAffiliation
        });
    });
}
exports.updateAffiliation = updateAffiliation;
//Borrar afiliacion por id 
function deleteAffiliation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const afiliacion = yield Affiliation_1.default.findByIdAndDelete(id);
        return res.json({
            message: 'Affiliation delete succesfully',
            afiliacion
        });
    });
}
exports.deleteAffiliation = deleteAffiliation;
//# sourceMappingURL=affiliation.controller.js.map