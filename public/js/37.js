(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      slide: 0,
      sliding: null,
      html1: "<div>\n    <b-carousel\n      id=\"carousel-1\"\n      v-model=\"slide\"\n      :interval=\"4000\"\n      controls\n      indicators\n      background=\"#ababab\"\n      img-width=\"1024\"\n      img-height=\"480\"\n      style=\"text-shadow: 1px 1px 2px #333;\"\n      @sliding-start=\"onSlideStart\"\n      @sliding-end=\"onSlideEnd\"\n    >\n      <!-- Text slides with image -->\n      <b-carousel-slide\n        caption=\"First slide\"\n        text=\"Nulla vitae elit libero, a pharetra augue mollis interdum.\"\n        img-src=\"https://picsum.photos/1024/480/?image=52\"\n      ></b-carousel-slide>\n\n      <!-- Slides with custom text -->\n      <b-carousel-slide img-src=\"https://picsum.photos/1024/480/?image=54\">\n        <h1>Hello world!</h1>\n      </b-carousel-slide>\n\n      <!-- Slides with image only -->\n      <b-carousel-slide img-src=\"https://picsum.photos/1024/480/?image=58\"></b-carousel-slide>\n\n      <!-- Slides with img slot -->\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\n      <b-carousel-slide>\n        <template v-slot:img>\n          <img\n            class=\"d-block img-fluid w-100\"\n            width=\"1024\"\n            height=\"480\"\n            src=\"https://picsum.photos/1024/480/?image=55\"\n            alt=\"image slot\"\n          >\n        </template>\n      </b-carousel-slide>\n\n      <!-- Slide with blank fluid image to maintain slide aspect ratio -->\n      <b-carousel-slide caption=\"Blank Image\" img-blank img-alt=\"Blank image\">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\n        </p>\n      </b-carousel-slide>\n    </b-carousel>\n\n    <p class=\"mt-4\">\n      Slide #: {{ slide }}<br>\n      Sliding: {{ sliding }}\n    </p>\n  </div>",
      js1: "\n  export default {\n    data() {\n      return {\n        slide: 0,\n        sliding: null\n      }\n    },\n    methods: {\n      onSlideStart(slide) {\n        this.sliding = true\n      },\n      onSlideEnd(slide) {\n        this.sliding = false\n      }\n    }\n  }"
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
      title: "Carousel"
    }]);
  },
  methods: {
    onSlideStart: function onSlideStart()
    /*slide*/
    {
      // console.log(slide);
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd()
    /*slide*/
    {
      // console.log(slide);
      this.sliding = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=template&id=14702784&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=template&id=14702784& ***!
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
            _c("b", [_vm._v("Carousel")]),
            _vm._v(
              " The carousel is a slideshow for cycling through a series\n      of content, built with CSS 3D transforms. It works with a series of\n      images, text, or custom markup. It also includes support for\n      previous/next controls and indicators.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/carousel",
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
              attrs: { title: "Carousel" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-carousel",
                            {
                              staticStyle: {
                                "text-shadow": "1px 1px 2px #333"
                              },
                              attrs: {
                                id: "carousel-1",
                                interval: 4000,
                                controls: "",
                                indicators: "",
                                background: "#ababab",
                                "img-width": "1024",
                                "img-height": "480"
                              },
                              on: {
                                "sliding-start": _vm.onSlideStart,
                                "sliding-end": _vm.onSlideEnd
                              },
                              model: {
                                value: _vm.slide,
                                callback: function($$v) {
                                  _vm.slide = $$v
                                },
                                expression: "slide"
                              }
                            },
                            [
                              _c("b-carousel-slide", {
                                attrs: {
                                  caption: "First slide",
                                  text:
                                    "Nulla vitae elit libero, a pharetra augue mollis interdum.",
                                  "img-src":
                                    "https://picsum.photos/1024/480/?image=52"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-carousel-slide",
                                {
                                  attrs: {
                                    "img-src":
                                      "https://picsum.photos/1024/480/?image=54"
                                  }
                                },
                                [_c("h1", [_vm._v("Hello world!")])]
                              ),
                              _vm._v(" "),
                              _c("b-carousel-slide", {
                                attrs: {
                                  "img-src":
                                    "https://picsum.photos/1024/480/?image=58"
                                }
                              }),
                              _vm._v(" "),
                              _c("b-carousel-slide", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "img",
                                    fn: function() {
                                      return [
                                        _c("img", {
                                          staticClass:
                                            "d-block img-fluid w-100",
                                          attrs: {
                                            width: "1024",
                                            height: "480",
                                            src:
                                              "https://picsum.photos/1024/480/?image=55",
                                            alt: "image slot"
                                          }
                                        })
                                      ]
                                    },
                                    proxy: true
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c(
                                "b-carousel-slide",
                                {
                                  attrs: {
                                    caption: "Blank Image",
                                    "img-blank": "",
                                    "img-alt": "Blank image"
                                  }
                                },
                                [
                                  _c("p", [
                                    _vm._v(
                                      "\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                  Suspendisse eros felis, tincidunt a tincidunt eget,\n                  convallis vel est. Ut pellentesque ut lacus vel interdum.\n                "
                                    )
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-4" }, [
                            _vm._v(
                              "\n              Slide #: " + _vm._s(_vm.slide)
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              Sliding: " +
                                _vm._s(_vm.sliding) +
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Carousel.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Carousel.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_14702784___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=14702784& */ "./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=template&id=14702784&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_14702784___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_14702784___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=template&id=14702784&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=template&id=14702784& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_14702784___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=14702784& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Carousel.vue?vue&type=template&id=14702784&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_14702784___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_14702784___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);