(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<v-simple-table fixed-header height=\"300px\">\n  <template v-slot:default>\n    <thead>\n      <tr>\n        <th class=\"text-left\">Name</th>\n        <th class=\"text-left\">Calories</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"item in desserts\" :key=\"item.name\">\n        <td>{{ item.name }}</td>\n        <td>{{ item.calories }}</td>\n      </tr>\n    </tbody>\n  </template>\n</v-simple-table>",
        js: "export default {\n  data () {\n    return {\n      desserts: [\n        {\n          name: 'Frozen Yogurt',\n          calories: 159,\n        },\n        {\n          name: 'Ice cream sandwich',\n          calories: 237,\n        },\n        {\n          name: 'Eclair',\n          calories: 262,\n        },\n        {\n          name: 'Cupcake',\n          calories: 305,\n        },\n        {\n          name: 'Gingerbread',\n          calories: 356,\n        },\n        {\n          name: 'Jelly bean',\n          calories: 375,\n        },\n        {\n          name: 'Lollipop',\n          calories: 392,\n        },\n        {\n          name: 'Honeycomb',\n          calories: 408,\n        },\n        {\n          name: 'Donut',\n          calories: 452,\n        },\n        {\n          name: 'KitKat',\n          calories: 518,\n        },\n      ],\n    }\n  },\n}",
        desserts: [{
          name: "Frozen Yogurt",
          calories: 159
        }, {
          name: "Ice cream sandwich",
          calories: 237
        }, {
          name: "Eclair",
          calories: 262
        }, {
          name: "Cupcake",
          calories: 305
        }, {
          name: "Gingerbread",
          calories: 356
        }, {
          name: "Jelly bean",
          calories: 375
        }, {
          name: "Lollipop",
          calories: 392
        }, {
          name: "Honeycomb",
          calories: 408
        }, {
          name: "Donut",
          calories: 452
        }, {
          name: "KitKat",
          calories: 518
        }]
      },
      code2: {
        html: "<v-simple-table dense>\n  <template v-slot:default>\n    <thead>\n      <tr>\n        <th class=\"text-left\">Name</th>\n        <th class=\"text-left\">Calories</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"item in desserts\" :key=\"item.name\">\n        <td>{{ item.name }}</td>\n        <td>{{ item.calories }}</td>\n      </tr>\n    </tbody>\n  </template>\n</v-simple-table>",
        js: "export default {\n  data () {\n    return {\n      desserts: [\n        {\n          name: 'Frozen Yogurt',\n          calories: 159,\n        },\n        {\n          name: 'Ice cream sandwich',\n          calories: 237,\n        },\n        {\n          name: 'Eclair',\n          calories: 262,\n        },\n        {\n          name: 'Cupcake',\n          calories: 305,\n        },\n        {\n          name: 'Gingerbread',\n          calories: 356,\n        },\n        {\n          name: 'Jelly bean',\n          calories: 375,\n        },\n        {\n          name: 'Lollipop',\n          calories: 392,\n        },\n        {\n          name: 'Honeycomb',\n          calories: 408,\n        },\n        {\n          name: 'Donut',\n          calories: 452,\n        },\n        {\n          name: 'KitKat',\n          calories: 518,\n        },\n      ],\n    }\n  },\n}",
        desserts: [{
          name: "Frozen Yogurt",
          calories: 159
        }, {
          name: "Ice cream sandwich",
          calories: 237
        }, {
          name: "Eclair",
          calories: 262
        }, {
          name: "Cupcake",
          calories: 305
        }, {
          name: "Gingerbread",
          calories: 356
        }, {
          name: "Jelly bean",
          calories: 375
        }, {
          name: "Lollipop",
          calories: 392
        }, {
          name: "Honeycomb",
          calories: 408
        }, {
          name: "Donut",
          calories: 452
        }, {
          name: "KitKat",
          calories: 518
        }]
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
      title: "Tables",
      route: "simple-tables"
    }, {
      title: "Simple Tables"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=template&id=424a3714&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=template&id=424a3714& ***!
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
            _c("b", [_vm._v("Simple tables")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-simple-table")]),
            _vm._v(
              " component is a\n      simple wrapper component around the "
            ),
            _c("code", [_vm._v("<table>")]),
            _vm._v(
              " element.\n      Inside the component you can use all the regular table elements such as\n      "
            ),
            _c("code", [_vm._v("<thead>")]),
            _vm._v(", "),
            _c("code", [_vm._v("<tbody>")]),
            _vm._v(",\n      "),
            _c("code", [_vm._v("<tr>")]),
            _vm._v(", etc.\n      "),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/simple-tables",
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
              attrs: { title: "Fixed height and fixed header" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Use the "),
                        _c("code", [_vm._v("fixed-header")]),
                        _vm._v(" prop together with the\n            "),
                        _c("code", [_vm._v("height")]),
                        _vm._v(
                          " prop to fix the header to the top of the\n            table.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-simple-table", {
                        attrs: { "fixed-header": "", height: "300px" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function() {
                              return [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Name")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Calories")
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.code1.desserts, function(item) {
                                    return _c("tr", { key: item.name }, [
                                      _c("td", [_vm._v(_vm._s(item.name))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.calories))])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Dense" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("v-simple-table", {
                        attrs: { dense: "" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function() {
                              return [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Name")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Calories")
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.code2.desserts, function(item) {
                                    return _c("tr", { key: item.name }, [
                                      _c("td", [_vm._v(_vm._s(item.name))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.calories))])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
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
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimpleTables_vue_vue_type_template_id_424a3714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleTables.vue?vue&type=template&id=424a3714& */ "./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=template&id=424a3714&");
/* harmony import */ var _SimpleTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleTables.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SimpleTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimpleTables_vue_vue_type_template_id_424a3714___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SimpleTables_vue_vue_type_template_id_424a3714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/tables/SimpleTables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=template&id=424a3714&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=template&id=424a3714& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTables_vue_vue_type_template_id_424a3714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleTables.vue?vue&type=template&id=424a3714& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/tables/SimpleTables.vue?vue&type=template&id=424a3714&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTables_vue_vue_type_template_id_424a3714___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTables_vue_vue_type_template_id_424a3714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);