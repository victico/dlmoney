(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/view/content/CodePreview.vue */ "./resources/js/src/view/content/CodePreview.vue");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var avatars = ["?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban", "?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun", "?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong", "?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair", "?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly"];

var pause = function pause(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: " <v-treeview\n  dense\n  :items=\"items\"\n></v-treeview>",
        js: " export default {\n  data: () => ({\n    items: [\n      {\n        id: 1,\n        name: 'Applications :',\n        children: [\n          { id: 2, name: 'Calendar : app' },\n          { id: 3, name: 'Chrome : app' },\n          { id: 4, name: 'Webstorm : app' },\n        ],\n      },\n      {\n        id: 5,\n        name: 'Documents :',\n        children: [\n          {\n            id: 6,\n            name: 'vuetify :',\n            children: [\n              {\n                id: 7,\n                name: 'src :',\n                children: [\n                  { id: 8, name: 'index : ts' },\n                  { id: 9, name: 'bootstrap : ts' },\n                ],\n              },\n            ],\n          },\n          {\n            id: 10,\n            name: 'material2 :',\n            children: [\n              {\n                id: 11,\n                name: 'src :',\n                children: [\n                  { id: 12, name: 'v-btn : ts' },\n                  { id: 13, name: 'v-card : ts' },\n                  { id: 14, name: 'v-window : ts' },\n                ],\n              },\n            ],\n          },\n        ],\n      },\n      {\n        id: 15,\n        name: 'Downloads :',\n        children: [\n          { id: 16, name: 'October : pdf' },\n          { id: 17, name: 'November : pdf' },\n          { id: 18, name: 'Tutorial : html' },\n        ],\n      },\n      {\n        id: 19,\n        name: 'Videos :',\n        children: [\n          {\n            id: 20,\n            name: 'Tutorials :',\n            children: [\n              { id: 21, name: 'Basic layouts : mp4' },\n              { id: 22, name: 'Advanced techniques : mp4' },\n              { id: 23, name: 'All about app : dir' },\n            ],\n          },\n          { id: 24, name: 'Intro : mov' },\n          { id: 25, name: 'Conference introduction : avi' },\n        ],\n      },\n    ],\n  }),\n}",
        items: [{
          id: 1,
          name: "Applications :",
          children: [{
            id: 2,
            name: "Calendar : app"
          }, {
            id: 3,
            name: "Chrome : app"
          }, {
            id: 4,
            name: "Webstorm : app"
          }]
        }, {
          id: 5,
          name: "Documents :",
          children: [{
            id: 6,
            name: "vuetify :",
            children: [{
              id: 7,
              name: "src :",
              children: [{
                id: 8,
                name: "index : ts"
              }, {
                id: 9,
                name: "bootstrap : ts"
              }]
            }]
          }, {
            id: 10,
            name: "material2 :",
            children: [{
              id: 11,
              name: "src :",
              children: [{
                id: 12,
                name: "v-btn : ts"
              }, {
                id: 13,
                name: "v-card : ts"
              }, {
                id: 14,
                name: "v-window : ts"
              }]
            }]
          }]
        }, {
          id: 15,
          name: "Downloads :",
          children: [{
            id: 16,
            name: "October : pdf"
          }, {
            id: 17,
            name: "November : pdf"
          }, {
            id: 18,
            name: "Tutorial : html"
          }]
        }, {
          id: 19,
          name: "Videos :",
          children: [{
            id: 20,
            name: "Tutorials :",
            children: [{
              id: 21,
              name: "Basic layouts : mp4"
            }, {
              id: 22,
              name: "Advanced techniques : mp4"
            }, {
              id: 23,
              name: "All about app : dir"
            }]
          }, {
            id: 24,
            name: "Intro : mov"
          }, {
            id: 25,
            name: "Conference introduction : avi"
          }]
        }]
      },
      code2: {
        html: "<v-treeview\n  selectable\n  selected-color=\"red\"\n  :items=\"items\"\n></v-treeview>",
        js: "export default {\n  data: () => ({\n    items: [\n      {\n        id: 1,\n        name: 'Applications :',\n        children: [\n          { id: 2, name: 'Calendar : app' },\n          { id: 3, name: 'Chrome : app' },\n          { id: 4, name: 'Webstorm : app' },\n        ],\n      },\n      {\n        id: 5,\n        name: 'Documents :',\n        children: [\n          {\n            id: 6,\n            name: 'vuetify :',\n            children: [\n              {\n                id: 7,\n                name: 'src :',\n                children: [\n                  { id: 8, name: 'index : ts' },\n                  { id: 9, name: 'bootstrap : ts' },\n                ],\n              },\n            ],\n          },\n          {\n            id: 10,\n            name: 'material2 :',\n            children: [\n              {\n                id: 11,\n                name: 'src :',\n                children: [\n                  { id: 12, name: 'v-btn : ts' },\n                  { id: 13, name: 'v-card : ts' },\n                  { id: 14, name: 'v-window : ts' },\n                ],\n              },\n            ],\n          },\n        ],\n      },\n      {\n        id: 15,\n        name: 'Downloads :',\n        children: [\n          { id: 16, name: 'October : pdf' },\n          { id: 17, name: 'November : pdf' },\n          { id: 18, name: 'Tutorial : html' },\n        ],\n      },\n      {\n        id: 19,\n        name: 'Videos :',\n        children: [\n          {\n            id: 20,\n            name: 'Tutorials :',\n            children: [\n              { id: 21, name: 'Basic layouts : mp4' },\n              { id: 22, name: 'Advanced techniques : mp4' },\n              { id: 23, name: 'All about app : dir' },\n            ],\n          },\n          { id: 24, name: 'Intro : mov' },\n          { id: 25, name: 'Conference introduction : avi' },\n        ],\n      },\n    ],\n  }),\n}",
        items: [{
          id: 1,
          name: "Applications :",
          children: [{
            id: 2,
            name: "Calendar : app"
          }, {
            id: 3,
            name: "Chrome : app"
          }, {
            id: 4,
            name: "Webstorm : app"
          }]
        }, {
          id: 5,
          name: "Documents :",
          children: [{
            id: 6,
            name: "vuetify :",
            children: [{
              id: 7,
              name: "src :",
              children: [{
                id: 8,
                name: "index : ts"
              }, {
                id: 9,
                name: "bootstrap : ts"
              }]
            }]
          }, {
            id: 10,
            name: "material2 :",
            children: [{
              id: 11,
              name: "src :",
              children: [{
                id: 12,
                name: "v-btn : ts"
              }, {
                id: 13,
                name: "v-card : ts"
              }, {
                id: 14,
                name: "v-window : ts"
              }]
            }]
          }]
        }, {
          id: 15,
          name: "Downloads :",
          children: [{
            id: 16,
            name: "October : pdf"
          }, {
            id: 17,
            name: "November : pdf"
          }, {
            id: 18,
            name: "Tutorial : html"
          }]
        }, {
          id: 19,
          name: "Videos :",
          children: [{
            id: 20,
            name: "Tutorials :",
            children: [{
              id: 21,
              name: "Basic layouts : mp4"
            }, {
              id: 22,
              name: "Advanced techniques : mp4"
            }, {
              id: 23,
              name: "All about app : dir"
            }]
          }, {
            id: 24,
            name: "Intro : mov"
          }, {
            id: 25,
            name: "Conference introduction : avi"
          }]
        }]
      },
      code3: {
        html: "<v-treeview\n  selectable\n  :items=\"items\"\n></v-treeview>",
        js: "export default {\n  data: () => ({\n    items: [\n      {\n        id: 1,\n        name: 'Applications :',\n        children: [\n          { id: 2, name: 'Calendar : app' },\n          { id: 3, name: 'Chrome : app' },\n          { id: 4, name: 'Webstorm : app' },\n        ],\n      },\n      {\n        id: 5,\n        name: 'Documents :',\n        children: [\n          {\n            id: 6,\n            name: 'vuetify :',\n            children: [\n              {\n                id: 7,\n                name: 'src :',\n                children: [\n                  { id: 8, name: 'index : ts' },\n                  { id: 9, name: 'bootstrap : ts' },\n                ],\n              },\n            ],\n          },\n          {\n            id: 10,\n            name: 'material2 :',\n            children: [\n              {\n                id: 11,\n                name: 'src :',\n                children: [\n                  { id: 12, name: 'v-btn : ts' },\n                  { id: 13, name: 'v-card : ts' },\n                  { id: 14, name: 'v-window : ts' },\n                ],\n              },\n            ],\n          },\n        ],\n      },\n      {\n        id: 15,\n        name: 'Downloads :',\n        children: [\n          { id: 16, name: 'October : pdf' },\n          { id: 17, name: 'November : pdf' },\n          { id: 18, name: 'Tutorial : html' },\n        ],\n      },\n      {\n        id: 19,\n        name: 'Videos :',\n        children: [\n          {\n            id: 20,\n            name: 'Tutorials :',\n            children: [\n              { id: 21, name: 'Basic layouts : mp4' },\n              { id: 22, name: 'Advanced techniques : mp4' },\n              { id: 23, name: 'All about app : dir' },\n            ],\n          },\n          { id: 24, name: 'Intro : mov' },\n          { id: 25, name: 'Conference introduction : avi' },\n        ],\n      },\n    ],\n  }),\n}",
        items: [{
          id: 1,
          name: "Applications :",
          children: [{
            id: 2,
            name: "Calendar : app"
          }, {
            id: 3,
            name: "Chrome : app"
          }, {
            id: 4,
            name: "Webstorm : app"
          }]
        }, {
          id: 5,
          name: "Documents :",
          children: [{
            id: 6,
            name: "vuetify :",
            children: [{
              id: 7,
              name: "src :",
              children: [{
                id: 8,
                name: "index : ts"
              }, {
                id: 9,
                name: "bootstrap : ts"
              }]
            }]
          }, {
            id: 10,
            name: "material2 :",
            children: [{
              id: 11,
              name: "src :",
              children: [{
                id: 12,
                name: "v-btn : ts"
              }, {
                id: 13,
                name: "v-card : ts"
              }, {
                id: 14,
                name: "v-window : ts"
              }]
            }]
          }]
        }, {
          id: 15,
          name: "Downloads :",
          children: [{
            id: 16,
            name: "October : pdf"
          }, {
            id: 17,
            name: "November : pdf"
          }, {
            id: 18,
            name: "Tutorial : html"
          }]
        }, {
          id: 19,
          name: "Videos :",
          children: [{
            id: 20,
            name: "Tutorials :",
            children: [{
              id: 21,
              name: "Basic layouts : mp4"
            }, {
              id: 22,
              name: "Advanced techniques : mp4"
            }, {
              id: 23,
              name: "All about app : dir"
            }]
          }, {
            id: 24,
            name: "Intro : mov"
          }, {
            id: 25,
            name: "Conference introduction : avi"
          }]
        }]
      },
      code4: {
        html: "<v-treeview\n  v-model=\"tree\"\n  :open=\"open\"\n  :items=\"items\"\n  activatable\n  item-key=\"name\"\n  open-on-click\n>\n  <template v-slot:prepend=\"{ item, open }\">\n    <v-icon v-if=\"!item.file\">\n      {{ open ? 'mdi-folder-open' : 'mdi-folder' }}\n    </v-icon>\n    <v-icon v-else>\n      {{ files[item.file] }}\n    </v-icon>\n  </template>\n</v-treeview>",
        js: "export default {\n  data: () => ({\n    open: ['public'],\n    files: {\n      html: 'mdi-language-html5',\n      js: 'mdi-nodejs',\n      json: 'mdi-json',\n      md: 'mdi-markdown',\n      pdf: 'mdi-file-pdf',\n      png: 'mdi-file-image',\n      txt: 'mdi-file-document-outline',\n      xls: 'mdi-file-excel',\n    },\n    tree: [],\n    items: [\n      {\n        name: '.git',\n      },\n      {\n        name: 'node_modules',\n      },\n      {\n        name: 'public',\n        children: [\n          {\n            name: 'static',\n            children: [{\n              name: 'logo.png',\n              file: 'png',\n            }],\n          },\n          {\n            name: 'favicon.ico',\n            file: 'png',\n          },\n          {\n            name: 'index.html',\n            file: 'html',\n          },\n        ],\n      },\n      {\n        name: '.gitignore',\n        file: 'txt',\n      },\n      {\n        name: 'babel.config.js',\n        file: 'js',\n      },\n      {\n        name: 'package.json',\n        file: 'json',\n      },\n      {\n        name: 'README.md',\n        file: 'md',\n      },\n      {\n        name: 'vue.config.js',\n        file: 'js',\n      },\n      {\n        name: 'yarn.lock',\n        file: 'txt',\n      },\n    ],\n  }),\n}",
        open: ["public"],
        files: {
          html: "mdi-language-html5",
          js: "mdi-nodejs",
          json: "mdi-json",
          md: "mdi-markdown",
          pdf: "mdi-file-pdf",
          png: "mdi-file-image",
          txt: "mdi-file-document-outline",
          xls: "mdi-file-excel"
        },
        tree: [],
        items: [{
          name: ".git"
        }, {
          name: "node_modules"
        }, {
          name: "public",
          children: [{
            name: "static",
            children: [{
              name: "logo.png",
              file: "png"
            }]
          }, {
            name: "favicon.ico",
            file: "png"
          }, {
            name: "index.html",
            file: "html"
          }]
        }, {
          name: ".gitignore",
          file: "txt"
        }, {
          name: "babel.config.js",
          file: "js"
        }, {
          name: "package.json",
          file: "json"
        }, {
          name: "README.md",
          file: "md"
        }, {
          name: "vue.config.js",
          file: "js"
        }, {
          name: "yarn.lock",
          file: "txt"
        }]
      },
      code5: {
        html: " <v-card\n  class=\"mx-auto\"\n  max-width=\"500\"\n>\n  <v-sheet class=\"pa-4 primary lighten-2\">\n    <v-text-field\n      v-model=\"search\"\n      label=\"Search Company Directory\"\n      dark\n      flat\n      solo-inverted\n      hide-details\n      clearable\n      clear-icon=\"mdi-close-circle-outline\"\n    ></v-text-field>\n    <v-checkbox\n      v-model=\"caseSensitive\"\n      dark\n      hide-details\n      label=\"Case sensitive search\"\n    ></v-checkbox>\n  </v-sheet>\n  <v-card-text>\n    <v-treeview\n      :items=\"items\"\n      :search=\"search\"\n      :filter=\"filter\"\n      :open.sync=\"open\"\n    >\n      <template v-slot:prepend=\"{ item }\">\n        <v-icon\n          v-if=\"item.children\"\n          v-text=\"`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`\"\n        ></v-icon>\n      </template>\n    </v-treeview>\n  </v-card-text>\n</v-card>",
        js: "export default {\n  data: () => ({\n    items: [\n      {\n        id: 1,\n        name: 'Vuetify Human Resources',\n        children: [\n          {\n            id: 2,\n            name: 'Core team',\n            children: [\n              {\n                id: 201,\n                name: 'Sean',\n              },\n              {\n                id: 202,\n                name: 'Kael',\n              },\n              {\n                id: 203,\n                name: 'Nekosaur',\n              },\n              {\n                id: 204,\n                name: 'Jacek',\n              },\n              {\n                id: 205,\n                name: 'Andrew',\n              },\n            ],\n          },\n          {\n            id: 3,\n            name: 'Administrators',\n            children: [\n              {\n                id: 301,\n                name: 'Ranee',\n              },\n              {\n                id: 302,\n                name: 'Rachel',\n              },\n            ],\n          },\n          {\n            id: 4,\n            name: 'Contributors',\n            children: [\n              {\n                id: 401,\n                name: 'Phlow',\n              },\n              {\n                id: 402,\n                name: 'Brandon',\n              },\n              {\n                id: 403,\n                name: 'Sean',\n              },\n            ],\n          },\n        ],\n      },\n    ],\n    open: [1, 2],\n    search: null,\n    caseSensitive: false,\n  }),\n  computed: {\n    filter () {\n      return this.caseSensitive\n        ? (item, search, textKey) => item[textKey].indexOf(search) > -1\n        : undefined\n    },\n  },\n}",
        items: [{
          id: 1,
          name: "Vuetify Human Resources",
          children: [{
            id: 2,
            name: "Core team",
            children: [{
              id: 201,
              name: "Sean"
            }, {
              id: 202,
              name: "Kael"
            }, {
              id: 203,
              name: "Nekosaur"
            }, {
              id: 204,
              name: "Jacek"
            }, {
              id: 205,
              name: "Andrew"
            }]
          }, {
            id: 3,
            name: "Administrators",
            children: [{
              id: 301,
              name: "Ranee"
            }, {
              id: 302,
              name: "Rachel"
            }]
          }, {
            id: 4,
            name: "Contributors",
            children: [{
              id: 401,
              name: "Phlow"
            }, {
              id: 402,
              name: "Brandon"
            }, {
              id: 403,
              name: "Sean"
            }]
          }]
        }],
        open: [1, 2],
        search: null,
        caseSensitive: false
      },
      code6: {
        html: "<v-card>\n  <v-card-title class=\"indigo white--text headline\">\n    User Directory\n  </v-card-title>\n  <v-row\n    class=\"pa-4\"\n    justify=\"space-between\"\n  >\n    <v-col cols=\"5\">\n      <v-treeview\n        :active.sync=\"active\"\n        :items=\"items\"\n        :load-children=\"fetchUsers\"\n        :open.sync=\"open\"\n        activatable\n        color=\"warning\"\n        open-on-click\n        transition\n      >\n        <template v-slot:prepend=\"{ item, active }\">\n          <v-icon v-if=\"!item.children\">mdi-account</v-icon>\n        </template>\n      </v-treeview>\n    </v-col>\n\n    <v-divider vertical></v-divider>\n\n    <v-col\n      class=\"d-flex text-center\"\n    >\n      <v-scroll-y-transition mode=\"out-in\">\n        <div\n          v-if=\"!selected\"\n          class=\"title grey--text text--lighten-1 font-weight-light\"\n          style=\"align-self: center;\"\n        >\n          Select a User\n        </div>\n        <v-card\n          v-else\n          :key=\"selected.id\"\n          class=\"pt-6 mx-auto\"\n          flat\n          max-width=\"400\"\n        >\n          <v-card-text>\n            <v-avatar\n              v-if=\"avatar\"\n              size=\"88\"\n            >\n              <v-img\n                :src=\"`https://avataaars.io/${avatar}`\"\n                class=\"mb-6\"\n              ></v-img>\n            </v-avatar>\n            <h3 class=\"headline mb-2\">\n              {{ selected.name }}\n            </h3>\n            <div class=\"blue--text mb-2\">{{ selected.email }}</div>\n            <div class=\"blue--text subheading font-weight-bold\">{{ selected.username }}</div>\n          </v-card-text>\n          <v-divider></v-divider>\n          <v-row\n            class=\"text-left\"\n            tag=\"v-card-text\"\n          >\n            <v-col class=\"text-right mr-4 mb-2\" tag=\"strong\" cols=\"5\">Company:</v-col>\n            <v-col>{{ selected.company.name }}</v-col>\n            <v-col class=\"text-right mr-4 mb-2\" tag=\"strong\" cols=\"5\">Website:</v-col>\n            <v-col>\n              <a :href=\"`//${selected.website}`\" target=\"_blank\">{{ selected.website }}</a>\n            </v-col>\n            <v-col class=\"text-right mr-4 mb-2\" tag=\"strong\" cols=\"5\">Phone:</v-col>\n            <v-col>{{ selected.phone }}</v-col>\n          </v-row>\n        </v-card>\n      </v-scroll-y-transition>\n    </v-col>\n  </v-row>\n</v-card>",
        js: "const avatars = [\n  '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',\n  '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',\n  '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',\n  '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',\n  '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',\n]\n\nconst pause = ms => new Promise(resolve => setTimeout(resolve, ms))\n\nexport default {\n  data: () => ({\n    active: [],\n    avatar: null,\n    open: [],\n    users: [],\n  }),\n\n  computed: {\n    items () {\n      return [\n        {\n          name: 'Users',\n          children: this.users,\n        },\n      ]\n    },\n    selected () {\n      if (!this.active.length) return undefined\n\n      const id = this.active[0]\n\n      return this.users.find(user => user.id === id)\n    },\n  },\n\n  watch: {\n    selected: 'randomAvatar',\n  },\n\n  methods: {\n    async fetchUsers (item) {\n      // Remove in 6 months and say\n      // you've made optimizations! :)\n      await pause(1500)\n\n      return fetch('https://jsonplaceholder.typicode.com/users')\n        .then(res => res.json())\n        .then(json => (item.children.push(...json)))\n        .catch(err => console.warn(err))\n    },\n    randomAvatar () {\n      this.avatar = avatars[Math.floor(Math.random() * avatars.length)]\n    },\n  },\n}",
        active: [],
        avatar: null,
        open: [],
        users: []
      },
      code7: {
        html: "<v-card>\n  <v-toolbar\n    color=\"primary\"\n    dark\n    flat\n  >\n    <v-icon>mdi-silverware</v-icon>\n    <v-toolbar-title>Local hotspots</v-toolbar-title>\n  </v-toolbar>\n\n  <v-row>\n    <v-col>\n      <v-card-text>\n        <v-treeview\n          v-model=\"tree\"\n          :load-children=\"fetch\"\n          :items=\"items\"\n          selected-color=\"indigo\"\n          open-on-click\n          selectable\n          return-object\n          expand-icon=\"mdi-chevron-down\"\n          on-icon=\"mdi-bookmark\"\n          off-icon=\"mdi-bookmark-outline\"\n          indeterminate-icon=\"mdi-bookmark-minus\"\n        >\n        </v-treeview>\n      </v-card-text>\n    </v-col>\n\n    <v-divider vertical></v-divider>\n\n    <v-col\n      cols=\"12\"\n      md=\"6\"\n    >\n      <v-card-text>\n        <div\n          v-if=\"tree.length === 0\"\n          key=\"title\"\n          class=\"title font-weight-light grey--text pa-4 text-center\"\n        >\n          Select your favorite breweries\n        </div>\n\n        <v-scroll-x-transition\n          group\n          hide-on-leave\n        >\n          <v-chip\n            v-for=\"(selection, i) in tree\"\n            :key=\"i\"\n            color=\"grey\"\n            dark\n            small\n            class=\"ma-1\"\n          >\n            <v-icon left small>mdi-beer</v-icon>\n            {{ selection.name }}\n          </v-chip>\n        </v-scroll-x-transition>\n      </v-card-text>\n    </v-col>\n  </v-row>\n\n  <v-divider></v-divider>\n\n  <v-card-actions>\n    <v-btn\n      text\n      @click=\"tree = []\"\n    >\n      Reset\n    </v-btn>\n\n    <v-spacer></v-spacer>\n\n    <v-btn\n      class=\"white--text\"\n      color=\"green darken-1\"\n      depressed\n    >\n      Save\n      <v-icon right>mdi-content-save</v-icon>\n    </v-btn>\n  </v-card-actions>\n</v-card>",
        js: " export default {\n  data: () => ({\n    breweries: [],\n    isLoading: false,\n    tree: [],\n    types: [],\n  }),\n\n  computed: {\n    items () {\n      const children = this.types.map(type => ({\n        id: type,\n        name: this.getName(type),\n        children: this.getChildren(type),\n      }))\n\n      return [{\n        id: 1,\n        name: 'All Breweries',\n        children,\n      }]\n    },\n    shouldShowTree () {\n      return this.breweries.length > 0 && !this.isLoading\n    },\n  },\n\n  watch: {\n    breweries (val) {\n      this.types = val.reduce((acc, cur) => {\n        const type = cur.brewery_type\n\n        if (!acc.includes(type)) acc.push(type)\n\n        return acc\n      }, []).sort()\n    },\n  },\n\n  methods: {\n    fetch () {\n      if (this.breweries.length) return\n\n      return fetch('https://api.openbrewerydb.org/breweries')\n        .then(res => res.json())\n        .then(data => (this.breweries = data))\n        .catch(err => console.log(err))\n    },\n    getChildren (type) {\n      const breweries = []\n\n      for (const brewery of this.breweries) {\n        if (brewery.brewery_type !== type) continue\n\n        breweries.push({\n          ...brewery,\n          name: this.getName(brewery.name),\n        })\n      }\n\n      return breweries.sort((a, b) => {\n        return a.name > b.name ? 1 : -1\n      })\n    },\n    getName (name) {\n      return `${name.charAt(0).toUpperCase()}".concat(name.slice(1), "`\n    },\n  },\n}"),
        isLoading: false,
        tree: [],
        types: []
      },
      breweries: []
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__["SET_BREADCRUMB"], [{
      title: "Vuetify",
      route: "alerts"
    }, {
      title: "Treeview"
    }]);
  },
  computed: {
    filter: function filter() {
      return this.code5.caseSensitive ? function (item, search, textKey) {
        return item[textKey].indexOf(search) > -1;
      } : undefined;
    },
    // code 6
    items: function items() {
      return [{
        name: "Users",
        children: this.code6.users
      }];
    },
    selected: function selected() {
      if (!this.code6.active.length) return undefined;
      var id = this.code6.active[0];
      return this.code6.users.find(function (user) {
        return user.id === id;
      });
    },
    // code 7
    items7: function items7() {
      var _this = this;

      var children = this.code7.types.map(function (type) {
        return {
          id: type,
          name: _this.getName(type),
          children: _this.getChildren(type)
        };
      });
      return [{
        id: 1,
        name: "All Breweries",
        children: children
      }];
    },
    shouldShowTree: function shouldShowTree() {
      return this.breweries.length > 0 && !this.code7.isLoading;
    }
  },
  watch: {
    // code 6
    selected: "randomAvatar",
    // code 7
    breweries: function breweries(val) {
      this.code7.types = val.reduce(function (acc, cur) {
        var type = cur.brewery_type;
        if (!acc.includes(type)) acc.push(type);
        return acc;
      }, []).sort();
    }
  },
  methods: {
    // code 6
    fetchUsers: function fetchUsers(item) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return pause(1500);

              case 2:
                return _context.abrupt("return", fetch("https://jsonplaceholder.typicode.com/users").then(function (res) {
                  return res.json();
                }).then(function (json) {
                  var _item$children;

                  return (_item$children = item.children).push.apply(_item$children, _toConsumableArray(json));
                })["catch"](function ()
                /*err*/
                {
                  /*console.warn(err)*/
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    randomAvatar: function randomAvatar() {
      this.code6.avatar = avatars[Math.floor(Math.random() * avatars.length)];
    },
    // code 7
    fetch: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function () {
      var _this2 = this;

      if (this.breweries.length) return;
      return fetch("https://api.openbrewerydb.org/breweries").then(function (res) {
        return res.json();
      }).then(function (data) {
        return _this2.breweries = data;
      })["catch"](function ()
      /*err*/
      {
        /*console.log(err)*/
      });
    }),
    getChildren: function getChildren(type) {
      var breweries = [];

      var _iterator = _createForOfIteratorHelper(this.breweries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var brewery = _step.value;
          if (brewery.brewery_type !== type) continue;
          breweries.push(_objectSpread(_objectSpread({}, brewery), {}, {
            name: this.getName(brewery.name)
          }));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return breweries.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      });
    },
    getName: function getName(name) {
      return "".concat(name.charAt(0).toUpperCase()).concat(name.slice(1));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=template&id=1e5898a0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=template&id=1e5898a0& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Treeview")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-treeview")]),
            _vm._v(
              " component is useful for\n      displaying large amounts of nested data.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/treeview",
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
              attrs: { title: "Dense mode" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Dense mode provides more compact layout with decreased heights of\n            the items.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-treeview", {
                        attrs: { dense: "", items: _vm.code1.items }
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
              attrs: { title: "Selectable" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "You can easily select treeview nodes and children."
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-treeview", {
                        attrs: { selectable: "", items: _vm.code3.items }
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
              attrs: { title: "Searching a directory" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "500" }
                        },
                        [
                          _c(
                            "v-sheet",
                            { staticClass: "pa-4 primary lighten-2" },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Search Company Directory",
                                  dark: "",
                                  flat: "",
                                  "solo-inverted": "",
                                  "hide-details": "",
                                  clearable: "",
                                  "clear-icon": "mdi-close-circle-outline"
                                },
                                model: {
                                  value: _vm.code5.search,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code5, "search", $$v)
                                  },
                                  expression: "code5.search"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-checkbox", {
                                attrs: {
                                  dark: "",
                                  "hide-details": "",
                                  label: "Case sensitive search"
                                },
                                model: {
                                  value: _vm.code5.caseSensitive,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code5, "caseSensitive", $$v)
                                  },
                                  expression: "code5.caseSensitive"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c("v-treeview", {
                                attrs: {
                                  items: _vm.code5.items,
                                  search: _vm.code5.search,
                                  filter: _vm.code5.filter,
                                  open: _vm.code5.open
                                },
                                on: {
                                  "update:open": function($event) {
                                    return _vm.$set(_vm.code5, "open", $event)
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "prepend",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        item.children
                                          ? _c("v-icon", {
                                              domProps: {
                                                textContent: _vm._s(
                                                  "mdi-" +
                                                    (item.id === 1
                                                      ? "home-variant"
                                                      : "folder-network")
                                                )
                                              }
                                            })
                                          : _vm._e()
                                      ]
                                    }
                                  }
                                ])
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
              attrs: { title: "Custom selectable icons" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Customize the on, off and indeterminate icons for your selectable\n            tree. Combine with other advanced functionality like API loaded\n            items.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { color: "primary", dark: "", flat: "" } },
                            [
                              _c("v-icon", [_vm._v("mdi-silverware")]),
                              _vm._v(" "),
                              _c("v-toolbar-title", [_vm._v("Local hotspots")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("v-treeview", {
                                        attrs: {
                                          "load-children": _vm.fetch,
                                          items: _vm.items7,
                                          "selected-color": "indigo",
                                          "open-on-click": "",
                                          selectable: "",
                                          "return-object": "",
                                          "expand-icon": "mdi-chevron-down",
                                          "on-icon": "mdi-bookmark",
                                          "off-icon": "mdi-bookmark-outline",
                                          "indeterminate-icon":
                                            "mdi-bookmark-minus"
                                        },
                                        model: {
                                          value: _vm.code7.tree,
                                          callback: function($$v) {
                                            _vm.$set(_vm.code7, "tree", $$v)
                                          },
                                          expression: "code7.tree"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider", { attrs: { vertical: "" } }),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _vm.code7.tree.length === 0
                                        ? _c(
                                            "div",
                                            {
                                              key: "title",
                                              staticClass:
                                                "title font-weight-light grey--text pa-4 text-center"
                                            },
                                            [
                                              _vm._v(
                                                "\n                    Select your favorite breweries\n                  "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-scroll-x-transition",
                                        {
                                          attrs: {
                                            group: "",
                                            "hide-on-leave": ""
                                          }
                                        },
                                        _vm._l(_vm.code7.tree, function(
                                          selection,
                                          i
                                        ) {
                                          return _c(
                                            "v-chip",
                                            {
                                              key: i,
                                              staticClass: "ma-1",
                                              attrs: {
                                                color: "grey",
                                                dark: "",
                                                small: ""
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: { left: "", small: "" }
                                                },
                                                [_vm._v("mdi-beer")]
                                              ),
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(selection.name) +
                                                  "\n                    "
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.code7.tree = []
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Reset\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "white--text",
                                  attrs: {
                                    color: "green darken-1",
                                    depressed: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Save\n                "
                                  ),
                                  _c("v-icon", { attrs: { right: "" } }, [
                                    _vm._v("mdi-content-save")
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
              attrs: { title: "Checkbox color" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "You can control the color of the selected node checkbox."
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-treeview", {
                        attrs: {
                          selectable: "",
                          "selected-color": "red",
                          items: _vm.code2.items
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
              attrs: { title: "Slots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Using slots we are able to create an intuitive file explorer.\n            Apart from the "
                        ),
                        _c("code", [_vm._v("prepend")]),
                        _vm._v(
                          " slot, there is also one for\n            the "
                        ),
                        _c("code", [_vm._v("label")]),
                        _vm._v(", and an "),
                        _c("code", [_vm._v("append")]),
                        _vm._v(" slot.\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-treeview", {
                        attrs: {
                          open: _vm.code4.open,
                          items: _vm.code4.items,
                          activatable: "",
                          "item-key": "name",
                          "open-on-click": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function(ref) {
                              var item = ref.item
                              var open = ref.open
                              return [
                                !item.file
                                  ? _c("v-icon", [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(
                                            open
                                              ? "mdi-folder-open"
                                              : "mdi-folder"
                                          ) +
                                          "\n              "
                                      )
                                    ])
                                  : _c("v-icon", [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(_vm.code4.files[item.file]) +
                                          "\n              "
                                      )
                                    ])
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.code4.tree,
                          callback: function($$v) {
                            _vm.$set(_vm.code4, "tree", $$v)
                          },
                          expression: "code4.tree"
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
              attrs: { title: "Async items" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            { staticClass: "indigo white--text headline" },
                            [
                              _vm._v(
                                "\n              User Directory\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            {
                              staticClass: "pa-4",
                              attrs: { justify: "space-between" }
                            },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "5" } },
                                [
                                  _c("v-treeview", {
                                    attrs: {
                                      active: _vm.code6.active,
                                      items: _vm.items,
                                      "load-children": _vm.fetchUsers,
                                      open: _vm.code6.open,
                                      activatable: "",
                                      color: "warning",
                                      "open-on-click": "",
                                      transition: ""
                                    },
                                    on: {
                                      "update:active": function($event) {
                                        return _vm.$set(
                                          _vm.code6,
                                          "active",
                                          $event
                                        )
                                      },
                                      "update:open": function($event) {
                                        return _vm.$set(
                                          _vm.code6,
                                          "open",
                                          $event
                                        )
                                      }
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "prepend",
                                        fn: function(ref) {
                                          var item = ref.item
                                          var active = ref.active
                                          return [
                                            !item.children
                                              ? _c("v-icon", [
                                                  _vm._v("mdi-account")
                                                ])
                                              : _vm._e()
                                          ]
                                        }
                                      }
                                    ])
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider", { attrs: { vertical: "" } }),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { staticClass: "d-flex text-center" },
                                [
                                  _c(
                                    "v-scroll-y-transition",
                                    { attrs: { mode: "out-in" } },
                                    [
                                      !_vm.selected
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "title grey--text text--lighten-1 font-weight-light",
                                              staticStyle: {
                                                "align-self": "center"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                    Select a User\n                  "
                                              )
                                            ]
                                          )
                                        : _c(
                                            "v-card",
                                            {
                                              key: _vm.selected.id,
                                              staticClass: "pt-6 mx-auto",
                                              attrs: {
                                                flat: "",
                                                "max-width": "400"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-card-text",
                                                [
                                                  _vm.code6.avatar
                                                    ? _c(
                                                        "v-avatar",
                                                        {
                                                          attrs: { size: "88" }
                                                        },
                                                        [
                                                          _c("v-img", {
                                                            staticClass: "mb-6",
                                                            attrs: {
                                                              src:
                                                                "https://avataaars.io/" +
                                                                _vm.code6.avatar
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "h3",
                                                    {
                                                      staticClass:
                                                        "headline mb-2"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.selected.name
                                                          ) +
                                                          "\n                      "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "blue--text mb-2"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.selected.email
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "blue--text subheading font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.selected
                                                              .username
                                                          ) +
                                                          "\n                      "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-divider"),
                                              _vm._v(" "),
                                              _c(
                                                "v-row",
                                                {
                                                  staticClass: "text-left",
                                                  attrs: { tag: "v-card-text" }
                                                },
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass:
                                                        "text-right mr-4 mb-2",
                                                      attrs: {
                                                        tag: "strong",
                                                        cols: "5"
                                                      }
                                                    },
                                                    [_vm._v("Company:")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("v-col", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selected.company
                                                          .name
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass:
                                                        "text-right mr-4 mb-2",
                                                      attrs: {
                                                        tag: "strong",
                                                        cols: "5"
                                                      }
                                                    },
                                                    [_vm._v("Website:")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("v-col", [
                                                    _c(
                                                      "a",
                                                      {
                                                        attrs: {
                                                          href:
                                                            "//" +
                                                            _vm.selected
                                                              .website,
                                                          target: "_blank"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.selected.website
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass:
                                                        "text-right mr-4 mb-2",
                                                      attrs: {
                                                        tag: "strong",
                                                        cols: "5"
                                                      }
                                                    },
                                                    [_vm._v("Phone:")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("v-col", [
                                                    _vm._v(
                                                      _vm._s(_vm.selected.phone)
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

/***/ "./resources/js/src/view/pages/vuetify/Treeview.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Treeview.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Treeview_vue_vue_type_template_id_1e5898a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Treeview.vue?vue&type=template&id=1e5898a0& */ "./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=template&id=1e5898a0&");
/* harmony import */ var _Treeview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Treeview.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Treeview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Treeview_vue_vue_type_template_id_1e5898a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Treeview_vue_vue_type_template_id_1e5898a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/Treeview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Treeview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=template&id=1e5898a0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=template&id=1e5898a0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_template_id_1e5898a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Treeview.vue?vue&type=template&id=1e5898a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vuetify/Treeview.vue?vue&type=template&id=1e5898a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_template_id_1e5898a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_template_id_1e5898a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);