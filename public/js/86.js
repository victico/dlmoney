(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<v-container>\n  <v-row>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-textarea\n        class=\"mx-2\"\n        label=\"prepend-icon\"\n        rows=\"1\"\n        prepend-icon=\"comment\"\n      ></v-textarea>\n    </v-col>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-textarea\n        append-icon=\"comment\"\n        class=\"mx-2\"\n        label=\"append-icon\"\n        rows=\"1\"\n      ></v-textarea>\n    </v-col>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-textarea\n        prepend-inner-icon=\"comment\"\n        class=\"mx-2\"\n        label=\"prepend-inner-icon\"\n        rows=\"1\"\n      ></v-textarea>\n    </v-col>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-textarea\n        append-outer-icon=\"comment\"\n        class=\"mx-2\"\n        label=\"append-outer-icon\"\n        rows=\"1\"\n      ></v-textarea>\n    </v-col>\n  </v-row>\n</v-container>"
      },
      code2: {
        html: "<v-container fluid>\n  <v-textarea\n    name=\"input-7-1\"\n    filled\n    label=\"Label\"\n    auto-grow\n    value=\"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.\"\n  ></v-textarea>\n</v-container>"
      },
      code3: {
        html: "<v-container fluid>\n  <v-textarea\n    autocomplete=\"email\"\n    label=\"Email\"\n  ></v-textarea>\n</v-container>"
      },
      code4: {
        html: "<v-container fluid>\n  <v-textarea\n    name=\"input-7-1\"\n    filled\n    label=\"Label\"\n    auto-grow\n    value=\"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.\"\n  ></v-textarea>\n</v-container>"
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
      title: "Form Inputs & Control",
      route: "autocompletes"
    }, {
      title: "Textareas"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc& ***!
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
            _c("b", [_vm._v("Textareas")]),
            _vm._v(
              " Textarea components are used for collecting large\n      amounts of textual data.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/textarea",
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
              attrs: { title: "Icons" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("append-icon")]),
                        _vm._v(" and "),
                        _c("code", [_vm._v("prepend-icon")]),
                        _vm._v(" props\n            help add context to "),
                        _c("code", [_vm._v("v-textarea")]),
                        _vm._v(".\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-textarea", {
                                    staticClass: "mx-2",
                                    attrs: {
                                      label: "prepend-icon",
                                      rows: "1",
                                      "prepend-icon": "comment"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-textarea", {
                                    staticClass: "mx-2",
                                    attrs: {
                                      "append-icon": "comment",
                                      label: "append-icon",
                                      rows: "1"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-textarea", {
                                    staticClass: "mx-2",
                                    attrs: {
                                      "prepend-inner-icon": "comment",
                                      label: "prepend-inner-icon",
                                      rows: "1"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-textarea", {
                                    staticClass: "mx-2",
                                    attrs: {
                                      "append-outer-icon": "comment",
                                      label: "append-outer-icon",
                                      rows: "1"
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
              attrs: { title: "Browser autocomplete" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("autocomplete")]),
                        _vm._v(
                          " prop gives you the option to enable\n            the browser to predict user input.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-textarea", {
                            attrs: { autocomplete: "email", label: "Email" }
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
              attrs: { title: "Auto grow" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            When using the "),
                        _c("code", [_vm._v("auto-grow")]),
                        _vm._v(
                          " prop, textarea's will\n            automatically increase in size when the contained text exceeds its\n            size.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              name: "input-7-1",
                              filled: "",
                              label: "Label",
                              "auto-grow": "",
                              value:
                                "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
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
                        "\n          " + _vm._s(_vm.code2.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Clearable" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            You can clear the text from a "),
                        _c("code", [_vm._v("v-textarea")]),
                        _vm._v(" by using the\n            "),
                        _c("code", [_vm._v("clearable")]),
                        _vm._v(
                          " prop, and customize the icon used with the\n            "
                        ),
                        _c("code", [_vm._v("clearable-icon")]),
                        _vm._v(" prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              name: "input-7-1",
                              filled: "",
                              label: "Label",
                              "auto-grow": "",
                              value:
                                "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
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

/***/ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Textareas.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textareas.vue?vue&type=template&id=3de000cc& */ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc&");
/* harmony import */ var _Textareas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Textareas.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Textareas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/forms/Textareas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Textareas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Textareas.vue?vue&type=template&id=3de000cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);