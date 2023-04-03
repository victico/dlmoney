(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div>\n  <b-button v-b-modal.modal-1>Launch demo modal</b-button>\n\n  <b-modal id=\"modal-1\" title=\"BootstrapVue\">\n    <p class=\"my-4\">Hello from modal!</p>\n  </b-modal>\n</div>"
      },
      code2: {
        html: "<div>\n  <!-- Using modifiers -->\n  <b-button v-b-modal.my-modal>Show Modal</b-button>\n\n  <!-- Using value -->\n  <b-button v-b-modal=\"'my-modal'\">Show Modal</b-button>\n\n  <!-- The modal -->\n  <b-modal id=\"my-modal\">Hello From My Modal!</b-modal>\n</div>"
      },
      code3: {
        html: "<div>\n    <b-button id=\"show-btn\" @click=\"showModal\">Open Modal</b-button>\n    <b-button id=\"toggle-btn\" @click=\"toggleModal\">Toggle Modal</b-button>\n\n    <b-modal ref=\"my-modal\" hide-footer title=\"Using Component Methods\">\n      <div class=\"d-block text-center\">\n        <h3>Hello From My Modal!</h3>\n      </div>\n      <b-button class=\"mt-3\" variant=\"outline-danger\" block @click=\"hideModal\">Close Me</b-button>\n      <b-button class=\"mt-2\" variant=\"outline-warning\" block @click=\"toggleModal\">Toggle Me</b-button>\n    </b-modal>\n  </div>",
        js: "export default {\n    methods: {\n      showModal() {\n        this.$refs['my-modal'].show()\n      },\n      hideModal() {\n        this.$refs['my-modal'].hide()\n      },\n      toggleModal() {\n        // We pass the ID of the button that we want to return focus to\n        // when the modal has hidden\n        this.$refs['my-modal'].toggle('#toggle-btn')\n      }\n    }\n  }"
      },
      code4: {
        html: "<div>\n    <b-button id=\"show-btn\" @click=\"showModal\">Open Modal</b-button>\n    <b-button id=\"toggle-btn\" @click=\"toggleModal\">Toggle Modal</b-button>\n\n    <b-modal ref=\"my-modal\" hide-footer title=\"Using Component Methods\">\n      <div class=\"d-block text-center\">\n        <h3>Hello From My Modal!</h3>\n      </div>\n      <b-button class=\"mt-3\" variant=\"outline-danger\" block @click=\"hideModal\">Close Me</b-button>\n      <b-button class=\"mt-2\" variant=\"outline-warning\" block @click=\"toggleModal\">Toggle Me</b-button>\n    </b-modal>\n  </div>",
        js: "export default {\n    methods: {\n      showModal() {\n        this.$refs['my-modal'].show()\n      },\n      hideModal() {\n        this.$refs['my-modal'].hide()\n      },\n      toggleModal() {\n        // We pass the ID of the button that we want to return focus to\n        // when the modal has hidden\n        this.$refs['my-modal'].toggle('#toggle-btn')\n      }\n    }\n  }"
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    showModal: function showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal: function hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal: function toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    }
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vue Bootstrap",
      route: "alert"
    }, {
      title: "Modal"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=template&id=75a7528e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=template&id=75a7528e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Modals")]),
            _vm._v(
              " Modals are streamlined, but flexible dialog prompts\n      powered by JavaScript and CSS. They support a number of use cases from\n      user notification to completely custom content and feature a handful of\n      helpful sub-components, sizes, variants, accessibility, and more.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/media",
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
              attrs: { title: "Modal" },
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
                                  name: "b-modal",
                                  rawName: "v-b-modal.modal-1",
                                  modifiers: { "modal-1": true }
                                }
                              ]
                            },
                            [_vm._v("Launch demo modal")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-modal",
                            { attrs: { id: "modal-1", title: "BootstrapVue" } },
                            [
                              _c("p", { staticClass: "my-4" }, [
                                _vm._v("Hello from modal!")
                              ])
                            ]
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
              scopedSlots: _vm._u([
                {
                  key: "title",
                  fn: function() {
                    return [
                      _vm._v("\n          Using "),
                      _c("code", [_vm._v("v-b-modal")]),
                      _vm._v(" directive\n        ")
                    ]
                  },
                  proxy: true
                },
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
                                  name: "b-modal",
                                  rawName: "v-b-modal.my-modal",
                                  modifiers: { "my-modal": true }
                                }
                              ],
                              staticClass: "mr-3"
                            },
                            [_vm._v("Show Modal")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal",
                                  value: "my-modal",
                                  expression: "'my-modal'"
                                }
                              ],
                              staticClass: "mr-3"
                            },
                            [_vm._v("\n              Show Modal\n            ")]
                          ),
                          _vm._v(" "),
                          _c("b-modal", { attrs: { id: "my-modal" } }, [
                            _vm._v("Hello From My Modal!")
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
              scopedSlots: _vm._u([
                {
                  key: "title",
                  fn: function() {
                    return [
                      _vm._v("\n          Using "),
                      _c("code", [_vm._v("this.$bvModal.show()")]),
                      _vm._v(" and\n          "),
                      _c("code", [_vm._v("this.$bvModal.hide()")]),
                      _vm._v(" instance methods\n        ")
                    ]
                  },
                  proxy: true
                },
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            When "),
                        _c("code", [_vm._v("BootstrapVue")]),
                        _vm._v(
                          " is installed as a plugin, or the\n            "
                        ),
                        _c("code", [_vm._v("ModalPlugin")]),
                        _vm._v(
                          " plugin is used, BootstrapVue will inject\n            a "
                        ),
                        _c("code"),
                        _vm._v(
                          " object into every Vue instance (components, apps).\n            "
                        ),
                        _c("code", [_vm._v("$bvModal")]),
                        _vm._v(
                          " exposes several methods, of which two are\n            for showing and hiding modals:\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-3",
                              attrs: { id: "show-btn" },
                              on: { click: _vm.showModal }
                            },
                            [_vm._v("\n              Open Modal\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-3",
                              attrs: { id: "toggle-btn" },
                              on: { click: _vm.toggleModal }
                            },
                            [
                              _vm._v(
                                "\n              Toggle Modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-modal",
                            {
                              ref: "my-modal",
                              attrs: {
                                "hide-footer": "",
                                title: "Using Component Methods"
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "d-block text-center" },
                                [_c("h3", [_vm._v("Hello From My Modal!")])]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "mt-3",
                                  attrs: {
                                    variant: "outline-danger",
                                    block: ""
                                  },
                                  on: { click: _vm.hideModal }
                                },
                                [
                                  _vm._v(
                                    "\n                Close Me\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "mt-2",
                                  attrs: {
                                    variant: "outline-warning",
                                    block: ""
                                  },
                                  on: { click: _vm.toggleModal }
                                },
                                [
                                  _vm._v(
                                    "\n                Toggle Me\n              "
                                  )
                                ]
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              scopedSlots: _vm._u([
                {
                  key: "title",
                  fn: function() {
                    return [
                      _vm._v("\n          Using "),
                      _c("code", [_vm._v("show()")]),
                      _vm._v(", "),
                      _c("code", [_vm._v("hide()")]),
                      _vm._v(", and\n          "),
                      _c("code", [_vm._v("toggle()")]),
                      _vm._v(" component methods\n        ")
                    ]
                  },
                  proxy: true
                },
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            You can access modal using "),
                        _c("code", [_vm._v("ref")]),
                        _vm._v(" attribute and then\n            call the "),
                        _c("code", [_vm._v("show()")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("hide()")]),
                        _vm._v(" or\n            "),
                        _c("code", [_vm._v("toggle()")]),
                        _vm._v(" methods.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-3",
                              attrs: { id: "show-btn" },
                              on: { click: _vm.showModal }
                            },
                            [_vm._v("\n              Open Modal\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-3",
                              attrs: { id: "toggle-btn" },
                              on: { click: _vm.toggleModal }
                            },
                            [
                              _vm._v(
                                "\n              Toggle Modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-modal",
                            {
                              ref: "my-modal",
                              attrs: {
                                "hide-footer": "",
                                title: "Using Component Methods"
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "d-block text-center" },
                                [_c("h3", [_vm._v("Hello From My Modal!")])]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "mt-3 mr-3",
                                  attrs: {
                                    variant: "outline-danger",
                                    block: ""
                                  },
                                  on: { click: _vm.hideModal }
                                },
                                [
                                  _vm._v(
                                    "\n                Close Me\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "mt-2 mr-3",
                                  attrs: {
                                    variant: "outline-warning",
                                    block: ""
                                  },
                                  on: { click: _vm.toggleModal }
                                },
                                [
                                  _vm._v(
                                    "\n                Toggle Me\n              "
                                  )
                                ]
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Modal.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Modal.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_75a7528e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=75a7528e& */ "./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=template&id=75a7528e&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_75a7528e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_75a7528e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=template&id=75a7528e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=template&id=75a7528e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_75a7528e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=75a7528e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Modal.vue?vue&type=template&id=75a7528e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_75a7528e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_75a7528e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);