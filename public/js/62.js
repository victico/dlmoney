(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div class=\"text-center\">\n  <b-spinner label=\"Spinning\"></b-spinner>\n  <b-spinner type=\"grow\" label=\"Spinning\"></b-spinner>\n  <b-spinner variant=\"primary\" label=\"Spinning\"></b-spinner>\n  <b-spinner variant=\"primary\" type=\"grow\" label=\"Spinning\"></b-spinner>\n  <b-spinner variant=\"success\" label=\"Spinning\"></b-spinner>\n  <b-spinner variant=\"success\" type=\"grow\" label=\"Spinning\"></b-spinner>\n</div>"
      },
      code2: {
        html: "<div>\n    <div class=\"text-center mb-3 d-flex justify-content-between\">\n      <b-spinner\n        v-for=\"variant in variants\"\n        :variant=\"variant\"\n        :key=\"variant\"\n      ></b-spinner>\n    </div>\n\n    <div class=\"text-center d-flex justify-content-between\">\n      <b-spinner\n        v-for=\"variant in variants\"\n        :variant=\"variant\"\n        :key=\"variant\"\n        type=\"grow\"\n      ></b-spinner>\n    </div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']\n      }\n    }\n  }",
        variants: ["primary", "secondary", "danger", "warning", "success", "info", "light", "dark"]
      },
      code3: {
        html: "<div>\n  <div class=\"d-flex justify-content-center mb-3\">\n    <b-spinner label=\"Loading...\"></b-spinner>\n  </div>\n\n  <div class=\"d-flex align-items-center\">\n    <strong>Loading...</strong>\n    <b-spinner class=\"ml-auto\"></b-spinner>\n  </div>\n</div>"
      },
      code4: {
        html: "<div class=\"text-center\">\n  <b-spinner variant=\"primary\" label=\"Text Centered\"></b-spinner>\n</div>"
      },
      code5: {
        html: "<div>\n  <b-button variant=\"primary\" disabled>\n    <b-spinner small></b-spinner>\n    <span class=\"sr-only\">Loading...</span>\n  </b-button>\n\n  <b-button variant=\"primary\" disabled>\n    <b-spinner small type=\"grow\"></b-spinner>\n    Loading...\n  </b-button>\n</div>"
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vue Bootstrap",
      route: "alert"
    }, {
      title: "Progress",
      route: "progress"
    }, {
      title: "Spinner"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=template&id=dfa969b6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=template&id=dfa969b6& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Spinners")]),
            _vm._v(
              " The <b-spinner> component can be used to show the\n      loading state in your projects. They're rendered only with basic HTML\n      and CSS as a lightweight Vue functional component. Their appearance,\n      alignment, and sizing can be easily customized with a few built-in props\n      and/or Bootstrap v4 utility classes.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/spinner",
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
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Spinners" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Spinners can be placed just about anywhere, including inside\n            buttons, alerts, and even "
                        ),
                        _c("code", [_vm._v("<b-table>")]),
                        _vm._v("'s busy\n            slot."),
                        _c("br"),
                        _c("br")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c("b-spinner", {
                            staticClass: "mr-3",
                            attrs: { label: "Spinning" }
                          }),
                          _vm._v(" "),
                          _c("b-spinner", {
                            staticClass: "mr-3",
                            attrs: { type: "grow", label: "Spinning" }
                          }),
                          _vm._v(" "),
                          _c("b-spinner", {
                            staticClass: "mr-3",
                            attrs: { variant: "primary", label: "Spinning" }
                          }),
                          _vm._v(" "),
                          _c("b-spinner", {
                            staticClass: "mr-3",
                            attrs: {
                              variant: "primary",
                              type: "grow",
                              label: "Spinning"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-spinner", {
                            staticClass: "mr-3",
                            attrs: { variant: "success", label: "Spinning" }
                          }),
                          _vm._v(" "),
                          _c("b-spinner", {
                            staticClass: "mr-3",
                            attrs: {
                              variant: "success",
                              type: "grow",
                              label: "Spinning"
                            }
                          })
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
              attrs: { title: "Flex" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [_vm._v("Using flex utility classes")]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          { staticClass: "d-flex justify-content-center mb-3" },
                          [_c("b-spinner", { attrs: { label: "Loading..." } })],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("strong", [_vm._v("Loading...")]),
                            _vm._v(" "),
                            _c("b-spinner", { staticClass: "ml-auto" })
                          ],
                          1
                        )
                      ])
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Text align" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [_vm._v("Using text alignment utility classes")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c("b-spinner", {
                            attrs: {
                              variant: "primary",
                              label: "Text Centered"
                            }
                          })
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
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Spinners in buttons" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Use spinners within buttons to indicate an action is currently\n            processing or taking place. You may also swap the label text out\n            of the spinner element and utilize button text as needed.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-3",
                              attrs: { variant: "primary", disabled: "" }
                            },
                            [
                              _c("b-spinner", { attrs: { small: "" } }),
                              _vm._v(" "),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "primary", disabled: "" } },
                            [
                              _c("b-spinner", {
                                attrs: { small: "", type: "grow" }
                              }),
                              _vm._v("\n              Loading...\n            ")
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
                        "\n          " + _vm._s(_vm.code5.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Spinner color variants" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Spinners use "),
                        _c("code", [_vm._v("currentColor")]),
                        _vm._v(
                          " for their color, meaning it\n            inherits the current font color. You can customize the color using\n            the standard text color variants using the\n            "
                        ),
                        _c("code", [_vm._v("variant")]),
                        _vm._v(
                          " prop, or place classes or styles on the\n            component to change its color.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          {
                            staticClass:
                              "text-center mb-3 d-flex justify-content-between"
                          },
                          _vm._l(_vm.code2.variants, function(variant) {
                            return _c("b-spinner", {
                              key: variant,
                              attrs: { variant: variant }
                            })
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "text-center d-flex justify-content-between"
                          },
                          _vm._l(_vm.code2.variants, function(variant) {
                            return _c("b-spinner", {
                              key: variant,
                              attrs: { variant: variant, type: "grow" }
                            })
                          }),
                          1
                        )
                      ])
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code2.js) + "\n        "
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Spinner.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Spinner.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spinner_vue_vue_type_template_id_dfa969b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner.vue?vue&type=template&id=dfa969b6& */ "./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=template&id=dfa969b6&");
/* harmony import */ var _Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spinner_vue_vue_type_template_id_dfa969b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spinner_vue_vue_type_template_id_dfa969b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Spinner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=template&id=dfa969b6&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=template&id=dfa969b6& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_dfa969b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=template&id=dfa969b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Spinner.vue?vue&type=template&id=dfa969b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_dfa969b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_dfa969b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);