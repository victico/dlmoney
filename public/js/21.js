(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/account.module */ "./resources/js/src/core/services/store/account.module.js");
/* harmony import */ var _core_services_store_document_type_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/document_type.module */ "./resources/js/src/core/services/store/document_type.module.js");
/* harmony import */ var _core_services_store_ocupation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/store/ocupation.module */ "./resources/js/src/core/services/store/ocupation.module.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mainAlert: false,
      mainAlertVariant: "",
      mainAlertMessage: "",
      savedAlert: false,
      savedAlertVariant: '',
      savedAlertMessage: '',
      personalAccounts: [],
      companyAccounts: [],
      activeAccountType: null,
      activeAccountId: null,
      selectedAccount: {},
      selectedAccountType: null,
      selectedAccountIdToDelete: null,
      selectedAccountTypeToDelete: null,
      documentTypes: [],
      ocupations: [],
      redirectMessageSeconds: 3,
      redirectMessage: ''
    };
  },
  mounted: function mounted() {},
  methods: {
    getAllAccounts: function getAllAccounts() {
      var _this2 = this;
      this.$store.dispatch(_core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_GET_ALL"]).then(function (data) {
        if (data.code != 200) {
          _this2.showMainAlert('danger', 'Error desconocido al obtener todos los perfiles.');
          return;
        }
        _this2.personalAccounts = data.data.personalAccounts;
        for (var i = 0; i < _this2.personalAccounts.length; i++) {
          var label = _this2.personalAccounts[i].name + ' ' + _this2.personalAccounts[i].surname;
          var matches = label.match(/\b(\w)/g); // ['J','S','O','N']
          _this2.personalAccounts[i].label = matches.join('.'); // J.S.O.N
        }

        _this2.companyAccounts = data.data.companyAccounts;
        for (var _i = 0; _i < _this2.companyAccounts.length; _i++) {
          var _label = _this2.companyAccounts[_i].business_name;
          var _matches = _label.match(/\b(\w)/g); // ['J','S','O','N']
          _this2.companyAccounts[_i].label = _matches.join('.'); // J.S.O.N
        }

        _this2.activeAccountType = data.data.activeAccountType;
        _this2.activeAccountId = data.data.activeAccountId;
      })["catch"](function (err) {
        _this2.showMainAlert('danger', err);
      });
    },
    updateAccount: function updateAccount(e) {
      var _this3 = this;
      e.preventDefault();

      // Validate fields
      if (this.selectedAccountType == 0) {
        if (this.selectedAccount.name == null || this.selectedAccount.name == "") {
          this.showSavedAlert('danger', 'Debe ingresar el nombre/s.');
          return;
        }
        if (this.selectedAccount.surname == null || this.selectedAccount.surname == "") {
          this.showSavedAlert('danger', 'Debe ingresar el apellido/s.');
          return;
        }
        if (this.selectedAccount.document_type_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar el tipo de documento.');
          return;
        }
        if (this.selectedAccount.document_number == null || this.selectedAccount.document_number == "") {
          this.showSavedAlert('danger', 'Debe ingresar número de documento.');
          return;
        }
        if (this.selectedAccount.birthdate == null || this.selectedAccount.birthdate == "") {
          this.showSavedAlert('danger', 'Debe ingresar la fecha de nacimiento.');
          return;
        }
        if (this.selectedAccount.country_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar el país.');
          return;
        }
        if (this.selectedAccount.department_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar el departamento.');
          return;
        }
        if (this.selectedAccount.province_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar la provincia.');
          return;
        }
        if (this.selectedAccount.district_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar el distrito.');
          return;
        }
        if (this.selectedAccount.address == null || this.selectedAccount.address == "") {
          this.showSavedAlert('danger', 'Debe ingresar la dirección.');
          return;
        }
        if (this.selectedAccount.ocupation_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar la ocupación.');
          return;
        }
        if (this.selectedAccount.exposed_person == 1) {
          if (this.selectedAccount.position == null || this.selectedAccount.position == "") {
            this.showSavedAlert('danger', 'Debe ingresar la posición.');
            return;
          }
          if (this.selectedAccount.workplace == null || this.selectedAccount.workplace == "") {
            this.showSavedAlert('danger', 'Debe ingresar el lugar de trabajo.');
            return;
          }
        } else {
          this.selectedAccount.position = null;
          this.selectedAccount.workplace = null;
        }
      } else if (this.selectedAccountType == 1) {
        if (this.selectedAccount.ruc == null || this.selectedAccount.ruc == "") {
          this.showSavedAlert('danger', 'Debe ingresar el RUC.');
          return;
        }
        if (this.selectedAccount.business_name == null || this.selectedAccount.business_name == "") {
          this.showSavedAlert('danger', 'Debe ingresar la razón social.');
          return;
        }
        if (this.selectedAccount.business_turn == null || this.selectedAccount.business_turn == "") {
          this.showSavedAlert('danger', 'Debe ingresar el giro de negocio.');
          return;
        }
        if (this.selectedAccount.fiscal_address == null || this.selectedAccount.business_turn == "") {
          this.showSavedAlert('danger', 'Debe ingresar la dirección fiscal.');
          return;
        }
        if (this.selectedAccount.country_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar el país.');
          return;
        }
        if (this.selectedAccount.department_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar el departamento.');
          return;
        }
        if (this.selectedAccount.province_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar la provincia.');
          return;
        }
        if (this.selectedAccount.district_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar el distrito.');
          return;
        }
        if (this.selectedAccount.email == null || this.selectedAccount.email == "") {
          this.showSavedAlert('danger', 'Debe ingresar el email.');
          return;
        }
        if (this.selectedAccount.phone == null || this.selectedAccount.phone == "") {
          this.showSavedAlert('danger', 'Debe ingresar el email.');
          return;
        }
        if (this.selectedAccount.name_lr == null || this.selectedAccount.name_lr == "") {
          this.showSavedAlert('danger', 'Debe ingresar el nombre/s del representante legal.');
          return;
        }
        if (this.selectedAccount.surname_lr == null || this.selectedAccount.surname_lr == "") {
          this.showSavedAlert('danger', 'Debe ingresar el apellido/s del representante legal.');
          return;
        }
        if (this.selectedAccount.document_type_lr_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar el tipo de documento del representante legal.');
          return;
        }
        if (this.selectedAccount.document_number_lr == null || this.selectedAccount.document_number_lr == "") {
          this.showSavedAlert('danger', 'Debe ingresar el número de docuemento del representante legal.');
          return;
        }
        if (this.selectedAccount.name_c == null || this.selectedAccount.name_c == "") {
          this.showSavedAlert('danger', 'Debe ingresar el nombre/s del contacto.');
          return;
        }
        if (this.selectedAccount.surname_c == null || this.selectedAccount.surname_c == "") {
          this.showSavedAlert('danger', 'Debe ingresar el apellido/s del contacto.');
          return;
        }
        if (this.selectedAccount.document_type_c_id == -1) {
          this.showSavedAlert('danger', 'Debe seleccionar el tipo de documento del contacto.');
          return;
        }
        if (this.selectedAccount.document_number_c == null || this.selectedAccount.document_number_c == "") {
          this.showSavedAlert('danger', 'Debe ingresar el número de docuemento del contacto.');
          return;
        }
      }
      var DISPATCH_ACCOUNT_ACTION = this.selectedAccountType == 0 ? _core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_PERSONAL_UPDATE"] : this.selectedAccountType == 1 ? _core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_COMPANY_UPDATE"] : '';
      this.$store.dispatch(DISPATCH_ACCOUNT_ACTION, this.selectedAccount).then(function (data) {
        if (data.code != 200) {
          _this3.showMainAlert('danger', 'Error desconocido al actualizar el perfil.');
          return;
        }
        var selectedAccountIndex = -1;
        var label = '';
        if (_this3.selectedAccountType == 0) {
          selectedAccountIndex = _this3.personalAccounts.findIndex(function (account) {
            return account.id == _this3.selectedAccount.id;
          });
          label = data.data.name + ' ' + data.data.surname;
        } else if (_this3.selectedAccountType == 1) {
          selectedAccountIndex = _this3.companyAccounts.findIndex(function (account) {
            return account.id == _this3.selectedAccount.id;
          });
          label = data.data.business_name;
        }
        var matches = label.match(/\b(\w)/g); // ['J','S','O','N']
        data.data.label = matches.join('.'); // J.S.O.N

        if (selectedAccountIndex > -1) {
          if (_this3.selectedAccountType == 0) {
            _this3.personalAccounts[selectedAccountIndex] = data.data;
          } else if (_this3.selectedAccountType == 1) {
            _this3.companyAccounts[selectedAccountIndex] = data.data;
          }
        }

        // close modal
        _this3.closeModal('modal-selected-account');
        _this3.showMainAlert('success', 'Perfil actualizado correctamente!');
      })["catch"](function (err) {
        _this3.showMainAlert('danger', err);
      });
    },
    changeActiveAccount: function changeActiveAccount(e) {
      var _this4 = this;
      e.preventDefault();
      var data = {
        active_account_type: this.selectedAccountType,
        active_account: this.selectedAccount.id
      };
      this.$store.dispatch(_core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["SET_ACTIVE_ACCOUNT"], data).then(function (data) {
        if (data.code != 200) {
          _this4.showMainAlert('danger', 'Error desconocido al cambiar la cuenta activa.');
          return;
        }

        // close modal
        _this4.closeModal('modal-selected-account');
        _this4.showMainAlert('success', 'Perfil activo cambiado correctamente!');
        _this4.redirectTimer(' . Recargando página en: ');
      })["catch"](function (err) {
        _this4.showMainAlert('danger', err);
      });
    },
    deleteAccount: function deleteAccount(e) {
      var _this5 = this;
      e.preventDefault();
      var DISPATCH_ACCOUNT_ACTION = this.selectedAccountTypeToDelete == 0 ? _core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_PERSONAL_DELETE"] : this.selectedAccountTypeToDelete == 1 ? _core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_COMPANY_DELETE"] : '';
      this.$store.dispatch(DISPATCH_ACCOUNT_ACTION, this.selectedAccountIdToDelete).then(function (data) {
        if (data.code != 200) {
          _this5.showMainAlert('danger', 'Error desconocido al eliminar el perfil.');
          return;
        }
        if (_this5.selectedAccountTypeToDelete == 0) {
          _this5.personalAccounts = _this5.personalAccounts.filter(function (account) {
            return account.id != _this5.selectedAccountIdToDelete;
          });
        } else if (_this5.selectedAccountTypeToDelete == 1) {
          _this5.companyAccounts = _this5.companyAccounts.filter(function (account) {
            return account.id != _this5.selectedAccountIdToDelete;
          });
        }

        // close modal
        _this5.closeModal('modal-confirm-delete');
        _this5.showMainAlert('success', 'Perfil eliminardo correctamente!');
      })["catch"](function (err) {
        _this5.showMainAlert('danger', err);
      });
    },
    setSelectedAccount: function setSelectedAccount(accountType, accountId) {
      this.selectedAccountType = accountType;
      if (accountType == 0) {
        this.selectedAccount = this.personalAccounts.find(function (account) {
          return account.id == accountId;
        });
      } else if (accountType == 1) {
        this.selectedAccount = this.companyAccounts.find(function (account) {
          return account.id == accountId;
        });
      }
    },
    resetSelectedAccount: function resetSelectedAccount() {
      this.selectedAccountType = null;
      this.selectedAccount = {};
    },
    resetDeleteAccount: function resetDeleteAccount() {
      this.selectedAccountIdToDelete = null;
      this.selectedAccountTypeToDelete = null;
    },
    showDeleteConfirmation: function showDeleteConfirmation(e) {
      e.preventDefault();
      this.selectedAccountIdToDelete = this.selectedAccount.id;
      this.selectedAccountTypeToDelete = this.selectedAccountType;
      this.closeModal('modal-selected-account');
      this.showModal('modal-confirm-delete');
    },
    getDocumentTypes: function getDocumentTypes() {
      var _this6 = this;
      this.$store.dispatch(_core_services_store_document_type_module__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT_TYPES_GET_ALL"]).then(function (data) {
        if (data.code != 200) {
          _this6.showMainAlert('danger', 'Error desconocido al obtener todos tipos de documento.');
          return;
        }
        _this6.documentTypes = data.data;
      })["catch"](function (err) {
        _this6.showMainAlert('danger', err);
      });
    },
    getOcupations: function getOcupations() {
      var _this7 = this;
      this.$store.dispatch(_core_services_store_ocupation_module__WEBPACK_IMPORTED_MODULE_2__["OCUPATIONS_GET_ALL"]).then(function (data) {
        if (data.code != 200) {
          _this7.showMainAlert('danger', 'Error desconocido al obtener todas las ocupaciones.');
          return;
        }
        _this7.ocupations = data.data;
      })["catch"](function (err) {
        _this7.showMainAlert('danger', err);
      });
    },
    showSavedAlert: function showSavedAlert(variant, message) {
      this.savedAlertVariant = variant;
      this.savedAlertMessage = message;
      this.savedAlert = true;
    },
    closeModal: function closeModal(modalId) {
      this.$root.$emit('bv::hide::modal', modalId);
    },
    showModal: function showModal(modalId) {
      this.$root.$emit('bv::show::modal', modalId);
    },
    showMainAlert: function showMainAlert(variant, message) {
      this.mainAlertVariant = variant;
      this.mainAlertMessage = message;
      this.mainAlert = true;
      window.scrollTo(0, 0);
    },
    redirectTimer: function redirectTimer(redirectMessage) {
      this.redirectMessage = redirectMessage;
      this.wizardActionsDisabled = true;
      var _this = this;
      var redirectTime = window.setInterval(function () {
        if (_this.redirectMessageSeconds === 0) {
          _this.redirectMessageSeconds = 0;
          window.clearInterval(redirectTime);
          location.reload();
        } else {
          _this.redirectMessageSeconds -= 1;
        }
      }, 1000);
    }
  },
  created: function created() {
    this.getAllAccounts();
    this.getDocumentTypes();
    this.getOcupations();
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=template&id=35ec683a&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=template&id=35ec683a& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "card card-custom gutter-b example example-compact"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.mainAlert ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-alert", {
    attrs: {
      show: _vm.mainAlert,
      dismissible: "",
      fade: "",
      variant: _vm.mainAlertVariant
    },
    on: {
      dismissed: function dismissed($event) {
        _vm.mainAlert = false;
      }
    }
  }, [_vm._v(_vm._s(_vm.mainAlertMessage) + _vm._s(_vm.redirectMessage == "" ? "" : _vm.redirectMessage + _vm.redirectMessageSeconds + " segundos."))])], 1), _vm._v(" "), _c("hr")]) : _vm._e(), _vm._v(" "), _c("h5", [_vm._v("Perfiles Personales")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-row m-2 mt-4"
  }, [_vm._l(_vm.personalAccounts, function (personalAccount, index) {
    return _c("div", {
      key: "personal_account_".concat(index),
      staticClass: "mr-6"
    }, [_c("a", {
      directives: [{
        name: "b-modal",
        rawName: "v-b-modal.modal-selected-account",
        modifiers: {
          "modal-selected-account": true
        }
      }],
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          return _vm.setSelectedAccount(0, personalAccount.id);
        }
      }
    }, [_c("span", {
      staticClass: "symbol symbol-100 symbol-light-warning",
      "class": {
        "border border-success": _vm.activeAccountType == 0 && personalAccount.id == _vm.activeAccountId
      }
    }, [_c("span", {
      staticClass: "symbol-label font-size-h5 font-weight-bold"
    }, [_vm._v("\n                                    " + _vm._s(personalAccount.label) + "\n                                ")])])])]);
  }), _vm._v(" "), _c("div", [_c("router-link", {
    attrs: {
      to: "/create-account/personal"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var href = _ref.href,
          navigate = _ref.navigate;
        return [_c("a", {
          staticClass: "menu-link rounded ml-1",
          attrs: {
            href: href
          },
          on: {
            click: navigate
          }
        }, [_c("span", {
          staticClass: "symbol symbol-100 symbol-light-light"
        }, [_c("span", {
          staticClass: "symbol-label font-size-h5 font-weight-bold"
        }, [_c("i", {
          staticClass: "fas fa-plus text-muted"
        })])])])];
      }
    }])
  })], 1)], 2), _vm._v(" "), _c("h5", {
    staticClass: "mt-8"
  }, [_vm._v("Perfiles Empresariales")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-row m-2 mt-4"
  }, [_vm._l(_vm.companyAccounts, function (companyAccount, index) {
    return _c("div", {
      key: "company_account_".concat(index),
      staticClass: "mr-6"
    }, [_c("a", {
      directives: [{
        name: "b-modal",
        rawName: "v-b-modal.modal-selected-account",
        modifiers: {
          "modal-selected-account": true
        }
      }],
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          return _vm.setSelectedAccount(1, companyAccount.id);
        }
      }
    }, [_c("span", {
      staticClass: "symbol symbol-100 symbol-light-info",
      "class": {
        "border border-success": _vm.activeAccountType == 1 && companyAccount.id == _vm.activeAccountId
      }
    }, [_c("span", {
      staticClass: "symbol-label font-size-h5 font-weight-bold"
    }, [_vm._v("\n                                    " + _vm._s(companyAccount.label) + "\n                                ")])])])]);
  }), _vm._v(" "), _c("div", [_c("router-link", {
    attrs: {
      to: "/create-account/company"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref2) {
        var href = _ref2.href,
          navigate = _ref2.navigate;
        return [_c("a", {
          staticClass: "menu-link rounded ml-1",
          attrs: {
            href: href
          },
          on: {
            click: navigate
          }
        }, [_c("span", {
          staticClass: "symbol symbol-100 symbol-light-light"
        }, [_c("span", {
          staticClass: "symbol-label font-size-h5 font-weight-bold"
        }, [_c("i", {
          staticClass: "fas fa-plus text-muted"
        })])])])];
      }
    }])
  })], 1)], 2)])])]), _vm._v(" "), _c("div", [_c("b-modal", {
    attrs: {
      id: "modal-selected-account",
      size: "lg",
      title: "Perfil seleccionado",
      "ok-title": "Guardar",
      "cancel-title": "Cerrar"
    },
    on: {
      ok: function ok($event) {
        return _vm.updateAccount($event);
      },
      hidden: function hidden($event) {
        return _vm.resetSelectedAccount();
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12 text-center"
  }, [!(_vm.activeAccountType == _vm.selectedAccountType && _vm.selectedAccount.id == _vm.activeAccountId) ? _c("b-button", {
    staticClass: "m-2",
    attrs: {
      variant: "outline-success"
    },
    on: {
      click: function click($event) {
        return _vm.changeActiveAccount($event);
      }
    }
  }, [_vm._v("Seleccionar cuenta activa")]) : _vm._e(), _vm._v(" "), !(_vm.activeAccountType == _vm.selectedAccountType && _vm.selectedAccount.id == _vm.activeAccountId) ? _c("b-button", {
    staticClass: "m-2",
    attrs: {
      variant: "outline-danger"
    },
    on: {
      click: function click($event) {
        return _vm.showDeleteConfirmation($event);
      }
    }
  }, [_vm._v("Eliminar")]) : _vm._e()], 1)]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.selectedAccountType == 0 ? [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Nombre/s")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.name,
      expression: "selectedAccount.name"
    }],
    ref: "name",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: "Ingresa el nombre/s"
    },
    domProps: {
      value: _vm.selectedAccount.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Apellido/s")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.surname,
      expression: "selectedAccount.surname"
    }],
    ref: "surname",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "surname",
      placeholder: "Ingresa el apellido/s"
    },
    domProps: {
      value: _vm.selectedAccount.surname
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "surname", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Tipo de documento")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_type_id,
      expression: "selectedAccount.document_type_id"
    }],
    ref: "document_type_id",
    staticClass: "form-control",
    attrs: {
      name: "document_type_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "document_type_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Seleccione el tipo de documento")]), _vm._v(" "), _vm._l(_vm.documentTypes, function (documentType, index) {
    return _c("option", {
      key: "document_".concat(index),
      domProps: {
        value: documentType.id
      }
    }, [_vm._v(_vm._s(documentType.name))]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Número de documento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_number,
      expression: "selectedAccount.document_number"
    }],
    ref: "document_number",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "document_number",
      placeholder: "Ingresa el número de documento"
    },
    domProps: {
      value: _vm.selectedAccount.document_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "document_number", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Fecha de nacimiento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.birthdate,
      expression: "selectedAccount.birthdate"
    }],
    ref: "birthdate",
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "birthdate",
      placeholder: "Selecciona la fecha de nacimiento"
    },
    domProps: {
      value: _vm.selectedAccount.birthdate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "birthdate", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Teléfono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.phone,
      expression: "selectedAccount.phone"
    }],
    ref: "phone",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "phone",
      placeholder: "Ingresa el número de telefono"
    },
    domProps: {
      value: _vm.selectedAccount.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "phone", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Celular")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.cellphone1,
      expression: "selectedAccount.cellphone1"
    }],
    ref: "cellphone1",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cellphone1",
      placeholder: "Ingresa el número de celular"
    },
    domProps: {
      value: _vm.selectedAccount.cellphone1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "cellphone1", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Otro celular")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.cellphone2,
      expression: "selectedAccount.cellphone2"
    }],
    ref: "cellphone2",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cellphone2",
      placeholder: "Ingresa otro número de celular"
    },
    domProps: {
      value: _vm.selectedAccount.cellphone2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "cellphone2", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("País")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.country_id,
      expression: "selectedAccount.country_id"
    }],
    ref: "country_id",
    staticClass: "form-control",
    attrs: {
      name: "country_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "country_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Selecciona el país")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Perú")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Departamento")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.department_id,
      expression: "selectedAccount.department_id"
    }],
    ref: "department_id",
    staticClass: "form-control",
    attrs: {
      name: "department_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "department_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Selecciona el departamento")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("LIMA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Provincia")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.province_id,
      expression: "selectedAccount.province_id"
    }],
    ref: "province_id",
    staticClass: "form-control",
    attrs: {
      name: "province_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "province_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Selecciona la provincia")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("LIMA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Distrito")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.district_id,
      expression: "selectedAccount.district_id"
    }],
    ref: "district_id",
    staticClass: "form-control",
    attrs: {
      name: "district_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Selecciona el distrito")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("LIMA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Dirección")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.address,
      expression: "selectedAccount.address"
    }],
    ref: "address",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "address",
      placeholder: "Ingresa el domicilio"
    },
    domProps: {
      value: _vm.selectedAccount.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "address", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Ocupación")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.ocupation_id,
      expression: "selectedAccount.ocupation_id"
    }],
    ref: "ocupation_id",
    staticClass: "form-control",
    attrs: {
      name: "ocupation_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "ocupation_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Seleccione la ocupación")]), _vm._v(" "), _vm._l(_vm.ocupations, function (ocupation, index) {
    return _c("option", {
      key: "ocupation_".concat(index),
      domProps: {
        value: ocupation.id
      }
    }, [_vm._v(_vm._s(ocupation.name))]);
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("b-form-group", {
    attrs: {
      label: "Confirme por favor si usted es una persona políticamente expuesta."
    }
  }, [_c("b-form-radio", {
    ref: "exposed_person",
    attrs: {
      checked: _vm.selectedAccount.exposed_person == 1,
      name: "exposed_person",
      size: "lg",
      value: "1"
    },
    model: {
      value: _vm.selectedAccount.exposed_person,
      callback: function callback($$v) {
        _vm.$set(_vm.selectedAccount, "exposed_person", $$v);
      },
      expression: "selectedAccount.exposed_person"
    }
  }, [_vm._v("Si, soy")]), _vm._v(" "), _c("b-form-radio", {
    ref: "exposed_person",
    attrs: {
      checked: _vm.selectedAccount.exposed_person == 0,
      name: "exposed_person",
      size: "lg",
      value: "0"
    },
    model: {
      value: _vm.selectedAccount.exposed_person,
      callback: function callback($$v) {
        _vm.$set(_vm.selectedAccount, "exposed_person", $$v);
      },
      expression: "selectedAccount.exposed_person"
    }
  }, [_vm._v("No, no soy")])], 1)], 1)])]), _vm._v(" "), _vm.selectedAccount.exposed_person == 1 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Cargo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.position,
      expression: "selectedAccount.position"
    }],
    ref: "position",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "position",
      placeholder: "Ingresa el cargo"
    },
    domProps: {
      value: _vm.selectedAccount.position
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "position", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Lugar de trabajo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.workplace,
      expression: "selectedAccount.workplace"
    }],
    ref: "workplace",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "workplace",
      placeholder: "Ingresa el lugar de trabajo"
    },
    domProps: {
      value: _vm.selectedAccount.workplace
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "workplace", $event.target.value);
      }
    }
  })])])]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.selectedAccountType == 1 ? [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Número de RUC")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.ruc,
      expression: "selectedAccount.ruc"
    }],
    ref: "ruc",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "ruc",
      placeholder: "Ingresa el número de RUC"
    },
    domProps: {
      value: _vm.selectedAccount.ruc
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "ruc", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Razón social")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.business_name,
      expression: "selectedAccount.business_name"
    }],
    ref: "business_name",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "business_name",
      placeholder: "Ingresa la razón social"
    },
    domProps: {
      value: _vm.selectedAccount.business_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "business_name", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Giro de negocio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.business_turn,
      expression: "selectedAccount.business_turn"
    }],
    ref: "business_turn",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "business_turn",
      placeholder: "Ingresa el giro de negocio"
    },
    domProps: {
      value: _vm.selectedAccount.business_turn
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "business_turn", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Dirección")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.fiscal_address,
      expression: "selectedAccount.fiscal_address"
    }],
    ref: "fiscal_address",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "fiscal_address",
      placeholder: "Ingresa la dirección fiscal"
    },
    domProps: {
      value: _vm.selectedAccount.fiscal_address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "fiscal_address", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("País")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.country_id,
      expression: "selectedAccount.country_id"
    }],
    ref: "country_id",
    staticClass: "form-control",
    attrs: {
      name: "country_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "country_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Selecciona el país")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Perú")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Departamento")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.department_id,
      expression: "selectedAccount.department_id"
    }],
    ref: "department_id",
    staticClass: "form-control",
    attrs: {
      name: "department_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "department_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Selecciona el departamento")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("LIMA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Provincia")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.province_id,
      expression: "selectedAccount.province_id"
    }],
    ref: "province_id",
    staticClass: "form-control",
    attrs: {
      name: "province_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "province_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Selecciona la provincia")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("LIMA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Distrito")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.district_id,
      expression: "selectedAccount.district_id"
    }],
    ref: "district_id",
    staticClass: "form-control",
    attrs: {
      name: "district_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Selecciona el distrito")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("LIMA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Correo electrónico")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.email,
      expression: "selectedAccount.email"
    }],
    ref: "email",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "email",
      placeholder: "Ingresa el correo electrónico"
    },
    domProps: {
      value: _vm.selectedAccount.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Telefono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.phone,
      expression: "selectedAccount.phone"
    }],
    ref: "phone",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "phone",
      placeholder: "Ingresa el número de teléfono"
    },
    domProps: {
      value: _vm.selectedAccount.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "phone", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Nombre/s del representante legal")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.name_lr,
      expression: "selectedAccount.name_lr"
    }],
    ref: "name_lr",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name_lr",
      placeholder: "Ingresa el nombre/s"
    },
    domProps: {
      value: _vm.selectedAccount.name_lr
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "name_lr", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Apellido/s del representante legal")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.surname_lr,
      expression: "selectedAccount.surname_lr"
    }],
    ref: "surname_lr",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "surname_lr",
      placeholder: "Ingresa el apellido/s"
    },
    domProps: {
      value: _vm.selectedAccount.surname_lr
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "surname_lr", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Tipo de documento del representante legal")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_type_lr_id,
      expression: "selectedAccount.document_type_lr_id"
    }],
    ref: "document_type_lr_id",
    staticClass: "form-control",
    attrs: {
      name: "document_type_lr_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "document_type_lr_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Seleccione el tipo de documento")]), _vm._v(" "), _vm._l(_vm.documentTypes, function (documentType, index) {
    return _c("option", {
      key: "document_".concat(index),
      domProps: {
        value: documentType.id
      }
    }, [_vm._v(_vm._s(documentType.name))]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Número de documento del representante legal")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_number_lr,
      expression: "selectedAccount.document_number_lr"
    }],
    ref: "document_number_lr",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "document_number_lr",
      placeholder: "Ingresa el número de documento"
    },
    domProps: {
      value: _vm.selectedAccount.document_number_lr
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "document_number_lr", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Nombre/s de contacto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.name_c,
      expression: "selectedAccount.name_c"
    }],
    ref: "name_c",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name_c",
      placeholder: "Ingresa el nombre/s"
    },
    domProps: {
      value: _vm.selectedAccount.name_c
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "name_c", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Apellido/s de contacto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.surname_c,
      expression: "selectedAccount.surname_c"
    }],
    ref: "surname_c",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "surname_c",
      placeholder: "Ingresa el apellido/s"
    },
    domProps: {
      value: _vm.selectedAccount.surname_c
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "surname_c", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Tipo de documento de contacto")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_type_c_id,
      expression: "selectedAccount.document_type_c_id"
    }],
    ref: "document_type_c_id",
    staticClass: "form-control",
    attrs: {
      name: "document_type_c_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedAccount, "document_type_c_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "-1"
    }
  }, [_vm._v("Seleccione el tipo de documento")]), _vm._v(" "), _vm._l(_vm.documentTypes, function (documentType, index) {
    return _c("option", {
      key: "document_".concat(index),
      domProps: {
        value: documentType.id
      }
    }, [_vm._v(_vm._s(documentType.name))]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Número de documento de contacto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_number_c,
      expression: "selectedAccount.document_number_c"
    }],
    ref: "document_number_c",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "document_number_c",
      placeholder: "Ingresa el número de documento"
    },
    domProps: {
      value: _vm.selectedAccount.document_number_c
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "document_number_c", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Teléfono de contacto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.phone_c,
      expression: "selectedAccount.phone_c"
    }],
    ref: "phone_c",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "phone_c",
      placeholder: "Ingresa el número de teléfono"
    },
    domProps: {
      value: _vm.selectedAccount.phone_c
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "phone_c", $event.target.value);
      }
    }
  })])])])] : _vm._e(), _vm._v(" "), _vm.savedAlert ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-alert", {
    attrs: {
      show: _vm.savedAlert,
      dismissible: "",
      fade: "",
      variant: _vm.savedAlertVariant
    },
    on: {
      dismissed: function dismissed($event) {
        _vm.savedAlert = false;
      }
    }
  }, [_vm._v(_vm._s(_vm.savedAlertMessage))])], 1)]) : _vm._e()], 2)], 1), _vm._v(" "), _c("div", [_c("b-modal", {
    attrs: {
      id: "modal-confirm-delete",
      title: "Eliminar perfil",
      "ok-title": "Confirmar",
      "cancel-title": "Cancelar"
    },
    on: {
      ok: function ok($event) {
        return _vm.deleteAccount($event);
      },
      hidden: function hidden($event) {
        return _vm.resetDeleteAccount();
      }
    }
  }, [_c("p", {
    staticClass: "my-4"
  }, [_vm._v("Esta seguro que desea eliminar este perfil?")])])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header pt-4 pb-2 min-vh-0"
  }, [_c("div", {
    staticClass: "row w-100"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("h3", {
    staticClass: "pt-4"
  }, [_c("strong", [_vm._v("Mis Perfiles")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/view/pages/profiles/Profiles.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/view/pages/profiles/Profiles.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profiles_vue_vue_type_template_id_35ec683a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profiles.vue?vue&type=template&id=35ec683a& */ "./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=template&id=35ec683a&");
/* harmony import */ var _Profiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profiles.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profiles_vue_vue_type_template_id_35ec683a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profiles_vue_vue_type_template_id_35ec683a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profiles/Profiles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=template&id=35ec683a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=template&id=35ec683a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Profiles_vue_vue_type_template_id_35ec683a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profiles.vue?vue&type=template&id=35ec683a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profiles/Profiles.vue?vue&type=template&id=35ec683a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Profiles_vue_vue_type_template_id_35ec683a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Profiles_vue_vue_type_template_id_35ec683a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);