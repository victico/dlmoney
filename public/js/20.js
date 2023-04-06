(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_report_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/report.module */ "./resources/js/src/core/services/store/report.module.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mainAlert: false,
      mainAlertVariant: "",
      mainAlertMessage: "",
      operationDataAlert: false,
      operationDataAlertVariant: '',
      operationDataAlertMessage: '',
      allOperations: [],
      operations: [],
      operationSearch: '',
      selectedOperation: {},
      modalChangeStatusText: "",
      // Table variables
      currentPage: 1,
      totalItems: 0,
      perPage: 15,
      fields: [{
        key: 'created_at',
        label: 'Fecha'
      }, {
        key: 'name',
        label: 'Nombre'
      }, {
        key: 'amount',
        label: 'Monto recibido'
      }, {
        key: 'change_amount',
        label: 'Monto a envíar'
      }, {
        key: 'exchange_rate',
        label: 'Tipo de cambio'
      }, {
        key: 'found_id',
        label: 'Oringenes de fondo'
      }, {
        key: 'status',
        label: 'Estado'
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    getOperations: function getOperations() {
      var _this = this;
      var query = '?';
      var queryParams = ['page=' + this.currentPage];
      console.log(this.$store);
      if (this.operationSearch != '') {
        queryParams.push('search=' + this.operationSearch);
      }
      for (var i = 0; i < queryParams.length; i++) {
        if (i != 0) {
          query += '&';
        }
        query += queryParams[i];
      }
      this.$store.dispatch(_core_services_store_report_module__WEBPACK_IMPORTED_MODULE_0__["REPORT_SBS_COMPLETE_GET_PAGINATED"]).then(function (data) {
        if (data.code != 200) {
          _this.showMainAlert('danger', 'Error desconocido al obtener las operaciones.');
          console.log(data);
          return;
        }
        console.log(data);
        _this.allOperations = data.data.data;
        _this.operations = _this.allOperations;
        console.log(_this.operations);

        // Table data
        _this.totalItems = data.data.data.total;
        _this.perPage = data.data.data.per_page;
      })["catch"](function (err) {
        _this.showMainAlert('danger', err);
      });
    },
    setSelectedOperationChangeStatusData: function setSelectedOperationChangeStatusData(operationId, currentStatus, newStatus) {
      this.selectedOperationToChangeStatus = {
        id: operationId,
        current_status: currentStatus,
        new_status: newStatus
      };
    },
    resetOperationAccion: function resetOperationAccion() {
      this.selectedOperationToChangeStatus = {};
    },
    setTextOfModal: function setTextOfModal(text) {
      this.modalChangeStatusText = text;
    },
    changeStatus: function changeStatus(e) {
      var _this2 = this;
      e.preventDefault();
      this.$store.dispatch(OPERATIONS_CHANGE_STATUS, this.selectedOperationToChangeStatus).then(function (data) {
        if (data.code != 200) {
          _this2.showMainAlert('danger', data.error);
          return;
        }
        var allOperationsIndex = _this2.allOperations.findIndex(function (operation) {
          return operation.id == data.data.id;
        });
        if (allOperationsIndex > -1) {
          _this2.allOperations[allOperationsIndex].status = data.data.status;
          _this2.allOperations[allOperationsIndex].status_label = data.data.status_label;
        }
        var operationsIndex = _this2.operations.findIndex(function (operation) {
          return operation.id == data.data.id;
        });
        if (operationsIndex > -1) {
          _this2.operations[operationsIndex].status = data.data.status;
          _this2.operations[operationsIndex].status_label = data.data.status_label;
        }
        _this2.operations = _this2.operations.slice();

        // close modal
        _this2.closeModal('modal-confirm-change-status');
      })["catch"](function (err) {
        _this2.showMainAlert('danger', err);
        return;
      });
    },
    setSelectedOperation: function setSelectedOperation(operationId) {
      this.selectedOperation = Object.assign({}, this.allOperations.find(function (operation) {
        return operation.id == operationId;
      }));
    },
    resetSelectedOperation: function resetSelectedOperation() {
      this.selectedOperation = {};
    },
    resetOperationDataAlert: function resetOperationDataAlert() {
      this.operationDataAlertVariant = '';
      this.operationDataAlertMessage = '';
      this.operationDataAlert = false;
    },
    showMainAlert: function showMainAlert(variant, message) {
      this.mainAlertVariant = variant;
      this.mainAlertMessage = message;
      this.mainAlert = true;
      window.scrollTo(0, 0);
    },
    closeModal: function closeModal(modalId) {
      this.$root.$emit('bv::hide::modal', modalId);
    },
    resetFilters: function resetFilters() {
      this.operationSearch = '';
      this.getOperations();
    }
  },
  watch: {
    currentPage: {
      handler: function handler() {
        this.getOperations();
      }
    }
  },
  computed: {},
  created: function created() {
    this.getOperations();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=template&id=6bfac8c9&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=template&id=6bfac8c9& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._m(0), _vm._v(" "), _vm.mainAlert ? _c("div", {
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
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row m-2"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-3 col-sm-12 mr-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Estado:")]), _vm._v(" "), _c("div", {
    staticClass: "input-icon"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.operationSearch,
      expression: "operationSearch"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Buscar..."
    },
    domProps: {
      value: _vm.operationSearch
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.operationSearch = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm._m(1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("    ")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("a", {
    staticClass: "btn btn-light-primary px-3 font-weight-bold cursor-pointer mr-2",
    on: {
      click: function click($event) {
        return _vm.getOperations();
      }
    }
  }, [_vm._v("Buscar")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-light-primary px-3 font-weight-bold cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.resetFilters();
      }
    }
  }, [_vm._v("Resetear")])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-table", {
    attrs: {
      id: "my-table",
      fields: _vm.fields,
      items: _vm.operations,
      "per-page": 0,
      "current-page": _vm.currentPage,
      "head-variant": "light",
      "table-variant": "light",
      hover: "",
      "show-empty": ""
    },
    scopedSlots: _vm._u([{
      key: "cell(name)",
      fn: function fn(data) {
        return [data.item.bank_account_send.personal_account != null ? _c("div", [_vm._v("\n                                    " + _vm._s(data.item.bank_account_send.personal_account.name) + " " + _vm._s(data.item.bank_account_send.personal_account.surname) + "\n                                ")]) : data.item.bank_account_send.company_account != null ? _c("div", [_vm._v("\n                                    " + _vm._s(data.item.bank_account_send.company_account.business_name) + "\n                                ")]) : _vm._e()];
      }
    }, {
      key: "cell(amount)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.coin_type.name) + " " + _vm._s(_vm.$func.numberFormat(data.item.amount.toFixed(2))) + "\n                            ")];
      }
    }, {
      key: "cell(change_amount)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_receive.coin_type.name) + " " + _vm._s(_vm.$func.numberFormat(data.item.change_amount.toFixed(2))) + "\n                            ")];
      }
    }, {
      key: "cell(exchange_rate)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(_vm.$func.numberFormat(data.item.exchange_rate.toFixed(3))) + "\n                            ")];
      }
    }, {
      key: "cell(found_id)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.fund_origin.name) + "\n                            ")];
      }
    }, {
      key: "cell(status)",
      fn: function fn(data) {
        return [data.item.status == -1 ? _c("span", {
          staticClass: "label label-lg label-light-danger label-inline"
        }, [_vm._v(_vm._s(data.item.status_label))]) : data.item.status == 1 ? _c("span", {
          staticClass: "label label-lg label-light-warning label-inline"
        }, [_vm._v(_vm._s(data.item.status_label))]) : data.item.status == 2 ? _c("span", {
          staticClass: "label label-lg label-light-primary label-inline"
        }, [_vm._v(_vm._s(data.item.status_label))]) : data.item.status == 3 ? _c("span", {
          staticClass: "label label-lg label-light-success label-inline"
        }, [_vm._v(_vm._s(data.item.status_label))]) : _vm._e()];
      }
    }, {
      key: "empty",
      fn: function fn() {
        return [_c("div", {
          attrs: {
            role: "alert",
            "aria-live": "polite"
          }
        }, [_c("div", {
          staticClass: "text-center my-2"
        }, [_vm._v("No se encontraron resultados.")])])];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.totalItems,
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
  })], 1)])])])]), _vm._v(" "), Object.keys(_vm.selectedOperation).length ? _c("div", [_c("b-modal", {
    attrs: {
      id: "modal-operation-information",
      size: "md",
      title: "Datos de la operación",
      "ok-only": "",
      "ok-title": "Cerrar"
    },
    on: {
      hidden: function hidden($event) {
        _vm.resetSelectedOperation();
        _vm.resetOperationDataAlert();
      }
    }
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Fecha de creación:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v(_vm._s(_vm.selectedOperation.created_at))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Fecha de actualización:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v(_vm._s(_vm.selectedOperation.updated_at))])])])]), _vm._v(" "), _vm.selectedOperation.bank_account_send.personal_account != null ? _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Nombre:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v(_vm._s(_vm.selectedOperation.bank_account_send.personal_account.name) + " " + _vm._s(_vm.selectedOperation.bank_account_send.personal_account.surname))])])])]) : _vm._e(), _vm._v(" "), _vm.selectedOperation.bank_account_send.personal_account != null ? _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v(_vm._s(_vm.selectedOperation.bank_account_send.personal_account.document_type.name) + ":")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v(_vm._s(_vm.selectedOperation.bank_account_send.personal_account.document_number))])])])]) : _vm._e(), _vm._v(" "), _vm.selectedOperation.bank_account_send.personal_account != null ? _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Email:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v(_vm._s(_vm.selectedOperation.bank_account_send.personal_account.user.email))])])])]) : _vm._e(), _vm._v(" "), _vm.selectedOperation.bank_account_send.personal_account != null && (_vm.selectedOperation.bank_account_send.personal_account.phone != null || _vm.selectedOperation.bank_account_send.personal_account.cellphone1 != null || _vm.selectedOperation.bank_account_send.personal_account.cellphone2 != null) ? _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Teléfono:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v("\n                                " + _vm._s(_vm.selectedOperation.bank_account_send.personal_account.phone != null ? _vm.selectedOperation.bank_account_send.personal_account.phone : "") + "\n                                " + _vm._s(_vm.selectedOperation.bank_account_send.personal_account.phone != null ? " | " : "") + _vm._s(_vm.selectedOperation.bank_account_send.personal_account.cellphone1 != null ? _vm.selectedOperation.bank_account_send.personal_account.cellphone1 : "") + "\n                                " + _vm._s(_vm.selectedOperation.bank_account_send.personal_account.cellphone1 != null && _vm.selectedOperation.bank_account_send.personal_account.cellphone2 != null ? " | " : "") + _vm._s(_vm.selectedOperation.bank_account_send.personal_account.cellphone2 != null ? _vm.selectedOperation.bank_account_send.personal_account.cellphone2 : "") + "\n                            ")])])])]) : _vm._e(), _vm._v(" "), _vm.selectedOperation.bank_account_send.company_account != null ? _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Nombre:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v(_vm._s(_vm.selectedOperation.bank_account_send.company_account.business_name))])])])]) : _vm._e(), _vm._v(" "), _vm.selectedOperation.bank_account_send.company_account != null ? _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("RUC:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v(_vm._s(_vm.selectedOperation.bank_account_send.company_account.ruc))])])])]) : _vm._e(), _vm._v(" "), _vm.selectedOperation.bank_account_send.company_account != null ? _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Email:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v(_vm._s(_vm.selectedOperation.bank_account_send.company_account.user.email))])])])]) : _vm._e(), _vm._v(" "), _vm.selectedOperation.bank_account_send.company_account != null && (_vm.selectedOperation.bank_account_send.company_account.phone != null || _vm.selectedOperation.bank_account_send.company_account.phone_c != null) ? _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Teléfono:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v("\n                                " + _vm._s(_vm.selectedOperation.bank_account_send.company_account.phone != null ? _vm.selectedOperation.bank_account_send.company_account.phone : "") + "\n                                " + _vm._s(_vm.selectedOperation.bank_account_send.company_account.phone != null ? " | " : "") + _vm._s(_vm.selectedOperation.bank_account_send.company_account.phone_c != null ? _vm.selectedOperation.bank_account_send.company_account.phone_c : "") + "\n                            ")])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Tipo de cambio:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$func.numberFormat(_vm.selectedOperation.exchange_rate.toFixed(3))))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Cuenta de envío:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v("\n                                " + _vm._s(_vm.selectedOperation.bank_account_send.bank.name) + "\n                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Monto enviado:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v("\n                                " + _vm._s(_vm.selectedOperation.bank_account_send.coin_type.name) + " " + _vm._s(_vm.$func.numberFormat(_vm.selectedOperation.amount.toFixed(2))) + "\n                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Cuenta de destino:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v("\n                                " + _vm._s(_vm.selectedOperation.bank_account_receive.bank.name) + "\n                                | " + _vm._s(_vm.selectedOperation.bank_account_receive.account_number) + "\n                                | " + _vm._s(_vm.selectedOperation.bank_account_receive.account_number_cci) + "\n                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Monto esperado:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v("\n                                " + _vm._s(_vm.selectedOperation.bank_account_receive.coin_type.name) + " " + _vm._s(_vm.$func.numberFormat(_vm.selectedOperation.change_amount.toFixed(2))) + "\n                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("span", {
    staticClass: "font-weight-bold mr-2 h6"
  }, [_vm._v("Cuenta de destino:")]), _vm._v(" "), _c("p", {
    staticClass: "text-hover-primary m-0 h6"
  }, [_c("strong", [_vm._v("\n                                " + _vm._s(_vm.selectedOperation.bank_account_transfer.bank.name) + "\n                                | " + _vm._s(_vm.selectedOperation.bank_account_transfer.account_number) + "\n                                | " + _vm._s(_vm.selectedOperation.bank_account_transfer.account_number_cci) + "\n                            ")])])])])]), _vm._v(" "), _vm.operationDataAlert ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("b-alert", {
    attrs: {
      show: _vm.operationDataAlert,
      dismissible: "",
      fade: "",
      variant: _vm.operationDataAlertVariant
    },
    on: {
      dismissed: function dismissed($event) {
        _vm.operationDataAlert = false;
      }
    }
  }, [_vm._v(_vm._s(_vm.operationDataAlertMessage))])], 1)]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), _c("div", [_c("b-modal", {
    attrs: {
      id: "modal-confirm-change-status",
      title: "Cambiar estado de operación",
      "ok-title": "Confirmar",
      "cancel-title": "Cancelar"
    },
    on: {
      ok: function ok($event) {
        return _vm.changeStatus($event);
      },
      hidden: function hidden($event) {
        return _vm.resetOperationAccion();
      }
    }
  }, [_c("p", {
    staticClass: "my-4"
  }, [_vm._v("Esta seguro que desea " + _vm._s(_vm.modalChangeStatusText) + "?")])])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header pt-4 pb-2 min-vh-0"
  }, [_c("div", {
    staticClass: "row w-100"
  }, [_c("div", {
    staticClass: "col-lg-4 col-md-12 col-sm-12"
  }, [_c("h3", {
    staticClass: "pt-4"
  }, [_c("strong", [_vm._v("Reporte")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("i", {
    staticClass: "flaticon2-search-1 text-muted"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/view/pages/reports/sbs-report.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/view/pages/reports/sbs-report.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sbs_report_vue_vue_type_template_id_6bfac8c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sbs-report.vue?vue&type=template&id=6bfac8c9& */ "./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=template&id=6bfac8c9&");
/* harmony import */ var _sbs_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sbs-report.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sbs_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sbs_report_vue_vue_type_template_id_6bfac8c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sbs_report_vue_vue_type_template_id_6bfac8c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/reports/sbs-report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sbs_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sbs-report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sbs_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=template&id=6bfac8c9&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=template&id=6bfac8c9& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_sbs_report_vue_vue_type_template_id_6bfac8c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sbs-report.vue?vue&type=template&id=6bfac8c9& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=template&id=6bfac8c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_sbs_report_vue_vue_type_template_id_6bfac8c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_sbs_report_vue_vue_type_template_id_6bfac8c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);