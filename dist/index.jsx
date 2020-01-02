"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils = __importStar(require("./utils"));
exports.utils = utils;
const antd_1 = require("antd");
exports.Form = antd_1.Form;
const MyForm = __importStar(require("../MyAntd"));
exports.MyForm = MyForm;
exports.default = MyForm;
