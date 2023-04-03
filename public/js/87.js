(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<v-data-table\n  v-model=\"selected\"\n  :headers=\"headers\"\n  :items=\"desserts\"\n  :single-select=\"singleSelect\"\n  item-key=\"name\"\n  show-select\n  class=\"elevation-1\"\n>\n  <template v-slot:top>\n    <v-switch v-model=\"singleSelect\" label=\"Single select\" class=\"pa-3\"></v-switch>\n  </template>\n</v-data-table>",
        js: "export default {\n  data () {\n    return {\n      singleSelect: false,\n      selected: [],\n      headers: [\n        {\n          text: 'Dessert (100g serving)',\n          align: 'left',\n          sortable: false,\n          value: 'name',\n        },\n        { text: 'Calories', value: 'calories' },\n        { text: 'Fat (g)', value: 'fat' },\n        { text: 'Carbs (g)', value: 'carbs' },\n        { text: 'Protein (g)', value: 'protein' },\n        { text: 'Iron (%)', value: 'iron' },\n      ],\n      desserts: [\n        {\n          name: 'Frozen Yogurt',\n          calories: 159,\n          fat: 6.0,\n          carbs: 24,\n          protein: 4.0,\n          iron: '1%',\n        },\n        {\n          name: 'Ice cream sandwich',\n          calories: 237,\n          fat: 9.0,\n          carbs: 37,\n          protein: 4.3,\n          iron: '1%',\n        },\n        {\n          name: 'Eclair',\n          calories: 262,\n          fat: 16.0,\n          carbs: 23,\n          protein: 6.0,\n          iron: '7%',\n        },\n        {\n          name: 'Cupcake',\n          calories: 305,\n          fat: 3.7,\n          carbs: 67,\n          protein: 4.3,\n          iron: '8%',\n        },\n        {\n          name: 'Gingerbread',\n          calories: 356,\n          fat: 16.0,\n          carbs: 49,\n          protein: 3.9,\n          iron: '16%',\n        },\n        {\n          name: 'Jelly bean',\n          calories: 375,\n          fat: 0.0,\n          carbs: 94,\n          protein: 0.0,\n          iron: '0%',\n        },\n        {\n          name: 'Lollipop',\n          calories: 392,\n          fat: 0.2,\n          carbs: 98,\n          protein: 0,\n          iron: '2%',\n        },\n        {\n          name: 'Honeycomb',\n          calories: 408,\n          fat: 3.2,\n          carbs: 87,\n          protein: 6.5,\n          iron: '45%',\n        },\n        {\n          name: 'Donut',\n          calories: 452,\n          fat: 25.0,\n          carbs: 51,\n          protein: 4.9,\n          iron: '22%',\n        },\n        {\n          name: 'KitKat',\n          calories: 518,\n          fat: 26.0,\n          carbs: 65,\n          protein: 7,\n          iron: '6%',\n        },\n      ],\n    }\n  },\n}",
        singleSelect: false,
        selected: [],
        headers: [{
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        }, {
          text: "Calories",
          value: "calories"
        }, {
          text: "Fat (g)",
          value: "fat"
        }, {
          text: "Carbs (g)",
          value: "carbs"
        }, {
          text: "Protein (g)",
          value: "protein"
        }, {
          text: "Iron (%)",
          value: "iron"
        }],
        desserts: [{
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        }, {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        }, {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        }, {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        }, {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        }, {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        }, {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        }, {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        }, {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        }, {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }]
      },
      code2: {
        html: "<v-data-table\n  :headers=\"headers\"\n  :items=\"desserts\"\n  item-key=\"name\"\n  group-by=\"category\"\n  class=\"elevation-1\"\n  show-group-by\n></v-data-table>",
        js: "export default {\n    data () {\n      return {\n        headers: [\n          {\n            text: 'Dessert (100g serving)',\n            align: 'left',\n            value: 'name',\n          },\n          { text: 'Category', value: 'category' },\n        ],\n        desserts: [\n          {\n            name: 'Frozen Yogurt',\n            category: 'Ice cream',\n          },\n          {\n            name: 'Ice cream sandwich',\n            category: 'Ice cream',\n          },\n          {\n            name: 'Eclair',\n            category: 'Cookie',\n          },\n          {\n            name: 'Cupcake',\n            category: 'Pastry',\n          },\n          {\n            name: 'Gingerbread',\n            category: 'Cookie',\n          },\n          {\n            name: 'Jelly bean',\n            category: 'Candy',\n          },\n          {\n            name: 'Lollipop',\n            category: 'Candy',\n          },\n          {\n            name: 'Honeycomb',\n            category: 'Toffee',\n          },\n          {\n            name: 'Donut',\n            category: 'Pastry',\n          },\n          {\n            name: 'KitKat',\n            category: 'Candy',\n          },\n        ],\n      }\n    },\n  }",
        headers: [{
          text: "Dessert (100g serving)",
          align: "left",
          value: "name"
        }, {
          text: "Category",
          value: "category"
        }],
        desserts: [{
          name: "Frozen Yogurt",
          category: "Ice cream"
        }, {
          name: "Ice cream sandwich",
          category: "Ice cream"
        }, {
          name: "Eclair",
          category: "Cookie"
        }, {
          name: "Cupcake",
          category: "Pastry"
        }, {
          name: "Gingerbread",
          category: "Cookie"
        }, {
          name: "Jelly bean",
          category: "Candy"
        }, {
          name: "Lollipop",
          category: "Candy"
        }, {
          name: "Honeycomb",
          category: "Toffee"
        }, {
          name: "Donut",
          category: "Pastry"
        }, {
          name: "KitKat",
          category: "Candy"
        }]
      },
      code3: {
        html: "<v-data-table\n  :headers=\"headers\"\n  :items=\"desserts\"\n  :sort-by=\"['calories', 'fat']\"\n  :sort-desc=\"[false, true]\"\n  multi-sort\n  class=\"elevation-1\"\n></v-data-table>",
        js: " export default {\n  data () {\n    return {\n      headers: [\n        {\n          text: 'Dessert (100g serving)',\n          align: 'left',\n          sortable: false,\n          value: 'name',\n        },\n        { text: 'Calories', value: 'calories' },\n        { text: 'Fat (g)', value: 'fat' },\n        { text: 'Carbs (g)', value: 'carbs' },\n        { text: 'Protein (g)', value: 'protein' },\n        { text: 'Iron (%)', value: 'iron' },\n      ],\n      desserts: [\n        {\n          name: 'Frozen Yogurt',\n          calories: 200,\n          fat: 6.0,\n          carbs: 24,\n          protein: 4.0,\n          iron: '1%',\n        },\n        {\n          name: 'Ice cream sandwich',\n          calories: 200,\n          fat: 9.0,\n          carbs: 37,\n          protein: 4.3,\n          iron: '1%',\n        },\n        {\n          name: 'Eclair',\n          calories: 300,\n          fat: 16.0,\n          carbs: 23,\n          protein: 6.0,\n          iron: '7%',\n        },\n        {\n          name: 'Cupcake',\n          calories: 300,\n          fat: 3.7,\n          carbs: 67,\n          protein: 4.3,\n          iron: '8%',\n        },\n        {\n          name: 'Gingerbread',\n          calories: 400,\n          fat: 16.0,\n          carbs: 49,\n          protein: 3.9,\n          iron: '16%',\n        },\n        {\n          name: 'Jelly bean',\n          calories: 400,\n          fat: 0.0,\n          carbs: 94,\n          protein: 0.0,\n          iron: '0%',\n        },\n        {\n          name: 'Lollipop',\n          calories: 400,\n          fat: 0.2,\n          carbs: 98,\n          protein: 0,\n          iron: '2%',\n        },\n        {\n          name: 'Honeycomb',\n          calories: 400,\n          fat: 3.2,\n          carbs: 87,\n          protein: 6.5,\n          iron: '45%',\n        },\n        {\n          name: 'Donut',\n          calories: 500,\n          fat: 25.0,\n          carbs: 51,\n          protein: 4.9,\n          iron: '22%',\n        },\n        {\n          name: 'KitKat',\n          calories: 500,\n          fat: 26.0,\n          carbs: 65,\n          protein: 7,\n          iron: '6%',\n        },\n      ],\n    }\n  },\n}",
        headers: [{
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        }, {
          text: "Calories",
          value: "calories"
        }, {
          text: "Fat (g)",
          value: "fat"
        }, {
          text: "Carbs (g)",
          value: "carbs"
        }, {
          text: "Protein (g)",
          value: "protein"
        }, {
          text: "Iron (%)",
          value: "iron"
        }],
        desserts: [{
          name: "Frozen Yogurt",
          calories: 200,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        }, {
          name: "Ice cream sandwich",
          calories: 200,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        }, {
          name: "Eclair",
          calories: 300,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        }, {
          name: "Cupcake",
          calories: 300,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        }, {
          name: "Gingerbread",
          calories: 400,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        }, {
          name: "Jelly bean",
          calories: 400,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        }, {
          name: "Lollipop",
          calories: 400,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        }, {
          name: "Honeycomb",
          calories: 400,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        }, {
          name: "Donut",
          calories: 500,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        }, {
          name: "KitKat",
          calories: 500,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }]
      },
      code4: {
        html: "<v-card>\n  <v-card-title>\n    Nutrition\n    <v-spacer></v-spacer>\n    <v-text-field\n      v-model=\"search\"\n      append-icon=\"search\"\n      label=\"Search\"\n      single-line\n      hide-details\n    ></v-text-field>\n  </v-card-title>\n  <v-data-table\n    :headers=\"headers\"\n    :items=\"desserts\"\n    :search=\"search\"\n  ></v-data-table>\n</v-card>",
        js: " export default {\n  data () {\n    return {\n      search: '',\n      headers: [\n        {\n          text: 'Dessert (100g serving)',\n          align: 'left',\n          sortable: false,\n          value: 'name',\n        },\n        { text: 'Calories', value: 'calories' },\n        { text: 'Fat (g)', value: 'fat' },\n        { text: 'Carbs (g)', value: 'carbs' },\n        { text: 'Protein (g)', value: 'protein' },\n        { text: 'Iron (%)', value: 'iron' },\n      ],\n      desserts: [\n        {\n          name: 'Frozen Yogurt',\n          calories: 159,\n          fat: 6.0,\n          carbs: 24,\n          protein: 4.0,\n          iron: '1%',\n        },\n        {\n          name: 'Ice cream sandwich',\n          calories: 237,\n          fat: 9.0,\n          carbs: 37,\n          protein: 4.3,\n          iron: '1%',\n        },\n        {\n          name: 'Eclair',\n          calories: 262,\n          fat: 16.0,\n          carbs: 23,\n          protein: 6.0,\n          iron: '7%',\n        },\n        {\n          name: 'Cupcake',\n          calories: 305,\n          fat: 3.7,\n          carbs: 67,\n          protein: 4.3,\n          iron: '8%',\n        },\n        {\n          name: 'Gingerbread',\n          calories: 356,\n          fat: 16.0,\n          carbs: 49,\n          protein: 3.9,\n          iron: '16%',\n        },\n        {\n          name: 'Jelly bean',\n          calories: 375,\n          fat: 0.0,\n          carbs: 94,\n          protein: 0.0,\n          iron: '0%',\n        },\n        {\n          name: 'Lollipop',\n          calories: 392,\n          fat: 0.2,\n          carbs: 98,\n          protein: 0,\n          iron: '2%',\n        },\n        {\n          name: 'Honeycomb',\n          calories: 408,\n          fat: 3.2,\n          carbs: 87,\n          protein: 6.5,\n          iron: '45%',\n        },\n        {\n          name: 'Donut',\n          calories: 452,\n          fat: 25.0,\n          carbs: 51,\n          protein: 4.9,\n          iron: '22%',\n        },\n        {\n          name: 'KitKat',\n          calories: 518,\n          fat: 26.0,\n          carbs: 65,\n          protein: 7,\n          iron: '6%',\n        },\n      ],\n    }\n  },\n}",
        search: "",
        headers: [{
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        }, {
          text: "Calories",
          value: "calories"
        }, {
          text: "Fat (g)",
          value: "fat"
        }, {
          text: "Carbs (g)",
          value: "carbs"
        }, {
          text: "Protein (g)",
          value: "protein"
        }, {
          text: "Iron (%)",
          value: "iron"
        }],
        desserts: [{
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        }, {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        }, {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        }, {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        }, {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        }, {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        }, {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        }, {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        }, {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        }, {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
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
      title: "Data Tables"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=template&id=07096c4c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=template&id=07096c4c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Data tables")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-data-table")]),
            _vm._v(
              " component is used for\n      displaying tabular data. Features include sorting, searching,\n      pagination, inline-editing, header tooltips, and row selection.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/data-tables",
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
              attrs: { title: "Selectable rows " },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("show-select")]),
                        _vm._v(
                          " prop will render a checkbox in the\n            default header to toggle all rows, and a checkbox for each default\n            row. You can customize these with the slots\n            "
                        ),
                        _c("code", [_vm._v("header.data-table-select")]),
                        _vm._v(" and\n            "),
                        _c("code", [_vm._v("item.data-table-select")]),
                        _vm._v(
                          " respectively. You can also\n            switch between allowing multiple selected rows at the same time or\n            just one with the "
                        ),
                        _c("code", [_vm._v("single-select")]),
                        _vm._v(" prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.code1.headers,
                          items: _vm.code1.desserts,
                          "single-select": _vm.code1.singleSelect,
                          "item-key": "name",
                          "show-select": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c("v-switch", {
                                  staticClass: "pa-3",
                                  attrs: { label: "Single select" },
                                  model: {
                                    value: _vm.code1.singleSelect,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code1, "singleSelect", $$v)
                                    },
                                    expression: "code1.singleSelect"
                                  }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ]),
                        model: {
                          value: _vm.code1.selected,
                          callback: function($$v) {
                            _vm.$set(_vm.code1, "selected", $$v)
                          },
                          expression: "code1.selected"
                        }
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Grouped rows" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Using the "),
                        _c("code", [_vm._v("group-by")]),
                        _vm._v(" and "),
                        _c("code", [_vm._v("group-desc")]),
                        _vm._v(
                          " props\n            you can group rows on an item property. The\n            "
                        ),
                        _c("code", [_vm._v("show-group-by")]),
                        _vm._v(
                          " prop will show a group button in the\n            default header.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.code2.headers,
                          items: _vm.code2.desserts,
                          "item-key": "name",
                          "group-by": "category",
                          "show-group-by": ""
                        }
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Sort on multiple columns" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Using the "),
                        _c("code", [_vm._v("multi-sort")]),
                        _vm._v(
                          " prop will enable you to sort on\n            multiple columns at the same time. When enabled, you can pass\n            arrays to both "
                        ),
                        _c("code", [_vm._v("sort-by")]),
                        _vm._v(" and "),
                        _c("code", [_vm._v("sort-desc")]),
                        _vm._v(
                          " to\n            programmatically control the sorting, instead of single values.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.code3.headers,
                          items: _vm.code3.desserts,
                          "sort-by": ["calories", "fat"],
                          "sort-desc": [false, true],
                          "multi-sort": ""
                        }
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
              attrs: { title: "Search" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The data table exposes a "),
                        _c("code", [_vm._v("search")]),
                        _vm._v(
                          " prop that allows you\n            to filter your data.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            [
                              _vm._v(
                                "\n              Nutrition\n              "
                              ),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "append-icon": "search",
                                  label: "Search",
                                  "single-line": "",
                                  "hide-details": ""
                                },
                                model: {
                                  value: _vm.code4.search,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code4, "search", $$v)
                                  },
                                  expression: "code4.search"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-data-table", {
                            attrs: {
                              headers: _vm.code4.headers,
                              items: _vm.code4.desserts,
                              search: _vm.code4.search
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

/***/ "./resources/js/src/view/pages/vuetify/tables/DataTables.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/tables/DataTables.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataTables_vue_vue_type_template_id_07096c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTables.vue?vue&type=template&id=07096c4c& */ "./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=template&id=07096c4c&");
/* harmony import */ var _DataTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTables.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTables_vue_vue_type_template_id_07096c4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataTables_vue_vue_type_template_id_07096c4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/tables/DataTables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=template&id=07096c4c&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=template&id=07096c4c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTables_vue_vue_type_template_id_07096c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTables.vue?vue&type=template&id=07096c4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/tables/DataTables.vue?vue&type=template&id=07096c4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTables_vue_vue_type_template_id_07096c4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTables_vue_vue_type_template_id_07096c4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);