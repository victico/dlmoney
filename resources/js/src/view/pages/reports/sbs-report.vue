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
                              <!-- <a class="btn btn-light-primary px-3 font-weight-bold cursor-pointer mr-2" @click="resetFilters()">Resetear</a> -->
                              <a class="btn btn-light-primary px-3 font-weight-bold cursor-pointer" @click="exportReportToExcel()">Descargar en EXCEL</a>
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
                              <template #cell(name)="data">
                                  <div v-if="data.item.bank_account_send.personal_account != null">
                                      {{ data.item.bank_account_send.personal_account.name }} {{ data.item.bank_account_send.personal_account.surname }}
                                  </div>
                                  <div v-else-if="data.item.bank_account_send.company_account != null">
                                      {{ data.item.bank_account_send.company_account.business_name }}
                                  </div>
                              </template>
                              <template #cell(type_doc)="data">
                                  {{ 
																		data.item.bank_account_send.personal_account != null ? 
																		data.item.bank_account_send.personal_account.document_type.name : 
																		'RUC'
																	}} 
                              </template>
                              <template #cell(number_doc)="data">
                                  {{ 
																		data.item.bank_account_send.personal_account != null ? 
																		data.item.bank_account_send.personal_account.document_number : 
																		data.item.bank_account_send.company_account.ruc
																	}} 
                              </template>
                              <template #cell(country)="data">
                                  {{ 
																		data.item.bank_account_send.personal_account != null ? 
																		data.item.bank_account_send.personal_account.country.name : 
																		data.item.bank_account_send.company_account.country.name
																	}} 
                              </template>
                              <!-- Company data -->
                              <template #cell(executer_name)="data">
                                  {{ 
                                    data.item.bank_account_send.personal_account != null ? 
                                    data.item.bank_account_send.personal_account.name +' '+data.item.bank_account_send.personal_account.surname : 
                                    data.item.bank_account_send.company_account.name_lr +' '+ data.item.bank_account_send.company_account.surname_lr
                                  }} 
                              </template>
                              <template #cell(executer_document_type)="data">
                                  {{ 
																		data.item.bank_account_send.personal_account != null ?
                                  	data.item.bank_account_send.personal_account.document_type.name : 
                                  	data.item.bank_account_send.company_account.document_type_lr.name
																	}} 
                              </template>
                              <template #cell(executer_document_number)="data">
                                {{ 
                                  data.item.bank_account_send.personal_account != null ? 
                                  data.item.bank_account_send.personal_account.document_number : 
                                  data.item.bank_account_send.company_account.document_number_lr
                                }} 
                              </template>
                              <template #cell(executer_country)="data">
                                {{ 	
                                	data.item.bank_account_send.personal_account != null ? 
                                	data.item.bank_account_send.personal_account.country.name : 
                                	data.item.bank_account_send.company_account.country.name 
																}} 
                              </template>
                              <template #cell(benefic_name)="data">
                                {{ 
                                  data.item.bank_account_receive.personal_account != null ? 
                                  data.item.bank_account_receive.personal_account.name +' '+data.item.bank_account_receive.personal_account.surname :
                                  data.item.bank_account_receive.owner_name != null ? data.item.bank_account_receive.owner_name :
                                  data.item.bank_account_send.company_account.business_name
                                }}
																<!-- data.item.bank_account_receive.company_account.name_lr +' '+ data.item.bank_account_receive.company_account.surname_lr -->
                              </template>
                              <template #cell(benefic_document_type)="data">
                                {{ 
                                  data.item.bank_account_receive.personal_account != null ? 
                                  data.item.bank_account_receive.personal_account.document_type.name :
                                  data.item.bank_account_receive.owner_document_type != null ?
                                  data.item.bank_account_receive.owner_document_type.name :
                                  'RUC'		
                                }}
																<!-- data.item.bank_account_receive.company_account.document_type_lr.name -->
                              </template>
                              <template #cell(benefic_document_number)="data">
                                {{
																	data.item.bank_account_receive.personal_account != null ? 
																	data.item.bank_account_receive.personal_account.document_number :
                                  data.item.bank_account_receive.owner_document_number ?
                                  data.item.bank_account_receive.owner_document_number :
                                  data.item.bank_account_send.company_account.ruc
																}} 
																<!-- data.item.bank_account_receive.company_account.document_number_lr  analizar cual es mejor -->
                              </template>
                              <template #cell(benefic_country)="data">
                                {{ 
																	data.item.bank_account_receive.personal_account != null ?  
																	data.item.bank_account_receive.personal_account.country.name : 
																	data.item.bank_account_receive.company_account.country.name
																}} 
                              </template>
                              
                              <!-- operation data -->
                              <template #cell(operation_type)="data">
                                {{ 
																	data.item.bank_account_send.coin_type.code == 'sol' ? 
																	'Compra de dolares' : 'Venta de dolares'  
																}} 
                              </template>
                              <template #cell(id_operation)="data">
                                #{{data.item.operation_number != "null" ? data.item.operation_number : data.item.id }} 
                              </template>
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
              dateFrom: '2022-02-01',
              dateTo: this.getToday(new Date,'yyyy-MM-dd'),
              selectedOperation: {},
              modalChangeStatusText: "",
              // Table variables
              currentPage: 1,
              totalItems : 0,
              perPage: 15,
              fields: [
                  {
                      key: 'id_operation',
                      label: 'Codigo de la operación',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'created_at',
                      label: 'Fecha de la operación',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'name',
                      label: 'Nombre completo o Razón Social Cuenta de origen.',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'type_doc',
                      label: 'Tipo de Doc',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'number_doc',
                      label: 'N° Doc',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },

                  {
                      key: 'country',
                      label: 'Pais',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',borderRight:'2px solid #000000'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'executer_name',
                      label: 'Nombre de la persona que realiza la operación',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'executer_document_type',
                      label: 'Tipo de documento',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'executer_document_number',
                      label: 'Número de documento',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'executer_country',
                      label: 'País',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff', borderRight:'2px solid #000000'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'benefic_name',
                      label: 'Nombre o razón social del titular de la cuenta de destino',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'benefic_document_type',
                      label: 'Tipo de documento',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'benefic_document_number',
                      label: 'Número de documento',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'benefic_country',
                      label: 'País ',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'operation_type',
                      label: 'Tipo de operación ',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff', borderRight:'2px solid #000000'},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  
                  {
                      key: 'to_currency',
                      label: 'A: Moneda',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'amount',
                      label: 'De: Monto',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'from_currency',
                      label: 'De: Moneda',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'change_amount',
                      label: 'A: Monto',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'exchange_rate',
                      label: 'Tipo de cambio',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
                  {
                      key: 'found_id',
                      label: 'Oringenes de fondo',
                      thStyle:{ textAlign: 'center', width: 'max-content', backgroundColor: '#1F4E78', color:'#ffffff',},
                      thAttr:this.getThAtt(),
                      tdAttr:this.getTdAtt()
                  },
              ], //campos de la tabla sbs
          }
      },
      mounted() {
        
      },
      methods: {
          getToday(fecha, formato){
            //formato del filtro de fechas.
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
                      console.log(this.operations)
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
            let table = document.getElementById('sbs-table'); //selecionamos la tabla
            
            let row = ''; // cantidad de columnas, estos nos ayudara a determinar cuantas columnas hay y asi asignarle atributos o estilos
            for (let index = 1; index < this.fields.length; index++) {
              row += '30,' //
            }
            table.setAttribute('data-cols-width', row)  // a cada columna le damos anchura de 30 points 

            TableToExcel.convert(table, {
              name: `SBS-REPORT.xlsx`,
              sheet: {
                name: 'Reporte SBS'
              }
            }); //exportamos el xlsx
          },
          getThAtt(){
            let attr = {
              'data-f-sz':'12',
              'data-f-bold':true, 
              'data-f-color':'FFFFFF',
              'data-a-h':'center',
              'data-fill-color':'1F4E78',
              'data-b-a-s':'solid',
              'data-b-a-c':'000000'
            }
            return attr
          },
          getTdAtt(){
            let attr = {
              'data-a-h':'center',
              'data-b-a-c':'FF0000'
            }
            return attr
          },
          showMainAlert(variant, message) {
              this.mainAlertVariant = variant;
              this.mainAlertMessage = message;
              this.mainAlert = true;
              window.scrollTo(0,0);
          },
      },
      watch: {
          currentPage: {
              handler: function() {
                  this.getOperations();
              }
          }
      },
      computed: {

      },
      created() {
          this.getOperations();
      },
  };
</script>
