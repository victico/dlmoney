(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      html1: "<div>\n  <b-button-toolbar key-nav aria-label=\"Toolbar with button groups\">\n    <b-button-group class=\"mx-1\">\n      <b-button>&laquo;</b-button>\n      <b-button>&lsaquo;</b-button>\n    </b-button-group>\n    <b-button-group class=\"mx-1\">\n      <b-button>Edit</b-button>\n      <b-button>Undo</b-button>\n      <b-button>Redo</b-button>\n    </b-button-group>\n    <b-button-group class=\"mx-1\">\n      <b-button>&rsaquo;</b-button>\n      <b-button>&raquo;</b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</div>",
      html2: "<div>\n  <b-button-toolbar aria-label=\"Toolbar with button groups and input groups\">\n    <b-button-group size=\"sm\" class=\"mr-1\">\n      <b-button>Save</b-button>\n      <b-button>Cancel</b-button>\n    </b-button-group>\n    <b-input-group size=\"sm\" prepend=\"$\" append=\".00\">\n      <b-form-input value=\"100\" class=\"text-right\"></b-form-input>\n    </b-input-group>\n  </b-button-toolbar>\n</div>",
      html3: "<div>\n  <b-button-toolbar aria-label=\"Toolbar with button groups and dropdown menu\">\n    <b-button-group class=\"mx-1\">\n      <b-button>New</b-button>\n      <b-button>Edit</b-button>\n      <b-button>Undo</b-button>\n    </b-button-group>\n    <b-dropdown class=\"mx-1\" right text=\"menu\">\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-button-group class=\"mx-1\">\n      <b-button>Save</b-button>\n      <b-button>Cancel</b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</div>"
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
      title: "Buttons",
      route: "button"
    }, {
      title: "Button Toolbar"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=template&id=1e7dec16&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=template&id=1e7dec16& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Button toolbar")]),
            _vm._v(
              " Group a series of button-groups and/or\n      input-groups together on a single line, with optional keyboard\n      navigation.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/button-toolbar",
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
              attrs: { title: "Button toolbar" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("With button groups & Keyboard navigation")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button-toolbar",
                            {
                              attrs: {
                                "key-nav": "",
                                "aria-label": "Toolbar with button groups"
                              }
                            },
                            [
                              _c(
                                "b-button-group",
                                { staticClass: "mx-1" },
                                [
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("«")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("‹")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button-group",
                                { staticClass: "mx-1" },
                                [
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("Edit")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("Undo")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("Redo")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button-group",
                                { staticClass: "mx-1" },
                                [
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("›")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("»")
                                  ])
                                ],
                                1
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
                      _vm._v("\n          " + _vm._s(_vm.html1) + "\n        ")
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
              attrs: { title: "Button toolbar" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "With mixture of small button group and small input group"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button-toolbar",
                            {
                              attrs: {
                                "aria-label":
                                  "Toolbar with button groups and input groups"
                              }
                            },
                            [
                              _c(
                                "b-button-group",
                                { staticClass: "mr-1", attrs: { size: "sm" } },
                                [
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("Save")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("Cancel")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                {
                                  attrs: {
                                    size: "sm",
                                    prepend: "$",
                                    append: ".00"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    staticClass: "text-right",
                                    attrs: { value: "100" }
                                  })
                                ],
                                1
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
                      _vm._v("\n          " + _vm._s(_vm.html2) + "\n        ")
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
              attrs: { title: "Button toolbar" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [_vm._v("With button groups and dropdown menu")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button-toolbar",
                            {
                              attrs: {
                                "aria-label":
                                  "Toolbar with button groups and dropdown menu"
                              }
                            },
                            [
                              _c(
                                "b-button-group",
                                { staticClass: "mx-1" },
                                [
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("New")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("Edit")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("Undo")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown",
                                {
                                  staticClass: "mx-1",
                                  attrs: { right: "", text: "menu" }
                                },
                                [
                                  _c("b-dropdown-item", [_vm._v("Item 1")]),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [_vm._v("Item 2")]),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [_vm._v("Item 3")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button-group",
                                { staticClass: "mx-1" },
                                [
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("Save")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-button", { staticClass: "mr-2" }, [
                                    _vm._v("Cancel")
                                  ])
                                ],
                                1
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonToolbar_vue_vue_type_template_id_1e7dec16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonToolbar.vue?vue&type=template&id=1e7dec16& */ "./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=template&id=1e7dec16&");
/* harmony import */ var _ButtonToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonToolbar.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ButtonToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ButtonToolbar_vue_vue_type_template_id_1e7dec16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ButtonToolbar_vue_vue_type_template_id_1e7dec16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=template&id=1e7dec16&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=template&id=1e7dec16& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonToolbar_vue_vue_type_template_id_1e7dec16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonToolbar.vue?vue&type=template&id=1e7dec16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/ButtonToolbar.vue?vue&type=template&id=1e7dec16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonToolbar_vue_vue_type_template_id_1e7dec16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonToolbar_vue_vue_type_template_id_1e7dec16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);