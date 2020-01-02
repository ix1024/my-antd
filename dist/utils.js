"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
exports.placeholder = '--';
// 获取天
exports.getDateString = (time) => (time ? moment_1.default(time).format('YYYY-MM-DD') : exports.placeholder);
// 获取小时
exports.getDateTimeString = (time) => (time ? moment_1.default(time).format('YYYY-MM-DD HH:mm:ss') : exports.placeholder);
// 获取天数
exports.getDayString = (time) => (time ? moment_1.default(time).format('MM-DD') : exports.placeholder);
// 获取月分
exports.getMonthString = (time) => (time ? moment_1.default(time).format('YYMM') : exports.placeholder);
exports.getMonthValue = (time) => (time ? parseInt(moment_1.default(time).format('YYMM'), 10) : null);
// 比较时间
exports.compareMoment = (momentV1, momentV2, type = '<') => {
    if (!momentV1 || !momentV2) {
        return false;
    }
    if (type === '<=') {
        return momentV1.valueOf() <= momentV2.valueOf();
    }
    return momentV1.valueOf() < momentV2.valueOf();
};
// 统一格式
exports.dataFormat = (data) => {
    if (data === undefined || data === null) {
        return exports.placeholder;
    }
    if (typeof data !== 'string') {
        return data;
    }
    if (!data.trim()) {
        return exports.placeholder;
    }
    return data;
};
// 创建随机ID
exports.getRandomString = () => {
    return `${(Math.random() * 10000000).toString(16).substr(0, 4)}-${new Date().getTime()}-${Math.random()
        .toString()
        .substr(2, 5)}`;
};
// 转小驼峰
exports.toSmallHump = (str) => {
    let list = str.split('_');
    if (str.indexOf('_') === -1) {
        return str;
    }
    list = list.map((item, index) => {
        if (!index) {
            return item;
        }
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return list.join('');
};
