"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var some_1 = require("./models/some");
var d = new some_1.Some();
d.name = 'd';
showObjectInfo(d);
var e = new some_1.Some();
e.name = 'e';
showObjectInfo(e);
var f = new some_1.Some();
f.name = 'f';
showObjectInfo(f);
var a = { id: 0, name: "a" };
showObjectInfo(a);
var b = __assign(__assign({}, a), { name: "b" });
showObjectInfo(b);
var c = __assign(__assign({}, a), { name: "c" });
showObjectInfo(c);
function showObjectInfo(source) {
    console.log(source);
    console.log("".concat(source.name, " instanceof Some = ").concat(source instanceof some_1.Some));
    console.log("_________________________________________");
}
