"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.signIn = exports.signUp = void 0;
const Users = __importStar(require("../models/Users"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, correo, password, celular, direccion, estado, roles, proyectos } = req.body;
    const newUsers = new Users({
        nombre,
        apellido,
        correo,
        password: yield Users.(password),
        celular,
        direccion,
        estado,
        roles,
        proyectos
    });
    const savedUSers = yield newUsers.save();
    const token = jsonwebtoken_1.default.sign({ id: savedUSers._id }, config_1.default.SECRET, {
    //expiresIn: 86400 -> para que el token tenga fecha de expiracion en este caso 86400 son 24H
    });
    res.json({ token, message: 'User created succesfully' });
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield Users.findOne({ correo: req.body.correo }).populate('roles');
    if (!userFound)
        return res.json({
            message: "User not found "
        });
    const matchPassword = yield Users.comparePassword(req.body.password, userFound.password);
    if (!matchPassword)
        return res.json({ token: null, message: 'Invalid password' });
    const token = jsonwebtoken_1.default.sign({ id: userFound._id }, config_1.default.SECRET, {
    //expiresIn: 86400 -> para que el token tenga fecha de expiracion en este caso 86400 son 24H
    });
    res.json({ token, message: "Users exist" });
});
exports.signIn = signIn;
//# sourceMappingURL=login.controller.js.map