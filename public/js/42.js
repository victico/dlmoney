(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        html: "<div>\n    <b-form-checkbox\n      id=\"checkbox-1\"\n      v-model=\"status\"\n      name=\"checkbox-1\"\n      value=\"accepted\"\n      unchecked-value=\"not_accepted\"\n    >\n      I accept the terms and use\n    </b-form-checkbox>\n\n    <div>State: <strong>{{ status }}</strong></div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        status: 'not_accepted'\n      }\n    }\n  }"
      },
      status: "not_accepted",
      code2: {
        html: "<div>\n    <b-form-group label=\"Using options array:\">\n      <b-form-checkbox-group\n        id=\"checkbox-group-1\"\n        v-model=\"selected\"\n        :options=\"options\"\n        name=\"flavour-1\"\n      ></b-form-checkbox-group>\n    </b-form-group>\n\n    <b-form-group label=\"Using sub-components:\">\n      <b-form-checkbox-group id=\"checkbox-group-2\" v-model=\"selected\" name=\"flavour-2\">\n        <b-form-checkbox value=\"orange\">Orange</b-form-checkbox>\n        <b-form-checkbox value=\"apple\">Apple</b-form-checkbox>\n        <b-form-checkbox value=\"pineapple\">Pineapple</b-form-checkbox>\n        <b-form-checkbox value=\"grape\">Grape</b-form-checkbox>\n      </b-form-checkbox-group>\n    </b-form-group>\n\n    <div>Selected: <strong>{{ selected }}</strong></div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        selected: [], // Must be an array reference!\n        options: [\n          { text: 'Orange', value: 'orange' },\n          { text: 'Apple', value: 'apple' },\n          { text: 'Pineapple', value: 'pineapple' },\n          { text: 'Grape', value: 'grape' }\n        ]\n      }\n    }\n  }",
        selected1: [],
        // Must be an array reference!
        selected2: [],
        // Must be an array reference!
        options: [{
          text: "Orange",
          value: "orange"
        }, {
          text: "Apple",
          value: "apple"
        }, {
          text: "Pineapple",
          value: "pineapple"
        }, {
          text: "Grape",
          value: "grape"
        }]
      },
      code3: {
        html: "<div>\n    <b-form-group label=\"Form-checkbox-group inline checkboxes (default)\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        name=\"flavour-1a\"\n      ></b-form-checkbox-group>\n    </b-form-group>\n\n    <b-form-group label=\"Form-checkbox-group stacked checkboxes\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        name=\"flavour-2a\"\n        stacked\n      ></b-form-checkbox-group>\n    </b-form-group>\n\n    <b-form-group label=\"Individual stacked checkboxes (default)\">\n      <b-form-checkbox\n        v-for=\"option in options\"\n        v-model=\"selected\"\n        :key=\"option.value\"\n        :value=\"option.value\"\n        name=\"flavour-3a\"\n      >\n        {{ option.text }}\n      </b-form-checkbox>\n    </b-form-group>\n\n    <b-form-group label=\"Individual inline checkboxes\">\n      <b-form-checkbox\n        v-for=\"option in options\"\n        v-model=\"selected\"\n        :key=\"option.value\"\n        :value=\"option.value\"\n        name=\"flavour-4a\"\n        inline\n      >\n        {{ option.text }}\n      </b-form-checkbox>\n    </b-form-group>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        selected: [], // Must be an array reference!\n        options: [\n          { text: 'Orange', value: 'orange' },\n          { text: 'Apple', value: 'apple' },\n          { text: 'Pineapple', value: 'pineapple' },\n          { text: 'Grape', value: 'grape' }\n        ]\n      }\n    }\n  }",
        selected1: [],
        // Must be an array reference!
        selected2: [],
        // Must be an array reference!
        selected3: [],
        // Must be an array reference!
        selected4: [],
        // Must be an array reference!
        options: [{
          text: "Orange",
          value: "orange"
        }, {
          text: "Apple",
          value: "apple"
        }, {
          text: "Pineapple",
          value: "pineapple"
        }, {
          text: "Grape",
          value: "grape"
        }]
      },
      code4: {
        html: "<div>\n  <b-form-checkbox size=\"sm\">Small</b-form-checkbox>\n  <b-form-checkbox>Default</b-form-checkbox>\n  <b-form-checkbox size=\"lg\">Large</b-form-checkbox>\n</div>"
      },
      code5: {
        html: "<div>\n    <b-form-group label=\"Button-group style checkboxes\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        name=\"buttons-1\"\n        buttons\n      ></b-form-checkbox-group>\n    </b-form-group>\n\n    <b-form-group label=\"Button-group style checkboxes with variant primary and large buttons\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        buttons\n        button-variant=\"primary\"\n        size=\"lg\"\n        name=\"buttons-2\"\n      ></b-form-checkbox-group>\n    </b-form-group>\n\n    <b-form-group label=\"Stacked (vertical) button-group style checkboxes\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        stacked\n        buttons\n      ></b-form-checkbox-group>\n    </b-form-group>\n  </div>",
        js: "\n  export default {\n    data() {\n      return {\n        selected: [], // Must be an array reference!\n        options: [\n          { text: 'Orange', value: 'orange' },\n          { text: 'Apple', value: 'apple' },\n          { text: 'Pineapple', value: 'pineapple' },\n          { text: 'Grape', value: 'grape' }\n        ]\n      }\n    }\n  }",
        selected1: [],
        // Must be an array reference!
        selected2: [],
        // Must be an array reference!
        selected3: [],
        // Must be an array reference!
        options: [{
          text: "Orange",
          value: "orange"
        }, {
          text: "Apple",
          value: "apple"
        }, {
          text: "Pineapple",
          value: "pineapple"
        }, {
          text: "Grape",
          value: "grape"
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
      title: "Form Checkbox"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=template&id=98caa56a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=template&id=98caa56a& ***!
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
            _c("b", [_vm._v("Form Checkbox Inputs")]),
            _vm._v(
              " For cross browser consistency,\n      <b-form-checkbox-group> and <b-form-checkbox> use\n      Bootstrap's custom checkbox input to replace the browser default\n      checkbox input. It is built on top of semantic and accessible markup, so\n      it is a solid replacement for the default checkbox input.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/form-checkbox",
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
              attrs: { title: "Single checkbox" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              attrs: {
                                id: "checkbox-1",
                                name: "checkbox-1",
                                value: "accepted",
                                "unchecked-value": "not_accepted"
                              },
                              model: {
                                value: _vm.status,
                                callback: function($$v) {
                                  _vm.status = $$v
                                },
                                expression: "status"
                              }
                            },
                            [
                              _vm._v(
                                "\n              I accept the terms and use\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-3" }, [
                            _vm._v("\n              State: "),
                            _c("strong", [_vm._v(_vm._s(_vm.status))])
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
              attrs: { title: "Multiple choice checkboxes" },
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
                            { attrs: { label: "Using options array:" } },
                            [
                              _c("b-form-checkbox-group", {
                                attrs: {
                                  id: "checkbox-group-1",
                                  options: _vm.code2.options,
                                  name: "flavour-1"
                                },
                                model: {
                                  value: _vm.code2.selected1,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code2, "selected1", $$v)
                                  },
                                  expression: "code2.selected1"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-5" }, [
                            _vm._v("\n              Selected: "),
                            _c("strong", [_vm._v(_vm._s(_vm.code2.selected1))])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Using sub-components:" } },
                            [
                              _c(
                                "b-form-checkbox-group",
                                {
                                  attrs: {
                                    id: "checkbox-group-2",
                                    name: "flavour-2"
                                  },
                                  model: {
                                    value: _vm.code2.selected2,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code2, "selected2", $$v)
                                    },
                                    expression: "code2.selected2"
                                  }
                                },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    { attrs: { value: "orange" } },
                                    [_vm._v("Orange")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-checkbox",
                                    { attrs: { value: "apple" } },
                                    [_vm._v("Apple")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-checkbox",
                                    { attrs: { value: "pineapple" } },
                                    [_vm._v("Pineapple")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-checkbox",
                                    { attrs: { value: "grape" } },
                                    [_vm._v("Grape")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("\n              Selected: "),
                            _c("strong", [_vm._v(_vm._s(_vm.code2.selected2))])
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Inline and stacked checkboxes" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _c("code", [_vm._v("<b-form-checkbox-group>")]),
                        _vm._v(
                          " components render\n            inline checkboxes by default, while\n            "
                        ),
                        _c("code", [_vm._v("<b-form-checkbox>")]),
                        _vm._v(
                          " renders block-level (stacked)\n            checkboxes.\n          "
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
                                label:
                                  "Form-checkbox-group inline checkboxes (default)"
                              }
                            },
                            [
                              _c("b-form-checkbox-group", {
                                attrs: {
                                  options: _vm.code3.options,
                                  name: "flavour-1a"
                                },
                                model: {
                                  value: _vm.code3.selected1,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code3, "selected1", $$v)
                                  },
                                  expression: "code3.selected1"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Form-checkbox-group stacked checkboxes"
                              }
                            },
                            [
                              _c("b-form-checkbox-group", {
                                attrs: {
                                  options: _vm.code3.options,
                                  name: "flavour-2a",
                                  stacked: ""
                                },
                                model: {
                                  value: _vm.code3.selected2,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code3, "selected2", $$v)
                                  },
                                  expression: "code3.selected2"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Individual stacked checkboxes (default)"
                              }
                            },
                            _vm._l(_vm.code3.options, function(option) {
                              return _c(
                                "b-form-checkbox",
                                {
                                  key: option.value,
                                  attrs: {
                                    value: option.value,
                                    name: "flavour-3a"
                                  },
                                  model: {
                                    value: _vm.code3.selected3,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code3, "selected3", $$v)
                                    },
                                    expression: "code3.selected3"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(option.text) +
                                      "\n              "
                                  )
                                ]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { label: "Individual inline checkboxes" }
                            },
                            _vm._l(_vm.code3.options, function(option) {
                              return _c(
                                "b-form-checkbox",
                                {
                                  key: option.value,
                                  attrs: {
                                    value: option.value,
                                    name: "flavour-4a",
                                    inline: ""
                                  },
                                  model: {
                                    value: _vm.code3.selected4,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code3, "selected4", $$v)
                                    },
                                    expression: "code3.selected4"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(option.text) +
                                      "\n              "
                                  )
                                ]
                              )
                            }),
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
              attrs: { title: "Control sizing" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Use the "),
                        _c("code", [_vm._v("size")]),
                        _vm._v(
                          " prop to control the size of the\n            checkbox. The default size is medium. Supported size values are\n            "
                        ),
                        _c("code", [_vm._v("sm")]),
                        _vm._v(" (small) and "),
                        _c("code", [_vm._v("lg")]),
                        _vm._v(" (large).\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("b-form-checkbox", { attrs: { size: "sm" } }, [
                            _vm._v("Small")
                          ]),
                          _vm._v(" "),
                          _c("b-form-checkbox", [_vm._v("Default")]),
                          _vm._v(" "),
                          _c("b-form-checkbox", { attrs: { size: "lg" } }, [
                            _vm._v("Large")
                          ])
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.code4.html) +
                            "\n          "
                        )
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Grouped button style checkboxes" },
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
                              attrs: { label: "Button-group style checkboxes" }
                            },
                            [
                              _c("b-form-checkbox-group", {
                                attrs: {
                                  options: _vm.code5.options,
                                  name: "buttons-1",
                                  buttons: ""
                                },
                                model: {
                                  value: _vm.code5.selected1,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code5, "selected1", $$v)
                                  },
                                  expression: "code5.selected1"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label:
                                  "Button-group style checkboxes with variant primary and large buttons"
                              }
                            },
                            [
                              _c("b-form-checkbox-group", {
                                attrs: {
                                  options: _vm.code5.options,
                                  buttons: "",
                                  "button-variant": "primary",
                                  size: "lg",
                                  name: "buttons-2"
                                },
                                model: {
                                  value: _vm.code5.selected2,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code5, "selected2", $$v)
                                  },
                                  expression: "code5.selected2"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label:
                                  "Stacked (vertical) button-group style checkboxes"
                              }
                            },
                            [
                              _c("b-form-checkbox-group", {
                                attrs: {
                                  options: _vm.code5.options,
                                  stacked: "",
                                  buttons: ""
                                },
                                model: {
                                  value: _vm.code5.selected3,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code5, "selected3", $$v)
                                  },
                                  expression: "code5.selected3"
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
                      _vm._v(
                        "\n          " + _vm._s(_vm.code5.html) + "\n        "
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
                        "\n          " + _vm._s(_vm.code5.js) + "\n        "
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormCheckbox_vue_vue_type_template_id_98caa56a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormCheckbox.vue?vue&type=template&id=98caa56a& */ "./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=template&id=98caa56a&");
/* harmony import */ var _FormCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCheckbox.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormCheckbox_vue_vue_type_template_id_98caa56a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormCheckbox_vue_vue_type_template_id_98caa56a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCheckbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=template&id=98caa56a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=template&id=98caa56a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCheckbox_vue_vue_type_template_id_98caa56a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCheckbox.vue?vue&type=template&id=98caa56a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormCheckbox.vue?vue&type=template&id=98caa56a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCheckbox_vue_vue_type_template_id_98caa56a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCheckbox_vue_vue_type_template_id_98caa56a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);