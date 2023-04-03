"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OPERATIONS_STORE = exports.OPERATIONS_CHANGE_STATUS = exports.OPERATIONS_GET_PAGINATED = void 0;

var _api = _interopRequireDefault(require("@/core/services/api.service"));

var _jwt = _interopRequireDefault(require("@/core/services/jwt.service"));

var _actions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// action types
var OPERATIONS_GET_PAGINATED = "operations_get_all";
exports.OPERATIONS_GET_PAGINATED = OPERATIONS_GET_PAGINATED;
var OPERATIONS_CHANGE_STATUS = "operations_change_status";
exports.OPERATIONS_CHANGE_STATUS = OPERATIONS_CHANGE_STATUS;
var OPERATIONS_STORE = "operations_store";
exports.OPERATIONS_STORE = OPERATIONS_STORE;
var actions = (_actions = {}, _defineProperty(_actions, OPERATIONS_GET_PAGINATED, function (_) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new Promise(function (resolve, reject) {
    if (_jwt["default"].getToken()) {
      _api["default"].setHeader();

      _api["default"].get("api/operations", query).then(function (_ref) {
        var data = _ref.data;
        resolve(data);
      })["catch"](function () {
        reject('Ocurrió un error desconocido al intentar mostrar las operaciones.');
      });
    }
  });
}), _defineProperty(_actions, OPERATIONS_CHANGE_STATUS, function (_, data) {
  var id = data.id;
  delete data.id;
  return new Promise(function (resolve, reject) {
    if (_jwt["default"].getToken()) {
      _api["default"].setHeader();

      _api["default"].put("api/operations/" + id + "/change-status", data).then(function (_ref2) {
        var data = _ref2.data;
        resolve(data);
      })["catch"](function () {
        switch (response.status) {
          case 400:
            reject(response.data.error);
            break;

          case 404:
            reject(response.data.error);
            break;

          default:
            reject('Ocurrió un error desconocido al intentar actualizar el estado de la operación.');
            break;
        }
      });
    }
  });
}), _defineProperty(_actions, OPERATIONS_STORE, function (_, body) {
  return new Promise(function (resolve, reject) {
    if (_jwt["default"].getToken()) {
      _api["default"].setHeader();

      _api["default"].post("api/operations", body).then(function (_ref3) {
        var data = _ref3.data;
        resolve(data);
      })["catch"](function (_ref4) {
        var response = _ref4.response;

        switch (response.status) {
          case 400:
            reject(response.data.error);
            break;

          default:
            reject('Ocurrió un error desconocido al intentar guardar la operación.');
            break;
        }
      });
    }
  });
}), _actions);
var _default = {
  actions: actions
};
exports["default"] = _default;