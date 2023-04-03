(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div>\n    <b-form-select v-model=\"selected\" :options=\"options\"></b-form-select>\n    <b-form-select v-model=\"selected\" :options=\"options\" size=\"sm\" class=\"mt-3\"></b-form-select>\n\n    <div class=\"mt-3\">Selected: <strong>{{ selected }}</strong></div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        selected: null,\n        options: [\n          { value: null, text: 'Please select an option' },\n          { value: 'a', text: 'This is First option' },\n          { value: 'b', text: 'Selected Option' },\n          { value: { C: '3PO' }, text: 'This is an option with object value' },\n          { value: 'd', text: 'This one is disabled', disabled: true }\n        ]\n      }\n    }\n  }",
        selected1: null,
        selected2: null,
        options: [{
          value: null,
          text: "Please select an option"
        }, {
          value: "a",
          text: "This is First option"
        }, {
          value: "b",
          text: "Selected Option"
        }, {
          value: {
            C: "3PO"
          },
          text: "This is an option with object value"
        }, {
          value: "d",
          text: "This one is disabled",
          disabled: true
        }]
      },
      code2: {
        html: "<div>\n    <b-form-select v-model=\"selected\" class=\"mb-3\">\n      <option :value=\"null\">Please select an option</option>\n      <option value=\"a\">Option A</option>\n      <option value=\"b\" disabled>Option B (disabled)</option>\n      <optgroup label=\"Grouped Options\">\n        <option :value=\"{ C: '3PO' }\">Option with object value</option>\n        <option :value=\"{ R: '2D2' }\">Another option with object value</option>\n      </optgroup>\n    </b-form-select>\n\n    <div class=\"mt-2\">Selected: <strong>{{ selected }}</strong></div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        selected: null\n      }\n    }\n  }"
      },
      code3: {
        html: "<div>\n    <b-form-select\n      v-model=\"selected\"\n      :options=\"options\"\n      class=\"mb-3\"\n      value-field=\"item\"\n      text-field=\"name\"\n      disabled-field=\"notEnabled\"\n    ></b-form-select>\n    <div class=\"mt-3\">Selected: <strong>{{ selected }}</strong></div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        selected: 'A',\n        options: [\n          { item: 'A', name: 'Option A' },\n          { item: 'B', name: 'Option B' },\n          { item: 'D', name: 'Option C', notEnabled: true },\n          { item: { d: 1 }, name: 'Option D' },\n        ]\n      }\n    }\n  }",
        selected: "A",
        options: [{
          item: "A",
          name: "Option A"
        }, {
          item: "B",
          name: "Option B"
        }, {
          item: "D",
          name: "Option C",
          notEnabled: true
        }, {
          item: {
            d: 1
          },
          name: "Option D"
        }]
      },
      code4: {
        html: "<div>\n    <b-form-select v-model=\"selected\" :options=\"options\"></b-form-select>\n    <div class=\"mt-3\">Selected: <strong>{{ selected }}</strong></div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        selected: null,\n        options: [\n          { value: null, text: 'Please select some item' },\n          { value: 'a', text: 'This is First option' },\n          { value: 'b', text: 'Default Selected Option' },\n          { value: 'c', text: 'This is another option' },\n          { value: 'd', text: 'This one is disabled', disabled: true },\n        ]\n      }\n    }\n  }",
        selected: null,
        options: [{
          value: null,
          text: "Please select some item"
        }, {
          value: "a",
          text: "This is First option"
        }, {
          value: "b",
          text: "Default Selected Option"
        }, {
          value: "c",
          text: "This is another option"
        }, {
          value: "d",
          text: "This one is disabled",
          disabled: true
        }]
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
      title: "Form Select"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=template&id=7190de04&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=template&id=7190de04& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Form Select")]),
            _vm._v(
              " Bootstrap custom <select> using custom styles.\n      Optionally specify options based on an array, array of objects, or an\n      object.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/form-select",
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
              attrs: { title: "Form Select" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Generate your select options by passing an array or object to the\n            "
                        ),
                        _c("code", [_vm._v("options")]),
                        _vm._v(" props:\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("b-form-select", {
                            attrs: { options: _vm.code1.options },
                            model: {
                              value: _vm.code1.selected1,
                              callback: function($$v) {
                                _vm.$set(_vm.code1, "selected1", $$v)
                              },
                              expression: "code1.selected1"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-form-select", {
                            staticClass: "mt-3",
                            attrs: { options: _vm.code1.options, size: "sm" },
                            model: {
                              value: _vm.code1.selected2,
                              callback: function($$v) {
                                _vm.$set(_vm.code1, "selected2", $$v)
                              },
                              expression: "code1.selected2"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-3" }, [
                            _c("p", [
                              _vm._v("\n                Selected: "),
                              _c("strong", [
                                _vm._v(_vm._s(_vm.code1.selected1))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("\n                Selected: "),
                              _c("strong", [
                                _vm._v(_vm._s(_vm.code1.selected2))
                              ])
                            ])
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
              attrs: { title: "Options and optgroups" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-form-select",
                            {
                              staticClass: "mb-3",
                              model: {
                                value: _vm.code2.selected,
                                callback: function($$v) {
                                  _vm.$set(_vm.code2, "selected", $$v)
                                },
                                expression: "code2.selected"
                              }
                            },
                            [
                              _c("option", { domProps: { value: null } }, [
                                _vm._v("Please select an option")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "a" } }, [
                                _vm._v("Option A")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "b", disabled: "" } },
                                [_vm._v("Option B (disabled)")]
                              ),
                              _vm._v(" "),
                              _c(
                                "optgroup",
                                { attrs: { label: "Grouped Options" } },
                                [
                                  _c(
                                    "option",
                                    { domProps: { value: { C: "3PO" } } },
                                    [_vm._v("Option with object value")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { domProps: { value: { R: "2D2" } } },
                                    [_vm._v("Another option with object value")]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-2" }, [
                            _vm._v("\n              Selected: "),
                            _c("strong", [_vm._v(_vm._s(_vm.code2.selected))])
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Changing the option field names" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            If you want to customize the field property names (for example\n            using "
                        ),
                        _c("code", [_vm._v("name")]),
                        _vm._v(" field for display "),
                        _c("code", [_vm._v("text")]),
                        _vm._v(
                          ") you\n            can easily change them by setting the "
                        ),
                        _c("code", [_vm._v("text-field")]),
                        _vm._v(",\n            "),
                        _c("code", [_vm._v("html-field")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("value-field")]),
                        _vm._v(", and\n            "),
                        _c("code", [_vm._v("disabled-field")]),
                        _vm._v(
                          " props to a string that contains the\n            property name you would like to use:\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("b-form-select", {
                            staticClass: "mb-3",
                            attrs: {
                              options: _vm.code3.options,
                              "value-field": "item",
                              "text-field": "name",
                              "disabled-field": "notEnabled"
                            },
                            model: {
                              value: _vm.code3.selected,
                              callback: function($$v) {
                                _vm.$set(_vm.code3, "selected", $$v)
                              },
                              expression: "code3.selected"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-3" }, [
                            _vm._v("\n              Selected: "),
                            _c("strong", [_vm._v(_vm._s(_vm.code3.selected))])
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
                        "\n          " + _vm._s(_vm.code3.html) + "\n        "
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
                        "\n          " + _vm._s(_vm.code3.js) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Value in single mode" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            In non "),
                        _c("code", [_vm._v("multiple")]),
                        _vm._v(" mode,\n            "),
                        _c("code", [_vm._v("<b-form-select>")]),
                        _vm._v(" returns the a single\n            "),
                        _c("code", [_vm._v("value")]),
                        _vm._v(" of the currently selected option.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("b-form-select", {
                            attrs: { options: _vm.code4.options },
                            model: {
                              value: _vm.code4.selected,
                              callback: function($$v) {
                                _vm.$set(_vm.code4, "selected", $$v)
                              },
                              expression: "code4.selected"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-3" }, [
                            _vm._v("\n              Selected: "),
                            _c("strong", [_vm._v(_vm._s(_vm.code4.selected))])
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSelect_vue_vue_type_template_id_7190de04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSelect.vue?vue&type=template&id=7190de04& */ "./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=template&id=7190de04&");
/* harmony import */ var _FormSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSelect.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSelect_vue_vue_type_template_id_7190de04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSelect_vue_vue_type_template_id_7190de04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/FormSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=template&id=7190de04&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=template&id=7190de04& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_template_id_7190de04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSelect.vue?vue&type=template&id=7190de04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormSelect.vue?vue&type=template&id=7190de04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_template_id_7190de04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_template_id_7190de04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);