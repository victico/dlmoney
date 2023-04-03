(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/content/CodePreview.vue */ "./resources/js/src/view/content/CodePreview.vue");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div>\n  <v-alert type=\"success\">\n    I'm a success alert.\n  </v-alert>\n\n  <v-alert type=\"info\">\n    I'm an info alert.\n  </v-alert>\n\n  <v-alert type=\"warning\">\n    I'm a warning alert.\n  </v-alert>\n\n  <v-alert type=\"error\">\n    I'm an error alert.\n  </v-alert>\n</div>"
      },
      code2: {
        html: "<div>\n  <v-alert\n    border=\"top\"\n    color=\"red lighten-2\"\n    dark\n  >\n    I'm an alert with a top border and red color\n  </v-alert>\n  <v-alert\n    border=\"right\"\n    color=\"blue-grey\"\n    dark\n  >\n    I'm an alert with a right border and blue-grey color\n  </v-alert>\n  <v-alert\n    border=\"bottom\"\n    color=\"pink darken-1\"\n    dark\n  >\n    I'm an alert with a bottom border and pink color\n  </v-alert>\n  <v-alert\n    border=\"left\"\n    color=\"indigo\"\n    dark\n  >\n    I'm an alert with a border left type info\n  </v-alert>\n</div>"
      },
      code3: {
        html: " <div>\n  <v-alert\n    border=\"left\"\n    colored-border\n    color=\"deep-purple accent-4\"\n    elevation=\"2\"\n  >\n    Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..\n\n    Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.\n  </v-alert>\n  <v-alert\n    border=\"top\"\n    colored-border\n    type=\"info\"\n    elevation=\"2\"\n  >\n    Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.\n  </v-alert>\n  <v-alert\n    border=\"bottom\"\n    colored-border\n    type=\"warning\"\n    elevation=\"2\"\n  >\n    Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.\n  </v-alert>\n  <v-alert\n    border=\"right\"\n    colored-border\n    type=\"error\"\n    elevation=\"2\"\n  >\n    Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.\n  </v-alert>\n</div>",
        js: ""
      },
      code4: {
        html: "<div>\n  <v-alert\n    v-model=\"alert\"\n    border=\"left\"\n    close-text=\"Close Alert\"\n    color=\"deep-purple accent-4\"\n    dark\n    dismissible\n  >\n    Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.\n\n    Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.\n  </v-alert>\n  <div class=\"text-center\">\n    <v-btn\n      v-if=\"!alert\"\n      color=\"deep-purple accent-4\"\n      dark\n      @click=\"alert = true\"\n    >\n      Reset\n    </v-btn>\n  </div>\n</div>",
        js: "export default {\n    data () {\n      return {\n        alert: true\n      }\n    },\n  }"
      },
      alert: true
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vuetify",
      route: "alerts"
    }, {
      title: "Alerts"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=template&id=347de198&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=template&id=347de198& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-alert",
        {
          staticClass:
            "alert alert-custom alert-white alert-shadow fade show gutter-b",
          attrs: { show: "", variant: "light" }
        },
        [
          _c("div", { staticClass: "alert-icon" }, [
            _c(
              "span",
              { staticClass: "svg-icon svg-icon-lg" },
              [
                _c("inline-svg", {
                  attrs: { src: "media/svg/icons/Tools/Compass.svg" }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "alert-text" }, [
            _c("b", [_vm._v("Alerts")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-alert")]),
            _vm._v(
              " component is used to convey\n      important information to the user through the use contextual types icons\n      and color. These default types come in in 4 variations: success, info,\n      warning, and error. Default icons are assigned which help represent\n      different actions each type portrays. Many parts of an alert such as\n      "
            ),
            _c("code", [_vm._v("border")]),
            _vm._v(", "),
            _c("code", [_vm._v("icon")]),
            _vm._v(", and "),
            _c("code", [_vm._v("color")]),
            _vm._v(
              " can also\n      be customized to fit almost any situation.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/alerts",
                  target: "_blank"
                }
              },
              [_vm._v("\n        See documentation.\n      ")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Type" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c("v-alert", { attrs: { type: "success" } }, [
                            _vm._v(
                              "\n              I'm a success alert.\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-alert", { attrs: { type: "info" } }, [
                            _vm._v(
                              "\n              I'm an info alert.\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-alert", { attrs: { type: "warning" } }, [
                            _vm._v(
                              "\n              I'm a warning alert.\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-alert", { attrs: { type: "error" } }, [
                            _vm._v(
                              "\n              I'm an error alert.\n            "
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code1.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Colored Border" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "left",
                                "colored-border": "",
                                color: "deep-purple accent-4",
                                elevation: "2"
                              }
                            },
                            [
                              _vm._v(
                                "\n              Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer\n              turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac sapien.\n              Fusce vel dui. Praesent ut ligula non mi varius sagittis.\n              Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis,\n              dictum sed, iaculis a, condimentum nec, nisi.\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "top",
                                "colored-border": "",
                                type: "info",
                                elevation: "2"
                              }
                            },
                            [
                              _vm._v(
                                "\n              Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et\n              arcu. Ut varius tincidunt libero. Curabitur ligula sapien,\n              tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec\n              metus.\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "bottom",
                                "colored-border": "",
                                type: "warning",
                                elevation: "2"
                              }
                            },
                            [
                              _vm._v(
                                "\n              Sed in libero ut nibh placerat accumsan. Phasellus leo dolor,\n              tempus non, auctor et, hendrerit quis, nisi. Phasellus leo\n              dolor, tempus non, auctor et, hendrerit quis, nisi. Sed\n              consequat, leo eget bibendum sodales, augue velit cursus nunc,\n              quis gravida magna mi a libero. Donec elit libero, sodales nec,\n              volutpat a, suscipit non, turpis.\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "right",
                                "colored-border": "",
                                type: "error",
                                elevation: "2"
                              }
                            },
                            [
                              _vm._v(
                                "\n              Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus\n              tempus. Donec posuere vulputate arcu.\n            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code3.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Border" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "top",
                                color: "red lighten-2",
                                dark: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n              I'm an alert with a top border and red color\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "right",
                                color: "blue-grey",
                                dark: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n              I'm an alert with a right border and blue-grey color\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "bottom",
                                color: "pink darken-1",
                                dark: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n              I'm an alert with a bottom border and pink color\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "left",
                                color: "indigo",
                                dark: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n              I'm an alert with a border left type info\n            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code2.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Dismissible" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "left",
                                "close-text": "Close Alert",
                                color: "deep-purple accent-4",
                                dark: "",
                                dismissible: ""
                              },
                              model: {
                                value: _vm.alert,
                                callback: function($$v) {
                                  _vm.alert = $$v
                                },
                                expression: "alert"
                              }
                            },
                            [
                              _vm._v(
                                "\n              Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut\n              neque. Cras dapibus. Vivamus consectetuer hendrerit lacus. Sed\n              mollis, eros et ultrices tempus, mauris ipsum aliquam libero,\n              non adipiscing dolor urna a orci. Sed mollis, eros et ultrices\n              tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a\n              orci. Curabitur blandit mollis lacus. Curabitur ligula sapien,\n              tincidunt non, euismod vitae, posuere imperdiet, leo.\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-center" },
                            [
                              !_vm.alert
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "deep-purple accent-4",
                                        dark: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.alert = true
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                Reset\n              "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code4.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code4.js) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Alerts.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Alerts.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alerts_vue_vue_type_template_id_347de198___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alerts.vue?vue&type=template&id=347de198& */ "./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=template&id=347de198&");
/* harmony import */ var _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alerts.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alerts_vue_vue_type_template_id_347de198___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alerts_vue_vue_type_template_id_347de198___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/Alerts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alerts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=template&id=347de198&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=template&id=347de198& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_347de198___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alerts.vue?vue&type=template&id=347de198& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Alerts.vue?vue&type=template&id=347de198&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_347de198___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_347de198___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);