(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Loader",
  props: {
    logo: String,
    spinnerClass: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/create_account/Layout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/create_account/Layout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_htmlclass_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/htmlclass.service */ "./resources/js/src/core/services/htmlclass.service.js");
/* harmony import */ var _view_content_Loader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/view/content/Loader.vue */ "./resources/js/src/view/content/Loader.vue");
/* harmony import */ var _core_services_store_htmlclass_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/services/store/htmlclass.module.js */ "./resources/js/src/core/services/store/htmlclass.module.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Layout",
  components: {
    Loader: _view_content_Loader_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  beforeMount: function beforeMount() {
    // show page loading
    this.$store.dispatch(_core_services_store_htmlclass_module_js__WEBPACK_IMPORTED_MODULE_3__["ADD_BODY_CLASSNAME"], "page-loading");

    // initialize html element classes
    _core_services_htmlclass_service__WEBPACK_IMPORTED_MODULE_1__["default"].init(this.layoutConfig());
  },
  mounted: function mounted() {
    var _this = this;
    // Simulate the delay page loading
    setTimeout(function () {
      _this.$store.dispatch(_core_services_store_htmlclass_module_js__WEBPACK_IMPORTED_MODULE_3__["REMOVE_BODY_CLASSNAME"], "page-loading");
    }, 2000);
  },
  methods: {},
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["layoutConfig"])), {}, {
    /**
     * Check if the page loader is enabled
     * @returns {boolean}
     */
    loaderEnabled: function loaderEnabled() {
      return !/false/.test(this.layoutConfig("loader.type"));
    },
    /**
     * Page loader logo image using require() function
     * @returns {string}
     */
    loaderLogo: function loaderLogo() {
      return process.env.BASE_URL + this.layoutConfig("loader.logo");
    }
  })
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "page-loader page-loader-logo"
  }, [_c("img", {
    attrs: {
      alt: "Logo",
      src: _vm.logo,
      width: "200"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "spinner",
    "class": _vm.spinnerClass || "spinner-primary"
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/create_account/Layout.vue?vue&type=template&id=275b9863&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/create_account/Layout.vue?vue&type=template&id=275b9863& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.loaderEnabled ? _c("Loader", {
    attrs: {
      logo: _vm.loaderLogo
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "mx-auto col-lg-10 col-md-10 col-sm-12"
  }, [_c("transition", {
    attrs: {
      name: "fade-in-up"
    }
  }, [_c("div", {
    staticClass: "card card-custom gutter-b example example-compact"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-toolbar w-100"
  }, [_c("ul", {
    staticClass: "nav nav-light-primary nav-pills w-100 justify-content-center d-table",
    staticStyle: {
      "table-layout": "fixed"
    }
  }, [_c("li", {
    staticClass: "nav-item d-table-cell float-none"
  }, [_c("router-link", {
    attrs: {
      to: "/create-account/personal"
    }
  }, [_c("h6", {
    staticClass: "nav-link justify-content-center font-weight-bold",
    "class": {
      active: _vm.$route.name === "create-account-personal"
    },
    attrs: {
      href: "#",
      target: "_self"
    }
  }, [_vm._v("Personal")])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item d-table-cell float-none"
  }, [_c("router-link", {
    attrs: {
      to: "/create-account/company"
    }
  }, [_c("h6", {
    staticClass: "nav-link justify-content-center font-weight-bold",
    "class": {
      active: this.$route.name === "create-account-company"
    },
    attrs: {
      href: "#",
      target: "_self"
    }
  }, [_vm._v("Empresa")])])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("router-view")], 1)])])], 1)])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mx-auto col-lg-12 col-md-12 col-sm-12 text-center"
  }, [_c("img", {
    staticClass: "img-responsive",
    attrs: {
      src: "https://www.wallpapertip.com/wmimgs/76-760528_os-x-mavericks-scenery-wallpapers-hd-wallpapers-3800.jpg",
      alt: "",
      height: "175"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/assets/sass/themes/layout/aside lazy recursive ^\\.\\/.*\\.scss$":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/assets/sass/themes/layout/aside lazy ^\.\/.*\.scss$ namespace object ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dark.scss": [
		"./resources/js/src/assets/sass/themes/layout/aside/dark.scss",
		22
	],
	"./light.scss": [
		"./resources/js/src/assets/sass/themes/layout/aside/light.scss",
		23
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/src/assets/sass/themes/layout/aside lazy recursive ^\\.\\/.*\\.scss$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/src/assets/sass/themes/layout/brand lazy recursive ^\\.\\/.*\\.scss$":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/assets/sass/themes/layout/brand lazy ^\.\/.*\.scss$ namespace object ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dark.scss": [
		"./resources/js/src/assets/sass/themes/layout/brand/dark.scss",
		24
	],
	"./light.scss": [
		"./resources/js/src/assets/sass/themes/layout/brand/light.scss",
		25
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/src/assets/sass/themes/layout/brand lazy recursive ^\\.\\/.*\\.scss$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/src/assets/sass/themes/layout/header/base lazy recursive ^\\.\\/.*\\.scss$":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/assets/sass/themes/layout/header/base lazy ^\.\/.*\.scss$ namespace object ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dark.scss": [
		"./resources/js/src/assets/sass/themes/layout/header/base/dark.scss",
		26
	],
	"./light.scss": [
		"./resources/js/src/assets/sass/themes/layout/header/base/light.scss",
		27
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/src/assets/sass/themes/layout/header/base lazy recursive ^\\.\\/.*\\.scss$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/src/assets/sass/themes/layout/header/menu lazy recursive ^\\.\\/.*\\.scss$":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/assets/sass/themes/layout/header/menu lazy ^\.\/.*\.scss$ namespace object ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dark.scss": [
		"./resources/js/src/assets/sass/themes/layout/header/menu/dark.scss",
		28
	],
	"./light.scss": [
		"./resources/js/src/assets/sass/themes/layout/header/menu/light.scss",
		29
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/src/assets/sass/themes/layout/header/menu lazy recursive ^\\.\\/.*\\.scss$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/src/core/services/htmlclass.service.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/core/services/htmlclass.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/htmlclass.module */ "./resources/js/src/core/services/store/htmlclass.module.js");
/* harmony import */ var _core_services_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/store */ "./resources/js/src/core/services/store/index.js");




var HtmlClass = {
  config: null,
  init: function init(config) {
    if (typeof config !== "undefined") {
      this.config = config;
    }

    // init base layout
    this.initLayout();

    // init header and subheader menu
    this.initHeader();
    this.initSubheader();

    // init aside and aside menu
    this.initAside();

    // init footer
    this.initFooter();

    // init themes
    this.initThemes();
  },
  /**
   * Init Layout
   */
  initLayout: function initLayout() {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.has(this.config, "self.body.class")) {
      var _selfBodyClass = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "self.body.class").toString();
      if (_selfBodyClass) {
        var bodyClasses = _selfBodyClass.split(" ");
        bodyClasses.forEach(function (cssClass) {
          _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], cssClass);
        });
      }
    }
    var bgImage = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "self.body.background-image");
    if (typeof bgImage !== "undefined") {
      document.body.style.backgroundImage = "url(".concat(bgImage, ")");
    }

    // Offcanvas directions
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "quick-panel-right");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "demo-panel-right");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "offcanvas-right");

    // Properly close mobile header menu
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "header-menu-wrapper-on");
  },
  /**
   * Init Header
   */
  initHeader: function initHeader() {
    // Fixed header
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.fixed.desktop")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "header-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "header",
        className: "header-fixed"
      });
    } else {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "header-static");
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.fixed.mobile")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "header-mobile-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "header_mobile",
        className: "header-mobile-fixed"
      });
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.self.display")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "header_menu",
        className: "header-menu-layout-".concat(object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.self.layout"))
      });

      // Menu
      if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.self.root-arrow")) {
        _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
          position: "header_menu",
          className: "header-menu-root-arrow"
        });
      }
    }
  },
  /**
   * Init Subheader
   */
  initSubheader: function initSubheader() {
    // Fixed content head
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "subheader.fixed") && object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.fixed.desktop")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "subheader-fixed");
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "subheader.display")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "subheader-enabled");
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.has(this.config, "subheader.style")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "subheader-".concat(object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "subheader.style")));
    }
  },
  /**
   * Init Aside
   */
  initAside: function initAside() {
    // Reset aside class in body
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "aside-enabled");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "aside-fixed");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "aside-static");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "aside-minimize");
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.display") !== true) {
      return;
    }

    // Add aside class enabled in body
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "aside-enabled");

    // Fixed Aside
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.fixed")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "aside-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "aside",
        className: "aside-fixed"
      });
    } else {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "aside-static");
    }

    // Default fixed
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.minimize.default")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "aside-minimize");
    }

    // Dropdown Submenu
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.menu.dropdown")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "aside_menu",
        className: "aside-menu-dropdown"
      });
    }
  },
  /**
   * Init Footer
   */
  initFooter: function initFooter() {
    // Fixed header
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "footer.fixed")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "footer-fixed");
    }
  },
  /**
   * Import theme SCSS file based on the selected theme
   */
  initThemes: function initThemes() {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.theme")) {
      var theme = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.theme");
      __webpack_require__("./resources/js/src/assets/sass/themes/layout/header/base lazy recursive ^\\.\\/.*\\.scss$")("./".concat(theme, ".scss"));
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.desktop.submenu.theme")) {
      var _theme = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.desktop.submenu.theme");
      __webpack_require__("./resources/js/src/assets/sass/themes/layout/header/menu lazy recursive ^\\.\\/.*\\.scss$")("./".concat(_theme, ".scss"));
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "brand.self.theme")) {
      var _theme2 = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "brand.self.theme");
      __webpack_require__("./resources/js/src/assets/sass/themes/layout/brand lazy recursive ^\\.\\/.*\\.scss$")("./".concat(_theme2, ".scss"));
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.theme")) {
      var _theme3 = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.theme");
      __webpack_require__("./resources/js/src/assets/sass/themes/layout/aside lazy recursive ^\\.\\/.*\\.scss$")("./".concat(_theme3, ".scss"));
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HtmlClass);

/***/ }),

/***/ "./resources/js/src/view/content/Loader.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/view/content/Loader.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=b1c5370c& */ "./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=b1c5370c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/create_account/Layout.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/view/pages/create_account/Layout.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_275b9863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=275b9863& */ "./resources/js/src/view/pages/create_account/Layout.vue?vue&type=template&id=275b9863&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/create_account/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_275b9863___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_275b9863___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/create_account/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/create_account/Layout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/create_account/Layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/create_account/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/create_account/Layout.vue?vue&type=template&id=275b9863&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/create_account/Layout.vue?vue&type=template&id=275b9863& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_275b9863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=275b9863& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/create_account/Layout.vue?vue&type=template&id=275b9863&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_275b9863___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_275b9863___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);