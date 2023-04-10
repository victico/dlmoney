(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _assets_plugins_formvalidation_dist_es6_core_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/core/Core */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/core/Core.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_plugins_Trigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/plugins/Trigger */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/plugins/Trigger.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_plugins_Bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_plugins_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton.js");
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/js/components/util */ "./resources/js/src/assets/js/components/util.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/services/store/auth.module */ "./resources/js/src/core/services/store/auth.module.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// FormValidation plugins







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      state: "signin",
      linkToResetData: {
        show: false,
        status: null,
        message: null
      },
      kt_login_signup_submit_disabled: false,
      registerData: {
        show: false,
        status: null,
        message: null,
        errors: {}
      },
      // Remove this dummy login info
      form: {
        email: "",
        password: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])({
    errors: function errors(state) {
      return state.auth.errors;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(["currentUser"])), {}, {
    backgroundImage: function backgroundImage() {
      return {
        leftSide: process.env.BASE_URL + "media/illustrations/registrong.png",
        background: process.env.BASE_URL + "media/backgrounds/bg-blanco.jpg"
      };
    }
  }),
  mounted: function mounted() {
    var _this = this;
    var signin_form = _assets_js_components_util__WEBPACK_IMPORTED_MODULE_4__["default"].getById("kt_login_signin_form");
    var signup_form = _assets_js_components_util__WEBPACK_IMPORTED_MODULE_4__["default"].getById("kt_login_signup_form");
    // const forgot_form = KTUtil.getById("kt_login_forgot_form");

    this.fv = Object(_assets_plugins_formvalidation_dist_es6_core_Core__WEBPACK_IMPORTED_MODULE_0__["default"])(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "El email es requerido"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "La contraseña es requerida"
            }
          }
        }
      },
      plugins: {
        trigger: new _assets_plugins_formvalidation_dist_es6_plugins_Trigger__WEBPACK_IMPORTED_MODULE_1__["default"](),
        submitButton: new _assets_plugins_formvalidation_dist_es6_plugins_SubmitButton__WEBPACK_IMPORTED_MODULE_3__["default"](),
        bootstrap: new _assets_plugins_formvalidation_dist_es6_plugins_Bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"]()
      }
    });

    // this.fv1 = formValidation(signup_form, {
    //   fields: {
    //     username: {
    //       validators: {
    //         notEmpty: {
    //           message: "El usuario es requerido"
    //         }
    //       }
    //     },
    //     email: {
    //       validators: {
    //         notEmpty: {
    //           message: "El email es requerido"
    //         },
    //         emailAddress: {
    //           message: "El valor ingresado no es un email válido"
    //         }
    //       }
    //     },
    //     password: {
    //       validators: {
    //         notEmpty: {
    //           message: "La contraseña es requerida"
    //         }
    //       }
    //     },
    //     cpassword: {
    //       validators: {
    //         notEmpty: {
    //           message: "La confirmación de contraseña es requerida"
    //         },
    //         identical: {
    //           compare: function() {
    //             return signup_form.querySelector('[name="password"]').value;
    //           },
    //           message: "La contraseña y su confirmacion no coinciden"
    //         }
    //       }
    //     },
    //     agree: {
    //       validators: {
    //         notEmpty: {
    //           message: "Debes aceptar los términos y condiciones"
    //         }
    //       }
    //     }
    //   },
    //   plugins: {
    //     trigger: new Trigger(),
    //     submitButton: new SubmitButton(),
    //     bootstrap: new Bootstrap()
    //   }
    // });

    // this.fv2 = formValidation(forgot_form, {
    //   fields: {
    //     email: {
    //       validators: {
    //         notEmpty: {
    //           message: "El email es requerido"
    //         },
    //         emailAddress: {
    //           message: "El valor ingresado no es un email válido"
    //         }
    //       }
    //     }
    //   },
    //   plugins: {
    //     trigger: new Trigger(),
    //     submitButton: new SubmitButton(),
    //     bootstrap: new Bootstrap()
    //   }
    // });

    this.fv.on("core.form.valid", function () {
      var email = _this.form.email;
      var password = _this.form.password;

      // clear existing errors
      _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_6__["LOGOUT"]);

      // set spinner to submit button
      var submitButton = _this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(function () {
        // send login request
        _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_6__["LOGIN"], {
          email: email,
          password: password
        }).then(function () {
          _this.$router.push('/dashboard');
          console.log('si'); // go to which page after successfully login
        })["catch"](function () {});
        _this.removeSpinnerFromSubmitButton(submitButton);
      }, 500);
    });
    this.fv.on("core.form.invalid", function () {
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        title: "",
        text: "Por favor, proporcione los datos correctos.",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });
    this.fv1.on("core.form.valid", function () {
      var username = _this.$refs.username.value;
      var email = _this.$refs.remail.value;
      var password = _this.$refs.rpassword.value;
      var password_confirmation = _this.$refs.cpassword.value;
      _this.registerData = {
        show: false,
        status: null,
        message: null,
        errors: {}
      };

      // clear existing errors
      _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_6__["LOGOUT"]);

      // set spinner to submit button
      var submitButton = _this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(function () {
        // send register request
        _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_6__["REGISTER"], {
          username: username,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }).then(function (data) {
          _this.removeSpinnerFromSubmitButton(submitButton);
          _this.registerData.show = true;
          _this.registerData.status = data.status;
          if (data.errors) {
            _this.registerData.errors = data.errors;
          } else {
            _this.registerData.message = data.message;
          }
          if (_this.registerData.status === 'ok') {
            _this.kt_login_signup_submit_disabled = true;
            setTimeout(function () {
              _this.$router.push({
                name: "dashboard"
              });
            }, 1500);
          }
        });
      }, 500);
    });
    this.fv1.on("core.form.invalid", function () {
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        title: "",
        text: "Por favor, proporcione los datos correctos.",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });

    // this.fv2.on("core.form.valid", () => {
    //   const email = this.$refs.fmail.value;

    //   // clear existing errors
    //   this.$store.dispatch(LOGOUT);

    //   // set spinner to submit button
    //   const submitButton = this.$refs["kt_login_forgot_submit"];
    //   submitButton.classList.add("spinner", "spinner-light", "spinner-right");

    //   this.linkToResetData = {
    //     show: false,
    //     status: null,
    //     message: null,
    //   };

    //   // send login request
    //   this.$store
    //     .dispatch(RESET_PASSWORD_EMAIL, { email })
    //     // go to which page after successfully login
    //     .then((data) => {
    //       this.removeSpinnerFromSubmitButton(submitButton);
    //       this.linkToResetData.show = true;
    //       this.linkToResetData.status = data.status;
    //       this.linkToResetData.message = data.message;
    //     })
    //     .catch(() => {
    //       this.removeSpinnerFromSubmitButton(submitButton);
    //     });
    // });

    // this.fv2.on("core.form.invalid", () => {
    //   Swal.fire({
    //     title: "",
    //     text: "Por favor, proporcione los datos correctos.",
    //     icon: "error",
    //     confirmButtonClass: "btn btn-secondary",
    //     heightAuto: false
    //   });
    // });
  },

  methods: {
    showForm: function showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      _assets_js_components_util__WEBPACK_IMPORTED_MODULE_4__["default"].animateClass(_assets_js_components_util__WEBPACK_IMPORTED_MODULE_4__["default"].getById(form_name), "animate__animated animate__bounceInRight");
      _assets_js_components_util__WEBPACK_IMPORTED_MODULE_4__["default"].animateClass(_assets_js_components_util__WEBPACK_IMPORTED_MODULE_4__["default"].getById('leftSide'), "animate__animated animate__bounceInLeft");
      this.backgroundImage.leftSide = form == 'signin' ? process.env.BASE_URL + "media/illustrations/registrong.png" : form == 'signup' ? process.env.BASE_URL + "media/backgrounds/fondo-registro01.jpg" : "";
    },
    initPasswordToggle: function initPasswordToggle(event) {
      var elx = event.srcElement;
      var formPasswordToggle = elx.closest('.form-password-toggle');
      var formPasswordToggleIcon = formPasswordToggle.querySelector('i');
      var formPasswordToggleInput = formPasswordToggle.querySelector('input');
      if (formPasswordToggleInput.getAttribute('type') == 'text') {
        formPasswordToggleInput.setAttribute('type', 'password');
        formPasswordToggleIcon.classList.replace('ti-eye', 'ti-eye-off');
      } else {
        formPasswordToggleInput.setAttribute('type', 'text');
        formPasswordToggleIcon.classList.replace('ti-eye-off', 'ti-eye');
      }
    },
    removeSpinnerFromSubmitButton: function removeSpinnerFromSubmitButton(submitButton) {
      submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=template&id=45f29018&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=template&id=45f29018& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "authentication-wrapper authentication-cover authentication-bg",
    style: {
      backgroundImage: "url(".concat(_vm.backgroundImage.background, ")")
    }
  }, [_c("div", {
    staticClass: "login login-1 authentication-inner row",
    "class": {
      "login-signin-on": this.state == "signin",
      "login-signup-on": this.state == "signup",
      "login-forgot-on": this.state == "forgot"
    },
    attrs: {
      id: "kt_login"
    }
  }, [_c("div", {
    staticClass: "d-none d-lg-flex col-lg-7 p-0"
  }, [_c("div", {
    staticClass: "auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center",
    style: {
      backgroundImage: "url(".concat(_vm.backgroundImage.leftSide, ")")
    },
    attrs: {
      id: "leftSide"
    }
  }, [_c("img", {
    staticClass: "platform-bg",
    attrs: {
      src: "media/bg-shape-image-light.png",
      alt: "auth-login-cover",
      "data-app-light-img": "illustrations/bg-shape-image-light.png",
      "data-app-dark-img": "illustrations/bg-shape-image-dark.png"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-5 align-items-center p-sm-5 p-4"
  }, [_c("div", {
    staticClass: "w-px-400 mx-auto"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "login-form login-signin"
  }, [_vm._m(1), _vm._v(" "), _c("div", {}, [_c("form", {
    staticClass: "mb-3 form",
    attrs: {
      novalidate: "novalidate",
      id: "kt_login_signin_form"
    }
  }, [_c("div", {
    staticClass: "alert fade alert-danger",
    "class": {
      show: _vm.errors.length
    },
    attrs: {
      role: "alert"
    }
  }, _vm._l(_vm.errors, function (error, i) {
    return _c("div", {
      key: i,
      staticClass: "alert-text"
    }, [_vm._v("\n                  " + _vm._s(error) + "\n                ")]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "mb-3 form-group"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Correo electrónico")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    ref: "email",
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Ingresa tu correo electrónico",
      autofocus: "",
      name: "email"
    },
    domProps: {
      value: _vm.form.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 form-password-toggle form-group"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Contraseña")]), _vm._v(" "), _c("a", {
    attrs: {
      id: "kt_login_forgot"
    },
    on: {
      click: function click($event) {
        return _vm.showForm("forgot");
      }
    }
  }, [_c("small", [_vm._v("¿Olvidó su contraseña?")])])]), _vm._v(" "), _c("div", {
    staticClass: "input-group input-group-merge"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    ref: "password",
    staticClass: "form-control",
    attrs: {
      type: "password",
      name: "password",
      placeholder: "**********",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.form.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-text cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.initPasswordToggle($event);
      }
    }
  }, [_c("i", {
    staticClass: "ti ti-eye-off"
  })])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("button", {
    ref: "kt_login_signin_submit",
    staticClass: "btn btn-primary d-grid w-100"
  }, [_vm._v("Ingresar")])])]), _vm._v(" "), _c("p", {
    staticClass: "text-center"
  }, [_c("span", [_vm._v("¿Aún no tienes cuenta?")]), _vm._v(" "), _c("a", {
    staticClass: "text-primary font-weight-bolder cursor-pointer",
    attrs: {
      id: "kt_login_signup"
    },
    on: {
      click: function click($event) {
        return _vm.showForm("signup");
      }
    }
  }, [_c("span", [_vm._v("Crea una aquí")])])])]), _vm._v(" "), _c("div", {
    staticClass: "login-form login-signup"
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v("Solo regístrate y descubre la manera más rápida de cambiar tus soles y dólares en un clic")]), _vm._v(" "), _c("form", {
    staticClass: "form mb-3",
    attrs: {
      novalidate: "novalidate",
      id: "kt_login_signup_form"
    }
  }, [_vm.registerData.message ? _c("div", {
    staticClass: "alert fade",
    "class": {
      show: _vm.registerData.show && _vm.registerData.message,
      "alert-success": _vm.registerData.status == "ok",
      "alert-danger": _vm.registerData.status == "error"
    },
    attrs: {
      role: "alert"
    }
  }, [_c("div", {
    staticClass: "alert-text"
  }, [_vm._v("\n                " + _vm._s(_vm.registerData.message) + "\n              ")])]) : _vm._e(), _vm._v(" "), Object.values(_vm.registerData.errors).length ? _c("div", {
    staticClass: "alert fade alert-danger",
    "class": {
      show: _vm.registerData.show && Object.values(_vm.registerData.errors).length
    },
    attrs: {
      role: "alert"
    }
  }, _vm._l(Object.values(_vm.registerData.errors), function (error, i) {
    return _c("div", {
      key: i,
      staticClass: "alert-text"
    }, [_vm._v("\n                " + _vm._s(error[0]) + "\n              ")]);
  }), 0) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "username"
    }
  }, [_vm._v("Usuario")]), _vm._v(" "), _c("input", {
    ref: "username",
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "username",
      placeholder: "Ingrese un usuario",
      autofocus: "",
      name: "username",
      autocomplete: "off"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Correo electrónico")]), _vm._v(" "), _c("input", {
    ref: "remail",
    staticClass: "form-control",
    attrs: {
      type: "email",
      name: "email",
      placeholder: "Ingresar correo electrónico",
      autocomplete: "off"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 form-password-toggle"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Contraseña")]), _vm._v(" "), _c("div", {
    staticClass: "input-group input-group-merge"
  }, [_c("input", {
    ref: "rpassword",
    staticClass: "form-control",
    attrs: {
      type: "password",
      placeholder: "********",
      name: "password",
      autocomplete: "off"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-text cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.initPasswordToggle($event);
      }
    }
  }, [_c("i", {
    staticClass: "ti ti-eye-off"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 form-password-toggle"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "cpassword"
    }
  }, [_vm._v("Confirmar contraseña")]), _vm._v(" "), _c("div", {
    staticClass: "input-group input-group-merge"
  }, [_c("input", {
    ref: "cpassword",
    staticClass: "form-control",
    attrs: {
      type: "password",
      placeholder: "Confirmar contraseña",
      name: "cpassword",
      autocomplete: "off"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-text cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.initPasswordToggle($event);
      }
    }
  }, [_c("i", {
    staticClass: "ti ti-eye-off"
  })])])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("button", {
    ref: "kt_login_signup_submit",
    staticClass: "btn btn-primary d-grid w-100",
    attrs: {
      disabled: _vm.kt_login_signup_submit_disabled
    }
  }, [_vm._v("Crear cuenta")])]), _vm._v(" "), _c("p", {
    staticClass: "text-center"
  }, [_c("span", [_vm._v("¿Ya tienes una cuenta?")]), _vm._v(" "), _c("a", {
    staticClass: "text-primary font-weight-bolder cursor-pointer",
    attrs: {
      id: "kt_login_signup_cancel"
    },
    on: {
      click: function click($event) {
        return _vm.showForm("signin");
      }
    }
  }, [_c("span", [_vm._v("Inicia sesión")])])])]), _vm._v(" "), _c("div", {
    staticClass: "login-form login-forgot"
  }), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "app-brand mb-4"
  }, [_c("a", {
    staticClass: "app-brand-link gap-2",
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      src: "media/logos/logo-dls.png"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-4"
  }, [_vm._v("Si ya tienes una cuenta, solo ingresa."), _c("br"), _vm._v(" ¡Te estabamos esperando!\n          ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "remember-me"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "remember-me"
    }
  }, [_vm._v(" Recordar mis datos ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "terms"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "terms-conditions"
    }
  }, [_c("small", [_vm._v("Autorizo recibir noticias y promociones de parte de DLS Money.")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "terms"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "terms-conditions"
    }
  }, [_c("small", [_vm._v(" Declaro que he leído y acepto sus\n                  "), _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("políticas de privacidad")]), _vm._v(" y sus  "), _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Términos y condiciones")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "divider my-4"
  }, [_c("div", {
    staticClass: "divider-text"
  }, [_vm._v("O ingresa con tu cuenta de")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_c("a", {
    staticClass: "btn btn-icon btn-label-facebook me-3",
    attrs: {
      href: "javascript:;"
    }
  }, [_c("i", {
    staticClass: "tf-icons fa-brands fa-facebook-f fs-5"
  })]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-icon btn-label-google-plus me-3",
    attrs: {
      href: "javascript:;"
    }
  }, [_c("i", {
    staticClass: "tf-icons fa-brands fa-google fs-5"
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=style&index=0&id=45f29018&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=style&index=0&id=45f29018&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".authentication-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n}\n.authentication-wrapper .authentication-inner {\n  width: 100%;\n}\n.authentication-wrapper.authentication-basic {\n  align-items: center;\n  justify-content: center;\n}\n.authentication-wrapper.authentication-basic .card-body {\n  padding: 2rem;\n}\n.authentication-wrapper.authentication-cover {\n  align-items: flex-start;\n}\n.authentication-wrapper.authentication-cover .authentication-inner {\n  height: 100%;\n  margin: auto 0;\n}\n.authentication-wrapper.authentication-cover .authentication-inner .auth-cover-bg {\n  width: 100%;\n  margin: 2rem 0 2rem 2rem;\n  height: calc(100vh - 4rem);\n  border-radius: 1.125rem;\n  position: relative;\n}\n.authentication-wrapper.authentication-cover .authentication-inner .auth-cover-bg .auth-illustration {\n  max-height: 65%;\n  z-index: 1;\n}\n.authentication-wrapper.authentication-cover .authentication-inner .platform-bg {\n  position: absolute;\n  width: 100%;\n  bottom: 0%;\n  left: 0%;\n  height: 35%;\n}\n.authentication-wrapper.authentication-cover .authentication-inner .auth-multisteps-bg-height {\n  height: 100vh;\n}\n.authentication-wrapper.authentication-cover .authentication-inner .auth-multisteps-bg-height > img:first-child {\n  z-index: 1;\n}\n.authentication-wrapper.authentication-basic .authentication-inner {\n  max-width: 400px;\n  position: relative;\n}\n.authentication-wrapper.authentication-basic .authentication-inner:before {\n  width: 238px;\n  height: 233px;\n  content: \" \";\n  position: absolute;\n  top: -55px;\n  left: -40px;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='239' height='234' viewBox='0 0 239 234' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='88.5605' y='0.700195' width='149' height='149' rx='19.5' stroke='%237367F0' stroke-opacity='0.16'/%3E%3Crect x='0.621094' y='33.761' width='200' height='200' rx='10' fill='%237367F0' fill-opacity='0.08'/%3E%3C/svg%3E%0A\");\n}\n.authentication-wrapper.authentication-basic .authentication-inner:after {\n  width: 180px;\n  height: 180px;\n  content: \" \";\n  position: absolute;\n  z-index: -1;\n  bottom: -30px;\n  right: -56px;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='181' height='181' viewBox='0 0 181 181' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1.30469' y='1.44312' width='178' height='178' rx='19' stroke='%237367F0' stroke-opacity='0.16' stroke-width='2' stroke-dasharray='8 8'/%3E%3Crect x='22.8047' y='22.9431' width='135' height='135' rx='10' fill='%237367F0' fill-opacity='0.08'/%3E%3C/svg%3E\");\n}\n.authentication-wrapper .auth-input-wrapper .auth-input {\n  max-width: 50px;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  font-size: 150%;\n}\n@media (max-height: 636px) {\n.auth-multisteps-bg-height {\n    height: 100% !important;\n}\n}\n@media (max-width: 575.98px) {\n.authentication-wrapper .auth-input-wrapper .auth-input {\n    font-size: 1.125rem;\n}\n}\n#twoStepsForm .fv-plugins-bootstrap5-row-invalid .form-control {\n  border-color: #ea5455;\n}\n.light-style .authentication-wrapper.authentication-bg {\n  background-color: #fff;\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n}\n.light-style .auth-cover-bg-color {\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n}\n.dark-style .authentication-wrapper.authentication-bg {\n  background-color: #2f3349;\n}\n.dark-style .auth-cover-bg-color {\n  background-color: #25293c;\n}\n.login.login-1 .login-signin,\n.login.login-1 .login-signup,\n.login.login-1 .login-forgot {\n  display: none;\n}\n.login.login-1.login-signin-on .login-signup {\n  display: none;\n}\n.login.login-1.login-signin-on .login-signin {\n  display: block;\n}\n.login.login-1.login-signin-on .login-forgot {\n  display: none;\n}\n.login.login-1.login-signup-on .login-signup {\n  display: block;\n}\n.login.login-1.login-signup-on .login-signin {\n  display: none;\n}\n.login.login-1.login-signup-on .login-forgot {\n  display: none;\n}\n.login.login-1.login-forgot-on .login-signup {\n  display: none;\n}\n.login.login-1.login-forgot-on .login-signin {\n  display: none;\n}\n.login.login-1.login-forgot-on .login-forgot {\n  display: block;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=style&index=0&id=45f29018&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=style&index=0&id=45f29018&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=45f29018&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=style&index=0&id=45f29018&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/view/pages/auth/login/Login.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/view/pages/auth/login/Login.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_45f29018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=45f29018& */ "./resources/js/src/view/pages/auth/login/Login.vue?vue&type=template&id=45f29018&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/auth/login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_45f29018_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=45f29018&lang=scss& */ "./resources/js/src/view/pages/auth/login/Login.vue?vue&type=style&index=0&id=45f29018&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_45f29018___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_45f29018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/auth/login/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/auth/login/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/login/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/auth/login/Login.vue?vue&type=style&index=0&id=45f29018&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/login/Login.vue?vue&type=style&index=0&id=45f29018&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_45f29018_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=45f29018&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=style&index=0&id=45f29018&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_45f29018_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_45f29018_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_45f29018_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_45f29018_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/pages/auth/login/Login.vue?vue&type=template&id=45f29018&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/login/Login.vue?vue&type=template&id=45f29018& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_45f29018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=45f29018& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login/Login.vue?vue&type=template&id=45f29018&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_45f29018___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_45f29018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);