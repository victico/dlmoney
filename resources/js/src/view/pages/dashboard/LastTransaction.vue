<template>
  <div class="col-lg-12 mb-12 mb-lg-0">
      <div class="card h-100">
        <div class="card-header d-flex justify-content-between">
          <h5 class="card-title m-0 me-2">Operaciones realizadas</h5>
          <div class="dropdown">
            <button
              class="btn p-0"
              type="button"
              id="teamMemberList"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="ti ti-dots-vertical ti-sm text-muted"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="teamMemberList">
              <a class="dropdown-item" href="javascript:void(0);">Descargar</a>
              <a class="dropdown-item" href="javascript:void(0);">Refrescar</a>
              
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-borderless border-top">
            <thead class="border-bottom">
              <tr>
                <th>BANCO</th>
                <th>FECHA</th>
                <th>ESTADO</th>
                <th>MONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex justify-content-start align-items-center">
                    <div class="me-3">
                      <img src="media/icons/payments/bcp.png" alt="Visa" height="30" />
                    </div>
                    <div class="d-flex flex-column">
                      <p class="mb-0 fw-semibold">*4230</p>
                      <small class="text-muted">Ahorro</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex flex-column">
                    <p class="mb-0 fw-semibold">Enviado</p>
                    <small class="text-muted text-nowrap">17 Mar 2022</small>
                  </div>
                </td>
                <td><span class="badge bg-label-success">Completado</span></td>
                <td>
                  <p class="mb-0 fw-semibold">$1,678</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex justify-content-start align-items-center">
                    <div class="me-3">
                      <img
                        src="media/icons/payments/interbank.png"
                        alt="Visa"
                        height="30"
                      />
                    </div>
                    <div class="d-flex flex-column">
                      <p class="mb-0 fw-semibold">*5578</p>
                      <small class="text-muted">Corriente</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex flex-column">
                    <p class="mb-0 fw-semibold">Enviado</p>
                    <small class="text-muted text-nowrap">12 Feb 2022</small>
                  </div>
                </td>
                <td><span class="badge bg-label-danger">Cancelado</span></td>
                <td>
                  <p class="mb-0 fw-semibold">S/839</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex justify-content-start align-items-center">
                    <div class="me-3">
                      <img
                        src="media/icons/payments/pichincha.png"
                        alt="Visa"
                        height="30"
                      />
                    </div>
                    <div class="d-flex flex-column">
                      <p class="mb-0 fw-semibold">*4567</p>
                      <small class="text-muted">Corriente</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex flex-column">
                    <p class="mb-0 fw-semibold">Enviado</p>
                    <small class="text-muted text-nowrap">28 Feb 2022</small>
                  </div>
                </td>
                <td><span class="badge bg-label-success">Completado</span></td>
                <td>
                  <p class="mb-0 fw-semibold">S/435</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex justify-content-start align-items-center">
                    <div class="me-3">
                      <img src="media/icons/payments/bbva.png" alt="Visa" height="30" />
                    </div>
                    <div class="d-flex flex-column">
                      <p class="mb-0 fw-semibold">*5699</p>
                      <small class="text-muted">Ahorro</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex flex-column">
                    <p class="mb-0 fw-semibold">Enviado</p>
                    <small class="text-muted text-nowrap">8 Ene 2022</small>
                  </div>
                </td>
                <td><span class="badge bg-label-secondary">Pendiente</span></td>
                <td>
                  <p class="mb-0 fw-semibold">$2,345</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex justify-content-start align-items-center">
                    <div class="me-3">
                      <img src="media/icons/payments/banbif.png" alt="Visa" height="30" />
                    </div>
                    <div class="d-flex flex-column">
                      <p class="mb-0 fw-semibold">*5699</p>
                      <small class="text-muted">Ahorro</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex flex-column">
                    <p class="mb-0 fw-semibold">Enviado</p>
                    <small class="text-muted text-nowrap">8 Ene 2022</small>
                  </div>
                </td>
                <td><span class="badge bg-label-danger">Cancelado

                </span></td>
                <td>
                  <p class="mb-0 fw-semibold">S/234</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  import ApiService from "@/core/services/api.service";
  import { OPERATIONS_GET_LAST_FIVE } from "@/core/services/store/operation.module";
  export default {
    name: "lastTransaction",
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
        currentAccountid: ''
      }
    },
    mounted() {
     
    },
    methods: {
      getOperations () {
        let query = '?page=' + this.currentPage;
        setTimeout(()=>{
            this.$store
            .dispatch(OPERATIONS_GET_LAST_FIVE, query)
            .then((data) => {
              console.log(data)

                if (data.code != 200){
                    // this.showMainAlert('danger', 'Error desconocido al obtener las operaciones.')
                    return;
                }

            })
            .catch((err) => {
                // this.showMainAlert('danger', err)
                console.log(err)
            });
        },600)
                
      },
    },
    computed: {
      ...mapGetters(["currentAccount"]),

      getCurrentAccount() {
        this.currentAccountid = this.currentAccount.id
        return this.currentAccount;
      }
    },
    created(){
      this.getOperations();
    }
  };
</script>