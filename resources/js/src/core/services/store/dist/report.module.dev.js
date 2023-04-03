"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.REPORT_SBS_COMPLETE_GET_PAGINATED = void 0;

var _api = _interopRequireDefault(require("@/core/services/api.service"));

var _jwt = _interopRequireDefault(require("@/core/services/jwt.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// action types
var REPORT_SBS_COMPLETE_GET_PAGINATED = "report_sbs_get_all";
exports.REPORT_SBS_COMPLETE_GET_PAGINATED = REPORT_SBS_COMPLETE_GET_PAGINATED;

var actions = _defineProperty({}, REPORT_SBS_COMPLETE_GET_PAGINATED, function (_) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new Promise(function (resolve, reject) {
    if (_jwt["default"].getToken()) {
      _api["default"].setHeader();

      _api["default"].get("api/report-sbs", query).then(function (_ref) {
        var data = _ref.data;
        resolve(data);
      })["catch"](function () {
        reject('Ocurrió un error desconocido al intentar mostrar las operaciones.');
      });
    }
  });
});

var _default = {
  actions: actions
};
exports["default"] = _default;