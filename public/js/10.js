(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@linways/table-to-excel/dist sync recursive":
/*!********************************************************!*\
  !*** ./node_modules/@linways/table-to-excel/dist sync ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@linways/table-to-excel/dist sync recursive";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/reports/sbs-report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_report_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/report.module */ "./resources/js/src/core/services/store/report.module.js");
/* harmony import */ var export_from_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! export-from-json */ "./node_modules/export-from-json/dist/esm/index.js");
/* harmony import */ var _linways_table_to_excel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @linways/table-to-excel */ "./node_modules/@linways/table-to-excel/dist/tableToExcel.js");
/* harmony import */ var _linways_table_to_excel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_linways_table_to_excel__WEBPACK_IMPORTED_MODULE_2__);



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
      dateFrom: this.getToday(new Date(), 'yyyy-MM-dd'),
      dateTo: this.getToday(new Date(), 'yyyy-MM-dd'),
      selectedOperation: {},
      modalChangeStatusText: "",
      // Table variables
      currentPage: 1,
      totalItems: 0,
      perPage: 15,
      fields: [{
        key: 'created_at',
        label: 'Fecha de la opereacion',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'departament',
        label: 'Departamento',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'province',
        label: 'Provincia',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'distrit',
        label: 'Distrito',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'type_doc',
        label: 'Tipo de Doc',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'number_doc',
        label: 'N° Doc',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'ln_father',
        label: 'Ap Paterno',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'ln_mother',
        label: 'Ap Materno',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'name',
        label: 'Nombres',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'country',
        label: 'Pais',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'ocupation',
        label: 'Ocupación',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'address',
        label: 'Dirección',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'phone',
        label: 'Telefono',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'email',
        label: 'Correo electronico',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'ruc',
        label: 'RUC',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'business_name',
        label: 'Razon social',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'business_turn',
        label: 'Giro de negocio',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'ln_father_c',
        label: 'Ap Paterno de Contacto',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'ln_mother_c',
        label: 'Ap Materno de Contacto',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'name_c',
        label: 'Nombres de Contacto',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'type_doc_c',
        label: 'Tipo de Doc. de Contacto',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'number_doc_c',
        label: 'N° Doc. de Contacto ',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'phone_c',
        label: 'Telefono de Contacto ',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'found_id',
        label: 'Oringenes de fondo',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'to_currency',
        label: 'A: Moneda',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'amount',
        label: 'De: Monto',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'from_currency',
        label: 'De: Moneda',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'change_amount',
        label: 'A: Monto',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'exchange_rate',
        label: 'Tipo de cambio',
        thStyle: {
          textAlign: 'center'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    getToday: function getToday(fecha, formato) {
      var map = {
        dd: fecha.getDate() < '10' ? '0' + fecha.getDate() : fecha.getDate(),
        MM: fecha.getMonth() + 1 < 10 ? '0' + (fecha.getMonth() + 1) : '0' + (fecha.getMonth() + 1),
        yyyy: fecha.getFullYear()
      };
      return formato.replace(/yyyy|MM|dd/gi, function (matched) {
        return map[matched];
      });
    },
    getOperations: function getOperations() {
      var _this = this;
      var query = '?';
      var queryParams = ['page=' + this.currentPage];
      queryParams.push('dateFrom=' + this.dateFrom);
      queryParams.push('dateTo=' + this.dateTo);
      for (var i = 0; i < queryParams.length; i++) {
        if (i != 0) {
          query += '&';
        }
        query += queryParams[i];
      }
      console.log(query);
      this.$store.dispatch(_core_services_store_report_module__WEBPACK_IMPORTED_MODULE_0__["REPORT_SBS_COMPLETE_GET_PAGINATED"], query).then(function (data) {
        if (data.code != 200) {
          _this.showMainAlert('danger', 'Error desconocido al obtener las operaciones.');
          return;
        }
        _this.allOperations = data.data.data;
        _this.operations = _this.allOperations;
        console.log(data);
        // Table data
        _this.totalItems = data.data.data.total;
        _this.perPage = data.data.data.per_page;
      })["catch"](function (err) {
        _this.showMainAlert('danger', err);
      });
    },
    downloadXls: function downloadXls() {
      var _this2 = this;
      var table = [];
      console.log(this.operations);
      this.operations.map(function (operation) {
        console.log(operation);
        table.push({
          'Fecha de solicitud': operation.created_at,
          'Fecha de operación': operation.updated_at,
          'Departamento': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.department.name : operation.bank_account_send.company_account.department.name,
          'Provincia': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.province.name : operation.bank_account_send.company_account.province.name,
          'Distrito': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.district.name : operation.bank_account_send.company_account.district.name,
          'Tipo de Doc': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.document_type.name : operation.bank_account_send.company_account.document_type_lr.name,
          'N° Doc': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.document_number : operation.bank_account_send.company_account.document_number_lr,
          'Ap Paterno': operation.bank_account_send.personal_account != null ? _this2.partLastnames(operation.bank_account_send.personal_account.surname)[0] : _this2.partLastnames(operation.bank_account_send.company_account.surname_lr)[0],
          'Ap Materno': operation.bank_account_send.personal_account != null ? _this2.partLastnames(operation.bank_account_send.personal_account.surname)[1] : _this2.partLastnames(operation.bank_account_send.company_account.surname_lr)[1],
          'Nombres': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.name : operation.bank_account_send.company_account.name_lr,
          'Pais': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.country.name : operation.bank_account_send.company_account.country.name,
          'Ocupación': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.ocupation.name : operation.bank_account_send.company_account.ocupation_lr.name,
          'Dirección': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.address : operation.bank_account_send.company_account.fiscal_address,
          'Telefono': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.cellphone1 : operation.bank_account_send.company_account.phone,
          'Correo electronico': operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.user.email : operation.bank_account_send.company_account.email,
          'RUC': operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.ruc,
          'Razon social': operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.business_name,
          'Giro de negocio': operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.business_turn,
          'Ap Paterno de Contacto': operation.bank_account_send.personal_account != null ? '' : _this2.partLastnames(operation.bank_account_send.company_account.surname_c)[0],
          'Ap Materno de Contacto': operation.bank_account_send.personal_account != null ? '' : _this2.partLastnames(operation.bank_account_send.company_account.surname_c)[1],
          'Nombres de Contacto': operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.name_c,
          'Tipo de Doc. de Contacto': operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.document_type_c.name,
          'N° Doc. de Contacto': operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.document_number_c,
          'Telefono de Contacto': operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.phone_c,
          'Oringenes de fondo': operation.fund_origin.name,
          'A: Moneda': operation.bank_account_receive.coin_type.name,
          'De: Monto': _this2.$func.numberFormat(operation.amount.toFixed(2)),
          'De: Moneda': operation.bank_account_transfer.coin_type.name,
          'A: Monto': _this2.$func.numberFormat(operation.change_amount.toFixed(2)),
          'Tipo de cambio': _this2.$func.numberFormat(operation.exchange_rate.toFixed(3))
        });
      });
      Object(export_from_json__WEBPACK_IMPORTED_MODULE_1__["default"])({
        data: table,
        fileName: 'SBS-REPORT',
        exportType: export_from_json__WEBPACK_IMPORTED_MODULE_1__["default"].types.csv,
        withBOM: true
      });
    },
    exportReportToExcel: function exportReportToExcel() {
      var table = document.getElementById('sbs-table');
      var row = 0;
      this.opertaions.map(function () {
        return row + 1;
      });
      console.log(row);

      // table.setAttribute('data-cols-width', '30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30')
      // TableToExcel.convert(table, {
      //   name: `SBS-REPORT.xlsx`,
      //   sheet: {
      //     name: 'Sheet 1'
      //   }
      // });
    },
    exportTableToExcel: function exportTableToExcel(tableID) {
      var downloadLink;
      var dataType = 'application/vnd.ms-excel;charset=utf-8';
      var tableSelect = document.getElementById(tableID);
      var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

      // Specify file name
      var filename = 'SBS-REPORT.xls';

      // Create download link element
      downloadLink = document.createElement("a");
      document.body.appendChild(downloadLink);
      if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
          type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
      }
    },
    partLastnames: function partLastnames(op) {
      return op.split(' ');
    },
    resetOperationAccion: function resetOperationAccion() {
      this.selectedOperationToChangeStatus = {};
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
    getThAtt: function getThAtt() {
      var attr = {
        'data-f-sz': '12',
        'data-f-bold': true,
        'data-f-color': 'FFFFFF',
        'data-a-h': 'center',
        'data-fill-color': '0086EF',
        'data-b-a-s': 'BORDER_STYLES',
        'data-b-a-c': 'FF0000'
      };
      return attr;
    },
    getTdAtt: function getTdAtt() {
      var attr = {
        'data-a-h': 'center',
        'data-b-a-c': 'FF0000'
      };
      return attr;
    },
    showMainAlert: function showMainAlert(variant, message) {
      this.mainAlertVariant = variant;
      this.mainAlertMessage = message;
      this.mainAlert = true;
      window.scrollTo(0, 0);
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
    staticClass: "col-lg-5 col-md-5 col-sm-12 d-flex"
  }, [_c("div", {
    staticClass: "form-group mr-3 text-center"
  }, [_c("label", [_vm._v("Fecha desde:")]), _vm._v(" "), _c("div", {
    staticClass: "input-icon"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dateFrom,
      expression: "dateFrom"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      placeholder: "Fecha de inicio"
    },
    domProps: {
      value: _vm.dateFrom
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.dateFrom = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mr-3 text-center"
  }, [_c("label", [_vm._v("Fecha hasta:")]), _vm._v(" "), _c("div", {
    staticClass: "input-icon"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dateTo,
      expression: "dateTo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      placeholder: "Fecha de fin"
    },
    domProps: {
      value: _vm.dateTo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.dateTo = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm._m(2)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-5 col-md-5 col-sm-12"
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
    staticClass: "btn btn-light-primary px-3 font-weight-bold cursor-pointer mr-2",
    on: {
      click: function click($event) {
        return _vm.resetFilters();
      }
    }
  }, [_vm._v("Resetear")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-light-primary px-3 font-weight-bold cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.exportReportToExcel();
      }
    }
  }, [_vm._v("Descargar en EXCEL")])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "row tab-hidden"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12 text-center",
    staticStyle: {
      "max-width": "none",
      width: "auto"
    }
  }, [_c("b-table", {
    attrs: {
      id: "sbs-table",
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
      key: "cell(departament)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.department.name : data.item.bank_account_send.company_account.department.name) + " \n                            ")];
      }
    }, {
      key: "cell(province)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.province.name : data.item.bank_account_send.company_account.province.name) + " \n                            ")];
      }
    }, {
      key: "cell(distrit)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.district.name : data.item.bank_account_send.company_account.district.name) + " \n                            ")];
      }
    }, {
      key: "cell(type_doc)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.document_type.name : data.item.bank_account_send.company_account.document_type_lr.name) + " \n                            ")];
      }
    }, {
      key: "cell(number_doc)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.document_number : data.item.bank_account_send.company_account.document_number_lr) + " \n                            ")];
      }
    }, {
      key: "cell(ln_father)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_send.personal_account != null ? _vm.partLastnames(data.item.bank_account_send.personal_account.surname)[0] : _vm.partLastnames(data.item.bank_account_send.company_account.surname_lr)[0]) + " \n                            ")];
      }
    }, {
      key: "cell(ln_mother)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_send.personal_account != null ? _vm.partLastnames(data.item.bank_account_send.personal_account.surname)[1] : _vm.partLastnames(data.item.bank_account_send.company_account.surname_lr)[1]) + " \n                            ")];
      }
    }, {
      key: "cell(name)",
      fn: function fn(data) {
        return [data.item.bank_account_send.personal_account != null ? _c("div", [_vm._v("\n                                    " + _vm._s(data.item.bank_account_send.personal_account.name) + "\n                                ")]) : data.item.bank_account_send.company_account != null ? _c("div", [_vm._v("\n                                    " + _vm._s(data.item.bank_account_send.company_account.name_lr) + "\n                                ")]) : _vm._e()];
      }
    }, {
      key: "cell(country)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.country.name : data.item.bank_account_send.company_account.country.name) + " \n                            ")];
      }
    }, {
      key: "cell(ocupation)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.ocupation.name : data.item.bank_account_send.company_account.ocupation_lr.name) + " \n                            ")];
      }
    }, {
      key: "cell(address)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.address : data.item.bank_account_send.company_account.fiscal_address) + " \n                            ")];
      }
    }, {
      key: "cell(phone)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.cellphone1 : data.item.bank_account_send.company_account.phone) + " \n                            ")];
      }
    }, {
      key: "cell(email)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.user.email : data.item.bank_account_send.company_account.email) + " \n                            ")];
      }
    }, {
      key: "cell(ruc)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? "" : data.item.bank_account_send.company_account.ruc) + " \n                            ")];
      }
    }, {
      key: "cell(business_name)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? "" : data.item.bank_account_send.company_account.business_name) + " \n                            ")];
      }
    }, {
      key: "cell(business_turn)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? "" : data.item.bank_account_send.company_account.business_turn) + " \n                            ")];
      }
    }, {
      key: "cell(ln_father_c)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_send.personal_account != null ? "" : _vm.partLastnames(data.item.bank_account_send.company_account.surname_c)[0]) + " \n                            ")];
      }
    }, {
      key: "cell(ln_mother_c)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_send.personal_account != null ? "" : _vm.partLastnames(data.item.bank_account_send.company_account.surname_c)[1]) + " \n                            ")];
      }
    }, {
      key: "cell(name_c)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_send.personal_account != null ? "" : data.item.bank_account_send.company_account.name_c) + " \n                            ")];
      }
    }, {
      key: "cell(type_doc_c)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_send.personal_account != null ? "" : data.item.bank_account_send.company_account.document_type_c.name) + " \n                            ")];
      }
    }, {
      key: "cell(number_doc_c)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_send.personal_account != null ? "" : data.item.bank_account_send.company_account.document_number_c) + " \n                            ")];
      }
    }, {
      key: "cell(phone_c)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_send.personal_account != null ? "" : data.item.bank_account_send.company_account.phone_c) + " \n                            ")];
      }
    }, {
      key: "cell(found_id)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.fund_origin.name) + "\n                            ")];
      }
    }, {
      key: "cell(from_currency)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_receive.coin_type.name) + " \n                            ")];
      }
    }, {
      key: "cell(amount)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(_vm.$func.numberFormat(data.item.amount.toFixed(2))) + "\n                            ")];
      }
    }, {
      key: "cell(to_currency)",
      fn: function fn(data) {
        return [_vm._v("\n                              " + _vm._s(data.item.bank_account_transfer.coin_type.name) + " \n                            ")];
      }
    }, {
      key: "cell(change_amount)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(_vm.$func.numberFormat(data.item.change_amount.toFixed(2))) + "\n                            ")];
      }
    }, {
      key: "cell(exchange_rate)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(_vm.$func.numberFormat(data.item.exchange_rate.toFixed(3))) + "\n                            ")];
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
  })], 1)])])])])]);
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