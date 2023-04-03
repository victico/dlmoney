(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      html1: "<div>\n    <b-form @submit=\"onSubmit\" @reset=\"onReset\" v-if=\"show\">\n      <b-form-group\n        id=\"input-group-1\"\n        label=\"Email address:\"\n        label-for=\"input-1\"\n        description=\"We'll never share your email with anyone else.\"\n      >\n        <b-form-input\n          id=\"input-1\"\n          v-model=\"form.email\"\n          type=\"email\"\n          required\n          placeholder=\"Enter email\"\n        ></b-form-input>\n      </b-form-group>\n\n      <b-form-group id=\"input-group-2\" label=\"Your Name:\" label-for=\"input-2\">\n        <b-form-input\n          id=\"input-2\"\n          v-model=\"form.name\"\n          required\n          placeholder=\"Enter name\"\n        ></b-form-input>\n      </b-form-group>\n\n      <b-form-group id=\"input-group-3\" label=\"Food:\" label-for=\"input-3\">\n        <b-form-select\n          id=\"input-3\"\n          v-model=\"form.food\"\n          :options=\"foods\"\n          required\n        ></b-form-select>\n      </b-form-group>\n\n      <b-form-group id=\"input-group-4\">\n        <b-form-checkbox-group v-model=\"form.checked\" id=\"checkboxes-4\">\n          <b-form-checkbox value=\"me\">Check me out</b-form-checkbox>\n          <b-form-checkbox value=\"that\">Check that out</b-form-checkbox>\n        </b-form-checkbox-group>\n      </b-form-group>\n\n      <b-button type=\"submit\" variant=\"primary\">Submit</b-button>\n      <b-button type=\"reset\" variant=\"danger\">Reset</b-button>\n    </b-form>\n    <b-card class=\"mt-3\" header=\"Form Data Result\">\n      <pre class=\"m-0\">{{ form }}</pre>\n    </b-card>\n  </div>",
      js1: "\n  export default {\n    data() {\n      return {\n        form: {\n          email: '',\n          name: '',\n          food: null,\n          checked: []\n        },\n        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],\n        show: true\n      }\n    },\n    methods: {\n      onSubmit(evt) {\n        evt.preventDefault()\n        alert(JSON.stringify(this.form))\n      },\n      onReset(evt) {\n        evt.preventDefault()\n        // Reset our form values\n        this.form.email = ''\n        this.form.name = ''\n        this.form.food = null\n        this.form.checked = []\n        // Trick to reset/clear native browser form validation state\n        this.show = false\n        this.$nextTick(() => {\n          this.show = true\n        })\n      }\n    }\n  }",
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [{
        text: "Select One",
        value: null
      }, "Carrots", "Beans", "Tomatoes", "Corn"],
      show: true,
      html2: "<div>\n  <b-form inline>\n    <label class=\"sr-only\" for=\"inline-form-input-name\">Name</label>\n    <b-input\n      id=\"inline-form-input-name\"\n      class=\"mb-2 mr-sm-2 mb-sm-0\"\n      placeholder=\"Jane Doe\"\n    ></b-input>\n\n    <label class=\"sr-only\" for=\"inline-form-input-username\">Username</label>\n    <b-input-group prepend=\"@\" class=\"mb-2 mr-sm-2 mb-sm-0\">\n      <b-input id=\"inline-form-input-username\" placeholder=\"Username\"></b-input>\n    </b-input-group>\n\n    <b-form-checkbox class=\"mb-2 mr-sm-2 mb-sm-0\">Remember me</b-form-checkbox>\n\n    <b-button variant=\"primary\">Save</b-button>\n  </b-form>\n</div>",
      html3: "<div>\n  <b-form inline>\n    <label class=\"mr-sm-2\" for=\"inline-form-custom-select-pref\">Preference</label>\n    <b-form-select\n      class=\"mb-2 mr-sm-2 mb-sm-0\"\n      :value=\"null\"\n      :options=\"{ '1': 'One', '2': 'Two', '3': 'Three' }\"\n      id=\"inline-form-custom-select-pref\"\n    >\n      <template v-slot:first>\n        <option :value=\"null\">Choose...</option>\n      </template>\n    </b-form-select>\n\n    <b-form-checkbox class=\"mb-2 mr-sm-2 mb-sm-0\">Remember my preference</b-form-checkbox>\n\n    <b-button variant=\"primary\">Save</b-button>\n  </b-form>\n</div>"
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset: function onReset(evt) {
      var _this = this;

      evt.preventDefault(); // Reset our form values

      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = []; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vue Bootstrap",
      route: "alert"
    }, {
      title: "Form"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=template&id=2661b230&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=template&id=2661b230& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Form")]),
            _vm._v(
              " BootstrapVue form component and helper components that\n      optionally support inline form styles and validation states. Pair them\n      up with other BootstrapVue form control components for an easy\n      customized, and responsive, layout with a consistent look and feel.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/form",
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
              attrs: { title: "Introduction to forms and controls" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Be sure to use an appropriate "),
                        _c("code", [_vm._v("type")]),
                        _vm._v(
                          " on all inputs\n            (e.g., email for email address or number for numerical\n            information) to take advantage of newer input controls like\n            "
                        ),
                        _c("code", [_vm._v("email")]),
                        _vm._v(" verification, "),
                        _c("code", [_vm._v("number")]),
                        _vm._v(" selection,\n            and more.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _vm.show
                            ? _c(
                                "b-form",
                                {
                                  on: {
                                    submit: _vm.onSubmit,
                                    reset: _vm.onReset
                                  }
                                },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        id: "input-group-1",
                                        label: "Email address:",
                                        "label-for": "input-1",
                                        description:
                                          "We'll never share your email with anyone else."
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-1",
                                          type: "email",
                                          required: "",
                                          placeholder: "Enter email"
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email"
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
                                        id: "input-group-2",
                                        label: "Your Name:",
                                        "label-for": "input-2"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-2",
                                          required: "",
                                          placeholder: "Enter name"
                                        },
                                        model: {
                                          value: _vm.form.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "name", $$v)
                                          },
                                          expression: "form.name"
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
                                        id: "input-group-3",
                                        label: "Food:",
                                        "label-for": "input-3"
                                      }
                                    },
                                    [
                                      _c("b-form-select", {
                                        attrs: {
                                          id: "input-3",
                                          options: _vm.foods,
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.form.food,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "food", $$v)
                                          },
                                          expression: "form.food"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    { attrs: { id: "input-group-4" } },
                                    [
                                      _c(
                                        "b-form-checkbox-group",
                                        {
                                          attrs: { id: "checkboxes-4" },
                                          model: {
                                            value: _vm.form.checked,
                                            callback: function($$v) {
                                              _vm.$set(_vm.form, "checked", $$v)
                                            },
                                            expression: "form.checked"
                                          }
                                        },
                                        [
                                          _c(
                                            "b-form-checkbox",
                                            { attrs: { value: "me" } },
                                            [_vm._v("Check me out")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-checkbox",
                                            { attrs: { value: "that" } },
                                            [
                                              _vm._v(
                                                "\n                    Check that out\n                  "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "submit",
                                        variant: "primary"
                                      }
                                    },
                                    [_vm._v("Submit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "ml-2",
                                      attrs: {
                                        type: "reset",
                                        variant: "danger"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                Reset\n              "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "b-card",
                            {
                              staticClass: "mt-3",
                              attrs: { header: "Form Data Result" }
                            },
                            [
                              _c("pre", { staticClass: "m-0" }, [
                                _vm._v(_vm._s(_vm.form))
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
              attrs: { title: "Inline form" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Use the "),
                        _c("code", [_vm._v("inline")]),
                        _vm._v(" prop on "),
                        _c("code", [_vm._v("<b-form>")]),
                        _vm._v(
                          " to\n            display a series of labels, form controls, and buttons on a single\n            horizontal row. Form controls within inline forms vary slightly\n            from their default states.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-form",
                            { attrs: { inline: "" } },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "sr-only",
                                  attrs: { for: "inline-form-input-name" }
                                },
                                [_vm._v("Name")]
                              ),
                              _vm._v(" "),
                              _c("b-input", {
                                staticClass: "mb-2 mr-sm-2 mb-sm-0",
                                attrs: {
                                  id: "inline-form-input-name",
                                  placeholder: "Jane Doe"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "sr-only",
                                  attrs: { for: "inline-form-input-username" }
                                },
                                [_vm._v("Username")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                {
                                  staticClass: "mb-2 mr-sm-2 mb-sm-0",
                                  attrs: { prepend: "@" }
                                },
                                [
                                  _c("b-input", {
                                    attrs: {
                                      id: "inline-form-input-username",
                                      placeholder: "Username"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                { staticClass: "mb-2 mr-sm-2 mb-sm-0" },
                                [_vm._v("Remember me\n              ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("Save")]
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
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html2) + "\n          "
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
              attrs: { title: "Custom form controls and selects" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-form",
                            { attrs: { inline: "" } },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "mr-sm-2",
                                  attrs: {
                                    for: "inline-form-custom-select-pref"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Preference\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("b-form-select", {
                                staticClass: "mb-2 mr-sm-2 mb-sm-0",
                                attrs: {
                                  value: null,
                                  options: {
                                    "1": "One",
                                    "2": "Two",
                                    "3": "Three"
                                  },
                                  id: "inline-form-custom-select-pref"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "first",
                                    fn: function() {
                                      return [
                                        _c(
                                          "option",
                                          { domProps: { value: null } },
                                          [_vm._v("Choose...")]
                                        )
                                      ]
                                    },
                                    proxy: true
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                { staticClass: "mb-2 mr-sm-2 mb-sm-0" },
                                [
                                  _vm._v(
                                    "\n                Remember my preference\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("Save")]
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
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html3) + "\n          "
                        )
                      ])
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Form.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Form.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_2661b230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=2661b230& */ "./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=template&id=2661b230&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_2661b230___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_2661b230___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=template&id=2661b230&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=template&id=2661b230& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_2661b230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=2661b230& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Form.vue?vue&type=template&id=2661b230&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_2661b230___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_2661b230___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);