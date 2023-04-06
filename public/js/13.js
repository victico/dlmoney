(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_exchange_rate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/exchange_rate.module */ "./resources/js/src/core/services/store/exchange_rate.module.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mainAlert: false,
      mainAlertVariant: "",
      mainAlertMessage: "",
      sale: '',
      purchase: '',
      lastExchangeRatesNumber: 10,
      series: [],
      options: {
        chart: {
          type: 'area',
          toolbar: {
            show: false
          }
        },
        title: {
          text: 'Ultimos valores del tipo de cambio',
          align: 'center',
          offsetX: 15,
          offsetY: 15,
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'Nono sans',
            color: '#3F4254'
          }
        },
        colors: ['#7f5fa2', '#fed339'],
        yaxis: {
          labels: {
            formatter: function formatter(val) {
              return val.toFixed(2);
            }
          },
          min: function min(_min) {
            return 0;
          },
          max: function max(_max) {
            return _max * 1.10;
          }
        }
      }
    };
  },
  mounted: function mounted() {
    this.getLastExchangeRate();
    this.getExchangeRates();
  },
  methods: {
    getLastExchangeRate: function getLastExchangeRate() {
      var _this = this;
      this.$store.dispatch(_core_services_store_exchange_rate_module__WEBPACK_IMPORTED_MODULE_0__["EXCHANGE_RATES_GET_LAST"]).then(function (data) {
        if (data.code != 200) {
          _this.showMainAlert('danger', data.error);
          return;
        }
        if (data.data != null) {
          _this.sale = data.data.sale;
          _this.purchase = data.data.purchase;
        }
      })["catch"](function (err) {
        _this.showMainAlert('danger', err);
        return;
      });
    },
    getExchangeRates: function getExchangeRates() {
      var _this2 = this;
      this.$store.dispatch(_core_services_store_exchange_rate_module__WEBPACK_IMPORTED_MODULE_0__["EXCHANGE_RATES_GET_ALL"], this.lastExchangeRatesNumber).then(function (data) {
        if (data.code != 200) {
          _this2.showMainAlert('danger', data.error);
          return;
        }
        var arrayPurchase = [];
        var arraySale = [];
        data.data.reverse();
        for (var i = 0; i < data.data.length; i++) {
          var milliseconds = Date.parse(data.data[i].updated_at);
          var date = new Date(milliseconds);
          var formatDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' - ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
          arrayPurchase.push({
            x: formatDate,
            y: data.data[i].purchase
          });
          arraySale.push({
            x: formatDate,
            y: data.data[i].sale
          });
        }
        _this2.series.push({
          name: 'Compra',
          data: arrayPurchase
        });
        _this2.series.push({
          name: 'Venta',
          data: arraySale
        });
      })["catch"](function (err) {
        _this2.showMainAlert('danger', err);
        return;
      });
    },
    showMainAlert: function showMainAlert(variant, message) {
      this.mainAlertVariant = variant;
      this.mainAlertMessage = message;
      this.mainAlert = true;
      window.scrollTo(0, 0);
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=template&id=8860e7e6&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=template&id=8860e7e6& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "card card-custom gutter-b example example-compact"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.mainAlert ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-alert", {
    attrs: {
      show: _vm.mainAlert,
      dismissible: "",
      fade: "",
      variant: _vm.mainAlertVariant
    },
    on: {
      dismissed: function dismissed($event) {
        _vm.mainAlert = false;
      }
    }
  }, [_vm._v(_vm._s(_vm.mainAlertMessage))])], 1), _vm._v(" "), _c("hr")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_vm.sale || _vm.purchase ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "card card-custom wave wave-animate wave-purple mb-8 mb-lg-0",
    staticStyle: {
      "background-color": "#e4d7f1"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex align-items-center p-5"
  }, [_c("div", {
    staticClass: "d-flex flex-column mx-auto text-center"
  }, [_c("h4", {
    staticClass: "text-dark-75 mb-3"
  }, [_vm._v("Compra")]), _vm._v(" "), _c("h2", {
    staticClass: "font-weight-bold"
  }, [_c("strong", [_vm._v(_vm._s(_vm.purchase.toFixed(3)))])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "card card-custom wave wave-animate mb-8 mb-lg-0",
    staticStyle: {
      "background-color": "#fff6d8"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex align-items-center p-5"
  }, [_c("div", {
    staticClass: "d-flex flex-column mx-auto text-center"
  }, [_c("h4", {
    staticClass: "text-dark-75 mb-3"
  }, [_vm._v("Venta")]), _vm._v(" "), _c("h2", {
    staticClass: "font-weight-bold"
  }, [_c("strong", [_vm._v(_vm._s(_vm.sale.toFixed(3)))])])])])])])])]) : _vm._e()]), _vm._v(" "), _vm.series.length > 0 ? _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12 mt-2"
  }, [_c("apexchart", {
    attrs: {
      type: "area",
      height: "350px",
      options: _vm.options,
      series: _vm.series
    }
  })], 1) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header pt-4 pb-2 min-vh-0"
  }, [_c("div", {
    staticClass: "row w-100"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("h3", {
    staticClass: "pt-4"
  }, [_c("strong", [_vm._v("Inicio")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/view/pages/dashboard/Dashboard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/view/pages/dashboard/Dashboard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_8860e7e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=8860e7e6& */ "./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=template&id=8860e7e6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_8860e7e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_8860e7e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=template&id=8860e7e6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=template&id=8860e7e6& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_8860e7e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=8860e7e6& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/dashboard/Dashboard.vue?vue&type=template&id=8860e7e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_8860e7e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_8860e7e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);