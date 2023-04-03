(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        html: "<v-row align=\"center\">\n  <v-col cols=\"12\">\n    <v-select\n      :items=\"items\"\n      disabled\n      label=\"Disabled\"\n    ></v-select>\n  </v-col>\n</v-row>",
        js: "export default {\n  data: () => ({\n    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],\n  }),\n}",
        items: ["Foo", "Bar", "Fizz", "Buzz"]
      },
      code2: {
        html: "<v-container fluid>\n  <v-row align=\"center\">\n    <v-col cols=\"6\">\n      <v-subheader>Prepended icon</v-subheader>\n    </v-col>\n    <v-col cols=\"6\">\n      <v-select\n        v-model=\"e1\"\n        :items=\"states\"\n        menu-props=\"auto\"\n        label=\"Select\"\n        hide-details\n        prepend-icon=\"map\"\n        single-line\n      ></v-select>\n    </v-col>\n    <v-col cols=\"6\">\n      <v-subheader>Appended icon</v-subheader>\n    </v-col>\n    <v-col cols=\"6\">\n      <v-select\n        v-model=\"e2\"\n        :items=\"states\"\n        append-outer-icon=\"map\"\n        menu-props=\"auto\"\n        hide-details\n        label=\"Select\"\n        single-line\n      ></v-select>\n    </v-col>\n  </v-row>\n</v-container>",
        js: "export default {\n  data () {\n    return {\n      e1: 'Florida',\n      e2: 'Texas',\n      e3: null,\n      e4: null,\n      items: [\n        { text: 'State 1' },\n        { text: 'State 2' },\n        { text: 'State 3' },\n        { text: 'State 4' },\n        { text: 'State 5' },\n        { text: 'State 6' },\n        { text: 'State 7' },\n      ],\n      states: [\n        'Alabama', 'Alaska', 'American Samoa', 'Arizona',\n        'Arkansas', 'California', 'Colorado', 'Connecticut',\n        'Delaware', 'District of Columbia', 'Federated States of Micronesia',\n        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',\n        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',\n        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',\n        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',\n        'Missouri', 'Montana', 'Nebraska', 'Nevada',\n        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',\n        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',\n        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',\n        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',\n        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',\n        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',\n      ],\n    }\n  },\n}",
        e1: "Florida",
        e2: "Texas",
        e3: null,
        e4: null,
        items: [{
          text: "State 1"
        }, {
          text: "State 2"
        }, {
          text: "State 3"
        }, {
          text: "State 4"
        }, {
          text: "State 5"
        }, {
          text: "State 6"
        }, {
          text: "State 7"
        }],
        states: ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Federated States of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      },
      code3: {
        html: "<v-row align=\"center\">\n  <v-col cols=\"12\">\n    <v-select\n      :items=\"items\"\n      readonly\n      label=\"Read-only\"\n    ></v-select>\n  </v-col>\n</v-row>",
        js: "export default {\n  data: () => ({\n    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],\n  }),\n}",
        items: ["Foo", "Bar", "Fizz", "Buzz"]
      },
      code4: {
        html: "<v-container fluid>\n  <v-row align=\"center\">\n    <v-col cols=\"12\" sm=\"6\">\n      <v-subheader v-text=\"'Multiple with persistent hint'\"></v-subheader>\n    </v-col>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-select\n        v-model=\"e6\"\n        :items=\"states\"\n        :menu-props=\"{ maxHeight: '400' }\"\n        label=\"Select\"\n        multiple\n        hint=\"Pick your favorite states\"\n        persistent-hint\n      ></v-select>\n    </v-col>\n\n    <v-col cols=\"12\" sm=\"6\">\n      <v-subheader v-text=\"'Multiple (Chips) with persistent hint'\"></v-subheader>\n    </v-col>\n\n    <v-col cols=\"12\" sm=\"6\">\n      <v-select\n        v-model=\"e7\"\n        :items=\"states\"\n        label=\"Select\"\n        multiple\n        chips\n        hint=\"What are the target regions\"\n        persistent-hint\n      ></v-select>\n    </v-col>\n  </v-row>\n</v-container>",
        js: "export default {\n  data () {\n    return {\n      e6: [],\n      e7: [],\n      states: [\n        'Alabama', 'Alaska', 'American Samoa', 'Arizona',\n        'Arkansas', 'California', 'Colorado', 'Connecticut',\n        'Delaware', 'District of Columbia', 'Federated States of Micronesia',\n        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',\n        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',\n        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',\n        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',\n        'Missouri', 'Montana', 'Nebraska', 'Nevada',\n        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',\n        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',\n        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',\n        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',\n        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',\n        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',\n      ],\n    }\n  },\n}",
        e6: [],
        e7: [],
        states: ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Federated States of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      },
      code5: {
        html: "<v-container fluid>\n  <v-row align=\"center\">\n    <v-col class=\"d-flex\" cols=\"12\" sm=\"6\">\n      <v-select\n        :items=\"items\"\n        label=\"Standard\"\n        dense\n      ></v-select>\n    </v-col>\n\n    <v-col class=\"d-flex\" cols=\"12\" sm=\"6\">\n      <v-select\n        :items=\"items\"\n        filled\n        label=\"Filled style\"\n        dense\n      ></v-select>\n    </v-col>\n\n    <v-col class=\"d-flex\" cols=\"12\" sm=\"6\">\n      <v-select\n        :items=\"items\"\n        label=\"Outlined style\"\n        dense\n        outlined\n      ></v-select>\n    </v-col>\n\n    <v-col class=\"d-flex\" cols=\"12\" sm=\"6\">\n      <v-select\n        :items=\"items\"\n        label=\"Solo field\"\n        dense\n        solo\n      ></v-select>\n    </v-col>\n  </v-row>\n</v-container>",
        js: "export default {\n  data: () => ({\n    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],\n  }),\n}",
        items: ["Foo", "Bar", "Fizz", "Buzz"]
      },
      code6: {
        html: "<v-container fluid>\n  <v-select\n    v-model=\"selectedFruits\"\n    :items=\"fruits\"\n    label=\"Favorite Fruits\"\n    multiple\n  >\n    <template v-slot:prepend-item>\n      <v-list-item\n        ripple\n        @click=\"toggle\"\n      >\n        <v-list-item-action>\n          <v-icon :color=\"selectedFruits.length > 0 ? 'indigo darken-4' : ''\">{{ icon }}</v-icon>\n        </v-list-item-action>\n        <v-list-item-content>\n          <v-list-item-title>Select All</v-list-item-title>\n        </v-list-item-content>\n      </v-list-item>\n      <v-divider class=\"mt-2\"></v-divider>\n    </template>\n    <template v-slot:append-item>\n      <v-divider class=\"mb-2\"></v-divider>\n      <v-list-item disabled>\n        <v-list-item-avatar color=\"grey lighten-3\">\n          <v-icon>mdi-food-apple</v-icon>\n        </v-list-item-avatar>\n\n        <v-list-item-content v-if=\"likesAllFruit\">\n          <v-list-item-title>Holy smokes, someone call the fruit police!</v-list-item-title>\n        </v-list-item-content>\n\n        <v-list-item-content v-else-if=\"likesSomeFruit\">\n          <v-list-item-title>Fruit Count</v-list-item-title>\n          <v-list-item-subtitle>{{ selectedFruits.length }}</v-list-item-subtitle>\n        </v-list-item-content>\n\n        <v-list-item-content v-else>\n          <v-list-item-title>\n            How could you not like fruit?\n          </v-list-item-title>\n          <v-list-item-subtitle>\n            Go ahead, make a selection above!\n          </v-list-item-subtitle>\n        </v-list-item-content>\n      </v-list-item>\n    </template>\n  </v-select>\n</v-container>",
        js: "export default {\n  data: () => ({\n    fruits: [\n      'Apples',\n      'Apricots',\n      'Avocado',\n      'Bananas',\n      'Blueberries',\n      'Blackberries',\n      'Boysenberries',\n      'Bread fruit',\n      'Cantaloupes (cantalope)',\n      'Cherries',\n      'Cranberries',\n      'Cucumbers',\n      'Currants',\n      'Dates',\n      'Eggplant',\n      'Figs',\n      'Grapes',\n      'Grapefruit',\n      'Guava',\n      'Honeydew melons',\n      'Huckleberries',\n      'Kiwis',\n      'Kumquat',\n      'Lemons',\n      'Limes',\n      'Mangos',\n      'Mulberries',\n      'Muskmelon',\n      'Nectarines',\n      'Olives',\n      'Oranges',\n      'Papaya',\n      'Peaches',\n      'Pears',\n      'Persimmon',\n      'Pineapple',\n      'Plums',\n      'Pomegranate',\n      'Raspberries',\n      'Rose Apple',\n      'Starfruit',\n      'Strawberries',\n      'Tangerines',\n      'Tomatoes',\n      'Watermelons',\n      'Zucchini',\n    ],\n    selectedFruits: [],\n  }),\n\n  computed: {\n    likesAllFruit () {\n      return this.selectedFruits.length === this.fruits.length\n    },\n    likesSomeFruit () {\n      return this.selectedFruits.length > 0 && !this.likesAllFruit\n    },\n    icon () {\n      if (this.likesAllFruit) return 'mdi-close-box'\n      if (this.likesSomeFruit) return 'mdi-minus-box'\n      return 'mdi-checkbox-blank-outline'\n    },\n  },\n\n  methods: {\n    toggle () {\n      this.$nextTick(() => {\n        if (this.likesAllFruit) {\n          this.selectedFruits = []\n        } else {\n          this.selectedFruits = this.fruits.slice()\n        }\n      })\n    },\n  },\n}",
        fruits: ["Apples", "Apricots", "Avocado", "Bananas", "Blueberries", "Blackberries", "Boysenberries", "Bread fruit", "Cantaloupes (cantalope)", "Cherries", "Cranberries", "Cucumbers", "Currants", "Dates", "Eggplant", "Figs", "Grapes", "Grapefruit", "Guava", "Honeydew melons", "Huckleberries", "Kiwis", "Kumquat", "Lemons", "Limes", "Mangos", "Mulberries", "Muskmelon", "Nectarines", "Olives", "Oranges", "Papaya", "Peaches", "Pears", "Persimmon", "Pineapple", "Plums", "Pomegranate", "Raspberries", "Rose Apple", "Starfruit", "Strawberries", "Tangerines", "Tomatoes", "Watermelons", "Zucchini"],
        selectedFruits: []
      },
      code7: {
        html: "<v-container fluid>\n    <v-select\n      v-model=\"value\"\n      :items=\"items\"\n      label=\"Select Item\"\n      multiple\n    >\n      <template v-slot:selection=\"{ item, index }\">\n        <v-chip v-if=\"index === 0\">\n          <span>{{ item }}</span>\n        </v-chip>\n        <span\n          v-if=\"index === 1\"\n          class=\"grey--text caption\"\n        >(+{{ value.length - 1 }} others)</span>\n      </template>\n    </v-select>\n</v-container>",
        js: "export default {\n  data: () => ({\n    items: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],\n    value: ['foo', 'bar', 'fizz'],\n  }),\n}",
        items: ["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"],
        value: ["foo", "bar", "fizz"]
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
      title: "Form Inputs & Control",
      route: "autocompletes"
    }, {
      title: "Selects"
    }]);
  },
  computed: {
    // code6
    likesAllFruit: function likesAllFruit() {
      return this.code6.selectedFruits.length === this.code6.fruits.length;
    },
    likesSomeFruit: function likesSomeFruit() {
      return this.code6.selectedFruits.length > 0 && !this.likesAllFruit;
    },
    icon: function icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    }
  },
  methods: {
    // code6
    toggle: function toggle() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.likesAllFruit) {
          _this.code6.selectedFruits = [];
        } else {
          _this.code6.selectedFruits = _this.code6.fruits.slice();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=6c081f0a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=6c081f0a& ***!
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
            _c("b", [_vm._v("Selects")]),
            _vm._v(
              " Select fields components are used for collecting user\n      provided information from a list of options.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/selects",
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
              attrs: { title: "Disabled" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("You cannot use disabled "),
                        _c("code", [_vm._v("v-select")]),
                        _vm._v(".")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.code1.items,
                                  disabled: "",
                                  label: "Disabled"
                                }
                              })
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
              attrs: { title: "Read-only" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            You cannot use read-only "),
                        _c("code", [_vm._v("v-select")]),
                        _vm._v(
                          ", but it looks\n            default.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.code3.items,
                                  readonly: "",
                                  label: "Read-only"
                                }
                              })
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
              attrs: { title: "Dense" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            You can use "),
                        _c("code", [_vm._v("dense")]),
                        _vm._v(
                          " prop to reduce the field height and\n            lower max height of list items.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center" } },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "6" }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code5.items,
                                      label: "Standard",
                                      dense: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "6" }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code5.items,
                                      filled: "",
                                      label: "Filled style",
                                      dense: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "6" }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code5.items,
                                      label: "Outlined style",
                                      dense: "",
                                      outlined: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "6" }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code5.items,
                                      label: "Solo field",
                                      dense: "",
                                      solo: ""
                                    }
                                  })
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Change selection appearance" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("selection")]),
                        _vm._v(
                          " slot can be used to customize the way\n            selected values are shown in the input. This is great when you\n            want something like "
                        ),
                        _c("code", [_vm._v("foo (+20 others)")]),
                        _vm._v(
                          " or don't want\n            the selection to occupy multiple lines.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.code7.items,
                              label: "Select Item",
                              multiple: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function(ref) {
                                  var item = ref.item
                                  var index = ref.index
                                  return [
                                    index === 0
                                      ? _c("v-chip", [
                                          _c("span", [_vm._v(_vm._s(item))])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    index === 1
                                      ? _c(
                                          "span",
                                          { staticClass: "grey--text caption" },
                                          [
                                            _vm._v(
                                              "(+" +
                                                _vm._s(
                                                  _vm.code7.value.length - 1
                                                ) +
                                                " others)"
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.code7.value,
                              callback: function($$v) {
                                _vm.$set(_vm.code7, "value", $$v)
                              },
                              expression: "code7.value"
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
                        "\n          " + _vm._s(_vm.code7.html) + "\n        "
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
                        "\n          " + _vm._s(_vm.code7.js) + "\n        "
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
              attrs: { title: "Icons" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("Use a custom prepended or appended icon.")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [_c("v-subheader", [_vm._v("Prepended icon")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code2.states,
                                      "menu-props": "auto",
                                      label: "Select",
                                      "hide-details": "",
                                      "prepend-icon": "map",
                                      "single-line": ""
                                    },
                                    model: {
                                      value: _vm.code2.e1,
                                      callback: function($$v) {
                                        _vm.$set(_vm.code2, "e1", $$v)
                                      },
                                      expression: "code2.e1"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [_c("v-subheader", [_vm._v("Appended icon")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code2.states,
                                      "append-outer-icon": "map",
                                      "menu-props": "auto",
                                      "hide-details": "",
                                      label: "Select",
                                      "single-line": ""
                                    },
                                    model: {
                                      value: _vm.code2.e2,
                                      callback: function($$v) {
                                        _vm.$set(_vm.code2, "e2", $$v)
                                      },
                                      expression: "code2.e2"
                                    }
                                  })
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Multiple" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            A multi-select can utilize "),
                        _c("code", [_vm._v("v-chip")]),
                        _vm._v(
                          " as the display for\n            selected items.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-subheader", {
                                    domProps: {
                                      textContent: _vm._s(
                                        "Multiple with persistent hint"
                                      )
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code4.states,
                                      "menu-props": { maxHeight: "400" },
                                      label: "Select",
                                      multiple: "",
                                      hint: "Pick your favorite states",
                                      "persistent-hint": ""
                                    },
                                    model: {
                                      value: _vm.code4.e6,
                                      callback: function($$v) {
                                        _vm.$set(_vm.code4, "e6", $$v)
                                      },
                                      expression: "code4.e6"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-subheader", {
                                    domProps: {
                                      textContent: _vm._s(
                                        "Multiple (Chips) with persistent hint"
                                      )
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code4.states,
                                      label: "Select",
                                      multiple: "",
                                      chips: "",
                                      hint: "What are the target regions",
                                      "persistent-hint": ""
                                    },
                                    model: {
                                      value: _vm.code4.e7,
                                      callback: function($$v) {
                                        _vm.$set(_vm.code4, "e7", $$v)
                                      },
                                      expression: "code4.e7"
                                    }
                                  })
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
              attrs: { title: "Prepend/Append item slots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-select")]),
                        _vm._v(
                          " components can be optionally expanded\n            with prepended and appended items. This is perfect for customized\n            "
                        ),
                        _c("strong", [_vm._v("select-all")]),
                        _vm._v(" functionality.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.code6.fruits,
                              label: "Favorite Fruits",
                              multiple: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-item",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-list-item",
                                      {
                                        attrs: { ripple: "" },
                                        on: { click: _vm.toggle }
                                      },
                                      [
                                        _c(
                                          "v-list-item-action",
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: {
                                                  color:
                                                    _vm.code6.selectedFruits
                                                      .length > 0
                                                      ? "indigo darken-4"
                                                      : ""
                                                }
                                              },
                                              [_vm._v(_vm._s(_vm.icon))]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v("Select All")
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider", { staticClass: "mt-2" })
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "append-item",
                                fn: function() {
                                  return [
                                    _c("v-divider", { staticClass: "mb-2" }),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item",
                                      { attrs: { disabled: "" } },
                                      [
                                        _c(
                                          "v-list-item-avatar",
                                          {
                                            attrs: { color: "grey lighten-3" }
                                          },
                                          [
                                            _c("v-icon", [
                                              _vm._v("mdi-food-apple")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.likesAllFruit
                                          ? _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    "Holy smokes, someone call the fruit\n                      police!"
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          : _vm.likesSomeFruit
                                          ? _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v("Fruit Count")
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.code6.selectedFruits
                                                        .length
                                                    )
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          : _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    "\n                      How could you not like fruit?\n                    "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    "\n                      Go ahead, make a selection above!\n                    "
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
                              }
                            ]),
                            model: {
                              value: _vm.code6.selectedFruits,
                              callback: function($$v) {
                                _vm.$set(_vm.code6, "selectedFruits", $$v)
                              },
                              expression: "code6.selectedFruits"
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
                        "\n          " + _vm._s(_vm.code6.html) + "\n        "
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
                        "\n          " + _vm._s(_vm.code6.js) + "\n        "
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

/***/ "./resources/js/src/view/pages/vuetify/forms/Selects.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Selects.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Selects_vue_vue_type_template_id_6c081f0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selects.vue?vue&type=template&id=6c081f0a& */ "./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=6c081f0a&");
/* harmony import */ var _Selects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selects.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Selects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Selects_vue_vue_type_template_id_6c081f0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Selects_vue_vue_type_template_id_6c081f0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/forms/Selects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Selects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=6c081f0a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=6c081f0a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_template_id_6c081f0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Selects.vue?vue&type=template&id=6c081f0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=6c081f0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_template_id_6c081f0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_template_id_6c081f0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);