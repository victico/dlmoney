(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      html1: "<div>\n  <b-button v-b-toggle.collapse-1 variant=\"primary\">Toggle Collapse</b-button>\n  <b-collapse id=\"collapse-1\" class=\"mt-2\">\n    <b-card>\n      <p class=\"card-text\">Collapse contents Here</p>\n      <b-button v-b-toggle.collapse-1-inner size=\"sm\">Toggle Inner Collapse</b-button>\n      <b-collapse id=\"collapse-1-inner\" class=\"mt-2\">\n        <b-card>Hello!</b-card>\n      </b-collapse>\n    </b-card>\n  </b-collapse>\n</div>",
      html2: "<div>\n  <!-- Using modifiers -->\n  <b-button v-b-toggle.collapse-2 class=\"m-1\">Toggle Collapse</b-button>\n\n  <!-- Using value -->\n  <b-button v-b-toggle=\"'collapse-2'\" class=\"m-1\">Toggle Collapse</b-button>\n\n  <!-- Element to collapse -->\n  <b-collapse id=\"collapse-2\">\n    <b-card>I am collapsible content!</b-card>\n  </b-collapse>\n</div>",
      html3: "<div>\n  <b-button v-b-toggle.collapse-3 class=\"m-1\">Toggle Collapse</b-button>\n  <b-collapse visible id=\"collapse-3\">\n    <b-card>I should start open!</b-card>\n  </b-collapse>\n</div>",
      html4: "<div>\n  <!-- Single button triggers two \"<b-collapse>\" components -->\n  <b-button v-b-toggle.collapse-a.collapse-b>Toggle Both Collapse A and B</b-button>\n\n  <!-- Elements to collapse -->\n  <b-collapse id=\"collapse-a\" class=\"mt-2\">\n    <b-card>I am collapsible content A!</b-card>\n  </b-collapse>\n  <b-collapse id=\"collapse-b\" class=\"mt-2\">\n    <b-card>I am collapsible content B!</b-card>\n  </b-collapse>\n</div>",
      html5: "<div role=\"tablist\">\n  <b-card no-body class=\"mb-1\">\n    <b-card-header header-tag=\"header\" class=\"p-1\" role=\"tab\">\n      <b-button block href=\"#\" v-b-toggle.accordion-1 variant=\"info\">Accordion 1</b-button>\n    </b-card-header>\n    <b-collapse id=\"accordion-1\" visible accordion=\"my-accordion\" role=\"tabpanel\">\n      <b-card-body>\n        <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>\n        <b-card-text>{{ text }}</b-card-text>\n      </b-card-body>\n    </b-collapse>\n  </b-card>\n\n  <b-card no-body class=\"mb-1\">\n    <b-card-header header-tag=\"header\" class=\"p-1\" role=\"tab\">\n      <b-button block href=\"#\" v-b-toggle.accordion-2 variant=\"info\">Accordion 2</b-button>\n    </b-card-header>\n    <b-collapse id=\"accordion-2\" accordion=\"my-accordion\" role=\"tabpanel\">\n      <b-card-body>\n        <b-card-text>{{ text }}</b-card-text>\n      </b-card-body>\n    </b-collapse>\n  </b-card>\n\n  <b-card no-body class=\"mb-1\">\n    <b-card-header header-tag=\"header\" class=\"p-1\" role=\"tab\">\n      <b-button block href=\"#\" v-b-toggle.accordion-3 variant=\"info\">Accordion 3</b-button>\n    </b-card-header>\n    <b-collapse id=\"accordion-3\" accordion=\"my-accordion\" role=\"tabpanel\">\n      <b-card-body>\n        <b-card-text>{{ text }}</b-card-text>\n      </b-card-body>\n    </b-collapse>\n  </b-card>\n</div>",
      text: "\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n          synth nesciunt you probably haven't heard of them accusamus labore VHS.\n        "
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
      title: "Collapse"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=template&id=1da2fb51&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=template&id=1da2fb51& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Collapse")]),
            _vm._v(
              " Easily toggle visibility of almost any content on your\n      pages. Includes support for making accordions.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/collapse",
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
              attrs: { title: "Collapse" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle.collapse-1",
                                  modifiers: { "collapse-1": true }
                                }
                              ],
                              attrs: { variant: "primary" }
                            },
                            [_vm._v("Toggle Collapse")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              staticClass: "mt-2",
                              attrs: { id: "collapse-1" }
                            },
                            [
                              _c(
                                "b-card",
                                [
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v("Collapse contents Here")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName:
                                            "v-b-toggle.collapse-1-inner",
                                          modifiers: {
                                            "collapse-1-inner": true
                                          }
                                        }
                                      ],
                                      attrs: { size: "sm" }
                                    },
                                    [_vm._v("Toggle Inner Collapse")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-collapse",
                                    {
                                      staticClass: "mt-2",
                                      attrs: { id: "collapse-1-inner" }
                                    },
                                    [_c("b-card", [_vm._v("Hello!")])],
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
                      _vm._v("\n          " + _vm._s(_vm.html1) + "\n        ")
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Trigger multiple collapse elements" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            You can even collapse multiple\n            "
                        ),
                        _c("code", [_vm._v("<b-collapse>")]),
                        _vm._v(" components via a single\n            "),
                        _c("code", [_vm._v("v-b-toggle")]),
                        _vm._v(
                          " by providing multiple target IDs using\n            modifiers:\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle.collapse-a.collapse-b",
                                  modifiers: {
                                    "collapse-a": true,
                                    "collapse-b": true
                                  }
                                }
                              ]
                            },
                            [
                              _vm._v(
                                "\n              Toggle Both Collapse A and B\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              staticClass: "mt-2",
                              attrs: { id: "collapse-a" }
                            },
                            [
                              _c("b-card", [
                                _vm._v("I am collapsible content A!")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              staticClass: "mt-2",
                              attrs: { id: "collapse-b" }
                            },
                            [
                              _c("b-card", [
                                _vm._v("I am collapsible content B!")
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
                      _vm._v("\n          " + _vm._s(_vm.html4) + "\n        ")
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Accordion support" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        { attrs: { role: "tablist" } },
                        [
                          _c(
                            "b-card",
                            { staticClass: "mb-1", attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-card-header",
                                {
                                  staticClass: "p-1",
                                  attrs: { "header-tag": "header", role: "tab" }
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.accordion-1",
                                          modifiers: { "accordion-1": true }
                                        }
                                      ],
                                      attrs: {
                                        block: "",
                                        href: "#",
                                        variant: "info"
                                      }
                                    },
                                    [_vm._v("Accordion 1")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-collapse",
                                {
                                  attrs: {
                                    id: "accordion-1",
                                    visible: "",
                                    accordion: "my-accordion",
                                    role: "tabpanel"
                                  }
                                },
                                [
                                  _c(
                                    "b-card-body",
                                    [
                                      _c("b-card-text", [
                                        _vm._v("I start opened because "),
                                        _c("code", [_vm._v("visible")]),
                                        _vm._v(" is\n                    "),
                                        _c("code", [_vm._v("true")])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-card-text", [
                                        _vm._v(_vm._s(_vm.text))
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-card",
                            { staticClass: "mb-1", attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-card-header",
                                {
                                  staticClass: "p-1",
                                  attrs: { "header-tag": "header", role: "tab" }
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.accordion-2",
                                          modifiers: { "accordion-2": true }
                                        }
                                      ],
                                      attrs: {
                                        block: "",
                                        href: "#",
                                        variant: "info"
                                      }
                                    },
                                    [_vm._v("Accordion 2")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-collapse",
                                {
                                  attrs: {
                                    id: "accordion-2",
                                    accordion: "my-accordion",
                                    role: "tabpanel"
                                  }
                                },
                                [
                                  _c(
                                    "b-card-body",
                                    [
                                      _c("b-card-text", [
                                        _vm._v(_vm._s(_vm.text))
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-card",
                            { staticClass: "mb-1", attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-card-header",
                                {
                                  staticClass: "p-1",
                                  attrs: { "header-tag": "header", role: "tab" }
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.accordion-3",
                                          modifiers: { "accordion-3": true }
                                        }
                                      ],
                                      attrs: {
                                        block: "",
                                        href: "#",
                                        variant: "info"
                                      }
                                    },
                                    [_vm._v("Accordion 3")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-collapse",
                                {
                                  attrs: {
                                    id: "accordion-3",
                                    accordion: "my-accordion",
                                    role: "tabpanel"
                                  }
                                },
                                [
                                  _c(
                                    "b-card-body",
                                    [
                                      _c("b-card-text", [
                                        _vm._v(_vm._s(_vm.text))
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Usage" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Other elements can easily toggle\n            "
                        ),
                        _c("code", [_vm._v("<b-collapse>")]),
                        _vm._v(" components using the\n            "),
                        _c("code"),
                        _vm._v(" directive.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle.collapse-2",
                                  modifiers: { "collapse-2": true }
                                }
                              ],
                              staticClass: "m-1"
                            },
                            [_vm._v("Toggle Collapse")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle",
                                  value: "collapse-2",
                                  expression: "'collapse-2'"
                                }
                              ],
                              staticClass: "m-1"
                            },
                            [_vm._v("Toggle Collapse")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            { attrs: { id: "collapse-2" } },
                            [
                              _c("b-card", [
                                _vm._v("I am collapsible content!")
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
                      _vm._v("\n          " + _vm._s(_vm.html2) + "\n        ")
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Initial visibility" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            To make the "),
                        _c("code", [_vm._v("<b-collapse>")]),
                        _vm._v(" show initially, set\n            the "),
                        _c("code", [_vm._v("<b-collapse> visible")]),
                        _vm._v(" prop:"),
                        _c("br"),
                        _c("br")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle.collapse-3",
                                  modifiers: { "collapse-3": true }
                                }
                              ],
                              staticClass: "m-1"
                            },
                            [_vm._v("Toggle Collapse")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            { attrs: { visible: "", id: "collapse-3" } },
                            [_c("b-card", [_vm._v("I should start open!")])],
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Collapse.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Collapse.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapse_vue_vue_type_template_id_1da2fb51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapse.vue?vue&type=template&id=1da2fb51& */ "./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=template&id=1da2fb51&");
/* harmony import */ var _Collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collapse.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Collapse_vue_vue_type_template_id_1da2fb51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Collapse_vue_vue_type_template_id_1da2fb51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Collapse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Collapse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=template&id=1da2fb51&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=template&id=1da2fb51& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapse_vue_vue_type_template_id_1da2fb51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Collapse.vue?vue&type=template&id=1da2fb51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Collapse.vue?vue&type=template&id=1da2fb51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapse_vue_vue_type_template_id_1da2fb51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapse_vue_vue_type_template_id_1da2fb51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);