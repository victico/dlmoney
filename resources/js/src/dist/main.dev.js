"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("@/core/services/store"));

var _api = _interopRequireDefault(require("@/core/services/api.service"));

var _config = require("@/core/services/store/config.module");

var _utils = require("@/core/services/utils/utils.js");

require("popper.js");

require("tooltip.js");

var _perfectScrollbar = _interopRequireDefault(require("perfect-scrollbar"));

var _clipboard = _interopRequireDefault(require("clipboard"));

var _vueI18n = _interopRequireDefault(require("@/core/plugins/vue-i18n"));

var _vuetify = _interopRequireDefault(require("@/core/plugins/vuetify"));

require("@/core/plugins/portal-vue");

require("@/concept/bootstrap");

var _helpers = require("./concept/helpers");

require("@/core/plugins/bootstrap-vue");

require("@/core/plugins/perfect-scrollbar");

require("@/core/plugins/highlight-js");

require("@/core/plugins/inline-svg");

require("@/core/plugins/apexcharts");

require("@/core/plugins/treeselect");

require("@/core/plugins/metronic");

require("@mdi/font/css/materialdesignicons.css");

require("@/core/plugins/formvalidation");

var _middlewarePipeline = _interopRequireDefault(require("./middlewares/middlewarePipeline"));

var _vueApexcharts = _interopRequireDefault(require("vue-apexcharts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$func = _utils.func;
_vue["default"].prototype.$mainColor = '#1869A0';
_vue["default"].prototype.$secondaryColor = '#F19023'; // Global 3rd party plugins

window.PerfectScrollbar = _perfectScrollbar["default"];
window.ClipboardJS = _clipboard["default"]; // Vue 3rd party plugins

window.Helpers = _helpers.Helpers; // Apexcharts library

_vue["default"].use(_vueApexcharts["default"]);

_vue["default"].component('apexchart', _vueApexcharts["default"]); // API service init


_api["default"].init(); // // Remove this to disable mock API
// MockService.init();


_router["default"].beforeEach(function _callee(to, from, next) {
  var middleware, context;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // reset config to initial state
          _store["default"].dispatch(_config.RESET_LAYOUT_CONFIG); // Scroll page to top on every route change


          setTimeout(function () {
            window.scrollTo(0, 0);
          }, 100);

          if (to.meta.middleware) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", next());

        case 4:
          middleware = to.meta.middleware;
          context = {
            to: to,
            from: from,
            next: next,
            store: _store["default"]
          };
          document.title = "".concat(to.name.charAt(0).toUpperCase()).concat(to.name.substring(1), " | DLS Money Plataforma de cambio de dolares a soles online");
          return _context.abrupt("return", middleware[0](_objectSpread({}, context, {
            next: (0, _middlewarePipeline["default"])(context, middleware, 1)
          })));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});

if (process.env.MIX_ENVIROMENT == "production") {
  process.env.BASE_URL = process.env.MIX_BASE_URL_PRODUCTION;
} else if (process.env.MIX_ENVIROMENT == "staging") {
  process.env.BASE_URL = process.env.MIX_BASE_URL_STAGING;
} else {
  process.env.BASE_URL = process.env.MIX_BASE_URL;
}

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  i18n: _vueI18n["default"],
  vuetify: _vuetify["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");