"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map = new Map();
exports.register = function (actionClass) {
    if (map.has(actionClass)) {
        throw new Error("Class " + actionClass.name + " already registered");
    }
    var type = new actionClass().type;
    map.set(actionClass, type);
};
exports.getType = function (actionClass) {
    if (!map.has(actionClass)) {
        throw new Error("Can't find action type for Class " + actionClass.name);
    }
    return map.get(actionClass);
};
