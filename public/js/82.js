(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<v-form\n  ref=\"form\"\n  v-model=\"valid\"\n  lazy-validation\n>\n  <v-text-field\n    v-model=\"name\"\n    :counter=\"10\"\n    :rules=\"nameRules\"\n    label=\"Name\"\n    required\n  ></v-text-field>\n\n  <v-text-field\n    v-model=\"email\"\n    :rules=\"emailRules\"\n    label=\"E-mail\"\n    required\n  ></v-text-field>\n\n  <v-select\n    v-model=\"select\"\n    :items=\"items\"\n    :rules=\"[v => !!v || 'Item is required']\"\n    label=\"Item\"\n    required\n  ></v-select>\n\n  <v-checkbox\n    v-model=\"checkbox\"\n    :rules=\"[v => !!v || 'You must agree to continue!']\"\n    label=\"Do you agree?\"\n    required\n  ></v-checkbox>\n\n  <v-btn\n    :disabled=\"!valid\"\n    color=\"success\"\n    class=\"mr-4\"\n    @click=\"validate\"\n  >\n    Validate\n  </v-btn>\n\n  <v-btn\n    color=\"error\"\n    class=\"mr-4\"\n    @click=\"reset\"\n  >\n    Reset Form\n  </v-btn>\n\n  <v-btn\n    color=\"warning\"\n    @click=\"resetValidation\"\n  >\n    Reset Validation\n  </v-btn>\n</v-form>",
        js: " export default {\n  data: () => ({\n    valid: true,\n    name: '',\n    nameRules: [\n      v => !!v || 'Name is required',\n      v => (v && v.length <= 10) || 'Name must be less than 10 characters',\n    ],\n    email: '',\n    emailRules: [\n      v => !!v || 'E-mail is required',\n      v => /.+@.+\\..+/.test(v) || 'E-mail must be valid',\n    ],\n    select: null,\n    items: [\n      'Item 1',\n      'Item 2',\n      'Item 3',\n      'Item 4',\n    ],\n    checkbox: false,\n  }),\n\n  methods: {\n    validate () {\n      if (this.$refs.form.validate()) {\n        this.snackbar = true\n      }\n    },\n    reset () {\n      this.$refs.form.reset()\n    },\n    resetValidation () {\n      this.$refs.form.resetValidation()\n    },\n  },\n}",
        valid: true,
        name: "",
        nameRules: [function (v) {
          return !!v || "Name is required";
        }, function (v) {
          return v && v.length <= 10 || "Name must be less than 10 characters";
        }],
        email: "",
        emailRules: [function (v) {
          return !!v || "E-mail is required";
        }, function (v) {
          return /.+@.+\..+/.test(v) || "E-mail must be valid";
        }],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false
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
      title: "Fileinptus"
    }]);
  },
  methods: {
    // code 1
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset: function reset() {
      this.$refs.form.reset();
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=template&id=2105e702&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=template&id=2105e702& ***!
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
            _c("b", [_vm._v("Forms")]),
            _vm._v(
              " When it comes to form validation, Vuetify has a multitude\n      of integrations and baked in functionality.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/forms",
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
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Validation with submit & clear" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-form")]),
                        _vm._v(" component has\n            "),
                        _c("strong", [_vm._v("three")]),
                        _vm._v(
                          " functions that can be accessed by setting a\n            "
                        ),
                        _c("em", [_vm._v("ref")]),
                        _vm._v(
                          " on the component. A ref allows us to access internal\n            methods on a component, for example,\n            "
                        ),
                        _c("code", [_vm._v('<v-form ref="form">')]),
                        _vm._v(".\n            "),
                        _c("strong", [_vm._v("this.$refs.form.validate()")]),
                        _vm._v(
                          " will validate all\n            inputs and return if they are all valid or not.\n            "
                        ),
                        _c("strong", [_vm._v("this.$refs.form.reset()")]),
                        _vm._v(
                          " will clear all inputs and\n            reset their validation errors.\n            "
                        ),
                        _c("strong", [
                          _vm._v("this.$refs.form.resetValidation()")
                        ]),
                        _vm._v(
                          " will only reset\n            input validation and not alter their state.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-form",
                        {
                          ref: "form",
                          attrs: { "lazy-validation": "" },
                          model: {
                            value: _vm.code1.valid,
                            callback: function($$v) {
                              _vm.$set(_vm.code1, "valid", $$v)
                            },
                            expression: "code1.valid"
                          }
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              counter: 10,
                              rules: _vm.code1.nameRules,
                              label: "Name",
                              required: ""
                            },
                            model: {
                              value: _vm.code1.name,
                              callback: function($$v) {
                                _vm.$set(_vm.code1, "name", $$v)
                              },
                              expression: "code1.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.code1.emailRules,
                              label: "E-mail",
                              required: ""
                            },
                            model: {
                              value: _vm.code1.email,
                              callback: function($$v) {
                                _vm.$set(_vm.code1, "email", $$v)
                              },
                              expression: "code1.email"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              items: _vm.code1.items,
                              rules: [
                                function(v) {
                                  return !!v || "Item is required"
                                }
                              ],
                              label: "Item",
                              required: ""
                            },
                            model: {
                              value: _vm.code1.select,
                              callback: function($$v) {
                                _vm.$set(_vm.code1, "select", $$v)
                              },
                              expression: "code1.select"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            attrs: {
                              rules: [
                                function(v) {
                                  return !!v || "You must agree to continue!"
                                }
                              ],
                              label: "Do you agree?",
                              required: ""
                            },
                            model: {
                              value: _vm.code1.checkbox,
                              callback: function($$v) {
                                _vm.$set(_vm.code1, "checkbox", $$v)
                              },
                              expression: "code1.checkbox"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-4",
                              attrs: {
                                disabled: !_vm.code1.valid,
                                color: "success"
                              },
                              on: { click: _vm.validate }
                            },
                            [_vm._v("\n              Validate\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-4",
                              attrs: { color: "error" },
                              on: { click: _vm.reset }
                            },
                            [_vm._v("\n              Reset Form\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "warning" },
                              on: { click: _vm.resetValidation }
                            },
                            [
                              _vm._v(
                                "\n              Reset Validation\n            "
                              )
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

/***/ "./resources/js/src/view/pages/vuetify/forms/Forms.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Forms.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forms_vue_vue_type_template_id_2105e702___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms.vue?vue&type=template&id=2105e702& */ "./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=template&id=2105e702&");
/* harmony import */ var _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forms_vue_vue_type_template_id_2105e702___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forms_vue_vue_type_template_id_2105e702___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/forms/Forms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=template&id=2105e702&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=template&id=2105e702& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_2105e702___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=template&id=2105e702& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Forms.vue?vue&type=template&id=2105e702&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_2105e702___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_2105e702___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);