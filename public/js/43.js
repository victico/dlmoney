(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      html1: "<div>\n    <!-- Styled -->\n    <b-form-file\n      v-model=\"file\"\n      :state=\"Boolean(file)\"\n      placeholder=\"Choose a file or drop it here...\"\n      drop-placeholder=\"Drop file here...\"\n    ></b-form-file>\n    <div class=\"mt-3\">Selected file: {{ file ? file.name : '' }}</div>\n\n    <!-- Plain mode -->\n    <b-form-file v-model=\"file2\" class=\"mt-3\" plain></b-form-file>\n    <div class=\"mt-3\">Selected file: {{ file2 ? file2.name : '' }}</div>\n  </div>",
      js1: "export default {\n    data() {\n      return {\n        file: null,\n        file2: null\n      }\n    }",
      file: null,
      file2: null,
      html2: "<div>\n  <b-form-group label=\"Small:\" label-for=\"file-small\" label-cols-sm=\"2\" label-size=\"sm\">\n    <b-form-file id=\"file-small\" size=\"sm\"></b-form-file>\n  </b-form-group>\n\n  <b-form-group label=\"Default:\" label-for=\"file-default\" label-cols-sm=\"2\">\n    <b-form-file id=\"file-default\"></b-form-file>\n  </b-form-group>\n\n  <b-form-group label=\"Large:\" label-for=\"file-large\" label-cols-sm=\"2\" label-size=\"lg\">\n    <b-form-file id=\"file-large\" size=\"lg\"></b-form-file>\n  </b-form-group>\n</div>",
      html3: "<b-form-file multiple>\n   <template slot=\"file-name\" slot-scope=\"{ names }\">\n     <b-badge variant=\"dark\">{{ names[0] }}</b-badge>\n     <b-badge v-if=\"names.length > 1\" variant=\"dark\" class=\"ml-1\">\n       + {{ names.length - 1 }} More files\n     </b-badge>\n   </template>\n  </b-form-file>"
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
      title: "Form File"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=template&id=0fb7ba84&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=template&id=0fb7ba84& ***!
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
            _c("b", [_vm._v("Form File Input")]),
            _vm._v(
              " Customized, cross-browser consistent, file input\n      control that supports single file, multiple files, and directory upload\n      (for browsers that support directory mode)\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/form-file",
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
              attrs: { title: "Form File Input" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c("b-form-file", {
                            attrs: {
                              state: Boolean(_vm.file),
                              placeholder: "Choose a file or drop it here...",
                              "drop-placeholder": "Drop file here..."
                            },
                            model: {
                              value: _vm.file,
                              callback: function($$v) {
                                _vm.file = $$v
                              },
                              expression: "file"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-3" }, [
                            _vm._v(
                              "Selected file: " +
                                _vm._s(_vm.file ? _vm.file.name : "")
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-form-file", {
                            staticClass: "mt-3",
                            attrs: { plain: "" },
                            model: {
                              value: _vm.file2,
                              callback: function($$v) {
                                _vm.file2 = $$v
                              },
                              expression: "file2"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-3" }, [
                            _vm._v(
                              "\n              Selected file: " +
                                _vm._s(_vm.file2 ? _vm.file2.name : "") +
                                "\n            "
                            )
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
              attrs: { title: "File name formatting via scoped slot" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Alternatively, you can use the scoped slot\n            "
                        ),
                        _c("code", [_vm._v("file-name")]),
                        _vm._v(
                          " to render the file names. The scoped slot\n            will receive the following properties:\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-form-file", {
                        attrs: { multiple: "" },
                        scopedSlots: _vm._u([
                          {
                            key: "file-name",
                            fn: function(ref) {
                              var names = ref.names
                              return [
                                _c("b-badge", { attrs: { variant: "dark" } }, [
                                  _vm._v(_vm._s(names[0]))
                                ]),
                                _vm._v(" "),
                                names.length > 1
                                  ? _c(
                                      "b-badge",
                                      {
                                        staticClass: "ml-1",
                                        attrs: { variant: "dark" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                + " +
                                            _vm._s(names.length - 1) +
                                            " More files\n              "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ])
                      })
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
                          " prop to control the visual size of the\n            input. The default size is considered "
                        ),
                        _c("code", [_vm._v("md")]),
                        _vm._v(" (medium).\n            Optional sizes are "),
                        _c("code", [_vm._v("lg")]),
                        _vm._v(" (large) and\n            "),
                        _c("code", [_vm._v("sm")]),
                        _vm._v(
                          " (small). These sizes line up with the sizes\n            available on other form controls.\n          "
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
                                label: "Small:",
                                "label-for": "file-small",
                                "label-cols-sm": "2",
                                "label-size": "sm"
                              }
                            },
                            [
                              _c("b-form-file", {
                                attrs: { id: "file-small", size: "sm" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Default:",
                                "label-for": "file-default",
                                "label-cols-sm": "2"
                              }
                            },
                            [
                              _c("b-form-file", {
                                attrs: { id: "file-default" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Large:",
                                "label-for": "file-large",
                                "label-cols-sm": "2",
                                "label-size": "lg"
                              }
                            },
                            [
                              _c("b-form-file", {
                                attrs: { id: "file-large", size: "lg" }
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
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormFile.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormFile.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormFile_vue_vue_type_template_id_0fb7ba84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormFile.vue?vue&type=template&id=0fb7ba84& */ "./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=template&id=0fb7ba84&");
/* harmony import */ var _FormFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormFile.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormFile_vue_vue_type_template_id_0fb7ba84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormFile_vue_vue_type_template_id_0fb7ba84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/FormFile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormFile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=template&id=0fb7ba84&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=template&id=0fb7ba84& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFile_vue_vue_type_template_id_0fb7ba84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormFile.vue?vue&type=template&id=0fb7ba84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/FormFile.vue?vue&type=template&id=0fb7ba84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFile_vue_vue_type_template_id_0fb7ba84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFile_vue_vue_type_template_id_0fb7ba84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);