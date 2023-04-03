(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<v-row justify=\"space-around\">\n\n  <v-avatar color=\"indigo\" size=\"36\">\n    <span class=\"white--text headline\">36</span>\n  </v-avatar>\n\n  <v-avatar color=\"teal\" size=\"48\">\n    <span class=\"white--text headline\">48</span>\n  </v-avatar>\n\n  <v-avatar color=\"orange\" size=\"62\">\n    <span class=\"white--text headline\">62</span>\n  </v-avatar>\n\n</v-row>"
      },
      code2: {
        html: "<v-row justify=\"space-around\">\n\n  <v-avatar color=\"indigo\">\n    <v-icon dark>mdi-account-circle</v-icon>\n  </v-avatar>\n\n  <v-avatar>\n    <img\n      src=\"media/users/100_4.jpg\"\n      alt=\"Sean\"\n    >\n  </v-avatar>\n\n  <v-avatar color=\"red\">\n    <span class=\"white--text headline\">CJ</span>\n  </v-avatar>\n\n</v-row>"
      },
      code3: {
        html: "<v-card\n  class=\"mx-auto\"\n  max-width=\"434\"\n  tile\n>\n  <v-img\n    height=\"100%\"\n    src=\"media/stock-600x400/img-32.jpg\"\n  >\n    <v-row\n      align=\"end\"\n      class=\"fill-height\"\n    >\n      <v-col\n        align-self=\"start\"\n        class=\"pa-0\"\n        cols=\"12\"\n      >\n        <v-avatar\n          class=\"profile\"\n          color=\"grey\"\n          size=\"164\"\n          tile\n        >\n          <v-img src=\"media/users/300_21.jpg\"></v-img>\n        </v-avatar>\n      </v-col>\n      <v-col class=\"py-0\">\n        <v-list-item\n          color=\"rgba(0, 0, 0, .4)\"\n          dark\n        >\n          <v-list-item-content>\n            <v-list-item-title class=\"title\">Sarah Obrien</v-list-item-title>\n            <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>\n          </v-list-item-content>\n        </v-list-item>\n      </v-col>\n    </v-row>\n  </v-img>\n</v-card>"
      },
      code4: {
        html: "<v-container fluid>\n  <v-row justify=\"center\">\n    <v-subheader>Today</v-subheader>\n\n    <v-expansion-panels popout>\n      <v-expansion-panel\n        v-for=\"(message, i) in messages\"\n        :key=\"i\"\n        hide-actions\n      >\n        <v-expansion-panel-header>\n          <v-row\n            align=\"center\"\n            class=\"spacer\"\n            no-gutters\n          >\n            <v-col\n              cols=\"4\"\n              sm=\"2\"\n              md=\"1\"\n            >\n              <v-avatar\n                size=\"36px\"\n              >\n                <img\n                  v-if=\"message.avatar\"\n                  alt=\"Avatar\"\n                  src=\"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460\"\n                >\n                <v-icon\n                  v-else\n                  :color=\"message.color\"\n                  v-text=\"message.icon\"\n                ></v-icon>\n              </v-avatar>\n            </v-col>\n\n            <v-col\n              class=\"hidden-xs-only\"\n              sm=\"5\"\n              md=\"3\"\n            >\n              <strong v-html=\"message.name\"></strong>\n              <span\n                v-if=\"message.total\"\n                class=\"grey--text\"\n              >\n                &nbsp;({{ message.total }})\n              </span>\n            </v-col>\n\n            <v-col\n              class=\"text-no-wrap\"\n              cols=\"5\"\n              sm=\"3\"\n            >\n              <v-chip\n                v-if=\"message.new\"\n                :color=\"`${message.color} lighten-4`\"\n                class=\"ml-0 mr-2 black--text\"\n                label\n                small\n              >\n                {{ message.new }} new\n              </v-chip>\n              <strong v-html=\"message.title\"></strong>\n            </v-col>\n\n            <v-col\n              v-if=\"message.excerpt\"\n              class=\"grey--text text-truncate hidden-sm-and-down\"\n            >\n              &mdash;\n              {{ message.excerpt }}\n            </v-col>\n          </v-row>\n        </v-expansion-panel-header>\n\n        <v-expansion-panel-content>\n          <v-divider></v-divider>\n          <v-card-text v-text=\"lorem\"></v-card-text>\n        </v-expansion-panel-content>\n      </v-expansion-panel>\n    </v-expansion-panels>\n  </v-row>\n</v-container>",
        js: "export default {\n    data: () => ({\n      messages: [\n        {\n          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',\n          name: 'Sean Paul',\n          title: 'Welcome to Vuetify.js!',\n          excerpt: 'Thank you for joining our community...',\n        },\n        {\n          color: 'red',\n          icon: 'people',\n          name: 'Social',\n          new: 1,\n          total: 3,\n          title: 'Twitter',\n        },\n        {\n          color: 'teal',\n          icon: 'local_offer',\n          name: 'Promos',\n          new: 2,\n          total: 4,\n          title: 'Shop your way',\n          exceprt: 'New deals available, Join Today',\n        },\n      ],\n      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',\n    }),\n  }",
        messages: [{
          avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          name: "Sean Paul",
          title: "Welcome to Vuetify.js!",
          excerpt: "Thank you for joining our community..."
        }, {
          color: "red",
          icon: "people",
          name: "Social",
          "new": 1,
          total: 3,
          title: "Twitter"
        }, {
          color: "teal",
          icon: "local_offer",
          name: "Promos",
          "new": 2,
          total: 4,
          title: "Shop your way",
          exceprt: "New deals available, Join Today"
        }],
        lorem: "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum."
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
      title: "Avatars"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=template&id=1e5f7a26&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=template&id=1e5f7a26& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Avatars")]),
            _vm._v(
              " The v-avatar component is typically used to display\n      circular user profile pictures. This component will allow you to\n      dynamically size and add a border radius of responsive images, icons,\n      and text. A tile variation is available for displaying an avatar without\n      border radius.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/avatars",
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
              attrs: { title: "Size" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("size")]),
                        _vm._v(
                          " prop allows you to define the height and\n            width of "
                        ),
                        _c("code", [_vm._v("v-avatar")]),
                        _vm._v(
                          ". This prop scales both evenly with\n            an aspect ratio of 1. "
                        ),
                        _c("code", [_vm._v("height")]),
                        _vm._v(" and\n            "),
                        _c("code", [_vm._v("width")]),
                        _vm._v(" props will override this prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { justify: "space-around" } },
                        [
                          _c(
                            "v-avatar",
                            { attrs: { color: "indigo", size: "36" } },
                            [
                              _c(
                                "span",
                                { staticClass: "white--text headline" },
                                [_vm._v("36")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-avatar",
                            { attrs: { color: "teal", size: "48" } },
                            [
                              _c(
                                "span",
                                { staticClass: "white--text headline" },
                                [_vm._v("48")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-avatar",
                            { attrs: { color: "orange", size: "62" } },
                            [
                              _c(
                                "span",
                                { staticClass: "white--text headline" },
                                [_vm._v("62")]
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
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Profile Card" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Using the "),
                        _c("code", [_vm._v("tile")]),
                        _vm._v(
                          " prop, we can create a sleek hard-lined\n            profile card.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "434", tile: "" }
                        },
                        [
                          _c(
                            "v-img",
                            {
                              attrs: {
                                height: "100%",
                                src: "media/stock-600x400/img-32.jpg"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                {
                                  staticClass: "fill-height",
                                  attrs: { align: "end" }
                                },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pa-0",
                                      attrs: {
                                        "align-self": "start",
                                        cols: "12"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-avatar",
                                        {
                                          staticClass: "profile",
                                          attrs: {
                                            color: "grey",
                                            size: "164",
                                            tile: ""
                                          }
                                        },
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              src: "media/users/300_21.jpg"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { staticClass: "py-0" },
                                    [
                                      _c(
                                        "v-list-item",
                                        {
                                          attrs: {
                                            color: "rgba(0, 0, 0, .4)",
                                            dark: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c(
                                                "v-list-item-title",
                                                { staticClass: "title" },
                                                [_vm._v("Marcus Obrien")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", [
                                                _vm._v("Network Engineer")
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
              attrs: { title: "Default slot" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-avatar")]),
                        _vm._v(" default slot will accept the\n            "),
                        _c("code", [_vm._v("v-icon")]),
                        _vm._v(
                          " component, an image, or text. Mix and match\n            these with other props to create something unique.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { justify: "space-around" } },
                        [
                          _c(
                            "v-avatar",
                            { attrs: { color: "indigo" } },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-account-circle")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-avatar", [
                            _c("img", {
                              attrs: {
                                src: "media/users/100_4.jpg",
                                alt: "Sean"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("v-avatar", { attrs: { color: "red" } }, [
                            _c(
                              "span",
                              { staticClass: "white--text headline" },
                              [_vm._v("CJ")]
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
              attrs: { title: "Advanced usage" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Combining an avatar with other components allows you to build\n            beautiful user interfaces right out of the box.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { justify: "center" } },
                            [
                              _c("v-subheader", [_vm._v("Today")]),
                              _vm._v(" "),
                              _c(
                                "v-expansion-panels",
                                { attrs: { popout: "" } },
                                _vm._l(_vm.code4.messages, function(
                                  message,
                                  i
                                ) {
                                  return _c(
                                    "v-expansion-panel",
                                    { key: i, attrs: { "hide-actions": "" } },
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        [
                                          _c(
                                            "v-row",
                                            {
                                              staticClass: "spacer",
                                              attrs: {
                                                align: "center",
                                                "no-gutters": ""
                                              }
                                            },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "4",
                                                    sm: "2",
                                                    md: "1"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-avatar",
                                                    { attrs: { size: "36px" } },
                                                    [
                                                      message.avatar
                                                        ? _c("img", {
                                                            attrs: {
                                                              alt: "Avatar",
                                                              src:
                                                                "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                            }
                                                          })
                                                        : _c("v-icon", {
                                                            attrs: {
                                                              color:
                                                                message.color
                                                            },
                                                            domProps: {
                                                              textContent: _vm._s(
                                                                message.icon
                                                              )
                                                            }
                                                          })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "hidden-xs-only",
                                                  attrs: { sm: "5", md: "3" }
                                                },
                                                [
                                                  _c("strong", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        message.name
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  message.total
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "grey--text"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                           (" +
                                                              _vm._s(
                                                                message.total
                                                              ) +
                                                              ")\n                        "
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "text-no-wrap",
                                                  attrs: { cols: "5", sm: "3" }
                                                },
                                                [
                                                  message.new
                                                    ? _c(
                                                        "v-chip",
                                                        {
                                                          staticClass:
                                                            "ml-0 mr-2 black--text",
                                                          attrs: {
                                                            color:
                                                              message.color +
                                                              " lighten-4",
                                                            label: "",
                                                            small: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                          " +
                                                              _vm._s(
                                                                message.new
                                                              ) +
                                                              " new\n                        "
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c("strong", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        message.title
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              message.excerpt
                                                ? _c(
                                                    "v-col",
                                                    {
                                                      staticClass:
                                                        "grey--text text-truncate hidden-sm-and-down"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        —\n                        " +
                                                          _vm._s(
                                                            message.excerpt
                                                          ) +
                                                          "\n                      "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c("v-divider"),
                                          _vm._v(" "),
                                          _c("v-card-text", {
                                            domProps: {
                                              textContent: _vm._s(
                                                _vm.code4.lorem
                                              )
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
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

/***/ "./resources/js/src/view/pages/vuetify/Avatars.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Avatars.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatars_vue_vue_type_template_id_1e5f7a26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatars.vue?vue&type=template&id=1e5f7a26& */ "./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=template&id=1e5f7a26&");
/* harmony import */ var _Avatars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatars.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Avatars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Avatars_vue_vue_type_template_id_1e5f7a26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Avatars_vue_vue_type_template_id_1e5f7a26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/Avatars.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatars.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=template&id=1e5f7a26&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=template&id=1e5f7a26& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatars_vue_vue_type_template_id_1e5f7a26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatars.vue?vue&type=template&id=1e5f7a26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Avatars.vue?vue&type=template&id=1e5f7a26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatars_vue_vue_type_template_id_1e5f7a26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatars_vue_vue_type_template_id_1e5f7a26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);