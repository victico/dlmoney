(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/accounts/Company.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/accounts/Company.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/account.module */ "./resources/js/src/core/services/store/account.module.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mainAlert: false,
      mainAlertVariant: "",
      mainAlertMessage: "",
      updateAlert: false,
      updateAlertVariant: '',
      updateAlertMessage: '',
      preferentialAlert: false,
      preferentialAlertVariant: '',
      preferentialAlertMessage: '',
      perPage: 10,
      currentPage: 1,
      allCompanyAccounts: [],
      companyAccounts: [],
      selectedAccount: {},
      fields: [{
        key: 'id',
        label: 'ID'
      }, {
        key: 'ruc',
        label: 'Número de RUC'
      }, {
        key: 'business_name',
        label: 'Razón social'
      }, {
        key: 'business_turn',
        label: 'Giro de negocio'
      }, {
        key: 'fiscal_address',
        label: 'Dirección'
      }, {
        key: 'email',
        label: 'Email'
      }, {
        key: 'phone',
        label: 'Teléfono'
      }, {
        key: 'full_name_lr',
        label: 'Representante legal'
      }, {
        key: 'full_name_c',
        label: 'Contacto'
      }, {
        key: 'preferential',
        label: 'Preferencial'
      }, {
        key: 'deleted_at',
        label: 'Estado'
      }, {
        key: 'actions',
        label: 'Acciones'
      }],
      companyAccountSearchText: '',
      companyAccountStatus: 'all'
    };
  },
  mounted: function mounted() {},
  methods: {
    getCompanyAccounts: function getCompanyAccounts() {
      var _this = this;
      this.$store.dispatch(_core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_COMPANY_GET_ALL"], '?with_deleted=true').then(function (data) {
        if (data.code != 200) {
          _this.showMainAlert('danger', 'Error desconocido al obtener todos las cuentas empresariales.');
          return;
        }
        _this.allCompanyAccounts = data.data;
        _this.companyAccounts = _this.allCompanyAccounts.map(function (companyAccount) {
          return _objectSpread({}, companyAccount);
        });
      })["catch"](function (err) {
        _this.showMainAlert('danger', err);
      });
    },
    updateAccount: function updateAccount(e) {
      var _this2 = this;
      // Prevent modal hide
      e.preventDefault();
      var id = this.$refs.id.value;
      var ruc = this.$refs.ruc.value;
      var business_name = this.$refs.business_name.value;
      var business_turn = this.$refs.business_turn.value;
      var fiscal_address = this.$refs.fiscal_address.value;
      var country_id = this.$refs.country_id.value;
      var department_id = this.$refs.department_id.value;
      var province_id = this.$refs.province_id.value;
      var district_id = this.$refs.district_id.value;
      var email = this.$refs.email.value;
      var phone = this.$refs.phone.value;
      var name_lr = this.$refs.name_lr.value;
      var surname_lr = this.$refs.surname_lr.value;
      var document_type_lr_id = this.$refs.document_type_lr_id.value;
      var document_number_lr = this.$refs.document_number_lr.value;
      var name_c = this.$refs.name_c.value;
      var surname_c = this.$refs.surname_c.value;
      var document_type_c_id = this.$refs.document_type_c_id.value;
      var document_number_c = this.$refs.document_number_c.value;
      var phone_c = this.$refs.phone_c.value;
      var data;
      data = {
        id: id,
        ruc: ruc,
        business_name: business_name,
        business_turn: business_turn,
        fiscal_address: fiscal_address,
        country_id: country_id,
        department_id: department_id,
        province_id: province_id,
        district_id: district_id,
        email: email,
        phone: phone,
        name_lr: name_lr,
        surname_lr: surname_lr,
        document_type_lr_id: document_type_lr_id,
        document_number_lr: document_number_lr,
        name_c: name_c,
        surname_c: surname_c,
        document_type_c_id: document_type_c_id,
        document_number_c: document_number_c,
        phone_c: phone_c
      };
      this.$store.dispatch(_core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_COMPANY_UPDATE"], data).then(function (data) {
        if (data.code != 200) {
          _this2.showUpdateAlert('danger', data.error);
          return;
        }
        var allCompanyAccountIndex = _this2.allCompanyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        if (allCompanyAccountIndex > -1) {
          _this2.allCompanyAccounts[allCompanyAccountIndex] = data.data;
        }
        var companyAccountIndex = _this2.companyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        if (companyAccountIndex > -1) {
          _this2.companyAccounts[companyAccountIndex] = _objectSpread({}, _this2.allCompanyAccounts[allCompanyAccountIndex]);
        }

        // Slice method is used to 'refresh' the companyAccounts variable to vuejs detect a change.
        _this2.companyAccounts = _this2.companyAccounts.slice();

        // close modal
        _this2.closeModal('modal-edit-info');
        _this2.showMainAlert('success', 'Cuenta empresarial actualizada correctamente!');
        return;
      })["catch"](function (err) {
        _this2.showUpdateAlert('danger', err);
        return;
      });
    },
    deleteAccount: function deleteAccount(companyAccountId) {
      var _this3 = this;
      this.$store.dispatch(_core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_COMPANY_DELETE"], companyAccountId).then(function (data) {
        if (data.code != 200) {
          _this3.showMainAlert('danger', data.error);
          return;
        }
        var allCompanyAccountIndex = _this3.allCompanyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        if (allCompanyAccountIndex > -1) {
          _this3.allCompanyAccounts[allCompanyAccountIndex].deleted_at = data.data.deleted_at;
        }
        var companyAccountIndex = _this3.companyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        if (companyAccountIndex > -1) {
          _this3.companyAccounts[companyAccountIndex].deleted_at = data.data.deleted_at;
        }
        _this3.showMainAlert('success', 'Cuenta empresarial eliminada correctamente!');
      })["catch"](function (err) {
        _this3.showMainAlert('danger', err);
        return;
      });
    },
    restoreAccount: function restoreAccount(companyAccountId) {
      var _this4 = this;
      this.$store.dispatch(_core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_COMPANY_RESTORE"], companyAccountId).then(function (data) {
        if (data.code != 200) {
          _this4.showMainAlert('danger', data.error);
          return;
        }
        var allCompanyAccountIndex = _this4.allCompanyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        if (allCompanyAccountIndex > -1) {
          _this4.allCompanyAccounts[allCompanyAccountIndex].deleted_at = null;
        }
        var companyAccountIndex = _this4.companyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        if (companyAccountIndex > -1) {
          _this4.companyAccounts[companyAccountIndex].deleted_at = null;
        }
        _this4.showMainAlert('success', 'Cuenta empresarial restaurada correctamente!');
      })["catch"](function (err) {
        _this4.showMainAlert('danger', err);
        return;
      });
    },
    setPreferential: function setPreferential(e) {
      var _this5 = this;
      e.preventDefault();
      var id = this.selectedAccount.id;
      var preferential_purchase = this.$refs.preferential_purchase.value;
      var preferential_sale = this.$refs.preferential_sale.value;
      if (!preferential_purchase) {
        this.showPreferentialAlert('danger', 'Debe completar el valor de compra.');
        return;
      }
      if (!preferential_sale) {
        this.showPreferentialAlert('danger', 'Debe completar el valor de venta.');
        return;
      }
      var data;
      data = {
        id: id,
        preferential_purchase: preferential_purchase,
        preferential_sale: preferential_sale
      };
      this.$store.dispatch(_core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_COMPANY_SET_PREFERENTIAL"], data).then(function (data) {
        if (data.code != 200) {
          _this5.showPreferentialAlert('danger', data.error);
          return;
        }
        var allCompanyAccountIndex = _this5.allCompanyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        _this5.allCompanyAccounts[allCompanyAccountIndex].preferential = 1;
        _this5.allCompanyAccounts[allCompanyAccountIndex].preferential_purchase = data.data.preferential_purchase;
        _this5.allCompanyAccounts[allCompanyAccountIndex].preferential_sale = data.data.preferential_sale;
        var companyAccountIndex = _this5.companyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        _this5.companyAccounts[companyAccountIndex].preferential = 1;
        _this5.companyAccounts[companyAccountIndex].preferential_purchase = data.data.preferential_purchase;
        _this5.companyAccounts[companyAccountIndex].preferential_sale = data.data.preferential_sale;

        // close modal
        _this5.closeModal('modal-set-preferential');
        _this5.showMainAlert('success', 'Preferencial seteado correctamente!');
        return;
      })["catch"](function (err) {
        _this5.showPreferentialAlert('danger', err);
        return;
      });
    },
    deletePreferential: function deletePreferential() {
      var _this6 = this;
      this.$store.dispatch(_core_services_store_account_module__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_COMPANY_DELETE_PREFERENTIAL"], this.selectedAccount.id).then(function (data) {
        if (data.code != 200) {
          _this6.showPreferentialAlert('danger', data.error);
          return;
        }
        var allCompanyAccountIndex = _this6.allCompanyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        _this6.allCompanyAccounts[allCompanyAccountIndex].preferential = 0;
        _this6.allCompanyAccounts[allCompanyAccountIndex].preferential_purchase = null;
        _this6.allCompanyAccounts[allCompanyAccountIndex].preferential_sale = null;
        var companyAccountIndex = _this6.companyAccounts.findIndex(function (companyAccount) {
          return companyAccount.id == data.data.id;
        });
        _this6.companyAccounts[companyAccountIndex].preferential = 0;
        _this6.companyAccounts[companyAccountIndex].preferential_purchase = null;
        _this6.companyAccounts[companyAccountIndex].preferential_sale = null;

        // close modal
        _this6.closeModal('modal-set-preferential');
        _this6.showMainAlert('success', 'Preferencial eliminado correctamente!');
        return;
      })["catch"](function (err) {
        _this6.showPreferentialAlert('danger', err);
        return;
      });
    },
    updateSelectedAccount: function updateSelectedAccount(id) {
      this.updateAlert = false;
      this.updateAlertMessage = '';
      this.updateAlertVariant = '';
      this.preferentialAlert = false;
      this.preferentialAlertVariant = '';
      this.preferentialAlertMessage = '';
      this.selectedAccount = Object.assign({}, this.allCompanyAccounts.find(function (account) {
        return account.id === id;
      }));
    },
    showMainAlert: function showMainAlert(variant, message) {
      this.mainAlertVariant = variant;
      this.mainAlertMessage = message;
      this.mainAlert = true;
      window.scrollTo(0, 0);
    },
    showUpdateAlert: function showUpdateAlert(variant, message) {
      this.updateAlertVariant = variant;
      this.updateAlertMessage = message;
      this.updateAlert = true;
    },
    showPreferentialAlert: function showPreferentialAlert(variant, message) {
      this.preferentialAlertVariant = variant;
      this.preferentialAlertMessage = message;
      this.preferentialAlert = true;
    },
    closeModal: function closeModal(modalId) {
      this.$root.$emit('bv::hide::modal', modalId);
    },
    filterCompanyAccounts: function filterCompanyAccounts() {
      if (this.companyAccountSearchText == '' && this.companyAccountStatus == 'all') {
        this.resetFilters();
        return;
      }
      this.companyAccounts = [];
      for (var i = 0; i < this.allCompanyAccounts.length; i++) {
        var includeFilters = false;
        if (this.companyAccountSearchText != '') {
          if (this.allCompanyAccounts[i].ruc.toLowerCase().includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].business_name.toLowerCase().includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].business_turn.toLowerCase().includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].fiscal_address.toLowerCase().includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].email.toLowerCase().includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].phone.includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].name_lr.toLowerCase().includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].surname_lr.toLowerCase().includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].name_c.toLowerCase().includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].surname_c.toLowerCase().includes(this.companyAccountSearchText.toLowerCase())) {
            includeFilters = true;
          }
          if (this.allCompanyAccounts[i].phone_c != null) {
            if (this.allCompanyAccounts[i].phone_c.includes(this.companyAccountSearchText.toLowerCase())) {
              includeFilters = true;
            }
          }
        }
        if (this.companyAccountStatus != 'all') {
          if (this.companyAccountStatus == 'deleted') {
            if (this.allCompanyAccounts[i].deleted_at != null) {
              includeFilters = true;
            }
          } else if (this.companyAccountStatus == 'not_deleted') {
            if (this.allCompanyAccounts[i].deleted_at == null) {
              includeFilters = true;
            }
          }
        }
        if (includeFilters) {
          this.companyAccounts.push(_objectSpread({}, this.allCompanyAccounts[i]));
        }
      }
    },
    resetFilters: function resetFilters() {
      this.companyAccountSearchText = '';
      this.companyAccountStatus = 'all';
      this.companyAccounts = this.allCompanyAccounts.map(function (companyAccount) {
        return _objectSpread({}, companyAccount);
      });
    }
  },
  computed: {
    rows: function rows() {
      return this.companyAccounts.length;
    }
  },
  created: function created() {
    this.getCompanyAccounts();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/accounts/Company.vue?vue&type=template&id=dbb8c7e0&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/accounts/Company.vue?vue&type=template&id=dbb8c7e0& ***!
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
  }, [_vm._v(_vm._s(_vm.mainAlertMessage))])], 1), _vm._v(" "), _c("hr")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row m-2"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-3 col-sm-12 mr-2"
  }, [_c("div", {
    staticClass: "input-icon"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.companyAccountSearchText,
      expression: "companyAccountSearchText"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Buscar..."
    },
    domProps: {
      value: _vm.companyAccountSearchText
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.companyAccountSearchText = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-sm-12 mr-2"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("label", {
    staticClass: "mr-3 mb-0 d-none d-md-block"
  }, [_vm._v("Estado:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.companyAccountStatus,
      expression: "companyAccountStatus"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.companyAccountStatus = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "all"
    }
  }, [_vm._v("Todos")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "not_deleted"
    }
  }, [_vm._v("Activos")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "deleted"
    }
  }, [_vm._v("Eliminados")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-sm-12 mr-2"
  }, [_c("a", {
    staticClass: "btn btn-light-primary px-6 font-weight-bold cursor-pointer mr-2",
    on: {
      click: function click($event) {
        return _vm.filterCompanyAccounts();
      }
    }
  }, [_vm._v("Buscar")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-light-primary px-6 font-weight-bold cursor-pointer mr-2",
    on: {
      click: function click($event) {
        return _vm.resetFilters();
      }
    }
  }, [_vm._v("Resetear")])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-table", {
    attrs: {
      id: "my-table",
      fields: _vm.fields,
      items: _vm.companyAccounts,
      "per-page": _vm.perPage,
      "current-page": _vm.currentPage,
      "head-variant": "light",
      "table-variant": "light",
      hover: ""
    },
    scopedSlots: _vm._u([{
      key: "cell(full_name_lr)",
      fn: function fn(data) {
        return [_vm._v("\n                            " + _vm._s(data.item.name_lr) + " " + _vm._s(data.item.surname_lr) + "\n                        ")];
      }
    }, {
      key: "cell(full_name_c)",
      fn: function fn(data) {
        return [_vm._v("\n                            " + _vm._s(data.item.name_c) + " " + _vm._s(data.item.surname_c) + _vm._s(data.item.phone_c == null ? "" : " - " + data.item.phone_c) + "\n                        ")];
      }
    }, {
      key: "cell(preferential)",
      fn: function fn(data) {
        return [data.item.preferential == 1 ? _c("span", {
          staticClass: "label label-lg label-light-success label-inline"
        }, [_vm._v("Activo")]) : _c("span", {
          staticClass: "label label-lg label-light-danger label-inline"
        }, [_vm._v("Inactivo")])];
      }
    }, {
      key: "cell(deleted_at)",
      fn: function fn(data) {
        return [data.item.deleted_at ? _c("span", {
          staticClass: "label label-lg label-light-danger label-inline"
        }, [_vm._v("Eliminado")]) : _c("span", {
          staticClass: "label label-lg label-light-success label-inline"
        }, [_vm._v("Activo")])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(data) {
        return [data.item.deleted_at == null ? _c("a", {
          directives: [{
            name: "b-modal",
            rawName: "v-b-modal.modal-edit-info",
            modifiers: {
              "modal-edit-info": true
            }
          }],
          staticClass: "m-2",
          attrs: {
            title: "Editar cuenta"
          },
          on: {
            click: function click($event) {
              return _vm.updateSelectedAccount(data.item.id);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-edit"
        })]) : _vm._e(), _vm._v(" "), data.item.deleted_at == null ? _c("a", {
          directives: [{
            name: "b-modal",
            rawName: "v-b-modal.modal-set-preferential",
            modifiers: {
              "modal-set-preferential": true
            }
          }],
          staticClass: "m-2",
          attrs: {
            title: "Setear preferencial"
          },
          on: {
            click: function click($event) {
              return _vm.updateSelectedAccount(data.item.id);
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-cog"
        })]) : _vm._e(), _vm._v(" "), data.item.deleted_at == null ? _c("a", {
          staticClass: "m-2 cursor-pointer",
          attrs: {
            title: "Eliminar cuenta"
          },
          on: {
            click: function click($event) {
              return _vm.deleteAccount(data.item.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        })]) : _vm._e(), _vm._v(" "), data.item.deleted_at != null ? _c("a", {
          staticClass: "m-2 cursor-pointer",
          attrs: {
            title: "Restaurar cuenta"
          },
          on: {
            click: function click($event) {
              return _vm.restoreAccount(data.item.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash-restore-alt"
        })]) : _vm._e()];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      "aria-controls": "my-table"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])])])]), _vm._v(" "), Object.keys(_vm.selectedAccount).length ? _c("div", [_c("b-modal", {
    attrs: {
      id: "modal-edit-info",
      size: "lg",
      title: "Información de la cuenta",
      "ok-title": "Actualizar",
      "cancel-title": "Cancelar"
    },
    on: {
      ok: function ok($event) {
        return _vm.updateAccount($event);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.id,
      expression: "selectedAccount.id"
    }],
    ref: "id",
    attrs: {
      type: "hidden",
      name: "id"
    },
    domProps: {
      value: _vm.selectedAccount.id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
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
    staticClass: "form-control form-control-solid form-control-lg",
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
    staticClass: "form-control form-control-solid form-control-lg",
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
    staticClass: "form-control form-control-solid form-control-lg",
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
    staticClass: "form-control form-control-solid form-control-lg",
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
    staticClass: "form-control form-control-solid form-control-lg",
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
    staticClass: "form-control form-control-solid form-control-lg",
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
    staticClass: "form-control form-control-solid form-control-lg",
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
    staticClass: "form-control form-control-solid form-control-lg",
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
    staticClass: "form-control form-control-solid form-control-lg",
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
    staticClass: "form-control form-control-solid form-control-lg",
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
  }, [_c("label", [_vm._v("Nombre/s")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.name_lr,
      expression: "selectedAccount.name_lr"
    }],
    ref: "name_lr",
    staticClass: "form-control form-control-solid form-control-lg",
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
  }, [_c("label", [_vm._v("Apellido/s")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.surname_lr,
      expression: "selectedAccount.surname_lr"
    }],
    ref: "surname_lr",
    staticClass: "form-control form-control-solid form-control-lg",
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
  }, [_c("label", [_vm._v("Tipo de documento")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_type_lr.id,
      expression: "selectedAccount.document_type_lr.id"
    }],
    ref: "document_type_lr_id",
    staticClass: "form-control form-control-solid form-control-lg",
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
        _vm.$set(_vm.selectedAccount.document_type_lr, "id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Selecciona el tipo de documento")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("DNI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Número de documento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_number_lr,
      expression: "selectedAccount.document_number_lr"
    }],
    ref: "document_number_lr",
    staticClass: "form-control form-control-solid form-control-lg",
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
  }, [_c("label", [_vm._v("Nombre/s")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.name_c,
      expression: "selectedAccount.name_c"
    }],
    ref: "name_c",
    staticClass: "form-control form-control-solid form-control-lg",
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
  }, [_c("label", [_vm._v("Apellido/s")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.surname_c,
      expression: "selectedAccount.surname_c"
    }],
    ref: "surname_c",
    staticClass: "form-control form-control-solid form-control-lg",
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
  }, [_c("label", [_vm._v("Tipo de documento")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_type_c.id,
      expression: "selectedAccount.document_type_c.id"
    }],
    ref: "document_type_c_id",
    staticClass: "form-control form-control-solid form-control-lg",
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
        _vm.$set(_vm.selectedAccount.document_type_c, "id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Selecciona el tipo de documento")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("DNI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AF"
    }
  }, [_vm._v("RELLENAR CON EL RESTO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Número de documento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.document_number_c,
      expression: "selectedAccount.document_number_c"
    }],
    ref: "document_number_c",
    staticClass: "form-control form-control-solid form-control-lg",
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
  }, [_c("label", [_vm._v("Teléfono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.phone_c,
      expression: "selectedAccount.phone_c"
    }],
    ref: "phone_c",
    staticClass: "form-control form-control-solid form-control-lg",
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
  })])])]), _vm._v(" "), _vm.updateAlert ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-alert", {
    attrs: {
      show: "",
      variant: _vm.updateAlertStatus
    }
  }, [_vm._v(_vm._s(_vm.updateAlertMessage))])], 1)]) : _vm._e()]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "modal-set-preferential",
      title: "Tipo de cambio preferencial",
      "ok-title": "Guardar",
      "cancel-title": "Cancelar"
    },
    on: {
      ok: function ok($event) {
        return _vm.setPreferential($event);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.id,
      expression: "selectedAccount.id"
    }],
    ref: "id",
    attrs: {
      type: "hidden",
      name: "id"
    },
    domProps: {
      value: _vm.selectedAccount.id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Compra")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.preferential_purchase,
      expression: "selectedAccount.preferential_purchase"
    }],
    ref: "preferential_purchase",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "preferential_purchase",
      placeholder: "Ingresa el valor de compra"
    },
    domProps: {
      value: _vm.selectedAccount.preferential_purchase
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "preferential_purchase", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Venta")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAccount.preferential_sale,
      expression: "selectedAccount.preferential_sale"
    }],
    ref: "preferential_sale",
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "preferential_sale",
      placeholder: "Ingresa el valor de venta"
    },
    domProps: {
      value: _vm.selectedAccount.preferential_sale
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedAccount, "preferential_sale", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _vm.selectedAccount.preferential == 1 ? _c("b-button", {
    staticClass: "mt-3",
    attrs: {
      variant: "outline-danger",
      block: ""
    },
    on: {
      click: function click($event) {
        return _vm.deletePreferential();
      }
    }
  }, [_vm._v("Eliminar tipo de cambio preferencial")]) : _vm._e(), _vm._v(" "), _vm.preferentialAlert ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-alert", {
    "class": {
      "mt-2": _vm.selectedAccount.preferential == 1
    },
    attrs: {
      show: "",
      variant: _vm.preferentialAlertStatus
    }
  }, [_vm._v(_vm._s(_vm.preferentialAlertMessage))])], 1)]) : _vm._e()], 1)], 1) : _vm._e()]);
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
  }, [_c("strong", [_vm._v("Cuentas Empresariales")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("i", {
    staticClass: "flaticon2-search-1 text-muted"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/view/pages/accounts/Company.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/view/pages/accounts/Company.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Company_vue_vue_type_template_id_dbb8c7e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Company.vue?vue&type=template&id=dbb8c7e0& */ "./resources/js/src/view/pages/accounts/Company.vue?vue&type=template&id=dbb8c7e0&");
/* harmony import */ var _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Company.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/accounts/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Company_vue_vue_type_template_id_dbb8c7e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Company_vue_vue_type_template_id_dbb8c7e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/accounts/Company.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/accounts/Company.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/view/pages/accounts/Company.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/accounts/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/accounts/Company.vue?vue&type=template&id=dbb8c7e0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/accounts/Company.vue?vue&type=template&id=dbb8c7e0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_dbb8c7e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=template&id=dbb8c7e0& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/accounts/Company.vue?vue&type=template&id=dbb8c7e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_dbb8c7e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_dbb8c7e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);