(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      html1: "\n  <div>\n    <b-button-group>\n      <b-button>Button 1</b-button>\n      <b-button>Button 2</b-button>\n      <b-button>Button 3</b-button>\n    </b-button-group>\n  </div>\n  <div class=\"mt-3\">\n    <b-button-group>\n      <b-button variant=\"success\">Success</b-button>\n      <b-button variant=\"info\">Info</b-button>\n      <b-button variant=\"warning\">Warning</b-button>\n    </b-button-group>\n  </div>",
      html2: "\n  <div>\n    <b-button-group>\n      <b-button>Button 1</b-button>\n      <b-button>Button 2</b-button>\n      <b-button>Button 3</b-button>\n    </b-button-group>\n  </div>\n  <div class=\"mt-3\">\n    <b-button-group size=\"sm\">\n      <b-button>Left</b-button>\n      <b-button>Middle</b-button>\n      <b-button>Right</b-button>\n    </b-button-group>\n  </div>\n  <div class=\"mt-3\">\n    <b-button-group size=\"lg\">\n      <b-button>Left</b-button>\n      <b-button>Middle</b-button>\n      <b-button>Right</b-button>\n    </b-button-group>\n  </div>",
      html3: "\n        <b-button-group vertical>\n          <b-button>Top</b-button>\n          <b-button>Middle</b-button>\n          <b-button>Bottom</b-button>\n        </b-button-group>",
      html4: "<div>\n  <b-button-group>\n    <b-button>Button</b-button>\n    <b-dropdown right text=\"Menu\">\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider></b-dropdown-divider>\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-dropdown right split text=\"Split Menu\">\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider></b-dropdown-divider>\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n  </b-button-group>\n</div>"
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
      title: "Button Group"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=template&id=2153790e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=template&id=2153790e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Button group")]),
            _vm._v(
              " Group a series of buttons together on a single line\n      with <b-button-group>.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/button-group",
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
              attrs: { title: "Button group" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Default button group and button group using contextual variants.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button-group",
                            [
                              _c("b-button", [_vm._v("Button 1")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Button 2")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Button 3")])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-3" },
                        [
                          _c(
                            "b-button-group",
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "success" } },
                                [_vm._v("Success")]
                              ),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "info" } }, [
                                _vm._v("Info")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "warning" } },
                                [_vm._v("Warning")]
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Sizing" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Set the size prop to "),
                        _c("code", [_vm._v("lg")]),
                        _vm._v(" or "),
                        _c("code", [_vm._v("sm")]),
                        _vm._v(
                          " to render\n            larger or smaller, respectively, buttons. There is no need to\n            specify the size on the individual buttons.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button-group",
                            [
                              _c("b-button", [_vm._v("Button 1")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Button 2")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Button 3")])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-3" },
                        [
                          _c(
                            "b-button-group",
                            { attrs: { size: "sm" } },
                            [
                              _c("b-button", [_vm._v("Left")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Middle")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Right")])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-3" },
                        [
                          _c(
                            "b-button-group",
                            { attrs: { size: "lg" } },
                            [
                              _c("b-button", [_vm._v("Left")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Middle")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Right")])
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
              attrs: { title: "Vertical variation" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Make a set of buttons appear vertically stacked rather than\n            horizontally by setting the "
                        ),
                        _c("code", [_vm._v("vertical")]),
                        _vm._v(
                          " prop. Split\n            button dropdowns are not supported here.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button-group",
                            { attrs: { vertical: "" } },
                            [
                              _c("b-button", [_vm._v("Top")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Middle")]),
                              _vm._v(" "),
                              _c("b-button", [_vm._v("Bottom")])
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Dropdown menu support" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Add "),
                        _c("code", [_vm._v("<b-dropdown>")]),
                        _vm._v(" menus directly inside your\n            "),
                        _c("code", [_vm._v("<b-button-group>")]),
                        _vm._v(
                          ". Note that split dropdown\n            menus are not supported when prop codevertical is set.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button-group",
                            [
                              _c("b-button", [_vm._v("Button")]),
                              _vm._v(" "),
                              _c(
                                "b-dropdown",
                                { attrs: { right: "", text: "Menu" } },
                                [
                                  _c("b-dropdown-item", [_vm._v("Item 1")]),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [_vm._v("Item 2")]),
                                  _vm._v(" "),
                                  _c("b-dropdown-divider"),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [_vm._v("Item 3")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown",
                                {
                                  attrs: {
                                    right: "",
                                    split: "",
                                    text: "Split Menu"
                                  }
                                },
                                [
                                  _c("b-dropdown-item", [_vm._v("Item 1")]),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [_vm._v("Item 2")]),
                                  _vm._v(" "),
                                  _c("b-dropdown-divider"),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [_vm._v("Item 3")])
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
                      _vm._v("\n          " + _vm._s(_vm.html4) + "\n        ")
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonGroup_vue_vue_type_template_id_2153790e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroup.vue?vue&type=template&id=2153790e& */ "./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=template&id=2153790e&");
/* harmony import */ var _ButtonGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ButtonGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ButtonGroup_vue_vue_type_template_id_2153790e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ButtonGroup_vue_vue_type_template_id_2153790e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=template&id=2153790e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=template&id=2153790e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_template_id_2153790e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonGroup.vue?vue&type=template&id=2153790e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/ButtonGroup.vue?vue&type=template&id=2153790e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_template_id_2153790e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_template_id_2153790e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);