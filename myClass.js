"use strict";
exports.__esModule = true;
var myClass = /** @class */ (function () {
    function myClass() {
        //(a) create an array of strings
        this.myArr = [];
    }
    myClass.prototype.addTasks = function (task) {
        this.myArr.push(task);
        console.log("Item added " + task);
        return this.myArr.length;
    };
    myClass.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.myArr; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    myClass.prototype.deleteTasks = function (task) {
        var index = this.myArr.indexOf(task);
        if (index > -1) {
            this.myArr.splice(index, 1);
        }
        console.log("Task" + task + "removed from the list");
        return this.myArr.length;
    };
    return myClass;
}());
var newClass = new myClass();
newClass.addTasks("Hello");
newClass.listAllTasks();
newClass.deleteTasks("Hello");
