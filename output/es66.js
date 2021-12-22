"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrow = function arrow() {
  console.log('hello babel');
};

var obj = {
  id: 1
};

var obj2 = _objectSpread({
  age: 24,
  name: 'babel'
}, obj);

var asyncFn = function asyncFn() {
  return new Promise(function (resolve, reject) {
    var obj2 = _objectSpread({
      name: 'babel'
    }, obj);

    setTimeout(function () {
      resolve(obj2);
    }, 3000);
  });
};

asyncFn().then(function (data) {
  console.log('result', data);
});
