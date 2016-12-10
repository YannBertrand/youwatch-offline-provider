const _ = require('lodash');

module.exports = {
  returnCallbackError,
  testCallback,
  testFunction,
  testOptionalObject,
  testObject,
  testString,
};

function returnCallbackError(maybeError, callback) {
  if (_.isError(maybeError)) {
    return callback(maybeError);
  }
}

function testCallback(callback) {
  if (!_.isFunction(callback)) {
    throw new TypeError('callback must be defined and be a function');
  }
}

function testFunction(name, func) {
  if (!_.isFunction(func)) {
    throw new TypeError(name + ' must be a function');
  }
}

function testOptionalObject(name, obj) {
  if (_.isUndefined(obj)) return;
  testObject(name, obj);
}

function testObject(name, obj) {
  if (!_.isPlainObject(obj)) {
    throw new TypeError(name + ' must be an object');
  }
}

function testString(name, str) {
  if (!_.isString(str)) {
    throw new TypeError(name + ' must be a string');
  }
}
