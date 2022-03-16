"use strict";
exports.__esModule = true;
exports.Some = void 0;
var Some = /** @class */ (function () {
    function Some() {
        this.id = Math.floor(Math.random() * 999);
        this.name = "";
        this.type = typeof (this);
    }
    return Some;
}());
exports.Some = Some;
