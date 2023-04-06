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
      operationDataAlertVariant: "",
      operationDataAlertMessage: "",
      allOperations: [],
      operations: [],
      dateFrom: this.getToday(new Date(), 'yyyy-MM-dd'),
      //'2022-02-01'
      dateTo: this.getToday(new Date(), 'yyyy-MM-dd'),
      selectedOperation: {},
      modalChangeStatusText: "",
      searchId: "",
      // Table variables
      currentPage: 1,
      totalItems: 0,
      perPage: 15,
      fields: [{
        key: 'id_operation',
        label: 'Codigo de la operación',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt(),
        headerTitle: 'prueba'
      }, {
        key: 'created_at',
        label: 'Fecha de la operación',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'name',
        label: 'Nombre completo o Razón Social Cuenta de origen.',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'type_doc',
        label: 'Tipo de Doc',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'number_doc',
        label: 'N° Doc',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'country',
        label: 'Pais',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff',
          borderRight: '2px solid #000000'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'executer_name',
        label: 'Nombre de la persona que realiza la operación',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'executer_document_type',
        label: 'Tipo de documento',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'executer_document_number',
        label: 'Número de documento',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'executer_country',
        label: 'País',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff',
          borderRight: '2px solid #000000'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'benefic_name',
        label: 'Nombre o razón social del titular de la cuenta de destino',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'benefic_document_type',
        label: 'Tipo de documento',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'benefic_document_number',
        label: 'Número de documento',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'benefic_country',
        label: 'País ',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'operation_type',
        label: 'Tipo de operación ',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff',
          borderRight: '2px solid #000000'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'to_currency',
        label: 'A: Moneda',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'amount',
        label: 'De: Monto',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'from_currency',
        label: 'De: Moneda',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'change_amount',
        label: 'A: Monto',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'exchange_rate',
        label: 'Tipo de cambio',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }, {
        key: 'found_id',
        label: 'Oringenes de fondo',
        thStyle: {
          textAlign: 'center',
          width: 'max-content',
          backgroundColor: '#1F4E78',
          color: '#ffffff'
        },
        thAttr: this.getThAtt(),
        tdAttr: this.getTdAtt()
      }] //campos de la tabla sbs
    };
  },
  mounted: function mounted() {},
  methods: {
    getToday: function getToday(fecha, formato) {
      //formato del filtro de fechas.
      var map = {
        dd: fecha.getDate() < 10 ? '0' + fecha.getDate() : fecha.getDate(),
        MM: fecha.getMonth() + 1 < 10 ? '0' + (fecha.getMonth() + 1) : fecha.getMonth() + 1,
        yyyy: fecha.getFullYear()
      };
      return formato.replace(/yyyy|MM|dd/gi, function (matched) {
        return map[matched];
      });
    },
    lastMonth: function lastMonth() {
      var fecha = new Date();
      var formato = 'yyyy-MM-dd';
      var elx = document.getElementById('lastMonth').checked;
      if (elx == true) {
        var map = {
          dd: '01',
          MM: fecha.getMonth() < 10 ? '0' + fecha.getMonth() : fecha.getMonth(),
          yyyy: fecha.getFullYear()
        };
        this.dateFrom = formato.replace(/yyyy|MM|dd/gi, function (matched) {
          return map[matched];
        });
        var lastday = new Date(fecha.getFullYear(), fecha.getMonth(), 0);
        map = {
          dd: lastday.getDate(),
          MM: fecha.getMonth() < 10 ? '0' + fecha.getMonth() : fecha.getMonth(),
          yyyy: fecha.getFullYear()
        };
        this.dateTo = formato.replace(/yyyy|MM|dd/gi, function (matched) {
          return map[matched];
        });
        this.getOperations();
      }
    },
    lastSevenDays: function lastSevenDays() {
      //formato del filtro de fechas.
      var elx = document.getElementById('sevenDays').checked;
      if (elx == true) {
        var neW = Date.now() - 86400000 * 7;
        neW = new Date(neW);
        this.dateTo = this.getToday(new Date(), 'yyyy-MM-dd'), this.dateFrom = this.getToday(neW, 'yyyy-MM-dd');
        this.getOperations();
      }
    },
    lastFifteenDays: function lastFifteenDays() {
      //formato del filtro de fechas.
      var elx = document.getElementById('fifteenDays').checked;
      if (elx == true) {
        var neW = Date.now() - 86400000 * 15;
        neW = new Date(neW);
        this.dateTo = this.getToday(new Date(), 'yyyy-MM-dd'), this.dateFrom = this.getToday(neW, 'yyyy-MM-dd');
        this.getOperations();
      }
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
      this.$store.dispatch(_core_services_store_report_module__WEBPACK_IMPORTED_MODULE_0__["REPORT_SBS_COMPLETE_GET_PAGINATED"], query).then(function (data) {
        if (data.code != 200) {
          _this.showMainAlert('danger', 'Error desconocido al obtener las operaciones.');
          return;
        }
        _this.allOperations = data.data.data;
        _this.operations = _this.allOperations;
        // Table data
        _this.totalItems = data.data.data.total;
        _this.perPage = data.data.data.per_page;
      })["catch"](function (err) {
        _this.showMainAlert('danger', err);
      });
    },
    exportReportToExcel: function exportReportToExcel() {
      var table = document.getElementById('sbs-table'); //selecionamos la tabla

      var row = ''; // cantidad de columnas, estos nos ayudara a determinar cuantas columnas hay y asi asignarle atributos o estilos
      for (var index = 1; index < this.fields.length; index++) {
        row += '30,'; //
      }

      table.setAttribute('data-cols-width', row); // a cada columna le damos anchura de 30 points 

      _linways_table_to_excel__WEBPACK_IMPORTED_MODULE_2___default.a.convert(table, {
        name: "SBS-REPORT.xlsx",
        sheet: {
          name: 'Reporte SBS'
        }
      }); //exportamos el xlsx
    },
    getThAtt: function getThAtt() {
      var attr = {
        'data-f-sz': '12',
        'data-f-bold': true,
        'data-f-color': 'FFFFFF',
        'data-a-h': 'center',
        'data-fill-color': '1F4E78',
        'data-b-a-s': 'solid',
        'data-b-a-c': '000000'
      };
      return attr; // Formato de estilos de las celdas Header 
    },
    getTdAtt: function getTdAtt() {
      var attr = {
        'data-a-h': 'center',
        'data-b-a-c': 'FF0000'
      };
      return attr; // Formato de estilos de las celdas Body
    },
    showMainAlert: function showMainAlert(variant, message) {
      this.mainAlertVariant = variant;
      this.mainAlertMessage = message;
      this.mainAlert = true;
      window.scrollTo(0, 0);
    },
    resetFilterDasy: function resetFilterDasy() {
      this.dateFrom = this.getToday(new Date(), 'yyyy-MM-dd'); //'2022-02-01'
      this.dateTo = this.getToday(new Date(), 'yyyy-MM-dd');
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
    staticClass: "col-lg-6 col-md-6 col-sm-12 d-flex"
  }, [_c("div", {
    staticClass: "form-group mr-3 text-center"
  }, [_c("label", [_vm._v("Fecha desde:")]), _vm._v(" "), _c("div", {}, [_c("input", {
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
      change: function change($event) {
        return _vm.getOperations();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.dateFrom = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mr-3 text-center"
  }, [_c("label", [_vm._v("Fecha hasta:")]), _vm._v(" "), _c("div", {}, [_c("input", {
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
      change: function change($event) {
        return _vm.getOperations();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.dateTo = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mr-3 text-center"
  }, [_c("label", [_vm._v("Buscar por Referencia:")]), _vm._v(" "), _c("div", {
    staticClass: "input-icon"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchId,
      expression: "searchId"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Buscar por codigo de operación"
    },
    domProps: {
      value: _vm.searchId
    },
    on: {
      change: function change($event) {
        return _vm.getOperations();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchId = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm._m(1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("    ")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("a", {
    staticClass: "btn btn-light-primary font-weight-bold cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.exportReportToExcel();
      }
    }
  }, [_vm._v("Descargar en EXCEL")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 d-flex"
  }, [_c("div", {
    staticClass: "col-sm-2 px-0"
  }, [_c("div", {
    staticClass: "form-group text-center d-flex align-items-center"
  }, [_c("div", {
    staticClass: "input-icon mr-2"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "radio",
      id: "sevenDays",
      name: "daysFilter"
    },
    on: {
      click: function click($event) {
        return _vm.lastSevenDays();
      }
    }
  })]), _vm._v(" "), _c("span", [_vm._v("Ultimos 7 dias")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-2 px-0"
  }, [_c("div", {
    staticClass: "form-group text-center d-flex align-items-center"
  }, [_c("div", {
    staticClass: "input-icon mr-2"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "radio",
      id: "fifteenDays",
      name: "daysFilter"
    },
    on: {
      click: function click($event) {
        return _vm.lastFifteenDays();
      }
    }
  })]), _vm._v(" "), _c("span", [_vm._v("Ultimos 15 dias")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-2 px-0"
  }, [_c("div", {
    staticClass: "form-group text-center d-flex align-items-center"
  }, [_c("div", {
    staticClass: "input-icon mr-2"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "radio",
      id: "lastMonth",
      name: "daysFilter"
    },
    on: {
      click: function click($event) {
        return _vm.lastMonth();
      }
    }
  })]), _vm._v(" "), _c("span", [_vm._v("Mes pasado")])])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "row tab-hidden"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12 my-4",
    staticStyle: {
      "max-width": "none",
      width: "auto"
    }
  }, [_c("h2", {
    staticClass: "mb-4"
  }, [_vm._v(" Reporte de operaciones del " + _vm._s(_vm.dateFrom) + " hasta " + _vm._s(_vm.dateTo))]), _vm._v(" "), _c("b-table", {
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
      key: "cell(name)",
      fn: function fn(data) {
        return [data.item.bank_account_send.personal_account != null ? _c("div", [_vm._v("\n                                      " + _vm._s(data.item.bank_account_send.personal_account.name) + " " + _vm._s(data.item.bank_account_send.personal_account.surname) + "\n                                  ")]) : data.item.bank_account_send.company_account != null ? _c("div", [_vm._v("\n                                      " + _vm._s(data.item.bank_account_send.company_account.business_name) + "\n                                  ")]) : _vm._e()];
      }
    }, {
      key: "cell(type_doc)",
      fn: function fn(data) {
        return [_vm._v("\n                                  " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.document_type.name : "RUC") + " \n                              ")];
      }
    }, {
      key: "cell(number_doc)",
      fn: function fn(data) {
        return [_vm._v("\n                                  " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.document_number : data.item.bank_account_send.company_account.ruc) + " \n                              ")];
      }
    }, {
      key: "cell(country)",
      fn: function fn(data) {
        return [_vm._v("\n                                  " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.country.name : data.item.bank_account_send.company_account.country.name) + " \n                              ")];
      }
    }, {
      key: "cell(executer_name)",
      fn: function fn(data) {
        return [_vm._v("\n                                  " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.name + " " + data.item.bank_account_send.personal_account.surname : data.item.bank_account_send.company_account.name_lr + " " + data.item.bank_account_send.company_account.surname_lr) + " \n                              ")];
      }
    }, {
      key: "cell(executer_document_type)",
      fn: function fn(data) {
        return [_vm._v("\n                                  " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.document_type.name : data.item.bank_account_send.company_account.document_type_lr.name) + " \n                              ")];
      }
    }, {
      key: "cell(executer_document_number)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.document_number : data.item.bank_account_send.company_account.document_number_lr) + " \n                              ")];
      }
    }, {
      key: "cell(executer_country)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.country.name : data.item.bank_account_send.company_account.country.name) + " \n                              ")];
      }
    }, {
      key: "cell(benefic_name)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_receive.personal_account != null ? data.item.bank_account_receive.personal_account.name + " " + data.item.bank_account_receive.personal_account.surname : data.item.bank_account_receive.owner_name != null ? data.item.bank_account_receive.owner_name : data.item.bank_account_send.company_account.business_name) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")];
      }
    }, {
      key: "cell(benefic_document_type)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_receive.personal_account != null ? data.item.bank_account_receive.personal_account.document_type.name : data.item.bank_account_receive.owner_document_type != null ? data.item.bank_account_receive.owner_document_type.name : "RUC") + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")];
      }
    }, {
      key: "cell(benefic_document_number)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_receive.personal_account != null ? data.item.bank_account_receive.personal_account.document_number : data.item.bank_account_receive.owner_document_number ? data.item.bank_account_receive.owner_document_number : data.item.bank_account_send.company_account.ruc) + " \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")];
      }
    }, {
      key: "cell(benefic_country)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_receive.personal_account != null ? data.item.bank_account_receive.personal_account.country.name : data.item.bank_account_receive.company_account.country.name) + " \n                              ")];
      }
    }, {
      key: "cell(operation_type)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_send.coin_type.code == "sol" ? "Compra de dolares" : "Venta de dolares") + " \n                              ")];
      }
    }, {
      key: "cell(id_operation)",
      fn: function fn(data) {
        return [_vm._v("\n                                #" + _vm._s(data.item.operation_number != "null" ? data.item.operation_number : data.item.id) + " \n                              ")];
      }
    }, {
      key: "cell(found_id)",
      fn: function fn(data) {
        return [_vm._v("\n                                  " + _vm._s(data.item.fund_origin.name) + "\n                              ")];
      }
    }, {
      key: "cell(from_currency)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_receive.coin_type.name) + " \n                              ")];
      }
    }, {
      key: "cell(amount)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(_vm.$func.numberFormat(data.item.amount.toFixed(2))) + "\n                              ")];
      }
    }, {
      key: "cell(to_currency)",
      fn: function fn(data) {
        return [_vm._v("\n                                " + _vm._s(data.item.bank_account_transfer.coin_type.name) + " \n                              ")];
      }
    }, {
      key: "cell(change_amount)",
      fn: function fn(data) {
        return [_vm._v("\n                                  " + _vm._s(_vm.$func.numberFormat(data.item.change_amount.toFixed(2))) + "\n                              ")];
      }
    }, {
      key: "cell(exchange_rate)",
      fn: function fn(data) {
        return [_vm._v("\n                                  " + _vm._s(_vm.$func.numberFormat(data.item.exchange_rate.toFixed(3))) + "\n                              ")];
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
          staticClass: "my-2"
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