(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/content/CodePreview.vue */ "./resources/js/src/view/content/CodePreview.vue");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        html: "<div class=\"text-center\">\n  <v-chip\n    class=\"ma-2\"\n  >\n    Default\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"primary\"\n  >\n    Primary\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"secondary\"\n  >\n    Secondary\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"red\"\n    text-color=\"white\"\n  >\n    Red Chip\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"green\"\n    text-color=\"white\"\n  >\n    Green Chip\n  </v-chip>\n</div>"
      },
      code2: {
        html: "<div class=\"text-center\">\n  <v-chip\n    class=\"ma-2\"\n    color=\"indigo\"\n    text-color=\"white\"\n  >\n    <v-avatar left>\n      <v-icon>mdi-account-circle</v-icon>\n    </v-avatar>\n    Ranee\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"orange\"\n    text-color=\"white\"\n  >\n    Premium\n    <v-icon right>mdi-star</v-icon>\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"primary\"\n    text-color=\"white\"\n  >\n    1 Year\n    <v-icon right>mdi-cake-variant</v-icon>\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"green\"\n    text-color=\"white\"\n  >\n    <v-avatar\n      left\n      class=\"green darken-4\"\n    >\n      1\n    </v-avatar>\n    Years\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    close\n    color=\"teal\"\n    text-color=\"white\"\n    @click:close=\"close\"\n  >\n    <v-avatar left>\n      <v-icon>mdi-checkbox-marked-circle</v-icon>\n    </v-avatar>\n    Confirmed\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    close\n    color=\"teal\"\n    text-color=\"white\"\n    close-icon=\"mdi-delete\"\n    @click:close=\"close\"\n  >\n    <v-avatar left>\n      <v-icon>mdi-checkbox-marked-circle</v-icon>\n    </v-avatar>\n    Confirmed\n  </v-chip>\n</div>",
        js: "export default {\n  methods: {\n    close () {\n      alert('Chip close clicked')\n    },\n  },\n}"
      },
      code3: {
        html: " <div class=\"text-center\">\n  <v-chip\n    class=\"ma-2\"\n    color=\"success\"\n    outlined\n  >\n    <v-icon left>mdi-server-plus</v-icon>\n    Server Status\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"primary\"\n    outlined\n    pill\n  >\n    User Account\n    <v-icon right>mdi-account-outline</v-icon>\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"deep-purple accent-4\"\n    outlined\n  >\n    <v-icon left>mdi-wrench</v-icon>\n    Update Settings\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    close\n    color=\"indigo darken-3\"\n    outlined\n  >\n    <v-icon left>mdi-fire</v-icon>\n    New Posts Available\n  </v-chip>\n</div>"
      },
      code4: {
        html: " <div class=\"text-center\">\n  <v-chip\n    class=\"ma-2\"\n    label\n  >\n    Label\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"pink\"\n    label\n    text-color=\"white\"\n  >\n    <v-icon left>mdi-label</v-icon>\n    Tags\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    color=\"primary\"\n    label\n  >\n    <v-icon left>mdi-account-circle-outline</v-icon>\n    Sean Paul\n  </v-chip>\n\n  <v-chip\n    class=\"ma-2\"\n    close\n    color=\"cyan\"\n    label\n    text-color=\"white\"\n  >\n    <v-icon left>mdi-twitter</v-icon>\n    New Tweets\n  </v-chip>\n</div>"
      },
      code5: {
        html: "<v-card\n    class=\"mx-auto\"\n    max-width=\"500\"\n  >\n    <v-toolbar\n      flat\n      color=\"transparent\"\n    >\n      <v-app-bar-nav-icon></v-app-bar-nav-icon>\n      <v-toolbar-title>Photo Info</v-toolbar-title>\n      <v-spacer></v-spacer>\n      <v-btn\n        icon\n        @click=\"$refs.search.focus()\"\n      >\n        <v-icon>mdi-magnify</v-icon>\n      </v-btn>\n    </v-toolbar>\n\n    <v-container class=\"py-0\">\n      <v-row\n        align=\"center\"\n        justify=\"start\"\n      >\n        <v-col\n          v-for=\"(selection, i) in selections\"\n          :key=\"selection.text\"\n          class=\"shrink\"\n        >\n          <v-chip\n            :disabled=\"loading\"\n            close\n            @click:close=\"selected.splice(i, 1)\"\n          >\n            <v-icon\n              left\n              v-text=\"selection.icon\"\n            ></v-icon>\n            {{ selection.text }}\n          </v-chip>\n        </v-col>\n\n        <v-col v-if=\"!allSelected\" cols=\"12\">\n          <v-text-field\n            ref=\"search\"\n            v-model=\"search\"\n            full-width\n            hide-details\n            label=\"Search\"\n            single-line\n          ></v-text-field>\n        </v-col>\n      </v-row>\n    </v-container>\n\n    <v-divider v-if=\"!allSelected\"></v-divider>\n\n    <v-list>\n      <template v-for=\"(item, i) in categories\">\n        <v-list-item\n          v-if=\"!selected.includes(i)\"\n          :key=\"i\"\n          :disabled=\"loading\"\n          @click=\"selected.push(i)\"\n        >\n          <v-list-item-avatar>\n            <v-icon\n              :disabled=\"loading\"\n              v-text=\"item.icon\"\n            ></v-icon>\n          </v-list-item-avatar>\n          <v-list-item-title v-text=\"item.text\"></v-list-item-title>\n        </v-list-item>\n      </template>\n    </v-list>\n\n    <v-divider></v-divider>\n\n    <v-card-actions>\n      <v-spacer></v-spacer>\n      <v-btn\n        :disabled=\"!selected.length\"\n        :loading=\"loading\"\n        color=\"purple\"\n        text\n        @click=\"next\"\n      >Next</v-btn>\n    </v-card-actions>\n  </v-card>",
        js: " export default {\n  data: () => ({\n    items: [\n      {\n        text: 'Nature',\n        icon: 'mdi-nature',\n      },\n      {\n        text: 'Nightlife',\n        icon: 'mdi-glass-wine',\n      },\n      {\n        text: 'November',\n        icon: 'mdi-calendar-range',\n      },\n      {\n        text: 'Portland',\n        icon: 'mdi-map-marker',\n      },\n      {\n        text: 'Biking',\n        icon: 'mdi-bike',\n      },\n    ],\n    loading: false,\n    search: '',\n    selected: [],\n  }),\n\n  computed: {\n    allSelected () {\n      return this.selected.length === this.items.length\n    },\n    categories () {\n      const search = this.search.toLowerCase()\n\n      if (!search) return this.items\n\n      return this.items.filter(item => {\n        const text = item.text.toLowerCase()\n\n        return text.indexOf(search) > -1\n      })\n    },\n    selections () {\n      const selections = []\n\n      for (const selection of this.selected) {\n        selections.push(this.items[selection])\n      }\n\n      return selections\n    },\n  },\n\n  watch: {\n    selected () {\n      this.search = ''\n    },\n  },\n\n  methods: {\n    next () {\n      this.loading = true\n\n      setTimeout(() => {\n        this.search = ''\n        this.selected = []\n        this.loading = false\n      }, 2000)\n    },\n  },\n}",
        items: [{
          text: "Nature",
          icon: "mdi-nature"
        }, {
          text: "Nightlife",
          icon: "mdi-glass-wine"
        }, {
          text: "November",
          icon: "mdi-calendar-range"
        }, {
          text: "Portland",
          icon: "mdi-map-marker"
        }, {
          text: "Biking",
          icon: "mdi-bike"
        }],
        loading: false,
        search: ""
      },
      selected: [],
      code6: {
        html: "<v-card\n    max-width=\"400\"\n    class=\"mx-auto\"\n  >\n    <v-system-bar></v-system-bar>\n\n    <v-row\n      class=\"px-6 py-3\"\n      align=\"center\"\n    >\n      <span class=\"mr-4\">To</span>\n      <v-menu\n        v-model=\"menu\"\n        bottom\n        right\n        transition=\"scale-transition\"\n        origin=\"top left\"\n      >\n        <template v-slot:activator=\"{ on }\">\n          <v-chip\n            pill\n            v-on=\"on\"\n          >\n            <v-avatar left>\n              <v-img src=\"media/users/100_11.jpg\"></v-img>\n            </v-avatar>\n            Sean Paul\n          </v-chip>\n        </template>\n        <v-card width=\"300\">\n          <v-list dark>\n            <v-list-item>\n              <v-list-item-avatar>\n                <v-img src=\"media/users/100_11.jpg\"></v-img>\n              </v-list-item-avatar>\n              <v-list-item-content>\n                <v-list-item-title>Sean Paul</v-list-item-title>\n                <v-list-item-subtitle>support@keenthemes.com</v-list-item-subtitle>\n              </v-list-item-content>\n              <v-list-item-action>\n                <v-btn\n                  icon\n                  @click=\"menu = false\"\n                >\n                  <v-icon>mdi-close-circle</v-icon>\n                </v-btn>\n              </v-list-item-action>\n            </v-list-item>\n          </v-list>\n          <v-list>\n            <v-list-item @click=\"() => {}\">\n              <v-list-item-action>\n                <v-icon>mdi-briefcase</v-icon>\n              </v-list-item-action>\n              <v-list-item-subtitle>support@keenthemes.com</v-list-item-subtitle>\n            </v-list-item>\n          </v-list>\n        </v-card>\n      </v-menu>\n    </v-row>\n\n    <v-divider></v-divider>\n\n    <v-text-field\n      full-width\n      value=\"Re: Vacation Request\"\n      label=\"Subject\"\n      single-line\n    ></v-text-field>\n\n    <v-textarea\n      full-width\n      single-line\n      label=\"Message\"\n    ></v-textarea>\n  </v-card>",
        js: "export default {\n    data: () => ({\n      menu: false,\n    }),\n  }",
        menu: false
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
      title: "Chips"
    }]);
  },
  computed: {
    // code 5
    allSelected: function allSelected() {
      return this.selected.length === this.code5.items.length;
    },
    categories: function categories() {
      var search = this.code5.search.toLowerCase();
      if (!search) return this.code5.items;
      return this.code5.items.filter(function (item) {
        var text = item.text.toLowerCase();
        return text.indexOf(search) > -1;
      });
    },
    selections: function selections() {
      var selections = [];

      var _iterator = _createForOfIteratorHelper(this.selected),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var selection = _step.value;
          selections.push(this.code5.items[selection]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return selections;
    }
  },
  watch: {
    selected: function selected() {
      this.code5.search = "";
    }
  },
  methods: {
    // code 2
    close: function close() {
      alert("Chip close clicked");
    },
    // code 5
    next: function next() {
      var _this = this;

      this.code5.loading = true;
      setTimeout(function () {
        _this.code5.search = "";
        _this.selected = [];
        _this.code5.loading = false;
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=template&id=36dd4acc&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=template&id=36dd4acc& ***!
  \********************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Chips")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-chip")]),
            _vm._v(
              " component is used to convey small\n      pieces of information. Using the "
            ),
            _c("code", [_vm._v("close")]),
            _vm._v(
              " property, the chip\n      becomes interactive, allowing user interaction.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/chips",
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
              attrs: { title: "Colored" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Any color from the Material Design palette can be used to change a\n            chips color.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c("v-chip", { staticClass: "ma-2" }, [
                            _vm._v("\n              Default\n            ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "primary" }
                            },
                            [_vm._v("\n              Primary\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "secondary" }
                            },
                            [_vm._v("\n              Secondary\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "red", "text-color": "white" }
                            },
                            [_vm._v("\n              Red Chip\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "green", "text-color": "white" }
                            },
                            [_vm._v("\n              Green Chip\n            ")]
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
              attrs: { title: "Outlined" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Outlined chips inherit their border color from the current text\n            color.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "success", outlined: "" }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-server-plus")
                              ]),
                              _vm._v(
                                "\n              Server Status\n            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                color: "primary",
                                outlined: "",
                                pill: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n              User Account\n              "
                              ),
                              _c("v-icon", { attrs: { right: "" } }, [
                                _vm._v("mdi-account-outline")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                color: "deep-purple accent-4",
                                outlined: ""
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-wrench")
                              ]),
                              _vm._v(
                                "\n              Update Settings\n            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                close: "",
                                color: "indigo darken-3",
                                outlined: ""
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-fire")
                              ]),
                              _vm._v(
                                "\n              New Posts Available\n            "
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
              attrs: { title: "Custom lists" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        { attrs: { "max-width": "500" } },
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { flat: "", color: "transparent" } },
                            [
                              _c("v-app-bar-nav-icon"),
                              _vm._v(" "),
                              _c("v-toolbar-title", [_vm._v("Photo Info")]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.search.focus()
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-magnify")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            { staticClass: "py-0" },
                            [
                              _c(
                                "v-row",
                                {
                                  attrs: { align: "center", justify: "start" }
                                },
                                [
                                  _vm._l(_vm.code5.selections, function(
                                    selection,
                                    i
                                  ) {
                                    return _c(
                                      "v-col",
                                      {
                                        key: selection.text,
                                        staticClass: "shrink"
                                      },
                                      [
                                        _c(
                                          "v-chip",
                                          {
                                            attrs: {
                                              disabled: _vm.loading,
                                              close: ""
                                            },
                                            on: {
                                              "click:close": function($event) {
                                                return _vm.selected.splice(i, 1)
                                              }
                                            }
                                          },
                                          [
                                            _c("v-icon", {
                                              attrs: { left: "" },
                                              domProps: {
                                                textContent: _vm._s(
                                                  selection.icon
                                                )
                                              }
                                            }),
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(selection.text) +
                                                "\n                  "
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._v(" "),
                                  !_vm.allSelected
                                    ? _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-text-field", {
                                            ref: "search",
                                            attrs: {
                                              "full-width": "",
                                              "hide-details": "",
                                              label: "Search",
                                              "single-line": ""
                                            },
                                            model: {
                                              value: _vm.code5.search,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.code5,
                                                  "search",
                                                  $$v
                                                )
                                              },
                                              expression: "code5.search"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          !_vm.allSelected ? _c("v-divider") : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            [
                              _vm._l(_vm.categories, function(item, i) {
                                return [
                                  !_vm.selected.includes(i)
                                    ? _c(
                                        "v-list-item",
                                        {
                                          key: i,
                                          attrs: {
                                            disabled: _vm.code5.loading
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.selected.push(i)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-list-item-avatar",
                                            [
                                              _c("v-icon", {
                                                attrs: {
                                                  disabled: _vm.code5.loading
                                                },
                                                domProps: {
                                                  textContent: _vm._s(item.icon)
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-list-item-title", {
                                            domProps: {
                                              textContent: _vm._s(item.text)
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ]
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    disabled: !_vm.selected.length,
                                    loading: _vm.code5.loading,
                                    color: "purple",
                                    text: ""
                                  },
                                  on: { click: _vm.next }
                                },
                                [_vm._v("Next")]
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
              attrs: { title: "Icon" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Chips can use text or any icon available in the Material Icons\n            font library.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "indigo", "text-color": "white" }
                            },
                            [
                              _c(
                                "v-avatar",
                                { attrs: { left: "" } },
                                [_c("v-icon", [_vm._v("mdi-account-circle")])],
                                1
                              ),
                              _vm._v("\n              Ranee\n            ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "orange", "text-color": "white" }
                            },
                            [
                              _vm._v("\n              Premium\n              "),
                              _c("v-icon", { attrs: { right: "" } }, [
                                _vm._v("mdi-star")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "primary", "text-color": "white" }
                            },
                            [
                              _vm._v("\n              1 Year\n              "),
                              _c("v-icon", { attrs: { right: "" } }, [
                                _vm._v("mdi-cake-variant")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "green", "text-color": "white" }
                            },
                            [
                              _c(
                                "v-avatar",
                                {
                                  staticClass: "green darken-4",
                                  attrs: { left: "" }
                                },
                                [_vm._v("\n                1\n              ")]
                              ),
                              _vm._v("\n              Years\n            ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                close: "",
                                color: "teal",
                                "text-color": "white"
                              },
                              on: { "click:close": _vm.close }
                            },
                            [
                              _c(
                                "v-avatar",
                                { attrs: { left: "" } },
                                [
                                  _c("v-icon", [
                                    _vm._v("mdi-checkbox-marked-circle")
                                  ])
                                ],
                                1
                              ),
                              _vm._v("\n              Confirmed\n            ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                close: "",
                                color: "teal",
                                "text-color": "white",
                                "close-icon": "mdi-delete"
                              },
                              on: { "click:close": _vm.close }
                            },
                            [
                              _c(
                                "v-avatar",
                                { attrs: { left: "" } },
                                [
                                  _c("v-icon", [
                                    _vm._v("mdi-checkbox-marked-circle")
                                  ])
                                ],
                                1
                              ),
                              _vm._v("\n              Confirmed\n            ")
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
              attrs: { title: "Label" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-chip",
                            { staticClass: "ma-2", attrs: { label: "" } },
                            [_vm._v("\n              Label\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                color: "pink",
                                label: "",
                                "text-color": "white"
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-label")
                              ]),
                              _vm._v("\n              Tags\n            ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { color: "primary", label: "" }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-account-circle-outline")
                              ]),
                              _vm._v("\n              Sean Paul\n            ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                close: "",
                                color: "cyan",
                                label: "",
                                "text-color": "white"
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-twitter")
                              ]),
                              _vm._v("\n              New Tweets\n            ")
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Expandable" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        { attrs: { "max-width": "400" } },
                        [
                          _c("v-system-bar"),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            {
                              staticClass: "px-6 py-3",
                              attrs: { align: "center" }
                            },
                            [
                              _c("span", { staticClass: "mr-4" }, [
                                _vm._v("To")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    bottom: "",
                                    right: "",
                                    transition: "scale-transition",
                                    origin: "top left"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-chip",
                                            _vm._g({ attrs: { pill: "" } }, on),
                                            [
                                              _c(
                                                "v-avatar",
                                                { attrs: { left: "" } },
                                                [
                                                  _c("v-img", {
                                                    attrs: {
                                                      src:
                                                        "media/users/100_11.jpg"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(
                                                "\n                    Sean Paul\n                  "
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.code6.menu,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code6, "menu", $$v)
                                    },
                                    expression: "code6.menu"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "v-card",
                                    { attrs: { width: "300" } },
                                    [
                                      _c(
                                        "v-list",
                                        { attrs: { dark: "" } },
                                        [
                                          _c(
                                            "v-list-item",
                                            [
                                              _c(
                                                "v-list-item-avatar",
                                                [
                                                  _c("v-img", {
                                                    attrs: {
                                                      src:
                                                        "media/users/100_11.jpg"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", [
                                                    _vm._v("Sean Paul")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-item-subtitle", [
                                                    _vm._v(
                                                      "support@keenthemes.com"
                                                    )
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item-action",
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: { icon: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.menu = false
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "mdi-close-circle"
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
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list",
                                        [
                                          _c(
                                            "v-list-item",
                                            { on: { click: function() {} } },
                                            [
                                              _c(
                                                "v-list-item-action",
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-briefcase")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", [
                                                _vm._v("support@keenthemes.com")
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
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "full-width": "",
                              value: "Re: Vacation Request",
                              label: "Subject",
                              "single-line": ""
                            }
                          }),
                          _vm._v(" "),
                          _c("v-textarea", {
                            attrs: {
                              "full-width": "",
                              "single-line": "",
                              label: "Message"
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

/***/ "./resources/js/src/view/pages/vuetify/Chips.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Chips.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chips_vue_vue_type_template_id_36dd4acc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chips.vue?vue&type=template&id=36dd4acc& */ "./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=template&id=36dd4acc&");
/* harmony import */ var _Chips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chips.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chips_vue_vue_type_template_id_36dd4acc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chips_vue_vue_type_template_id_36dd4acc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/Chips.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chips.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=template&id=36dd4acc&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=template&id=36dd4acc& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_template_id_36dd4acc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chips.vue?vue&type=template&id=36dd4acc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Chips.vue?vue&type=template&id=36dd4acc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_template_id_36dd4acc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chips_vue_vue_type_template_id_36dd4acc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);