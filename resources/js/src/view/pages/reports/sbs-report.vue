<template>
  <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="card card-custom gutter-b example example-compact">
              <div class="card-header pt-4 pb-2 min-vh-0">
                  <div class="row w-100">
                      <div class="col-lg-4 col-md-12 col-sm-12">
                          <h3 class="pt-4"><strong>Reporte</strong></h3>
                      </div>
                  </div>
              </div>

              <div class="row" v-if="mainAlert">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                      <b-alert :show="mainAlert" dismissible fade :variant="mainAlertVariant" @dismissed="mainAlert=false">{{ mainAlertMessage }}</b-alert>
                  </div>
                  <hr>
              </div>

              <div class="card-body">
                  <div class="row m-2">
                      <div class="col-lg-5 col-md-5 col-sm-12 d-flex">
                          <div class="form-group mr-3 text-center">
                              <label>Fecha desde:</label>
                              <div class="input-icon">
                                  <input type="date" class="form-control" placeholder="Fecha de inicio" v-model="dateFrom">
                                  <span>
                                      <i class="flaticon2-search-1 text-muted"></i>
                                  </span>
                              </div>
                          </div>
                          <div class="form-group mr-3 text-center">
                              <label>Fecha hasta:</label>
                              <div class="input-icon">
                                  <input type="date" class="form-control" placeholder="Fecha de fin" v-model="dateTo">
                                  <span>
                                      <i class="flaticon2-search-1 text-muted"></i>
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-5 col-md-5 col-sm-12">
                          <div class="form-group">
                              <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                              <br>
                              <a class="btn btn-light-primary px-3 font-weight-bold cursor-pointer mr-2" @click="getOperations()">Buscar</a>
                              <a class="btn btn-light-primary px-3 font-weight-bold cursor-pointer mr-2" @click="resetFilters()">Resetear</a>
                              <a class="btn btn-light-primary px-3 font-weight-bold cursor-pointer" @click="exportTableToExcel()">Descargar en EXCEL</a>
                          </div>
                      </div>
                  </div>

                  <hr>

                  <div class="row tab-hidden">
                      <div class="col-lg-12 col-md-12 col-sm-12 text-center" style="max-width: none; width: auto;">
                          <!-- Set per-page to 0 to disable local pagination -->
                          <b-table
                              id="sbs-table"
                              :fields="fields"
                              :items="operations"
                              :per-page="0" 
                              :current-page="currentPage"
                              head-variant="light"
                              table-variant="light"
                              hover
                              show-empty

                              
                          >
                              <!-- user and owner of company data -->
                              <template #cell(departament)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.department.name : data.item.bank_account_send.company_account.department.name }} 
                              </template>
                              <template #cell(province)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.province.name : data.item.bank_account_send.company_account.province.name}} 
                              </template>
                              <template #cell(distrit)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.district.name : data.item.bank_account_send.company_account.district.name}} 
                              </template>
                              <template #cell(type_doc)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.document_type.name : data.item.bank_account_send.company_account.document_type_lr.name}} 
                              </template>
                              <template #cell(number_doc)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.document_number : data.item.bank_account_send.company_account.document_number_lr}} 
                              </template>
                              <template #cell(ln_father)="data">
                                {{ data.item.bank_account_send.personal_account != null ? partLastnames(data.item.bank_account_send.personal_account.surname)[0] : partLastnames(data.item.bank_account_send.company_account.surname_lr)[0] }} 
                              </template>
                              <template #cell(ln_mother)="data">
                                {{ data.item.bank_account_send.personal_account != null ? partLastnames(data.item.bank_account_send.personal_account.surname)[1] : partLastnames(data.item.bank_account_send.company_account.surname_lr)[1]}} 
                              </template>
                              <template #cell(name)="data">
                                  <div v-if="data.item.bank_account_send.personal_account != null">
                                      {{ data.item.bank_account_send.personal_account.name }}
                                  </div>
                                  <div v-else-if="data.item.bank_account_send.company_account != null">
                                      {{ data.item.bank_account_send.company_account.name_lr }}
                                  </div>
                              </template>
                              <template #cell(country)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.country.name : data.item.bank_account_send.company_account.country.name}} 
                              </template>
                              <template #cell(ocupation)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.ocupation.name : data.item.bank_account_send.company_account.ocupation_lr.name}} 
                              </template>
                              <template #cell(address)="data">
                                {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.address : data.item.bank_account_send.company_account.fiscal_address}} 
                              </template>
                              <template #cell(phone)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.cellphone1 : data.item.bank_account_send.company_account.phone}} 
                              </template>
                              <template #cell(email)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? data.item.bank_account_send.personal_account.user.email : data.item.bank_account_send.company_account.email}} 
                              </template>
                              <!-- Company data -->
                              <template #cell(ruc)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? '': data.item.bank_account_send.company_account.ruc}} 
                              </template>
                              <template #cell(business_name)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? '': data.item.bank_account_send.company_account.business_name}} 
                              </template>
                              <template #cell(business_turn)="data">
                                  {{ data.item.bank_account_send.personal_account != null ? '': data.item.bank_account_send.company_account.business_turn}} 
                              </template>
                              <template #cell(ln_father_c)="data">
                                {{ data.item.bank_account_send.personal_account != null ? '' : partLastnames(data.item.bank_account_send.company_account.surname_c)[0] }} 
                              </template>
                              <template #cell(ln_mother_c)="data">
                                {{ data.item.bank_account_send.personal_account != null ? '' : partLastnames(data.item.bank_account_send.company_account.surname_c)[1]}} 
                              </template>
                              <template #cell(name_c)="data">
                                {{ data.item.bank_account_send.personal_account != null ? '' : data.item.bank_account_send.company_account.name_c}} 
                              </template>
                              <template #cell(type_doc_c)="data">
                                {{ data.item.bank_account_send.personal_account != null ? '' : data.item.bank_account_send.company_account.document_type_c.name}} 
                              </template>
                              <template #cell(number_doc_c)="data">
                                {{ data.item.bank_account_send.personal_account != null ? '' : data.item.bank_account_send.company_account.document_number_c}} 
                              </template>
                              <template #cell(phone_c)="data">
                                {{ data.item.bank_account_send.personal_account != null ? '' : data.item.bank_account_send.company_account.phone_c}} 
                              </template>
                              <!-- operation data -->
                              <template #cell(found_id)="data">
                                  {{  data.item.fund_origin.name }}
                              </template>
                              <template #cell(from_currency)="data">
                                {{ data.item.bank_account_receive.coin_type.name }} 
                              </template>
                              <template #cell(amount)="data">
                                {{ $func.numberFormat(data.item.amount.toFixed(2)) }}
                              </template>
                              <template #cell(to_currency)="data">
                                {{ data.item.bank_account_transfer.coin_type.name }} 
                              </template>
                              <template #cell(change_amount)="data">
                                  {{ $func.numberFormat(data.item.change_amount.toFixed(2)) }}
                              </template>
                              <template #cell(exchange_rate)="data">
                                  {{ $func.numberFormat(data.item.exchange_rate.toFixed(3)) }}
                              </template>
                              <template #empty="">
                                  <div role="alert" aria-live="polite"><div class="text-center my-2">No se encontraron resultados.</div></div>
                              </template>
                          </b-table>
                      </div>

                      <div class="col-lg-12 col-md-12 col-sm-12">
                          <b-pagination
                              v-model="currentPage"
                              :total-rows="totalItems"
                              :per-page="perPage"
                              aria-controls="my-table"
                          ></b-pagination>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import { REPORT_SBS_COMPLETE_GET_PAGINATED } from "@/core/services/store/report.module";
  import exportFromJSON from "export-from-json"
  import TableToExcel from "@linways/table-to-excel";

  export default {
      data() {
          return {
              mainAlert: false,
              mainAlertVariant: "",
              mainAlertMessage: "",
              operationDataAlert: false,
              operationDataAlertVariant: '',
              operationDataAlertMessage: '',
              allOperations: [],
              operations: [],
              dateFrom: this.getToday(new Date,'yyyy-MM-dd'),
              dateTo: this.getToday(new Date,'yyyy-MM-dd'),
              selectedOperation: {},
              modalChangeStatusText: "",
              // Table variables
              currentPage: 1,
              totalItems : 0,
              perPage: 15,
              fields: [
                  {
                      key: 'created_at',
                      label: 'Fecha de la opereacion',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'departament',
                      label: 'Departamento',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'province',
                      label: 'Provincia',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'distrit',
                      label: 'Distrito',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'type_doc',
                      label: 'Tipo de Doc',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'number_doc',
                      label: 'N° Doc',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'ln_father',
                      label: 'Ap Paterno',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'ln_mother',
                      label: 'Ap Materno',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  
                  {
                      key: 'name',
                      label: 'Nombres',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'country',
                      label: 'Pais',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'ocupation',
                      label: 'Ocupación',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'address',
                      label: 'Dirección',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'phone',
                      label: 'Telefono',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'email',
                      label: 'Correo electronico',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'ruc',
                      label: 'RUC',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'business_name',
                      label: 'Razon social',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'business_turn',
                      label: 'Giro de negocio',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'ln_father_c',
                      label: 'Ap Paterno de Contacto',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'ln_mother_c',
                      label: 'Ap Materno de Contacto',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'name_c',
                      label: 'Nombres de Contacto',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'type_doc_c',
                      label: 'Tipo de Doc. de Contacto',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'number_doc_c',
                      label: 'N° Doc. de Contacto ',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'phone_c',
                      label: 'Telefono de Contacto ',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'found_id',
                      label: 'Oringenes de fondo',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  
                  {
                      key: 'to_currency',
                      label: 'A: Moneda',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'amount',
                      label: 'De: Monto',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'from_currency',
                      label: 'De: Moneda',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'change_amount',
                      label: 'A: Monto',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'exchange_rate',
                      label: 'Tipo de cambio',
                      thStyle:{ textAlign: 'center', width: '200px', backgroundColor: '#1F4E78'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
              ],
          }
      },
      mounted() {
        
      },
      methods: {
          getToday(fecha, formato){
            const map = {
              dd: fecha.getDate() < '10' ? '0' + fecha.getDate() : fecha.getDate()  ,
              MM: (fecha.getMonth() + 1) < 10 ? '0' + (fecha.getMonth() + 1): '0' + (fecha.getMonth() + 1) ,
              yyyy: fecha.getFullYear()
            }
            return formato.replace(/yyyy|MM|dd/gi, matched => map[matched])
          },
          getOperations () {
              let query = '?';
              let queryParams = ['page=' + this.currentPage];
              queryParams.push('dateFrom=' + this.dateFrom);
              queryParams.push('dateTo=' + this.dateTo);

              for (let i = 0; i < queryParams.length; i++) {
                  if (i != 0) {
                      query += '&';
                  }
                  query += queryParams[i];
              }
              console.log(query)
              this.$store
                  .dispatch(REPORT_SBS_COMPLETE_GET_PAGINATED, query)
                  .then((data) => {
                      if (data.code != 200){
                          this.showMainAlert('danger', 'Error desconocido al obtener las operaciones.')
                          return;
                      }
                      this.allOperations = data.data.data;
                      this.operations = this.allOperations;
                      console.log(data)
                      // Table data
                      this.totalItems = data.data.data.total;
                      this.perPage = data.data.data.per_page
                  })
                  .catch((err) => {
                      this.showMainAlert('danger', err)
                  });
          },
          downloadXls(){
            const table = [];
            console.log(this.operations)
            this.operations.map( (operation) => {
              console.log(operation)
              table.push({
                'Fecha de solicitud': operation.created_at , 
                'Fecha de operación':operation.updated_at, 
                'Departamento':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.department.name : operation.bank_account_send.company_account.department.name, 
                'Provincia':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.province.name : operation.bank_account_send.company_account.province.name, 
                'Distrito':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.district.name : operation.bank_account_send.company_account.district.name, 
                'Tipo de Doc':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.document_type.name : operation.bank_account_send.company_account.document_type_lr.name, 
                'N° Doc':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.document_number : operation.bank_account_send.company_account.document_number_lr, 
                'Ap Paterno':operation.bank_account_send.personal_account != null ? this.partLastnames(operation.bank_account_send.personal_account.surname)[0] : this.partLastnames(operation.bank_account_send.company_account.surname_lr)[0], 
                'Ap Materno':operation.bank_account_send.personal_account != null ? this.partLastnames(operation.bank_account_send.personal_account.surname)[1] : this.partLastnames(operation.bank_account_send.company_account.surname_lr)[1], 
                'Nombres':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.name : operation.bank_account_send.company_account.name_lr, 
                'Pais':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.country.name : operation.bank_account_send.company_account.country.name, 
                'Ocupación':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.ocupation.name : operation.bank_account_send.company_account.ocupation_lr.name, 
                'Dirección':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.address : operation.bank_account_send.company_account.fiscal_address, 
                'Telefono':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.cellphone1 : operation.bank_account_send.company_account.phone, 
                'Correo electronico':operation.bank_account_send.personal_account != null ? operation.bank_account_send.personal_account.user.email : operation.bank_account_send.company_account.email, 
                'RUC':operation.bank_account_send.personal_account != null ? '': operation.bank_account_send.company_account.ruc, 
                'Razon social':operation.bank_account_send.personal_account != null ? '': operation.bank_account_send.company_account.business_name, 
                'Giro de negocio':operation.bank_account_send.personal_account != null ? '': operation.bank_account_send.company_account.business_turn, 
                'Ap Paterno de Contacto':operation.bank_account_send.personal_account != null ? '' : this.partLastnames(operation.bank_account_send.company_account.surname_c)[0], 
                'Ap Materno de Contacto':operation.bank_account_send.personal_account != null ? '' : this.partLastnames(operation.bank_account_send.company_account.surname_c)[1], 
                'Nombres de Contacto':operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.name_c, 
                'Tipo de Doc. de Contacto':operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.document_type_c.name, 
                'N° Doc. de Contacto':operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.document_number_c, 
                'Telefono de Contacto':operation.bank_account_send.personal_account != null ? '' : operation.bank_account_send.company_account.phone_c, 
                'Oringenes de fondo':operation.fund_origin.name, 
                'A: Moneda':operation.bank_account_receive.coin_type.name, 
                'De: Monto':this.$func.numberFormat(operation.amount.toFixed(2)), 
                'De: Moneda':operation.bank_account_transfer.coin_type.name, 
                'A: Monto':this.$func.numberFormat(operation.change_amount.toFixed(2)), 
                'Tipo de cambio':this.$func.numberFormat(operation.exchange_rate.toFixed(3)), 
              })
            })
            exportFromJSON({ data: table, fileName: 'SBS-REPORT', exportType: exportFromJSON.types.csv, withBOM:true })
          },
          exportReportToExcel() {
            let table = document.getElementById('sbs-table');
            let row = 0;
            this.opertaions.map(()=>{
              return row +1;
            })
            console.log(row)
            
            // table.setAttribute('data-cols-width', '30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30')
            // TableToExcel.convert(table, {
            //   name: `SBS-REPORT.xlsx`,
            //   sheet: {
            //     name: 'Sheet 1'
            //   }
            // });
          },
          exportTableToExcel(tableID){
            var downloadLink;
            var dataType = 'application/vnd.ms-excel;charset=utf-8';
            var tableSelect = document.getElementById(tableID);
            var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
            // Specify file name
            let filename = 'SBS-REPORT.xls';
            
            // Create download link element
            downloadLink = document.createElement("a");
            
            document.body.appendChild(downloadLink);
            
            if(navigator.msSaveOrOpenBlob){
                var blob = new Blob(['ufeff', tableHTML], {
                    type: dataType
                });
                navigator.msSaveOrOpenBlob( blob, filename);
            }else{
                // Create a link to the file
                downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
            
                // Setting the file name
                downloadLink.download = filename;
                
                //triggering the function
                downloadLink.click();
            }
          },
          partLastnames(op){
            return op.split(' ');
            
          },

          resetOperationAccion() {
              this.selectedOperationToChangeStatus = {};
          },

          setSelectedOperation(operationId) {
              this.selectedOperation = Object.assign({}, this.allOperations.find(operation => operation.id == operationId));
          },

          resetSelectedOperation(){
              this.selectedOperation = {};
          },

          resetOperationDataAlert(){
              this.operationDataAlertVariant = '';
              this.