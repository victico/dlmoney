(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div>\n  <b-jumbotron header=\"BootstrapVue\" lead=\"Bootstrap v4 Components for Vue.js 2\">\n    <p>For more information visit website</p>\n    <b-button variant=\"primary\" href=\"#\">More Info</b-button>\n  </b-jumbotron>\n</div>"
      },
      code2: {
        html: "<div>\n  <b-jumbotron>\n    <template v-slot:header>BootstrapVue</template>\n\n    <template v-slot:lead>\n      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\n      featured content or information.\n    </template>\n\n    <hr class=\"my-4\">\n\n    <p>\n      It uses utility classes for typography and spacing to space content out within the larger\n      container.\n    </p>\n\n    <b-button variant=\"primary\" href=\"#\">Do Something</b-button>\n    <b-button variant=\"success\" href=\"#\">Do Something Else</b-button>\n  </b-jumbotron>\n</div>"
      },
      code3: {
        html: "<div>\n  <b-jumbotron bg-variant=\"info\" text-variant=\"white\" border-variant=\"dark\">\n    <template v-slot:header>BootstrapVue</template>\n\n    <template v-slot:lead>\n      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\n      featured content or information.\n    </template>\n\n    <hr class=\"my-4\">\n\n    <p>\n      It uses utility classes for typography and spacing to space content out within the larger\n      container.\n    </p>\n  </b-jumbotron>\n</div>"
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
      title: "Jumbotron"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=template&id=21581f90&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=template&id=21581f90& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Jumbotron")]),
            _vm._v(
              " A lightweight, flexible component that can optionally\n      extend the entire viewport to showcase key marketing messages on your\n      site.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/jumbotron",
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
              attrs: { title: "Usage with props" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            You can set the heading and lead text via the\n            "
                        ),
                        _c("code", [_vm._v("header")]),
                        _vm._v(" and "),
                        _c("code", [_vm._v("lead")]),
                        _vm._v(" props, or use the named\n            slots "),
                        _c("code", [_vm._v("header")]),
                        _vm._v(" and "),
                        _c("code", [_vm._v("lead")]),
                        _vm._v(
                          " if you need HTML\n            support.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-jumbotron",
                            {
                              attrs: {
                                header: "BootstrapVue",
                                lead: "Bootstrap v4 Components for Vue.js 2"
                              }
                            },
                            [
                              _c("p", [
                                _vm._v("For more information visit website")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary", href: "#" } },
                                [_vm._v("More Info")]
                              )
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
              attrs: { title: "Usage with slots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-jumbotron",
                            {
                              scopedSlots: _vm._u([
                                {
                                  key: "header",
                                  fn: function() {
                                    return [_vm._v("BootstrapVue")]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "lead",
                                  fn: function() {
                                    return [
                                      _vm._v(
                                        "\n                This is a simple hero unit, a simple jumbotron-style component\n                for calling extra attention to featured content or\n                information.\n              "
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _vm._v(" "),
                              _c("hr", { staticClass: "my-4" }),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                It uses utility classes for typography and spacing to space\n                content out within the larger container.\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-3",
                                  attrs: { variant: "primary", href: "#" }
                                },
                                [_vm._v("Do Something")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "success", href: "#" } },
                                [_vm._v("Do Something Else")]
                              )
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
              attrs: { title: "Variants" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Control the overall background variant with the\n            "
                        ),
                        _c("code", [_vm._v("bg-variant")]),
                        _vm._v(" prop ( set to "),
                        _c("code", [_vm._v("info")]),
                        _vm._v(",\n            "),
                        _c("code", [_vm._v("danger")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("warning")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("light")]),
                        _vm._v(",\n            "),
                        _c("code", [_vm._v("dark")]),
                        _vm._v(
                          ", etc), the border variant with the\n            "
                        ),
                        _c("code", [_vm._v("border-variant")]),
                        _vm._v(
                          " prop, and the text variant with\n            "
                        ),
                        _c("code", [_vm._v("text-variant")]),
                        _vm._v(
                          " prop. All three props default to\n            "
                        ),
                        _c("code", [_vm._v("null")]),
                        _vm._v(
                          ", which will instruct the jumbotron to use the\n            default styling"
                        ),
                        _c("span", { staticClass: "code" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-jumbotron",
                            {
                              attrs: {
                                "bg-variant": "info",
                                "text-variant": "white",
                                "border-variant": "dark"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "header",
                                  fn: function() {
                                    return [_vm._v("BootstrapVue")]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "lead",
                                  fn: function() {
                                    return [
                                      _vm._v(
                                        "\n                This is a simple hero unit, a simple jumbotron-style component\n                for calling extra attention to featured content or\n                information.\n              "
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _vm._v(" "),
                              _c("hr", { staticClass: "my-4" }),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                It uses utility classes for typography and spacing to space\n                content out within the larger container.\n              "
                                )
                              ])
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jumbotron_vue_vue_type_template_id_21581f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jumbotron.vue?vue&type=template&id=21581f90& */ "./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=template&id=21581f90&");
/* harmony import */ var _Jumbotron_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jumbotron.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Jumbotron_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Jumbotron_vue_vue_type_template_id_21581f90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Jumbotron_vue_vue_type_template_id_21581f90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jumbotron_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Jumbotron.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jumbotron_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=template&id=21581f90&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=template&id=21581f90& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jumbotron_vue_vue_type_template_id_21581f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Jumbotron.vue?vue&type=template&id=21581f90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Jumbotron.vue?vue&type=template&id=21581f90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jumbotron_vue_vue_type_template_id_21581f90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jumbotron_vue_vue_type_template_id_21581f90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);