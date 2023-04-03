(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div>\n    <b-form-textarea\n      id=\"textarea\"\n      v-model=\"text\"\n      placeholder=\"Enter something...\"\n      rows=\"3\"\n      max-rows=\"6\"\n    ></b-form-textarea>\n\n    <pre class=\"mt-3 mb-0\">{{ text }}</pre>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        text: ''\n      }\n    }\n  }"
      },
      text: "",
      code2: {
        html: "<b-container fluid>\n  <b-row>\n    <b-col sm=\"2\">\n      <label for=\"textarea-small\">Small:</label>\n    </b-col>\n    <b-col sm=\"10\">\n      <b-form-textarea\n        id=\"textarea-small\"\n        size=\"sm\"\n        placeholder=\"Small textarea\"\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n\n  <b-row class=\"mt-2\">\n    <b-col sm=\"2\">\n      <label for=\"textarea-default\">Default:</label>\n    </b-col>\n    <b-col sm=\"10\">\n      <b-form-textarea\n        id=\"textarea-default\"\n        placeholder=\"Default textarea\"\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n\n  <b-row class=\"mt-2\">\n    <b-col sm=\"2\">\n      <label for=\"textarea-large\">Large:</label>\n    </b-col>\n    <b-col sm=\"10\">\n      <b-form-textarea\n        id=\"textarea-large\"\n        size=\"lg\"\n        placeholder=\"Large textarea\"\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n</b-container>"
      },
      code3: {
        html: "<div>\n  <b-form-textarea\n    id=\"textarea-rows\"\n    placeholder=\"Tall textarea\"\n    rows=\"8\"\n  ></b-form-textarea>\n</div>"
      },
      code4: {
        html: "<b-container fluid>\n  <b-row>\n    <b-col sm=\"2\">\n      <label for=\"textarea-auto-height\">Auto height:</label>\n    </b-col>\n    <b-col sm=\"10\">\n      <b-form-textarea\n        id=\"textarea-auto-height\"\n        placeholder=\"Auto height textarea\"\n        rows=\"3\"\n        max-rows=\"8\"\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n\n  <b-row class=\"mt-2\">\n    <b-col sm=\"2\">\n      <label for=\"textarea-no-auto-shrink\">No auto-shrink:</label>\n    </b-col>\n    <b-col sm=\"10\">\n      <b-form-textarea\n        id=\"textarea-no-auto-shrink\"\n        placeholder=\"Auto height (no-shrink) textarea\"\n        rows=\"3\"\n        max-rows=\"8\"\n        no-auto-shrink\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n</b-container>"
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
      title: "Form Textarea"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=template&id=c20a957c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=template&id=c20a957c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Form textarea")]),
            _vm._v(
              " Create multi-line text inputs with support for auto\n      height sizing, minimum and maximum number of rows, and contextual\n      states.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/form-textarea",
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
              attrs: { title: "Form textarea" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c("b-form-textarea", {
                            attrs: {
                              id: "textarea",
                              placeholder: "Enter something...",
                              rows: "3",
                              "max-rows": "6"
                            },
                            model: {
                              value: _vm.text,
                              callback: function($$v) {
                                _vm.text = $$v
                              },
                              expression: "text"
                            }
                          }),
                          _vm._v(" "),
                          _c("pre", { staticClass: "mt-3 mb-0" }, [
                            _vm._v(_vm._s(_vm.text))
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code1.js) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Control sizing" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Set text height using the size prop to "
                        ),
                        _c("code", [_vm._v("sm")]),
                        _vm._v(" or\n            "),
                        _c("code", [_vm._v("lg")]),
                        _vm._v(" for small or large respectively.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { sm: "2" } }, [
                                _c(
                                  "label",
                                  { attrs: { for: "textarea-small" } },
                                  [_vm._v("Small:")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { sm: "10" } },
                                [
                                  _c("b-form-textarea", {
                                    attrs: {
                                      id: "textarea-small",
                                      size: "sm",
                                      placeholder: "Small textarea"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mt-2" },
                            [
                              _c("b-col", { attrs: { sm: "2" } }, [
                                _c(
                                  "label",
                                  { attrs: { for: "textarea-default" } },
                                  [_vm._v("Default:")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { sm: "10" } },
                                [
                                  _c("b-form-textarea", {
                                    attrs: {
                                      id: "textarea-default",
                                      placeholder: "Default textarea"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mt-2" },
                            [
                              _c("b-col", { attrs: { sm: "2" } }, [
                                _c(
                                  "label",
                                  { attrs: { for: "textarea-large" } },
                                  [_vm._v("Large:")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { sm: "10" } },
                                [
                                  _c("b-form-textarea", {
                                    attrs: {
                                      id: "textarea-large",
                                      size: "lg",
                                      placeholder: "Large textarea"
                                    }
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
              attrs: { title: "Displayed rows" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            To set the height of "),
                        _c("code", [_vm._v("<b-form-textarea>")]),
                        _vm._v(", set the\n            "),
                        _c("code", [_vm._v("rows")]),
                        _vm._v(
                          " prop to the desired number of rows. If no value\n            is provided to "
                        ),
                        _c("code", [_vm._v("rows")]),
                        _vm._v(", then it will default to\n            "),
                        _c("code", [_vm._v("2")]),
                        _vm._v(
                          " (the browser default and minimum acceptable value).\n            Setting it to null or a value below "
                        ),
                        _c("code", [_vm._v("2")]),
                        _vm._v(
                          " will result in\n            the default of 2 being used.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("b-form-textarea", {
                            attrs: {
                              id: "textarea-rows",
                              placeholder: "Tall textarea",
                              rows: "8"
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
              attrs: { title: "Auto height" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _c("code", [_vm._v("<b-form-textarea>")]),
                        _vm._v(
                          " can also automatically adjust\n            its height (text rows) to fit the content, even as the user enters\n            or deletes text. The height of the textarea will either grow or\n            shrink to fit the content (grow to a maximum of\n            "
                        ),
                        _c("code", [_vm._v("max-rows")]),
                        _vm._v(" or shrink to a minimum of\n            "),
                        _c("code", [_vm._v("rows")]),
                        _vm._v(").\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { sm: "2" } }, [
                                _c(
                                  "label",
                                  { attrs: { for: "textarea-auto-height" } },
                                  [_vm._v("Auto height:")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { sm: "10" } },
                                [
                                  _c("b-form-textarea", {
                                    attrs: {
                                      id: "textarea-auto-height",
                                      placeholder: "Auto height textarea",
                                      rows: "3",
                                      "max-rows": "8"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mt-2" },
                            [
                              _c("b-col", { attrs: { sm: "2" } }, [
                                _c(
                                  "label",
                                  { attrs: { for: "textarea-no-auto-shrink" } },
                                  [_vm._v("No auto-shrink:")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { sm: "10" } },
                                [
                                  _c("b-form-textarea", {
                                    attrs: {
                                      id: "textarea-no-auto-shrink",
                                      placeholder:
                                        "Auto height (no-shrink) textarea",
                                      rows: "3",
                                      "max-rows": "8",
                                      "no-auto-shrink": ""
                                    }
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
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTextarea_vue_vue_type_template_id_c20a957c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTextarea.vue?vue&type=template&id=c20a957c& */ "./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=template&id=c20a957c&");
/* harmony import */ var _FormTextarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTextarea.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTextarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTextarea_vue_vue_type_template_id_c20a957c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTextarea_vue_vue_type_template_id_c20a957c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTextarea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=template&id=c20a957c&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=template&id=c20a957c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_template_id_c20a957c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTextarea.vue?vue&type=template&id=c20a957c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormTextarea.vue?vue&type=template&id=c20a957c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_template_id_c20a957c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_template_id_c20a957c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);