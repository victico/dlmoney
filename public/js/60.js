(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div class=\"text-center my-3\">\n  <b-button v-b-popover.hover.top=\"'I am popover directive content!'\" title=\"Popover Title\">\n    Hover Me\n  </b-button>\n\n  <b-button id=\"popover-target-1\">\n    Hover Me\n  </b-button>\n  <b-popover target=\"popover-target-1\" triggers=\"hover\" placement=\"top\">\n    <template v-slot:title>Popover Title</template>\n    I am popover <b>component</b> content!\n  </b-popover>\n</div>"
      },
      code2: {
        html: "<b-container fluid>\n" + '    <h5 class="my-3">Placement</h5>\n' + "    <b-row>\n" + "      <b-col\n" + '        v-for="placement in placements"\n' + '        :key="placement"\n' + '        md="4"\n' + '        class="py-4 text-center"\n' + "      >\n" + '        <b-button :id="`popover-1-${placement}`" variant="primary">{{ placement }}</b-button>\n' + "        <b-popover\n" + '          :target="`popover-1-${placement}`"\n' + '          :placement="placement"\n' + '          title="Popover!"\n' + '          triggers="hover focus"\n' + '          :content="`Placement ${placement}`"\n' + "        ></b-popover>\n" + "      </b-col>\n" + "    </b-row>\n" + "\n" + '    <h5 class="my-3">Content via properties or slots</h5>\n' + "    <b-row>\n" + '      <b-col md="6" class="py-4 text-center">\n' + '        <b-button id="popover-2" variant="primary">Using properties</b-button>\n' + "        <b-popover\n" + '          target="popover-2"\n' + '          title="Prop Examples"\n' + '          triggers="hover focus"\n' + '          content="Embedding content using properties is easy"\n' + "        ></b-popover>\n" + "      </b-col>\n" + "\n" + '      <b-col md="6" class="py-4 text-center">\n' + '        <b-button id="popover-3" variant="primary">Using slots</b-button>\n' + '        <b-popover target="popover-3" triggers="hover focus">\n' + "          <template v-slot:title>Content via Slots</template>\n" + '          Embedding content <span class="text-danger">using slots</span> affords you\n' + "          <em>greater <strong>control.</strong></em> and basic HTML support.\n" + "        </b-popover>\n" + "      </b-col>\n" + "    </b-row>\n" + "  </b-container>",
        js: "export default {\n    data() {\n      return {\n        placements: [\n          'topright',\n          'top',\n          'topleft',\n          'bottomright',\n          'bottom',\n          'bottomleft',\n          'righttop',\n          'right',\n          'lefttop',\n          'rightbottom',\n          'left',\n          'leftbottom'\n        ]\n      }\n    }"
      },
      placements: ["topright", "top", "topleft", "bottomright", "bottom", "bottomleft", "righttop", "right", "lefttop", "rightbottom", "left", "leftbottom"],
      code3: {
        html: "<div class=\"text-center\">\n  <b-button id=\"popover-button-variant\">Button</b-button>\n  <b-popover target=\"popover-button-variant\" variant=\"danger\" triggers=\"focus\">\n    <template v-slot:title>Danger!</template>\n    Danger variant popover\n  </b-popover>\n</div>"
      },
      code4: {
        html: "<div class=\"d-flex flex-column text-md-center\">\n    <div class=\"p-2\">\n      <b-button id=\"popover-button-sync\" variant=\"primary\">I have a popover</b-button>\n    </div>\n\n    <div class=\"p-2\">\n      <b-button class=\"px-1\" @click=\"show = !show\">Toggle Popover</b-button>\n\n      <b-popover :show.sync=\"show\" target=\"popover-button-sync\" title=\"Popover\">\n        Hello <strong>World!</strong>\n      </b-popover>\n    </div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        show: false\n      }\n    }\n  }"
      },
      show: false,
      code5: {
        html: "<div class=\"d-flex flex-column text-md-center\">\n    <div class=\"p-2\">\n      <b-button id=\"popover-button-event\" variant=\"primary\">I have a popover</b-button>\n    </div>\n\n    <div class=\"p-2\">\n      <b-button class=\"px-1\" @click=\"onOpen\">Open</b-button>\n      <b-button class=\"px-1\" @click=\"onClose\">Close</b-button>\n    </div>\n\n    <b-popover ref=\"popover\" target=\"popover-button-event\" title=\"Popover\">\n      Hello <strong>World!</strong>\n    </b-popover>\n  </div>",
        js: "export default {\n    methods: {\n      onOpen() {\n        this.$refs.popover.$emit('open')\n      },\n      onClose() {\n        this.$refs.popover.$emit('close')\n      }\n    }\n  }"
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onOpen: function onOpen() {
      this.$refs.popover.$emit("open");
    },
    onClose: function onClose() {
      this.$refs.popover.$emit("close");
    }
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vue Bootstrap",
      route: "alert"
    }, {
      title: "Notify"
    }, {
      title: "Popover"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=template&id=0bb45c9e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=template&id=0bb45c9e& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Popover")]),
            _vm._v(
              " The Popover feature, which provides a tooltip-like\n      behavior, can be easily applied to any interactive element via the\n      <b-popover> component or v-b-popover directive.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/popover",
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
              attrs: { title: "Popover" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        { staticClass: "text-center my-3" },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover.hover.top",
                                  value: "I am popover directive content!",
                                  expression:
                                    "'I am popover directive content!'",
                                  modifiers: { hover: true, top: true }
                                }
                              ],
                              staticClass: "mr-3",
                              attrs: { title: "Popover Title" }
                            },
                            [_vm._v("\n              Hover Me\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { id: "popover-target-1" } },
                            [_vm._v("\n              Hover Me\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-popover",
                            {
                              attrs: {
                                target: "popover-target-1",
                                triggers: "hover",
                                placement: "top"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "title",
                                  fn: function() {
                                    return [_vm._v("Popover Title")]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v("\n              I am popover "),
                              _c("b", [_vm._v("component")]),
                              _vm._v(" content!\n            ")
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
                      _c("code", [_vm._v("<b-popover>")]),
                      _vm._v(" Component basic usage\n        ")
                    ]
                  },
                  proxy: true
                },
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "b-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("h5", { staticClass: "my-3" }, [
                            _vm._v("Placement")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            _vm._l(_vm.placements, function(placement) {
                              return _c(
                                "b-col",
                                {
                                  key: placement,
                                  staticClass: "py-4 text-center",
                                  attrs: { md: "4" }
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        id: "popover-1-" + placement,
                                        variant: "primary"
                                      }
                                    },
                                    [_vm._v(_vm._s(placement))]
                                  ),
                                  _vm._v(" "),
                                  _c("b-popover", {
                                    attrs: {
                                      target: "popover-1-" + placement,
                                      placement: placement,
                                      title: "Popover!",
                                      triggers: "hover focus",
                                      content: "Placement " + placement
                                    }
                                  })
                                ],
                                1
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("h5", { staticClass: "my-3" }, [
                            _vm._v("Content via properties or slots")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            [
                              _c(
                                "b-col",
                                {
                                  staticClass: "py-4 text-center",
                                  attrs: { md: "6" }
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        id: "popover-2",
                                        variant: "primary"
                                      }
                                    },
                                    [_vm._v("Using properties")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-popover", {
                                    attrs: {
                                      target: "popover-2",
                                      title: "Prop Examples",
                                      triggers: "hover focus",
                                      content:
                                        "Embedding content using properties is easy"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                {
                                  staticClass: "py-4 text-center",
                                  attrs: { md: "6" }
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        id: "popover-3",
                                        variant: "primary"
                                      }
                                    },
                                    [_vm._v("Using slots")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-popover",
                                    {
                                      attrs: {
                                        target: "popover-3",
                                        triggers: "hover focus"
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "title",
                                          fn: function() {
                                            return [_vm._v("Content via Slots")]
                                          },
                                          proxy: true
                                        }
                                      ])
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Embedding content\n                  "
                                      ),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("using slots")]
                                      ),
                                      _vm._v(
                                        " affords you\n                  "
                                      ),
                                      _c("em", [
                                        _vm._v("greater "),
                                        _c("strong", [_vm._v("control.")])
                                      ]),
                                      _vm._v(
                                        " and basic HTML\n                  support.\n                "
                                      )
                                    ]
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code2.js) + "\n        "
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
              attrs: { title: "Variants and custom class" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            BootstrapVue's popovers support contextual color variants via our\n            custom CSS, via the "
                        ),
                        _c("code", [_vm._v("variant")]),
                        _vm._v(" prop:\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "b-button",
                            { attrs: { id: "popover-button-variant" } },
                            [_vm._v("Button")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-popover",
                            {
                              attrs: {
                                target: "popover-button-variant",
                                variant: "danger",
                                triggers: "focus"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "title",
                                  fn: function() {
                                    return [_vm._v("Danger!")]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(
                                "\n              Danger variant popover\n            "
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
              attrs: { title: "Programmatically show and hide popover" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            You can manually control the visibility of a popover via the\n            syncable Boolean "
                        ),
                        _c("code", [_vm._v("show")]),
                        _vm._v(" prop. Setting it to\n            "),
                        _c("code", [_vm._v("true")]),
                        _vm._v(
                          " will show the popover, while setting it to\n            "
                        ),
                        _c("code", [_vm._v("false")]),
                        _vm._v(" will hide the popover.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex flex-column text-md-center" },
                        [
                          _c(
                            "div",
                            { staticClass: "p-2" },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    id: "popover-button-sync",
                                    variant: "primary"
                                  }
                                },
                                [_vm._v("I have a popover")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "p-2" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "px-1",
                                  on: {
                                    click: function($event) {
                                      _vm.show = !_vm.show
                                    }
                                  }
                                },
                                [_vm._v("Toggle Popover")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-popover",
                                {
                                  attrs: {
                                    show: _vm.show,
                                    target: "popover-button-sync",
                                    title: "Popover"
                                  },
                                  on: {
                                    "update:show": function($event) {
                                      _vm.show = $event
                                    }
                                  }
                                },
                                [
                                  _vm._v("\n                Hello "),
                                  _c("strong", [_vm._v("World!")])
                                ]
                              )
                            ],
                            1
                          )
                        ]
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Programmatic control" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Programmatic control can also be affected by submitting\n            '"
                        ),
                        _c("code", [_vm._v("enable")]),
                        _vm._v("' and '"),
                        _c("code", [_vm._v("disable")]),
                        _vm._v(
                          "' events to the\n            popover by reference.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex flex-column text-md-center" },
                        [
                          _c(
                            "div",
                            { staticClass: "p-2" },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    id: "popover-button-event",
                                    variant: "primary"
                                  }
                                },
                                [_vm._v("I have a popover")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "p-2" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "px-1 mr-3",
                                  on: { click: _vm.onOpen }
                                },
                                [_vm._v("Open")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "px-1",
                                  on: { click: _vm.onClose }
                                },
                                [_vm._v("Close")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-popover",
                            {
                              ref: "popover",
                              attrs: {
                                target: "popover-button-event",
                                title: "Popover"
                              }
                            },
                            [
                              _vm._v("\n              Hello "),
                              _c("strong", [_vm._v("World!")])
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
                        "\n          " + _vm._s(_vm.code5.html) + "\n        "
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
                        "\n          " + _vm._s(_vm.code5.js) + "\n        "
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Popover.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Popover.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popover_vue_vue_type_template_id_0bb45c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popover.vue?vue&type=template&id=0bb45c9e& */ "./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=template&id=0bb45c9e&");
/* harmony import */ var _Popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popover.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Popover_vue_vue_type_template_id_0bb45c9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Popover_vue_vue_type_template_id_0bb45c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Popover.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Popover.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=template&id=0bb45c9e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=template&id=0bb45c9e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_template_id_0bb45c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Popover.vue?vue&type=template&id=0bb45c9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Popover.vue?vue&type=template&id=0bb45c9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_template_id_0bb45c9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_template_id_0bb45c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);