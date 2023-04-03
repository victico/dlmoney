(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div>\n  <b-navbar toggleable=\"lg\" type=\"dark\" variant=\"info\">\n    <b-navbar-brand href=\"#\">NavBar</b-navbar-brand>\n\n    <b-navbar-toggle target=\"nav-collapse\"></b-navbar-toggle>\n\n    <b-collapse id=\"nav-collapse\" is-nav>\n      <b-navbar-nav>\n        <b-nav-item href=\"#\">Link</b-nav-item>\n        <b-nav-item href=\"#\" disabled>Disabled</b-nav-item>\n      </b-navbar-nav>\n\n      <!-- Right aligned nav items -->\n      <b-navbar-nav class=\"ml-auto\">\n        <b-nav-form>\n          <b-form-input size=\"sm\" class=\"mr-sm-2\" placeholder=\"Search\"></b-form-input>\n          <b-button size=\"sm\" class=\"my-2 my-sm-0\" type=\"submit\">Search</b-button>\n        </b-nav-form>\n\n        <b-nav-item-dropdown text=\"Lang\" right>\n          <b-dropdown-item href=\"#\">EN</b-dropdown-item>\n          <b-dropdown-item href=\"#\">ES</b-dropdown-item>\n          <b-dropdown-item href=\"#\">RU</b-dropdown-item>\n          <b-dropdown-item href=\"#\">FA</b-dropdown-item>\n        </b-nav-item-dropdown>\n\n        <b-nav-item-dropdown right>\n          <!-- Using 'button-content' slot -->\n          <template v-slot:button-content>\n            <em>User</em>\n          </template>\n          <b-dropdown-item href=\"#\">Profile</b-dropdown-item>\n          <b-dropdown-item href=\"#\">Sign Out</b-dropdown-item>\n        </b-nav-item-dropdown>\n      </b-navbar-nav>\n    </b-collapse>\n  </b-navbar>\n</div>"
      },
      code2: {
        html: "<div>\n  <b-navbar toggleable=\"sm\" type=\"light\" variant=\"light\">\n    <b-navbar-toggle target=\"nav-text-collapse\"></b-navbar-toggle>\n\n    <b-navbar-brand>BootstrapVue</b-navbar-brand>\n\n    <b-collapse id=\"nav-text-collapse\" is-nav>\n      <b-navbar-nav>\n        <b-nav-text>Navbar text</b-nav-text>\n      </b-navbar-nav>\n    </b-collapse>\n  </b-navbar>\n</div>"
      },
      code3: {
        html: "<div>\n  <b-navbar type=\"dark\" variant=\"dark\">\n    <b-navbar-nav>\n      <b-nav-item href=\"#\">Home</b-nav-item>\n\n      <!-- Navbar dropdowns -->\n      <b-nav-item-dropdown text=\"Lang\" right>\n        <b-dropdown-item href=\"#\">EN</b-dropdown-item>\n        <b-dropdown-item href=\"#\">ES</b-dropdown-item>\n        <b-dropdown-item href=\"#\">RU</b-dropdown-item>\n        <b-dropdown-item href=\"#\">FA</b-dropdown-item>\n      </b-nav-item-dropdown>\n\n      <b-nav-item-dropdown text=\"User\" right>\n        <b-dropdown-item href=\"#\">Account</b-dropdown-item>\n        <b-dropdown-item href=\"#\">Settings</b-dropdown-item>\n      </b-nav-item-dropdown>\n    </b-navbar-nav>\n  </b-navbar>\n</div>"
      },
      code4: {
        html: "<div>\n  <b-navbar type=\"light\" variant=\"light\">\n    <b-nav-form>\n      <b-form-input class=\"mr-sm-2\" placeholder=\"Search\"></b-form-input>\n      <b-button variant=\"outline-success\" class=\"my-2 my-sm-0\" type=\"submit\">Search</b-button>\n    </b-nav-form>\n  </b-navbar>\n</div>"
      },
      code5: {
        html: "<div>\n  <b-nav tabs justified>\n    <b-nav-item active>Active</b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Link with a long name </b-nav-item>\n    <b-nav-item disabled>Disabled</b-nav-item>\n  </b-nav>\n</div>"
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
      title: "Nav",
      route: "nav"
    }, {
      title: "Navbar"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=template&id=2c7d7d34&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=template&id=2c7d7d34& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Navbar")]),
            _vm._v(
              " The component <b-navbar> is a wrapper that positions\n      branding, navigation, and other elements into a concise header. It's\n      easily extensible and thanks to the <b-collapse> component, it can\n      easily integrate responsive behaviors.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/navbar",
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
              attrs: { title: "Navbar" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-navbar",
                            {
                              attrs: {
                                toggleable: "lg",
                                type: "dark",
                                variant: "info"
                              }
                            },
                            [
                              _c("b-navbar-brand", { attrs: { href: "#" } }, [
                                _vm._v("NavBar")
                              ]),
                              _vm._v(" "),
                              _c("b-navbar-toggle", {
                                attrs: { target: "nav-collapse" }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-collapse",
                                { attrs: { id: "nav-collapse", "is-nav": "" } },
                                [
                                  _c(
                                    "b-navbar-nav",
                                    [
                                      _c(
                                        "b-nav-item",
                                        { attrs: { href: "#" } },
                                        [_vm._v("Link")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-nav-item",
                                        { attrs: { href: "#", disabled: "" } },
                                        [_vm._v("Disabled")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-navbar-nav",
                                    { staticClass: "ml-auto" },
                                    [
                                      _c(
                                        "b-nav-form",
                                        [
                                          _c("b-form-input", {
                                            staticClass: "mr-sm-2",
                                            attrs: {
                                              size: "sm",
                                              placeholder: "Search"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "b-button",
                                            {
                                              staticClass: "my-2 my-sm-0",
                                              attrs: {
                                                size: "sm",
                                                type: "submit"
                                              }
                                            },
                                            [_vm._v("Search")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-nav-item-dropdown",
                                        { attrs: { text: "Lang", right: "" } },
                                        [
                                          _c(
                                            "b-dropdown-item",
                                            { attrs: { href: "#" } },
                                            [_vm._v("EN")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            { attrs: { href: "#" } },
                                            [_vm._v("ES")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            { attrs: { href: "#" } },
                                            [_vm._v("RU")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            { attrs: { href: "#" } },
                                            [_vm._v("FA")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-nav-item-dropdown",
                                        {
                                          attrs: { right: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "button-content",
                                              fn: function() {
                                                return [
                                                  _c("em", [_vm._v("User")])
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ])
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            { attrs: { href: "#" } },
                                            [_vm._v("Profile")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-dropdown-item",
                                            { attrs: { href: "#" } },
                                            [_vm._v("Sign Out")]
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
              scopedSlots: _vm._u([
                {
                  key: "title",
                  fn: function() {
                    return [_c("code", [_vm._v("<b-nav-text>")])]
                  },
                  proxy: true
                },
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Navbars may contain bits of text with the help of\n            "
                        ),
                        _c("code", [_vm._v("<b-nav-text>")]),
                        _vm._v(
                          ". This component adjusts vertical\n            alignment and horizontal spacing for strings of text.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-navbar",
                            {
                              attrs: {
                                toggleable: "sm",
                                type: "light",
                                variant: "light"
                              }
                            },
                            [
                              _c("b-navbar-toggle", {
                                attrs: { target: "nav-text-collapse" }
                              }),
                              _vm._v(" "),
                              _c("b-navbar-brand", [_vm._v("BootstrapVue")]),
                              _vm._v(" "),
                              _c(
                                "b-collapse",
                                {
                                  attrs: {
                                    id: "nav-text-collapse",
                                    "is-nav": ""
                                  }
                                },
                                [
                                  _c(
                                    "b-navbar-nav",
                                    [_c("b-nav-text", [_vm._v("Navbar text")])],
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
              scopedSlots: _vm._u([
                {
                  key: "title",
                  fn: function() {
                    return [_c("code", [_vm._v("<b-nav-item-dropdown>")])]
                  },
                  proxy: true
                },
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "p",
                        [
                          _vm._v("\n            For "),
                          _c("code", [_vm._v("<b-nav-item-dropdown>")]),
                          _vm._v(" usage, see the\n            "),
                          _c(
                            "router-link",
                            { attrs: { to: "/vue-bootstrap/dropdown" } },
                            [_c("code", [_vm._v("<b-dropdown>")])]
                          ),
                          _vm._v(
                            "\n            docs. Note split dropdowns are not supported in\n            "
                          ),
                          _c("code", [_vm._v("<b-navbar>")]),
                          _vm._v(" and\n            "),
                          _c("code", [_vm._v("<b-navbar-nav>")]),
                          _vm._v(".\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-navbar",
                            { attrs: { type: "dark", variant: "dark" } },
                            [
                              _c(
                                "b-navbar-nav",
                                [
                                  _c("b-nav-item", { attrs: { href: "#" } }, [
                                    _vm._v("Home")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-nav-item-dropdown",
                                    { attrs: { text: "Lang", right: "" } },
                                    [
                                      _c(
                                        "b-dropdown-item",
                                        { attrs: { href: "#" } },
                                        [_vm._v("EN")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-dropdown-item",
                                        { attrs: { href: "#" } },
                                        [_vm._v("ES")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-dropdown-item",
                                        { attrs: { href: "#" } },
                                        [_vm._v("RU")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-dropdown-item",
                                        { attrs: { href: "#" } },
                                        [_vm._v("FA")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-nav-item-dropdown",
                                    { attrs: { text: "User", right: "" } },
                                    [
                                      _c(
                                        "b-dropdown-item",
                                        { attrs: { href: "#" } },
                                        [_vm._v("Account")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-dropdown-item",
                                        { attrs: { href: "#" } },
                                        [_vm._v("Settings")]
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
              scopedSlots: _vm._u([
                {
                  key: "title",
                  fn: function() {
                    return [_c("code", [_vm._v("<b-nav-form>")])]
                  },
                  proxy: true
                },
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Use "),
                        _c("code", [_vm._v("<b-nav-form>")]),
                        _vm._v(
                          " to place inline form controls\n            into your navbar.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-navbar",
                            { attrs: { type: "light", variant: "light" } },
                            [
                              _c(
                                "b-nav-form",
                                [
                                  _c("b-form-input", {
                                    staticClass: "mr-sm-2",
                                    attrs: { placeholder: "Search" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "my-2 my-sm-0",
                                      attrs: {
                                        variant: "outline-success",
                                        type: "submit"
                                      }
                                    },
                                    [_vm._v("Search")]
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Navbar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Navbar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_2c7d7d34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=2c7d7d34& */ "./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=template&id=2c7d7d34&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_2c7d7d34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_2c7d7d34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=template&id=2c7d7d34&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=template&id=2c7d7d34& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_2c7d7d34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=2c7d7d34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Navbar.vue?vue&type=template&id=2c7d7d34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_2c7d7d34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_2c7d7d34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);