"use strict";
// A] SCAFFOLDING
Object.defineProperty(exports, "__esModule", { value: true });
// PHASE 1
// export default class Sorter {
//   collection: number[]
//   constructor(collection: number[]){
//     this.collection = collection
//   }
// }
// PHASE 2
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        var result = this.collection;
        for (var i = 0; i < length - 1; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                var a = result[j];
                var b = result[j + 1];
                result[j] = a > b ? b : a;
                result[j + 1] = a > b ? a : b;
            }
        }
        return result;
    };
    return Sorter;
}());
exports.default = Sorter;
var result = new Sorter([1000, 0, 0, 4, 0, -3, 10, 100,]);
console.log(result.sort());
