"use strict";
var a = 1;
var b = '1';
var c = '1';
a = b;
a = c;
a = c;
if (typeof c === 'number') {
    a = c;
}
function f1() {
    return null;
}
function f2() {
    throw Error('');
}
var d;
d = { name: '张三', age: 12, sex: '男' };
var f3;
f3 = function (n1, n2) {
    return n1 + n2;
};
var e;
var f;
var g;
g = ['hello', 'hello'];
var Gender;
(function (Gender) {
    Gender[Gender["man"] = 0] = "man";
    Gender[Gender["woman"] = 1] = "woman";
})(Gender || (Gender = {}));
var h;
h = { name: '张三', gender: Gender.man };
var i;
var j;
function fn() {
    return this;
}
