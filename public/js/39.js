(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      html1: "<div>\n  <b-dropdown id=\"dropdown-1\" text=\"Dropdown Button\">\n    <b-dropdown-item>First Action</b-dropdown-item>\n    <b-dropdown-item>Second Action</b-dropdown-item>\n    <b-dropdown-item>Third Action</b-dropdown-item>\n    <b-dropdown-divider></b-dropdown-divider>\n    <b-dropdown-item active>Active action</b-dropdown-item>\n    <b-dropdown-item disabled>Disabled action</b-dropdown-item>\n  </b-dropdown>\n</div>",
      html2: "<div>\n  <b-dropdown text=\"Button text via Prop\">\n    <b-dropdown-item href=\"#\">An item</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Another item</b-dropdown-item>\n  </b-dropdown>\n\n  <b-dropdown>\n    <template v-slot:button-content>\n      Custom <strong>Content</strong> with <em>HTML</em> via Slot\n    </template>\n    <b-dropdown-item href=\"#\">An item</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Another item</b-dropdown-item>\n  </b-dropdown>\n</div>",
      html3: "<div>\n  <b-dropdown id=\"dropdown-left\" text=\"Left align\" variant=\"primary\" class=\"m-2\">\n    <b-dropdown-item href=\"#\">Action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Another action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Something else here</b-dropdown-item>\n  </b-dropdown>\n\n  <b-dropdown id=\"dropdown-right\" right text=\"Right align\" variant=\"primary\" class=\"m-2\">\n    <b-dropdown-item href=\"#\">Action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Another action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Something else here</b-dropdown-item>\n  </b-dropdown>\n</div>",
      html4: "<div>\n  <b-dropdown id=\"dropdown-dropup\" dropup text=\"Drop-Up\" variant=\"primary\" class=\"m-2\">\n    <b-dropdown-item href=\"#\">Action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Another action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Something else here</b-dropdown-item>\n  </b-dropdown>\n</div>",
      html5: "<div>\n  <b-dropdown id=\"dropdown-dropright\" dropright text=\"Drop-Right\" variant=\"primary\" class=\"m-2\">\n    <b-dropdown-item href=\"#\">Action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Another action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Something else here</b-dropdown-item>\n  </b-dropdown>\n\n  <b-dropdown id=\"dropdown-dropleft\" dropleft text=\"Drop-Left\" variant=\"primary\" class=\"m-2\">\n    <b-dropdown-item href=\"#\">Action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Another action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Something else here</b-dropdown-item>\n  </b-dropdown>\n</div>",
      html6: "<div>\n  <b-dropdown split text=\"Split Dropdown\" class=\"m-2\">\n    <b-dropdown-item href=\"#\">Action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Another action</b-dropdown-item>\n    <b-dropdown-item href=\"#\">Something else here...</b-dropdown-item>\n  </b-dropdown>\n</div>",
      html7: "<div>\n  <div>\n    <b-dropdown size=\"lg\" text=\"Large\" class=\"m-2\">\n      <b-dropdown-item-button>Action</b-dropdown-item-button>\n      <b-dropdown-item-button>Another action</b-dropdown-item-button>\n      <b-dropdown-item-button>Something else here</b-dropdown-item-button>\n    </b-dropdown>\n\n    <b-dropdown size=\"lg\" split text=\"Large Split\" class=\"m-2\">\n      <b-dropdown-item-button>Action</b-dropdown-item-button>\n      <b-dropdown-item-button>Another action</b-dropdown-item-button>\n      <b-dropdown-item-button>Something else here...</b-dropdown-item-button>\n    </b-dropdown>\n  </div>\n  <div>\n    <b-dropdown size=\"sm\" text=\"Small\" class=\"m-2\">\n      <b-dropdown-item-button>Action</b-dropdown-item-button>\n      <b-dropdown-item-button>Another action</b-dropdown-item-button>\n      <b-dropdown-item-button>Something else here...</b-dropdown-item-button>\n    </b-dropdown>\n\n    <b-dropdown size=\"sm\" split text=\"Small Split\" class=\"m-2\">\n      <b-dropdown-item-button>Action</b-dropdown-item-button>\n      <b-dropdown-item-button>Another action</b-dropdown-item-button>\n      <b-dropdown-item-button>Something else here...</b-dropdown-item-button>\n    </b-dropdown>\n  </div>\n</div>"
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
      title: "Dropdown"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=template&id=1c0049b5&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=template&id=1c0049b5& ***!
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
            _c("b", [_vm._v("Dropdowns")]),
            _vm._v(
              " Dropdowns are toggleable, contextual overlays for\n      displaying lists of links and actions in a dropdown menu format.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/dropdown",
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
              attrs: { title: "Dropdowns" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                id: "dropdown-1",
                                text: "Dropdown Button"
                              }
                            },
                            [
                              _c("b-dropdown-item", [_vm._v("First Action")]),
                              _vm._v(" "),
                              _c("b-dropdown-item", [_vm._v("Second Action")]),
                              _vm._v(" "),
                              _c("b-dropdown-item", [_vm._v("Third Action")]),
                              _vm._v(" "),
                              _c("b-dropdown-divider"),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { active: "" } }, [
                                _vm._v("Active action")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { attrs: { disabled: "" } },
                                [_vm._v("Disabled action")]
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
                          "\n            " + _vm._s(_vm.html1) + "\n          "
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
              attrs: { title: "Button content" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            You can customize the text of the dropdown button by using either\n            the "
                        ),
                        _c("code", [_vm._v("text")]),
                        _vm._v(
                          " prop (shown in previous examples), or use\n            the "
                        ),
                        _c("code", [_vm._v("button-content")]),
                        _vm._v(" slot instead of the\n            "),
                        _c("code", [_vm._v("text")]),
                        _vm._v(" prop. The "),
                        _c("code", [_vm._v("button-content")]),
                        _vm._v(
                          " slot\n            allows you to use basic HTML and icons in the button content.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "mr-3",
                              attrs: { text: "Button text via Prop" }
                            },
                            [
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("An item")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Another item")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown",
                            {
                              scopedSlots: _vm._u([
                                {
                                  key: "button-content",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Custom "),
                                      _c("strong", [_vm._v("Content")]),
                                      _vm._v(" with "),
                                      _c("em", [_vm._v("HTML")]),
                                      _vm._v(" via Slot\n              ")
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("An item")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Another item")
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
              attrs: { title: "Menu alignment" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "m-2",
                              attrs: {
                                id: "dropdown-left",
                                text: "Left align",
                                variant: "primary"
                              }
                            },
                            [
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Another action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Something else here")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "m-2",
                              attrs: {
                                id: "dropdown-right",
                                right: "",
                                text: "Right align",
                                variant: "primary"
                              }
                            },
                            [
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Another action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Something else here")
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Sizing" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Dropdowns work with trigger buttons of all sizes, including\n            default and split dropdown buttons. Set the size prop to either\n            "
                        ),
                        _c("code", [_vm._v("sm")]),
                        _vm._v(" for small button(s), or "),
                        _c("code", [_vm._v("lg")]),
                        _vm._v(" for large\n            button(s).\n          ")
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          [
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "m-2",
                                attrs: { size: "lg", text: "Large" }
                              },
                              [
                                _c("b-dropdown-item-button", [
                                  _vm._v("Action")
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item-button", [
                                  _vm._v(
                                    "\n                  Another action\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item-button", [
                                  _vm._v(
                                    "\n                  Something else here\n                "
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "m-2",
                                attrs: {
                                  size: "lg",
                                  split: "",
                                  text: "Large Split"
                                }
                              },
                              [
                                _c("b-dropdown-item-button", [
                                  _vm._v("Action")
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item-button", [
                                  _vm._v(
                                    "\n                  Another action\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item-button", [
                                  _vm._v(
                                    "\n                  Something else here...\n                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "m-2",
                                attrs: { size: "sm", text: "Small" }
                              },
                              [
                                _c("b-dropdown-item-button", [
                                  _vm._v("Action")
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item-button", [
                                  _vm._v(
                                    "\n                  Another action\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item-button", [
                                  _vm._v(
                                    "\n                  Something else here...\n                "
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "m-2",
                                attrs: {
                                  size: "sm",
                                  split: "",
                                  text: "Small Split"
                                }
                              },
                              [
                                _c("b-dropdown-item-button", [
                                  _vm._v("Action")
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item-button", [
                                  _vm._v(
                                    "\n                  Another action\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item-button", [
                                  _vm._v(
                                    "\n                  Something else here...\n                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
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
                          "\n            " + _vm._s(_vm.html7) + "\n          "
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Dropup" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Turn your dropdown menu into a drop-up menu by setting the\n            "
                        ),
                        _c("code", [_vm._v("dropup")]),
                        _vm._v(" prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "m-2",
                              attrs: {
                                id: "dropdown-dropup",
                                dropup: "",
                                text: "Drop-Up",
                                variant: "primary"
                              }
                            },
                            [
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Another action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Something else here")
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
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html4) + "\n          "
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
              attrs: { title: "Drop right or left" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Turn your dropdown menu into a drop-right menu by setting the\n            "
                        ),
                        _c("code", [_vm._v("dropright")]),
                        _vm._v(
                          " prop. Or, turn it into a drop-left menu by\n            setting the "
                        ),
                        _c("code", [_vm._v("dropleft")]),
                        _vm._v(" right prop to true.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "m-2",
                              attrs: {
                                id: "dropdown-dropright",
                                dropright: "",
                                text: "Drop-Right",
                                variant: "primary"
                              }
                            },
                            [
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Another action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Something else here")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "m-2",
                              attrs: {
                                id: "dropdown-dropleft",
                                dropleft: "",
                                text: "Drop-Left",
                                variant: "primary"
                              }
                            },
                            [
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Another action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Something else here")
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
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html5) + "\n          "
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
              attrs: { title: "Split button support" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "m-2",
                              attrs: { split: "", text: "Split Dropdown" }
                            },
                            [
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v("Another action")
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                                _vm._v(
                                  "\n                Something else here...\n              "
                                )
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
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html6) + "\n          "
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_vue_vue_type_template_id_1c0049b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=1c0049b5& */ "./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=template&id=1c0049b5&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_1c0049b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdown_vue_vue_type_template_id_1c0049b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=template&id=1c0049b5&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=template&id=1c0049b5& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_1c0049b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=template&id=1c0049b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Dropdown.vue?vue&type=template&id=1c0049b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_1c0049b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_1c0049b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);