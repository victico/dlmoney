(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      html1: "<div>\n    <b-form-group\n      id=\"fieldset-1\"\n      description=\"Let us know your name.\"\n      label=\"Enter your name\"\n      label-for=\"input-1\"\n      :invalid-feedback=\"invalidFeedback\"\n      :valid-feedback=\"validFeedback\"\n      :state=\"state\"\n    >\n      <b-form-input id=\"input-1\" v-model=\"name\" :state=\"state\" trim></b-form-input>\n    </b-form-group>\n  </div>",
      js1: "export default {\n    computed: {\n      state() {\n        return this.name.length >= 4 ? true : false\n      },\n      invalidFeedback() {\n        if (this.name.length > 4) {\n          return ''\n        } else if (this.name.length > 0) {\n          return 'Enter at least 4 characters'\n        } else {\n          return 'Please enter something'\n        }\n      },\n      validFeedback() {\n        return this.state === true ? 'Thank you' : ''\n      }\n    },\n    data() {\n      return {\n        name: ''\n      }\n    }\n  }",
      name: "",
      html2: "<div>\n    <b-form-group\n      id=\"fieldset-horizontal\"\n      label-cols-sm=\"4\"\n      label-cols-lg=\"3\"\n      description=\"Let us know your name.\"\n      label=\"Enter your name\"\n      label-for=\"input-horizontal\"\n    >\n      <b-form-input id=\"input-horizontal\"></b-form-input>\n    </b-form-group>\n  </div>",
      html3: "<div>\n  <b-form-group label-cols=\"4\" label-cols-lg=\"2\" label-size=\"sm\" label=\"Small\" label-for=\"input-sm\">\n    <b-form-input id=\"input-sm\" size=\"sm\"></b-form-input>\n  </b-form-group>\n\n  <b-form-group label-cols=\"4\" label-cols-lg=\"2\" label=\"Default\" label-for=\"input-default\">\n    <b-form-input id=\"input-default\"></b-form-input>\n  </b-form-group>\n\n  <b-form-group label-cols=\"4\" label-cols-lg=\"2\" label-size=\"lg\" label=\"Large\" label-for=\"input-lg\">\n    <b-form-input id=\"input-lg\" size=\"lg\"></b-form-input>\n  </b-form-group>\n</div>",
      html4: "<div>\n  <b-card bg-variant=\"light\">\n    <b-form-group\n      label-cols-lg=\"3\"\n      label=\"Shipping Address\"\n      label-size=\"lg\"\n      label-class=\"font-weight-bold pt-0\"\n      class=\"mb-0\"\n    >\n      <b-form-group\n        label-cols-sm=\"3\"\n        label=\"Street:\"\n        label-align-sm=\"right\"\n        label-for=\"nested-street\"\n      >\n        <b-form-input id=\"nested-street\"></b-form-input>\n      </b-form-group>\n\n      <b-form-group\n        label-cols-sm=\"3\"\n        label=\"City:\"\n        label-align-sm=\"right\"\n        label-for=\"nested-city\"\n      >\n        <b-form-input id=\"nested-city\"></b-form-input>\n      </b-form-group>\n\n      <b-form-group\n        label-cols-sm=\"3\"\n        label=\"State:\"\n        label-align-sm=\"right\"\n        label-for=\"nested-state\"\n      >\n        <b-form-input id=\"nested-state\"></b-form-input>\n      </b-form-group>\n\n      <b-form-group\n        label-cols-sm=\"3\"\n        label=\"Country:\"\n        label-align-sm=\"right\"\n        label-for=\"nested-country\"\n      >\n        <b-form-input id=\"nested-country\"></b-form-input>\n      </b-form-group>\n\n      <b-form-group\n        label-cols-sm=\"3\"\n        label=\"Ship via:\"\n        label-align-sm=\"right\" class=\"mb-0\"\n      >\n        <b-form-radio-group\n          class=\"pt-2\"\n          :options=\"['Air', 'Courier', 'Mail']\"\n        ></b-form-radio-group>\n      </b-form-group>\n    </b-form-group>\n  </b-card>\n</div>"
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    state: function state() {
      return this.name.length >= 4;
    },
    invalidFeedback: function invalidFeedback() {
      if (this.name.length > 4) {
        return "";
      } else if (this.name.length > 0) {
        return "Enter at least 4 characters";
      } else {
        return "Please enter something";
      }
    },
    validFeedback: function validFeedback() {
      return this.state === true ? "Thank you" : "";
    }
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vue Bootstrap",
      route: "alert"
    }, {
      title: "Form Group"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=template&id=401fa1b2&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=template&id=401fa1b2& ***!
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
            _c("b", [_vm._v("Form group")]),
            _vm._v(
              " The <b-form-group> component is the easiest way\n      to add some structure to forms. Its purpose is to pair form controls\n      with a legend or label, and to provide help text and invalid/valid\n      feedback text, as well as visual (color) contextual state feedback.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/form-group",
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
              attrs: { title: "Form group" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                id: "fieldset-1",
                                description: "Let us know your name.",
                                label: "Enter your name",
                                "label-for": "input-1",
                                "invalid-feedback": _vm.invalidFeedback,
                                "valid-feedback": _vm.validFeedback,
                                state: _vm.state
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "input-1",
                                  state: _vm.state,
                                  trim: ""
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name"
                                }
                              })
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v("\n          " + _vm._s(_vm.js1) + "\n        ")
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Horizontal layout" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            By default, the label appears above the input element(s), but you\n            may optionally render horizontal (label to the left of the input)\n            at the various standard Bootstrap breakpoints.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                id: "fieldset-horizontal",
                                "label-cols-sm": "4",
                                "label-cols-lg": "3",
                                description: "Let us know your name.",
                                label: "Enter your name",
                                "label-for": "input-horizontal"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: { id: "input-horizontal" }
                              })
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
              attrs: { title: "Label size" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            You can control the label text size match the size of your form\n            input(s) via the optional "
                        ),
                        _c("code", [_vm._v("label-size")]),
                        _vm._v(" prop. Values can\n            be '"),
                        _c("code", [_vm._v("sm")]),
                        _vm._v("' or '"),
                        _c("code", [_vm._v("lg")]),
                        _vm._v(
                          "' for small or large\n            label, respectively. Sizes work for both horizontal and\n            non-horizontal form groups.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                "label-cols": "4",
                                "label-cols-lg": "2",
                                "label-size": "sm",
                                label: "Small",
                                "label-for": "input-sm"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: { id: "input-sm", size: "sm" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                "label-cols": "4",
                                "label-cols-lg": "2",
                                label: "Default",
                                "label-for": "input-default"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: { id: "input-default" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                "label-cols": "4",
                                "label-cols-lg": "2",
                                "label-size": "lg",
                                label: "Large",
                                "label-for": "input-lg"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: { id: "input-lg", size: "lg" }
                              })
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
              attrs: { title: "Nested form groups" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Feel free to nest "),
                        _c("code", [_vm._v("<b-form-group>")]),
                        _vm._v(
                          " components to\n            produce advanced form layouts and semantic grouping of related\n            form controls:\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-card",
                            { attrs: { "bg-variant": "light" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "mb-0",
                                  attrs: {
                                    "label-cols-lg": "3",
                                    label: "Shipping Address",
                                    "label-size": "lg",
                                    "label-class": "font-weight-bold pt-0"
                                  }
                                },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        "label-cols-sm": "3",
                                        label: "Street:",
                                        "label-align-sm": "right",
                                        "label-for": "nested-street"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: { id: "nested-street" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        "label-cols-sm": "3",
                                        label: "City:",
                                        "label-align-sm": "right",
                                        "label-for": "nested-city"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: { id: "nested-city" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        "label-cols-sm": "3",
                                        label: "State:",
                                        "label-align-sm": "right",
                                        "label-for": "nested-state"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: { id: "nested-state" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        "label-cols-sm": "3",
                                        label: "Country:",
                                        "label-align-sm": "right",
                                        "label-for": "nested-country"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: { id: "nested-country" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "mb-0",
                                      attrs: {
                                        "label-cols-sm": "3",
                                        label: "Ship via:",
                                        "label-align-sm": "right"
                                      }
                                    },
                                    [
                                      _c("b-form-radio-group", {
                                        staticClass: "pt-2",
                                        attrs: {
                                          options: ["Air", "Courier", "Mail"]
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormGroup_vue_vue_type_template_id_401fa1b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormGroup.vue?vue&type=template&id=401fa1b2& */ "./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=template&id=401fa1b2&");
/* harmony import */ var _FormGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormGroup_vue_vue_type_template_id_401fa1b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormGroup_vue_vue_type_template_id_401fa1b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/FormGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=template&id=401fa1b2&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=template&id=401fa1b2& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_template_id_401fa1b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormGroup.vue?vue&type=template&id=401fa1b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormGroup.vue?vue&type=template&id=401fa1b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_template_id_401fa1b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_template_id_401fa1b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);