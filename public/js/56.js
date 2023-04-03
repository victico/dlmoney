(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div>\n  <b-nav>\n    <b-nav-item active>Active</b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Another Link</b-nav-item>\n    <b-nav-item disabled>Disabled</b-nav-item>\n  </b-nav>\n</div>"
      },
      code2: {
        html: "<div>\n  <b-nav tabs>\n    <b-nav-item active>Active</b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Another Link</b-nav-item>\n    <b-nav-item disabled>Disabled</b-nav-item>\n  </b-nav>\n</div>"
      },
      code3: {
        html: "<div>\n  <b-nav pills>\n    <b-nav-item active>Active</b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Another Link</b-nav-item>\n    <b-nav-item disabled>Disabled</b-nav-item>\n  </b-nav>\n</div>"
      },
      code4: {
        html: "<div>\n  <b-nav tabs fill>\n    <b-nav-item active>Active</b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Link with a long name </b-nav-item>\n    <b-nav-item disabled>Disabled</b-nav-item>\n  </b-nav>\n</div>"
      },
      code5: {
        html: "<div>\n  <b-nav tabs justified>\n    <b-nav-item active>Active</b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Link with a long name </b-nav-item>\n    <b-nav-item disabled>Disabled</b-nav-item>\n  </b-nav>\n</div>"
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
      title: "Nav"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=template&id=0aab472f&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=template&id=0aab472f& ***!
  \************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Navs")]),
            _vm._v(
              " Navigation available in Bootstrap share general markup and\n      styles, from the base <b-nav> class to the active and disabled\n      states. Swap modifier props to switch between each style.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/nav",
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
              attrs: { title: "Navs" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-nav",
                            [
                              _c("b-nav-item", { attrs: { active: "" } }, [
                                _vm._v("Active")
                              ]),
                              _vm._v(" "),
                              _c("b-nav-item", [_vm._v("Link")]),
                              _vm._v(" "),
                              _c("b-nav-item", [_vm._v("Another Link")]),
                              _vm._v(" "),
                              _c("b-nav-item", { attrs: { disabled: "" } }, [
                                _vm._v("Disabled")
                              ])
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
              attrs: { title: "Tab style" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Make the nav look like tabs by setting the "
                        ),
                        _c("code", [_vm._v("tabs")]),
                        _vm._v(" prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-nav",
                            { attrs: { tabs: "" } },
                            [
                              _c("b-nav-item", { attrs: { active: "" } }, [
                                _vm._v("Active")
                              ]),
                              _vm._v(" "),
                              _c("b-nav-item", [_vm._v("Link")]),
                              _vm._v(" "),
                              _c("b-nav-item", [_vm._v("Another Link")]),
                              _vm._v(" "),
                              _c("b-nav-item", { attrs: { disabled: "" } }, [
                                _vm._v("Disabled")
                              ])
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
              attrs: { title: "Pill style" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("Use the pill style by setting the "),
                        _c("code", [_vm._v("pills")]),
                        _vm._v(" prop.")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-nav",
                            { attrs: { pills: "" } },
                            [
                              _c("b-nav-item", { attrs: { active: "" } }, [
                                _vm._v("Active")
                              ]),
                              _vm._v(" "),
                              _c("b-nav-item", [_vm._v("Link")]),
                              _vm._v(" "),
                              _c("b-nav-item", [_vm._v("Another Link")]),
                              _vm._v(" "),
                              _c("b-nav-item", { attrs: { disabled: "" } }, [
                                _vm._v("Disabled")
                              ])
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
                        "\n          " + _vm._s(_vm.code3.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Fill" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            To proportionately fill all available space with your\n            "
                        ),
                        _c("code", [_vm._v("<b-nav-item>")]),
                        _vm._v(" components, set the\n            "),
                        _c("code", [_vm._v("fill")]),
                        _vm._v(
                          " prop. Notice that all horizontal space is\n            occupied, but not every nav item has the same width.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-nav",
                            { attrs: { tabs: "", fill: "" } },
                            [
                              _c("b-nav-item", { attrs: { active: "" } }, [
                                _vm._v("Active")
                              ]),
                              _vm._v(" "),
                              _c("b-nav-item", [_vm._v("Link")]),
                              _vm._v(" "),
                              _c("b-nav-item", [
                                _vm._v("Link with a long name ")
                              ]),
                              _vm._v(" "),
                              _c("b-nav-item", { attrs: { disabled: "" } }, [
                                _vm._v("Disabled")
                              ])
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
              attrs: { title: "Justified" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            For equal-width elements, set the "
                        ),
                        _c("code", [_vm._v("justified")]),
                        _vm._v(
                          " prop\n            instead. All horizontal space will be occupied by nav links, but\n            unlike "
                        ),
                        _c("code", [_vm._v("fill")]),
                        _vm._v(" above, every\n            "),
                        _c("code", [_vm._v("<b-nav-item>")]),
                        _vm._v(" will be the same width.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-nav",
                            { attrs: { tabs: "", justified: "" } },
                            [
                              _c("b-nav-item", { attrs: { active: "" } }, [
                                _vm._v("Active")
                              ]),
                              _vm._v(" "),
                              _c("b-nav-item", [_vm._v("Link")]),
                              _vm._v(" "),
                              _c("b-nav-item", [
                                _vm._v("Link with a long name ")
                              ]),
                              _vm._v(" "),
                              _c("b-nav-item", { attrs: { disabled: "" } }, [
                                _vm._v("Disabled")
                              ])
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
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Nav.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Nav.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav_vue_vue_type_template_id_0aab472f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=0aab472f& */ "./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=template&id=0aab472f&");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Nav_vue_vue_type_template_id_0aab472f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Nav_vue_vue_type_template_id_0aab472f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=template&id=0aab472f&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=template&id=0aab472f& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_0aab472f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=template&id=0aab472f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Nav.vue?vue&type=template&id=0aab472f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_0aab472f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_0aab472f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);