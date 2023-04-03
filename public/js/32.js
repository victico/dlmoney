(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      html1: "<div>\n    <h2>Example heading\n        <b-badge>New</b-badge>\n    </h2>\n    <h3>Example heading\n        <b-badge>New</b-badge>\n    </h3>\n    <h4>Example heading\n        <b-badge>New</b-badge>\n    </h4>\n    <h5>Example heading\n        <b-badge>New</b-badge>\n    </h5>\n    <h6>Example heading\n        <b-badge>New</b-badge>\n    </h6>\n</div>",
      html2: "<div>\n    <b-badge class=\"mr-1\" variant=\"primary\">Primary</b-badge>\n    <b-badge class=\"mr-1\" variant=\"secondary\">Secondary</b-badge>\n    <b-badge class=\"mr-1\" variant=\"success\">Success</b-badge>\n    <b-badge class=\"mr-1\" variant=\"danger\">Danger</b-badge>\n    <b-badge class=\"mr-1\" variant=\"warning\">Warning</b-badge>\n    <b-badge class=\"mr-1\" variant=\"info\">Info</b-badge>\n    <b-badge class=\"mr-1\" variant=\"light\">Light</b-badge>\n    <b-badge class=\"mr-1\" variant=\"dark\">Dark</b-badge>\n</div>",
      html3: "<div>\n    <b-badge pill variant=\"primary\">Primary</b-badge>\n    <b-badge pill variant=\"secondary\">Secondary</b-badge>\n    <b-badge pill variant=\"success\">Success</b-badge>\n    <b-badge pill variant=\"danger\">Danger</b-badge>\n    <b-badge pill variant=\"warning\">Warning</b-badge>\n    <b-badge pill variant=\"info\">Info</b-badge>\n    <b-badge pill variant=\"light\">Light</b-badge>\n    <b-badge pill variant=\"dark\">Dark</b-badge>\n</div>",
      html4: "<div>\n    <b-badge href=\"#\" variant=\"primary\">Primary</b-badge>\n    <b-badge href=\"#\" variant=\"secondary\">Secondary</b-badge>\n    <b-badge href=\"#\" variant=\"success\">Success</b-badge>\n    <b-badge href=\"#\" variant=\"danger\">Danger</b-badge>\n    <b-badge href=\"#\" variant=\"warning\">Warning</b-badge>\n    <b-badge href=\"#\" variant=\"info\">Info</b-badge>\n    <b-badge href=\"#\" variant=\"light\">Light</b-badge>\n    <b-badge href=\"#\" variant=\"dark\">Dark</b-badge>\n</div>"
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
      title: "Badges"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=template&id=7c74e6a2&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=template&id=7c74e6a2& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Badges")]),
            _vm._v(
              " Small and adaptive tag for adding context to just about\n      any content.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/badge",
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
              attrs: { title: "Badges" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Badges scale to match the size of the immediate parent element by\n            using relative font sizing and "
                        ),
                        _c("code", [_vm._v("em")]),
                        _vm._v(" units.\n          ")
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "h2",
                          [
                            _vm._v(
                              "\n              Example heading\n              "
                            ),
                            _c("b-badge", [_vm._v("New")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "h3",
                          [
                            _vm._v(
                              "\n              Example heading\n              "
                            ),
                            _c("b-badge", [_vm._v("New")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "h4",
                          [
                            _vm._v(
                              "\n              Example heading\n              "
                            ),
                            _c("b-badge", [_vm._v("New")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "h5",
                          [
                            _vm._v(
                              "\n              Example heading\n              "
                            ),
                            _c("b-badge", [_vm._v("New")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "h6",
                          [
                            _vm._v(
                              "\n              Example heading\n              "
                            ),
                            _c("b-badge", [_vm._v("New")])
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
                      _vm._v("\n          " + _vm._s(_vm.html1) + "\n        ")
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Actionable badges" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Quickly provide actionable badges with hover and focus states by\n            specifying either the "
                        ),
                        _c("code", [_vm._v("href")]),
                        _vm._v(" prop (links) or\n            "),
                        _c("code", [_vm._v("to")]),
                        _vm._v(" prop (router-links):\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { href: "#", variant: "primary" }
                            },
                            [_vm._v("Primary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { href: "#", variant: "secondary" }
                            },
                            [_vm._v("\n              Secondary\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { href: "#", variant: "success" }
                            },
                            [_vm._v("Success")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { href: "#", variant: "danger" }
                            },
                            [_vm._v("Danger")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { href: "#", variant: "warning" }
                            },
                            [_vm._v("Warning")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { href: "#", variant: "info" }
                            },
                            [_vm._v("Info")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { href: "#", variant: "light" }
                            },
                            [_vm._v("Light")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { href: "#", variant: "dark" }
                            },
                            [_vm._v("Dark")]
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
                      _vm._v("\n          " + _vm._s(_vm.html4) + "\n        ")
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
              attrs: { title: "Contextual variations" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Add any of the following "),
                        _c("code", [_vm._v("variants")]),
                        _vm._v(
                          " via the variant\n            prop to change the appearance of a "
                        ),
                        _c("code", [_vm._v("<b-badge>")]),
                        _vm._v(":\n            "),
                        _c("code", [_vm._v("default")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("primary")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("success")]),
                        _vm._v(",\n            "),
                        _c("code", [_vm._v("warning")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("info")]),
                        _vm._v(", and "),
                        _c("code", [_vm._v("danger")]),
                        _vm._v(".\n            If no variant is specified "),
                        _c("code", [_vm._v("default")]),
                        _vm._v(" will be used.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "primary" }
                            },
                            [_vm._v("Primary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "secondary" }
                            },
                            [_vm._v("Secondary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "success" }
                            },
                            [_vm._v("Success")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "danger" }
                            },
                            [_vm._v("Danger")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "warning" }
                            },
                            [_vm._v("Warning")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            { staticClass: "mr-1", attrs: { variant: "info" } },
                            [_vm._v("Info")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "light" }
                            },
                            [_vm._v("Light")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            { staticClass: "mr-1", attrs: { variant: "dark" } },
                            [_vm._v("Dark")]
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
                      _vm._v("\n          " + _vm._s(_vm.html2) + "\n        ")
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Pill badges" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Use the "),
                        _c("code", [_vm._v("pill")]),
                        _vm._v(
                          " prop to make badges more rounded (with a\n            larger border-radius and additional horizontal padding). Useful if\n            you miss the badges from Bootstrap v3.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { pill: "", variant: "primary" }
                            },
                            [_vm._v("Primary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { pill: "", variant: "secondary" }
                            },
                            [_vm._v("Secondary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { pill: "", variant: "success" }
                            },
                            [_vm._v("Success")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { pill: "", variant: "danger" }
                            },
                            [_vm._v("Danger")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { pill: "", variant: "warning" }
                            },
                            [_vm._v("Warning")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { pill: "", variant: "info" }
                            },
                            [_vm._v("Info")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { pill: "", variant: "light" }
                            },
                            [_vm._v("Light")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-badge",
                            {
                              staticClass: "mr-1",
                              attrs: { pill: "", variant: "dark" }
                            },
                            [_vm._v("Dark")]
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
                      _vm._v("\n          " + _vm._s(_vm.html3) + "\n        ")
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Badge.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Badge.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badge_vue_vue_type_template_id_7c74e6a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge.vue?vue&type=template&id=7c74e6a2& */ "./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=template&id=7c74e6a2&");
/* harmony import */ var _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Badge_vue_vue_type_template_id_7c74e6a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Badge_vue_vue_type_template_id_7c74e6a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Badge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Badge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=template&id=7c74e6a2&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=template&id=7c74e6a2& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_7c74e6a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Badge.vue?vue&type=template&id=7c74e6a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Badge.vue?vue&type=template&id=7c74e6a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_7c74e6a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_7c74e6a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);