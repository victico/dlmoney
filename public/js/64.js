(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        html: "<div>\n  <b-tabs content-class=\"mt-3\">\n    <b-tab title=\"First\" active><p>I'm the first tab</p></b-tab>\n    <b-tab title=\"Second\"><p>I'm the second tab</p></b-tab>\n    <b-tab title=\"Disabled\" disabled><p>I'm a disabled tab!</p></b-tab>\n  </b-tabs>\n</div>"
      },
      code2: {
        html: "<div>\n  <b-card no-body>\n    <b-tabs card>\n      <b-tab no-body title=\"Picture 1\">\n        <b-card-img bottom src=\"https://picsum.photos/600/200/?image=21\"></b-card-img>\n        <b-card-footer>Picture 1 footer</b-card-footer>\n      </b-tab>\n\n      <b-tab no-body title=\"Picture 2\">\n        <b-card-img bottom src=\"https://picsum.photos/600/200/?image=25\"></b-card-img>\n        <b-card-footer>Picture 2 footer</b-card-footer>\n      </b-tab>\n\n      <b-tab no-body title=\"Picture 3\">\n        <b-card-img bottom src=\"https://picsum.photos/600/200/?image=26\"></b-card-img>\n        <b-card-footer>Picture 3 footer</b-card-footer>\n      </b-tab>\n\n      <b-tab title=\"Text\">\n        <b-card-title>This tab does not have the <code>no-body</code> prop set</b-card-title>\n        <b-card-text>\n          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum\n          consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex\n          consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt\n          veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua\n          esse irure.\n        </b-card-text>\n      </b-tab>\n    </b-tabs>\n  </b-card>\n</div>"
      },
      code3: {
        html: "<div>\n  <b-card no-body>\n    <b-tabs pills card>\n      <b-tab title=\"Tab 1\" active><b-card-text>Tab Contents 1</b-card-text></b-tab>\n      <b-tab title=\"Tab 2\"><b-card-text>Tab Contents 2</b-card-text></b-tab>\n    </b-tabs>\n  </b-card>\n</div>"
      },
      code4: {
        html: "<div>\n  <b-tabs content-class=\"mt-3\" fill>\n    <b-tab title=\"First\" active><p>I'm the first tab</p></b-tab>\n    <b-tab title=\"Second\"><p>I'm the second tab</p></b-tab>\n    <b-tab title=\"Very, very long title\"><p>I'm the tab with the very, very long title</p></b-tab>\n    <b-tab title=\"Disabled\" disabled><p>I'm a disabled tab!</p></b-tab>\n  </b-tabs>\n</div>"
      },
      code5: {
        html: "<div>\n  <b-tabs content-class=\"mt-3\" justified>\n    <b-tab title=\"First\" active><p>I'm the first tab</p></b-tab>\n    <b-tab title=\"Second\"><p>I'm the second tab</p></b-tab>\n    <b-tab title=\"Very, very long title\"><p>I'm the tab with the very, very long title</p></b-tab>\n    <b-tab title=\"Disabled\" disabled><p>I'm a disabled tab!</p></b-tab>\n  </b-tabs>\n</div>"
      },
      code6: {
        html: "<div>\n  <b-card no-body>\n    <b-tabs pills card vertical>\n      <b-tab title=\"Tab 1\" active><b-card-text>Tab Contents 1</b-card-text></b-tab>\n      <b-tab title=\"Tab 2\"><b-card-text>Tab Contents 2</b-card-text></b-tab>\n      <b-tab title=\"Tab 3\"><b-card-text>Tab Contents 3</b-card-text></b-tab>\n    </b-tabs>\n  </b-card>\n</div>"
      },
      code7: {
        html: "<div>\n  <b-tabs>\n    <b-tab active>\n      <template v-slot:title>\n        <b-spinner type=\"grow\" small></b-spinner> I'm <i>Custom</i> <strong>Title</strong>\n      </template>\n      <p class=\"p-3\">Tab Contents 1</p>\n    </b-tab>\n\n    <b-tab>\n      <template v-slot:title>\n        <b-spinner type=\"border\" small></b-spinner> Tab 2\n      </template>\n      <p class=\"p-3\">Tab Contents 2</p>\n    </b-tab>\n  </b-tabs>\n</div>"
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
      title: ""
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=template&id=c8e13ebc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=template&id=c8e13ebc& ***!
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
            _c("b", [_vm._v("Tabs")]),
            _vm._v(
              " Create a widget of tabbable panes of local content. The tabs\n      component is built upon navs and cards internally, and provides full\n      keyboard navigation control of the tabs.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/tabs",
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
              attrs: { title: "Basic usage" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-tabs",
                            { attrs: { "content-class": "mt-3" } },
                            [
                              _c(
                                "b-tab",
                                { attrs: { title: "First", active: "" } },
                                [_c("p", [_vm._v("I'm the first tab")])]
                              ),
                              _vm._v(" "),
                              _c("b-tab", { attrs: { title: "Second" } }, [
                                _c("p", [_vm._v("I'm the second tab")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Disabled", disabled: "" } },
                                [_c("p", [_vm._v("I'm a disabled tab!")])]
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
              attrs: { title: "Pills variant" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Tabs use the "),
                        _c("code", [_vm._v("tabs")]),
                        _vm._v(" styling by default. Just add\n            "),
                        _c("code", [_vm._v("pills")]),
                        _vm._v(" property to "),
                        _c("code", [_vm._v("<b-tabs>")]),
                        _vm._v(
                          " for the\n            pill style variant.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-card",
                            { attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-tabs",
                                { attrs: { pills: "", card: "" } },
                                [
                                  _c(
                                    "b-tab",
                                    { attrs: { title: "Tab 1", active: "" } },
                                    [
                                      _c("b-card-text", [
                                        _vm._v("Tab Contents 1")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tab",
                                    { attrs: { title: "Tab 2" } },
                                    [
                                      _c("b-card-text", [
                                        _vm._v("Tab Contents 2")
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
              attrs: { title: "Fill" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            To proportionately fill all available space with your tab\n            controls, set the "
                        ),
                        _c("code", [_vm._v("fill")]),
                        _vm._v(
                          " prop. Notice that all\n            horizontal space is occupied, but not every control has the same\n            width.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-tabs",
                            { attrs: { "content-class": "mt-3", fill: "" } },
                            [
                              _c(
                                "b-tab",
                                { attrs: { title: "First", active: "" } },
                                [_c("p", [_vm._v("I'm the first tab")])]
                              ),
                              _vm._v(" "),
                              _c("b-tab", { attrs: { title: "Second" } }, [
                                _c("p", [_vm._v("I'm the second tab")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Very, very long title" } },
                                [
                                  _c("p", [
                                    _vm._v(
                                      "I'm the tab with the very, very long title"
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Disabled", disabled: "" } },
                                [_c("p", [_vm._v("I'm a disabled tab!")])]
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Justified" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            For equal-width controls, use the "
                        ),
                        _c("code", [_vm._v("justified")]),
                        _vm._v(
                          " prop\n            instead. All horizontal space will be occupied by the controls,\n            but unlike using "
                        ),
                        _c("code", [_vm._v("fill")]),
                        _vm._v(
                          " above, every control will be\n            the same width.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-tabs",
                            {
                              attrs: { "content-class": "mt-3", justified: "" }
                            },
                            [
                              _c(
                                "b-tab",
                                { attrs: { title: "First", active: "" } },
                                [_c("p", [_vm._v("I'm the first tab")])]
                              ),
                              _vm._v(" "),
                              _c("b-tab", { attrs: { title: "Second" } }, [
                                _c("p", [_vm._v("I'm the second tab")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Very, very long title" } },
                                [
                                  _c("p", [
                                    _vm._v(
                                      "I'm the tab with the very, very long title"
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Disabled", disabled: "" } },
                                [_c("p", [_vm._v("I'm a disabled tab!")])]
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
              attrs: { title: "Vertical tabs" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Have the tab controls placed on the lefthand side by setting the\n            "
                        ),
                        _c("code", [_vm._v("vertical")]),
                        _vm._v(" prop to "),
                        _c("code", [_vm._v("true")]),
                        _vm._v(
                          ". Vertical tabs\n            work with or without "
                        ),
                        _c("code", [_vm._v("card")]),
                        _vm._v(" mode enabled.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-card",
                            { attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-tabs",
                                {
                                  attrs: { pills: "", card: "", vertical: "" }
                                },
                                [
                                  _c(
                                    "b-tab",
                                    { attrs: { title: "Tab 1", active: "" } },
                                    [
                                      _c("b-card-text", [
                                        _vm._v("Tab Contents 1")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tab",
                                    { attrs: { title: "Tab 2" } },
                                    [
                                      _c("b-card-text", [
                                        _vm._v("Tab Contents 2")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tab",
                                    { attrs: { title: "Tab 3" } },
                                    [
                                      _c("b-card-text", [
                                        _vm._v("Tab Contents 3")
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
              attrs: { title: "Add custom content to tab title" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            If you want to add custom content to tab title, like HTML code,\n            icons, or another non-interactive Vue component, this possible by\n            using "
                        ),
                        _c("code", [_vm._v("title")]),
                        _vm._v(" slot of "),
                        _c("code", [_vm._v("<b-tab>")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-tabs",
                            [
                              _c(
                                "b-tab",
                                {
                                  attrs: { active: "" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "title",
                                      fn: function() {
                                        return [
                                          _c("b-spinner", {
                                            attrs: { type: "grow", small: "" }
                                          }),
                                          _vm._v(" I'm "),
                                          _c("i", [_vm._v("Custom")]),
                                          _vm._v(" "),
                                          _c("strong", [_vm._v("Title")])
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("p", { staticClass: "p-3" }, [
                                    _vm._v("Tab Contents 1")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "title",
                                      fn: function() {
                                        return [
                                          _c("b-spinner", {
                                            attrs: { type: "border", small: "" }
                                          }),
                                          _vm._v(" Tab 2\n                ")
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("p", { staticClass: "p-3" }, [
                                    _vm._v("Tab Contents 2")
                                  ])
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
                        "\n          " + _vm._s(_vm.code7.html) + "\n        "
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
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Cards integration" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Tabs support integrating with Bootstrap cards. Just add the card\n            property to "
                        ),
                        _c("code", [_vm._v("<b-tabs>")]),
                        _vm._v(" and place it inside a\n            "),
                        _c("code", [_vm._v("<b-card>")]),
                        _vm._v(
                          " component. Note that you should add\n            the "
                        ),
                        _c("code", [_vm._v("no-body")]),
                        _vm._v(" prop on the\n            "),
                        _c("code", [_vm._v("<b-card>")]),
                        _vm._v(
                          " component in order to properly\n            decorate the card header and remove the extra padding introduced\n            by "
                        ),
                        _c("code", [_vm._v("card-body")]),
                        _vm._v(".\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-card",
                            { attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-tabs",
                                { attrs: { card: "" } },
                                [
                                  _c(
                                    "b-tab",
                                    {
                                      attrs: {
                                        "no-body": "",
                                        title: "Picture 1"
                                      }
                                    },
                                    [
                                      _c("b-card-img", {
                                        attrs: {
                                          bottom: "",
                                          src:
                                            "https://picsum.photos/600/200/?image=21"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("b-card-footer", [
                                        _vm._v("Picture 1 footer")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tab",
                                    {
                                      attrs: {
                                        "no-body": "",
                                        title: "Picture 2"
                                      }
                                    },
                                    [
                                      _c("b-card-img", {
                                        attrs: {
                                          bottom: "",
                                          src:
                                            "https://picsum.photos/600/200/?image=25"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("b-card-footer", [
                                        _vm._v("Picture 2 footer")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tab",
                                    {
                                      attrs: {
                                        "no-body": "",
                                        title: "Picture 3"
                                      }
                                    },
                                    [
                                      _c("b-card-img", {
                                        attrs: {
                                          bottom: "",
                                          src:
                                            "https://picsum.photos/600/200/?image=26"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("b-card-footer", [
                                        _vm._v("Picture 3 footer")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tab",
                                    { attrs: { title: "Text" } },
                                    [
                                      _c("b-card-title", [
                                        _vm._v(
                                          "\n                    This tab does not have the "
                                        ),
                                        _c("code", [_vm._v("no-body")]),
                                        _vm._v(" prop set\n                  ")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-card-text", [
                                        _vm._v(
                                          "\n                    Quis magna Lorem anim amet ipsum do mollit sit cillum\n                    voluptate ex nulla tempor. Laborum consequat non elit enim\n                    exercitation cillum aliqua consequat id aliqua. Esse ex\n                    consectetur mollit voluptate est in duis laboris ad sit\n                    ipsum anim Lorem. Incididunt veniam velit elit elit veniam\n                    Lorem aliqua quis ullamco deserunt sit enim elit aliqua\n                    esse irure.\n                  "
                                        )
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
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Tabs.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Tabs.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_c8e13ebc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=c8e13ebc& */ "./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=template&id=c8e13ebc&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_c8e13ebc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tabs_vue_vue_type_template_id_c8e13ebc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=template&id=c8e13ebc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=template&id=c8e13ebc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_c8e13ebc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=template&id=c8e13ebc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Tabs.vue?vue&type=template&id=c8e13ebc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_c8e13ebc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_c8e13ebc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);