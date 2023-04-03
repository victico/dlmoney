(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        html: " <v-file-input multiple label=\"File input\"></v-file-input>"
      },
      code2: {
        html: "<v-file-input accept=\"image/*\" label=\"File input\"></v-file-input>"
      },
      code3: {
        html: "<div>\n  <v-file-input chips multiple label=\"File input w/ chips\"></v-file-input>\n  <v-file-input small-chips multiple label=\"File input w/ small chips\"></v-file-input>\n</div>"
      },
      code4: {
        html: "<v-file-input show-size label=\"File input\"></v-file-input>"
      },
      code5: {
        html: "<v-file-input show-size counter multiple label=\"File input\"></v-file-input>"
      },
      code6: {
        html: "<v-file-input\n  label=\"File input\"\n  filled\n  prepend-icon=\"mdi-camera\"\n></v-file-input>"
      },
      code7: {
        html: "<v-file-input\n  v-model=\"files\"\n  color=\"deep-purple accent-4\"\n  counter\n  label=\"File input\"\n  multiple\n  placeholder=\"Select your files\"\n  prepend-icon=\"mdi-paperclip\"\n  outlined\n  :show-size=\"1000\"\n>\n  <template v-slot:selection=\"{ index, text }\">\n    <v-chip\n      v-if=\"index < 2\"\n      color=\"deep-purple accent-4\"\n      dark\n      label\n      small\n    >\n      {{ text }}\n    </v-chip>\n\n    <span\n      v-else-if=\"index === 2\"\n      class=\"overline grey--text text--darken-3 mx-2\"\n    >\n      +{{ files.length - 2 }} File(s)\n    </span>\n  </template>\n</v-file-input>",
        js: "export default {\n  data: () => ({\n    files: [],\n  }),\n}",
        files: []
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
      title: "File Inputs"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=template&id=2e66a3c2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=template&id=2e66a3c2& ***!
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
            _c("b", [_vm._v("File inputs")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-file-input")]),
            _vm._v(
              " component is a\n      specialized input that provides a clean interface for selecting files,\n      showing detailed selection information and upload progress. It is meant\n      to be a direct replacement for a standard file input.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/file-inputs",
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
              attrs: { title: "Multiple" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-file-input")]),
                        _vm._v(
                          " can contain multiple files at the\n            same time when using the "
                        ),
                        _c("strong", [_vm._v("multiple")]),
                        _vm._v(" prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-file-input", {
                        attrs: { multiple: "", label: "File input" }
                      })
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
              attrs: { title: "Custom icons" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-file-input")]),
                        _vm._v(
                          " has a default prepended icon that\n            can be set on the component or adjusted globally.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-file-input", {
                        attrs: {
                          label: "File input",
                          filled: "",
                          "prepend-icon": "mdi-camera"
                        }
                      })
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code6.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Counter" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            When using the show-size property along with counter, the total\n            number of files and size will be displayed under the input.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-file-input", {
                        attrs: {
                          "show-size": "",
                          counter: "",
                          multiple: "",
                          label: "File input"
                        }
                      })
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
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Complex selection slots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            The flexibility of the selection slot allows you accomodate\n            complex use-cases. In this example we show the first 2 selections\n            as chips while adding a number indicator for the remaining amount.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-file-input", {
                        attrs: {
                          color: "deep-purple accent-4",
                          counter: "",
                          label: "File input",
                          multiple: "",
                          placeholder: "Select your files",
                          "prepend-icon": "mdi-paperclip",
                          outlined: "",
                          "show-size": 1000
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "selection",
                            fn: function(ref) {
                              var index = ref.index
                              var text = ref.text
                              return [
                                index < 2
                                  ? _c(
                                      "v-chip",
                                      {
                                        attrs: {
                                          color: "deep-purple accent-4",
                                          dark: "",
                                          label: "",
                                          small: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(text) +
                                            "\n              "
                                        )
                                      ]
                                    )
                                  : index === 2
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "overline grey--text text--darken-3 mx-2"
                                      },
                                      [
                                        _vm._v(
                                          "\n                +" +
                                            _vm._s(_vm.code7.files.length - 2) +
                                            " File(s)\n              "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.code7.files,
                          callback: function($$v) {
                            _vm.$set(_vm.code7, "files", $$v)
                          },
                          expression: "code7.files"
                        }
                      })
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code7.html) + "\n        "
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
                        "\n          " + _vm._s(_vm.code7.js) + "\n        "
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
              attrs: { title: "With chips" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            A selected file can be displayed as a chip. When using the chips\n            and multiple props, each chip will be displayed (as opposed to the\n            file count).\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-file-input", {
                            attrs: {
                              chips: "",
                              multiple: "",
                              label: "File input w/ chips"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              "small-chips": "",
                              multiple: "",
                              label: "File input w/ small chips"
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
              attrs: { title: "Accept formats" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _c("code", [_vm._v("v-file-input")]),
                        _vm._v(
                          " component can accept only specific media\n            formats/file types if you want.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-file-input", {
                        attrs: { accept: "image/*", label: "File input" }
                      })
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
              attrs: { title: "Size displaying" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            The displayed size of the selected file(s) can be configured with\n            the show-size property. Display sizes can be either 1024 (the\n            default used when providing true) or 1000.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-file-input", {
                        attrs: { "show-size": "", label: "File input" }
                      })
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

/***/ "./resources/js/src/view/pages/vuetify/forms/FileInputs.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/FileInputs.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileInputs_vue_vue_type_template_id_2e66a3c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileInputs.vue?vue&type=template&id=2e66a3c2& */ "./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=template&id=2e66a3c2&");
/* harmony import */ var _FileInputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileInputs.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileInputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileInputs_vue_vue_type_template_id_2e66a3c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileInputs_vue_vue_type_template_id_2e66a3c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/forms/FileInputs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileInputs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=template&id=2e66a3c2&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=template&id=2e66a3c2& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputs_vue_vue_type_template_id_2e66a3c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileInputs.vue?vue&type=template&id=2e66a3c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/FileInputs.vue?vue&type=template&id=2e66a3c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputs_vue_vue_type_template_id_2e66a3c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputs_vue_vue_type_template_id_2e66a3c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);