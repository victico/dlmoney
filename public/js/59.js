(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      code1: {
        html: "<div class=\"overflow-auto\">\n    <b-pagination-nav :link-gen=\"linkGen\" :number-of-pages=\"10\" use-router></b-pagination-nav>\n  </div>",
        js: "export default {\n" + "    methods: {\n" + "      linkGen(pageNum) {\n" + "        return pageNum === 1 ? '?' : `?page=${pageNum}`\n" + "      }\n" + "    }\n" + "  }",
        linkGen: function linkGen(pageNum) {
          return pageNum === 1 ? "?" : "?page=".concat(pageNum);
        }
      },
      code2: {
        html: "<div class=\"overflow-auto\">\n    <b-pagination-nav\n      :link-gen=\"linkGen\"\n      :page-gen=\"pageGen\"\n      :number-of-pages=\"links.length\"\n    ></b-pagination-nav>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        links: ['#foo', '#bar', '#baz', '#faz']\n      }\n    },\n    methods: {\n      linkGen(pageNum) {\n        return this.links[pageNum - 1]\n      },\n      pageGen(pageNum) {\n        return this.links[pageNum - 1].slice(1)\n      }\n    }\n  }",
        links: ["#foo", "#bar", "#baz", "#faz"],
        linkGen: function linkGen(pageNum) {
          return _this.code2.links[pageNum - 1];
        },
        pageGen: function pageGen(pageNum) {
          return _this.code2.links[pageNum - 1].slice(1);
        }
      },
      code3: {
        html: "<b-pagination-nav :pages=\"pages1\" use-router></b-pagination-nav>\n  <b-pagination-nav :pages=\"pages2\" use-router></b-pagination-nav>\n  <b-pagination-nav :pages=\"pages3\" use-router></b-pagination-nav>",
        js: "export default {\n  data() {\n    return {\n      // Simple array of strings\n      pages1: ['?page=1', '?page=2', '?page=3'],\n      // Array of objects with string links\n      pages2: [\n        { link: '?page=1', text: 'One' },\n        { link: '?page=2', text: 'Two' },\n        { link: '?page=3', text: 'Three' }\n      ],\n      // Array of objects with router `to` locations\n      pages3: [\n        { link: { query: { page: 1 } }, text: 'Page 1' },\n        { link: { query: { page: 2 } }, text: 'Page 2' },\n        { link: { query: { page: 3 } }, text: 'Page 3' }\n      ]\n    }\n  }\n}",
        // Simple array of strings
        pages1: ["?page=1-1", "?page=1-2", "?page=1-3"],
        // Array of objects with string links
        pages2: [{
          link: "?page=2-1",
          text: "One"
        }, {
          link: "?page=2-2",
          text: "Two"
        }, {
          link: "?page=2-3",
          text: "Three"
        }],
        // Array of objects with router `to` locations
        pages3: [{
          link: {
            query: {
              page: "3-1"
            }
          },
          text: "Page 1"
        }, {
          link: {
            query: {
              page: "3-2"
            }
          },
          text: "Page 2"
        }, {
          link: {
            query: {
              page: "3-3"
            }
          },
          text: "Page 3"
        }]
      },
      code4: {
        html: "<div class=\"overflow-auto\">\n    <!-- Use text in props -->\n    <b-pagination-nav\n      number-of-pages=\"10\"\n      base-url=\"#\"\n      first-text=\"First\"\n      prev-text=\"Prev\"\n      next-text=\"Next\"\n      last-text=\"Last\"\n    ></b-pagination-nav>\n\n    <!-- Use emojis in props -->\n    <b-pagination-nav\n      number-of-pages=\"10\"\n      base-url=\"#\"\n      first-text=\"\u23EE\"\n      prev-text=\"\u23EA\"\n      next-text=\"\u23E9\"\n      last-text=\"\u23ED\"\n      class=\"mt-4\"\n    ></b-pagination-nav>\n\n    <!-- Use HTML and sub-components in slots -->\n    <b-pagination-nav\n      number-of-pages=\"10\"\n      base-url=\"#\"\n      class=\"mt-4\"\n    >\n      <template v-slot:first-text><span class=\"text-success\">First</span></template>\n      <template v-slot:prev-text><span class=\"text-danger\">Prev</span></template>\n      <template v-slot:next-text><span class=\"text-warning\">Next</span></template>\n      <template v-slot:last-text><span class=\"text-info\">Last</span></template>\n      <template v-slot:ellipsis-text>\n        <b-spinner small type=\"grow\"></b-spinner>\n        <b-spinner small type=\"grow\"></b-spinner>\n        <b-spinner small type=\"grow\"></b-spinner>\n      </template>\n      <template v-slot:page=\"{ page, active }\">\n        <b v-if=\"active\">{{ page }}</b>\n        <i v-else>{{ page }}</i>\n      </template>\n    </b-pagination-nav>\n  </div>"
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {},
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vue Bootstrap",
      route: "alert"
    }, {
      title: "Pagination",
      route: "pagination"
    }, {
      title: "Pagination Nav"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=template&id=9765b596&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=template&id=9765b596& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Pagination Navigation")]),
            _vm._v(
              " Quick first, previous, next, last, and page\n      buttons for navigation based pagination, supporting regular links or\n      router links.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/pagination-nav",
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
              attrs: { title: "Pagination Navigation" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _c("code", [_vm._v("b-pagination-nav")]),
                        _vm._v(
                          " will try and auto-detect which page\n            link is active page button based on the current page's URL (via\n            either "
                        ),
                        _c("code", [_vm._v("$route")]),
                        _vm._v(" detection or, if no\n            "),
                        _c("code", [_vm._v("$router")]),
                        _vm._v(
                          " detected, the browser location URL).\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "overflow-auto" },
                        [
                          _c("b-pagination-nav", {
                            attrs: {
                              "link-gen": _vm.code1.linkGen,
                              "number-of-pages": 10,
                              "use-router": ""
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Page number generation" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            By default, "),
                        _c("code", [_vm._v("<b-pagination-nav>")]),
                        _vm._v(
                          " renders page\n            numbers (1-N) in the page link buttons. You can override this\n            behaviour by supplying a function reference to the\n            "
                        ),
                        _c("code", [_vm._v("page-gen")]),
                        _vm._v(
                          " property. The function reference should\n            accept a single argument which is a page number (1-N). The\n            "
                        ),
                        _c("code", [_vm._v("page-gen")]),
                        _vm._v(" function should return a string.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "overflow-auto" },
                        [
                          _c("b-pagination-nav", {
                            attrs: {
                              "link-gen": _vm.code2.linkGen,
                              "page-gen": _vm.code2.pageGen,
                              "number-of-pages": _vm.code2.links.length
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Providing an array of pages" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Rather than using "),
                        _c("code", [_vm._v("number-of-pages")]),
                        _vm._v(
                          " to auto generate\n            page links, you can pass an array of links via the pages prop.\n            When the "
                        ),
                        _c("code", [_vm._v("pages")]),
                        _vm._v(
                          " prop has an array of length 1 or\n            greater, it will be used to generate the page links.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-pagination-nav", {
                        attrs: { pages: _vm.code3.pages1, "use-router": "" }
                      }),
                      _vm._v(" "),
                      _c("b-pagination-nav", {
                        attrs: { pages: _vm.code3.pages2, "use-router": "" }
                      }),
                      _vm._v(" "),
                      _c("b-pagination-nav", {
                        attrs: { pages: _vm.code3.pages3, "use-router": "" }
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
              attrs: { title: "Button content" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _c("code", [_vm._v("<b-pagination-nav>")]),
                        _vm._v(
                          " supports several props/slots\n            that allow you to customize the appearance. All\n            "
                        ),
                        _c("code", [_vm._v("*-text")]),
                        _vm._v(
                          " props are text-only and strip out HTML but you\n            can use their equally named slot counterparts for that.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "overflow-auto" },
                        [
                          _c("b-pagination-nav", {
                            attrs: {
                              "number-of-pages": "10",
                              "base-url": "#",
                              "first-text": "First",
                              "prev-text": "Prev",
                              "next-text": "Next",
                              "last-text": "Last"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-pagination-nav", {
                            staticClass: "mt-4",
                            attrs: {
                              "number-of-pages": "10",
                              "base-url": "#",
                              "first-text": "⏮",
                              "prev-text": "⏪",
                              "next-text": "⏩",
                              "last-text": "⏭"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-pagination-nav", {
                            staticClass: "mt-4",
                            attrs: { "number-of-pages": "10", "base-url": "#" },
                            scopedSlots: _vm._u([
                              {
                                key: "first-text",
                                fn: function() {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "text-success" },
                                      [_vm._v("First")]
                                    )
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "prev-text",
                                fn: function() {
                                  return [
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("Prev")
                                    ])
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "next-text",
                                fn: function() {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "text-warning" },
                                      [_vm._v("Next")]
                                    )
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "last-text",
                                fn: function() {
                                  return [
                                    _c("span", { staticClass: "text-info" }, [
                                      _vm._v("Last")
                                    ])
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "ellipsis-text",
                                fn: function() {
                                  return [
                                    _c("b-spinner", {
                                      attrs: { small: "", type: "grow" }
                                    }),
                                    _vm._v(" "),
                                    _c("b-spinner", {
                                      attrs: { small: "", type: "grow" }
                                    }),
                                    _vm._v(" "),
                                    _c("b-spinner", {
                                      attrs: { small: "", type: "grow" }
                                    })
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "page",
                                fn: function(ref) {
                                  var page = ref.page
                                  var active = ref.active
                                  return [
                                    active
                                      ? _c("b", [_vm._v(_vm._s(page))])
                                      : _c("i", [_vm._v(_vm._s(page))])
                                  ]
                                }
                              }
                            ])
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationNav_vue_vue_type_template_id_9765b596___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationNav.vue?vue&type=template&id=9765b596& */ "./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=template&id=9765b596&");
/* harmony import */ var _PaginationNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationNav.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationNav_vue_vue_type_template_id_9765b596___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationNav_vue_vue_type_template_id_9765b596___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=template&id=9765b596&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=template&id=9765b596& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationNav_vue_vue_type_template_id_9765b596___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationNav.vue?vue&type=template&id=9765b596& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/PaginationNav.vue?vue&type=template&id=9765b596&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationNav_vue_vue_type_template_id_9765b596___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationNav_vue_vue_type_template_id_9765b596___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);