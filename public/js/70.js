(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<v-toolbar>\n  <v-tabs\n    dark\n    background-color=\"primary\"\n    grow\n  >\n    <v-tab>\n      <v-badge\n        color=\"pink\"\n        dot\n      >\n        Item One\n      </v-badge>\n    </v-tab>\n\n    <v-tab>\n      <v-badge\n        color=\"green\"\n        content=\"6\"\n      >\n        Item Two\n      </v-badge>\n    </v-tab>\n\n    <v-tab>\n      <v-badge\n        color=\"deep-purple accent-4\"\n        icon=\"mdi-vuetify\"\n      >\n        Item Three\n      </v-badge>\n    </v-tab>\n  </v-tabs>\n</v-toolbar>"
      },
      code2: {
        html: "<div class=\"text-center\">\n  <v-badge\n    :value=\"hover\"\n    color=\"deep-purple accent-4\"\n    content=\"9999+\"\n    left\n    transition=\"slide-x-transition\"\n  >\n    <v-hover v-model=\"hover\">\n      <v-icon\n        color=\"grey lighten-1\"\n        large\n      >\n        mdi-account-circle\n      </v-icon>\n    </v-hover>\n  </v-badge>\n</div>",
        js: "export default {\n    data: () => ({\n      hover: false,\n    }),\n  }",
        hover: false
      },
      code3: {
        html: " <v-container>\n  <v-row justify=\"space-around\">\n    <div>\n      <v-btn\n        class=\"mx-1\"\n        color=\"primary\"\n        @click=\"messages++\"\n      >\n        Send Message\n      </v-btn>\n\n      <v-btn\n        class=\"mx-1\"\n        color=\"error\"\n        @click=\"messages = 0\"\n      >\n        Clear Notifications\n      </v-btn>\n    </div>\n\n    <v-badge\n      :content=\"messages\"\n      :value=\"messages\"\n      color=\"green\"\n      overlap\n    >\n      <v-icon large>mdi-email</v-icon>\n    </v-badge>\n  </v-row>\n</v-container>",
        js: "export default {\n    data () {\n      return {\n        messages: 0\n      }\n    },\n  }",
        messages: 0
      },
      code4: {
        html: "<v-container>\n  <v-row\n    align=\"center\"\n    justify=\"center\"\n  >\n    <v-badge\n      bordered\n      color=\"error\"\n      icon=\"mdi-lock\"\n      overlap\n    >\n      <v-btn\n        class=\"white--text\"\n        color=\"error\"\n        depressed\n      >\n        Lock Account\n      </v-btn>\n    </v-badge>\n\n    <div class=\"mx-3\"></div>\n\n    <v-badge\n      bordered\n      bottom\n      color=\"deep-purple accent-4\"\n      dot\n      offset-x=\"10\"\n      offset-y=\"10\"\n    >\n      <v-avatar size=\"40\">\n        <v-img src=\"media/users/300_2.jpg\"></v-img>\n      </v-avatar>\n    </v-badge>\n\n    <div class=\"mx-3\"></div>\n\n    <v-badge\n      avatar\n      bordered\n      overlap\n    >\n      <template v-slot:badge>\n        <v-avatar>\n          <v-img src=\"media/project-logos/7.png\"></v-img>\n        </v-avatar>\n      </template>\n\n      <v-avatar size=\"40\">\n        <v-img src=\"media/users/100_3.jpg\"></v-img>\n      </v-avatar>\n    </v-badge>\n  </v-row>\n</v-container>"
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vuetify",
      route: "alerts"
    }, {
      title: "Badges"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=template&id=98895d66&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=template&id=98895d66& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
            _vm._v(" The "),
            _c("code", [_vm._v("v-badge")]),
            _vm._v(
              " component superscripts or\n      subscripts an avatar-like icon or text onto content to highlight\n      information to a user or to just draw attention to a specific element.\n      Content within the badge usually contains numbers or icons.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/badges",
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
              attrs: { title: "Tabs" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Badges help convey information to the user in a variety of ways.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-toolbar",
                        [
                          _c(
                            "v-tabs",
                            {
                              attrs: {
                                dark: "",
                                "background-color": "primary",
                                grow: ""
                              }
                            },
                            [
                              _c(
                                "v-tab",
                                [
                                  _c(
                                    "v-badge",
                                    { attrs: { color: "pink", dot: "" } },
                                    [
                                      _vm._v(
                                        "\n                  Item One\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                [
                                  _c(
                                    "v-badge",
                                    { attrs: { color: "green", content: "6" } },
                                    [
                                      _vm._v(
                                        "\n                  Item Two\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                [
                                  _c(
                                    "v-badge",
                                    {
                                      attrs: {
                                        color: "deep-purple accent-4",
                                        icon: "mdi-vuetify"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Item Three\n                "
                                      )
                                    ]
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
              attrs: { title: "Dynamic notifications" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            You can incorporate badges with dynamic content to make things\n            such as a notification system.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            { attrs: { justify: "space-around" } },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mx-1",
                                      attrs: { color: "primary" },
                                      on: {
                                        click: function($event) {
                                          _vm.code3.messages++
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Send Message\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mx-1",
                                      attrs: { color: "error" },
                                      on: {
                                        click: function($event) {
                                          _vm.code3.messages = 0
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Clear Notifications\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-badge",
                                {
                                  attrs: {
                                    content: _vm.code3.messages,
                                    value: _vm.code3.messages,
                                    color: "green",
                                    overlap: ""
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { large: "" } }, [
                                    _vm._v("mdi-email")
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
              attrs: { title: "Show-on-hover" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            You can do many things with visibility control, for example, show\n            badge on hover.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-badge",
                            {
                              attrs: {
                                value: _vm.code2.hover,
                                color: "deep-purple accent-4",
                                content: "9999+",
                                left: "",
                                transition: "slide-x-transition"
                              }
                            },
                            [
                              _c(
                                "v-hover",
                                {
                                  model: {
                                    value: _vm.code2.hover,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code2, "hover", $$v)
                                    },
                                    expression: "code2.hover"
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: {
                                        color: "grey lighten-1",
                                        large: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  mdi-account-circle\n                "
                                      )
                                    ]
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
              attrs: { title: "Customization options" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-badge")]),
                        _vm._v(
                          " component is flexible and can be used in\n            a variety of use-cases over numerous elements. Options to tweak\n            the location are also available through the offset-x and offset-y\n            props.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center", justify: "center" } },
                            [
                              _c(
                                "v-badge",
                                {
                                  attrs: {
                                    bordered: "",
                                    color: "error",
                                    icon: "mdi-lock",
                                    overlap: ""
                                  }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "white--text",
                                      attrs: { color: "error", depressed: "" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Lock Account\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mx-3" }),
                              _vm._v(" "),
                              _c(
                                "v-badge",
                                {
                                  attrs: {
                                    bordered: "",
                                    bottom: "",
                                    color: "deep-purple accent-4",
                                    dot: "",
                                    "offset-x": "10",
                                    "offset-y": "10"
                                  }
                                },
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { size: "40" } },
                                    [
                                      _c("v-img", {
                                        attrs: { src: "media/users/300_2.jpg" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mx-3" }),
                              _vm._v(" "),
                              _c(
                                "v-badge",
                                {
                                  attrs: {
                                    avatar: "",
                                    bordered: "",
                                    overlap: ""
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "badge",
                                      fn: function() {
                                        return [
                                          _c(
                                            "v-avatar",
                                            [
                                              _c("v-img", {
                                                attrs: {
                                                  src:
                                                    "media/project-logos/7.png"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "v-avatar",
                                    { attrs: { size: "40" } },
                                    [
                                      _c("v-img", {
                                        attrs: { src: "media/users/100_3.jpg" }
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

/***/ "./resources/js/src/view/pages/vuetify/Badges.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Badges.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badges_vue_vue_type_template_id_98895d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badges.vue?vue&type=template&id=98895d66& */ "./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=template&id=98895d66&");
/* harmony import */ var _Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badges.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Badges_vue_vue_type_template_id_98895d66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Badges_vue_vue_type_template_id_98895d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/Badges.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Badges.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=template&id=98895d66&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=template&id=98895d66& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_98895d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Badges.vue?vue&type=template&id=98895d66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Badges.vue?vue&type=template&id=98895d66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_98895d66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_98895d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);