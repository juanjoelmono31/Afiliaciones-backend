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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const affiliationController = __importStar(require("../controllers/affiliation.controller"));
const multer_1 = __importDefault(require("../libs/multer"));
const router = (0, express_1.Router)();
//http://localhost:4000/afiliacion
router.post('/', multer_1.default.array('image'), affiliationController.creatAffiliation);
//http://localhost:4000/afiliacion
router.get('/', affiliationController.findAllAffiliation);
//http://localhost:4000/afiliacion
router.get('/:id', affiliationController.findOneAffiliation);
//http://localhost:4000/afiliacion
router.put('/:id', affiliationController.updateAffiliation);
//http://localhost:4000/afiliacion
router.delete('/:id', affiliationController.deleteAffiliation);
exports.default = router;
//# sourceMappingURL=affiliation.routes.js.map