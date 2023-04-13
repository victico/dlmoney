<template>
  <!-- begin:: Header -->
  <div>
    <nav
      class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme "
      id="kt_header" ref="kt_header" 
      :style="{ backgroundImage: `url('media/backgrounds/bg-blanco.jpg')` }"
      
    >
      <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i class="ti ti-menu-2 ti-sm"></i>
        </a>
      </div>

      <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                <!-- Search -->
        <div class="navbar-nav align-items-center">
          <div class="nav-item navbar-search-wrapper mb-0">
  
              <span class="d-none d-md-inline-block text-muted">Abiertos 9:00AM a 7:00PM</span>
                    
          </div>
        </div>
          <!-- /Search -->

        <ul class="navbar-nav flex-row align-items-center ms-auto">
            <!-- Quick links  -->
          <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
              <a
                class="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <i class="ti ti-layout-grid-add ti-md"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-end py-0">
                <div class="dropdown-menu-header border-bottom">
                  <div class="dropdown-header d-flex align-items-center py-3">
                    <h5 class="text-body mb-0 me-auto">Link Directos</h5>
                    <a
                      href="javascript:void(0)"
                      class="dropdown-shortcuts-add text-body"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add shortcuts"
                      ><i class="ti ti-sm ti-apps"></i
                    ></a>
                  </div>
                </div>
                <div class="dropdown-shortcuts-list scrollable-container">
                  <div class="row row-bordered overflow-visible g-0">
                    <div class="dropdown-shortcuts-item col">
                      <span class="dropdown-shortcuts-icon rounded-circle mb-2">
                        <i class="ti ti-calendar fs-4"></i>
                      </span>
                      <a href="app-calendar.html" class="stretched-link">Calendar</a>
                      <small class="text-muted mb-0">Appointments</small>
                    </div>
                    <div class="dropdown-shortcuts-item col">
                      <span class="dropdown-shortcuts-icon rounded-circle mb-2">
                        <i class="ti ti-file-invoice fs-4"></i>
                      </span>
                      <a href="app-invoice-list.html" class="stretched-link">Invoice App</a>
                      <small class="text-muted mb-0">Manage Accounts</small>
                    </div>
                  </div>
                  <div class="row row-bordered overflow-visible g-0">
                    <div class="dropdown-shortcuts-item col">
                      <span class="dropdown-shortcuts-icon rounded-circle mb-2">
                        <i class="ti ti-users fs-4"></i>
                      </span>
                      <a href="app-user-list.html" class="stretched-link">User App</a>
                      <small class="text-muted mb-0">Manage Users</small>
                    </div>
                    <div class="dropdown-shortcuts-item col">
                      <span class="dropdown-shortcuts-icon rounded-circle mb-2">
                        <i class="ti ti-lock fs-4"></i>
                      </span>
                      <a href="app-access-roles.html" class="stretched-link">Role Management</a>
                      <small class="text-muted mb-0">Permission</small>
                    </div>
                  </div>
                  <div class="row row-bordered overflow-visible g-0">
                    <div class="dropdown-shortcuts-item col">
                      <span class="dropdown-shortcuts-icon rounded-circle mb-2">
                        <i class="ti ti-chart-bar fs-4"></i>
                      </span>
                      <a href="index.html" class="stretched-link">Dashboard</a>
                      <small class="text-muted mb-0">User Profile</small>
                    </div>
                    <div class="dropdown-shortcuts-item col">
                      <span class="dropdown-shortcuts-icon rounded-circle mb-2">
                        <i class="ti ti-settings fs-4"></i>
                      </span>
                      <a href="pages-account-settings-account.html" class="stretched-link">Setting</a>
                      <small class="text-muted mb-0">Account Settings</small>
                    </div>
                  </div>
                  <div class="row row-bordered overflow-visible g-0">
                    <div class="dropdown-shortcuts-item col">
                      <span class="dropdown-shortcuts-icon rounded-circle mb-2">
                        <i class="ti ti-help fs-4"></i>
                      </span>
                      <a href="pages-help-center-landing.html" class="stretched-link">Help Center</a>
                      <small class="text-muted mb-0">FAQs & Articles</small>
                    </div>
                    <div class="dropdown-shortcuts-item col">
                      <span class="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i class="ti ti-square fs-4"></i>
                      </span>
                      <a href="modal-examples.html" class="stretched-link">Modals</a>
                      <small class="text-muted mb-0">Useful Popups</small>
                    </div>
                  </div>
                </div>
              </div>
          </li>
            <!-- Quick links -->
            <!-- User -->
          <li class="nav-item navbar-dropdown dropdown-user dropdown">
              <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                <div v-if="currentAccount.label.length > 1" class="avatar avatar-online">
                 {{ currentAccount.label.charAt(0) }}
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="perfil.html">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar avatar-online">
                          <img src="media/avatars/1.png" alt class="h-auto rounded-circle" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <span class="fw-semibold d-block">{{ activeAccountType == 1 ? currentAccount.business_name : currentAccount.fullName }}</span>
                        <small class="text-muted">{{ activeAccountType == 1 ? 'Empresa' : 'Persona Natural'}}</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div class="dropdown-divider"></div>
                </li>
                <li class="text-center">
                  <span class="fw-bold"> Cuentas personales</span>
                </li>
                <template v-for="account in personalAccounts">
                  <li>
                    <a class="dropdown-item" href="" @click="changeActiveAccount($event, account.id, 0)">
                      <i class="ti me-2 ti-sm" :class="{ 'ti-user-check': activeAccountType == 0 && account.id == activeAccountId, 'ti-user': !(activeAccountType == 0 && account.id == activeAccountId)}"></i>
                      <span class="align-middle" :class="{ 'active': activeAccountType == 0 && account.id == activeAccountId}">{{ account.name }} {{ account.surname }}</span>
                    </a>
                  </li>
                </template>
                <li>
                  <div class="dropdown-divider"></div>
                </li>
                <li class="text-center" >
                  <span class="fw-bold">Cuentas de Empresas</span>
                </li>
                <template v-for="account in companyAccounts">
                  <li>
                    <a class="dropdown-item" href="" @click="changeActiveAccount($event, account.id, 1)">
                      <i class="ti me-2 ti-sm" :class="{ 'ti-user-check': activeAccountType == 1 && account.id == activeAccountId, 'ti-user': !(activeAccountType == 1 && account.id == activeAccountId)}"></i>
                      <span class="align-middle" :class="{ 'active': activeAccountType == 1 && account.id == activeAccountId}" >{{ account.business_name }}</span>
                    </a>
                  </li>
                </template>
                <li>
                  <div class="dropdown-divider"></div>
                </li>
                <li>
                  <a class="dropdown-item" href="" @click="onLogout">
                    <i class="ti ti-logout me-2 ti-sm"></i>
                    <span class="align-middle">Salir</span>
                  </a>
                </li>
              </ul>
          </li>
            <!--/ User -->
        </ul>
      </div>
      <!-- Search Small Screens -->
    </nav>
    <div class="row" v-if="mainAlert">
      <div class="col-lg-12 col-md-12 col-sm-12 px-4 mt-2">
        <b-alert class=" " :show="mainAlert" dismissible fade :variant="mainAlertVariant" @dismissed="mainAlert=false">{{ mainAlertMessage }}{{ redirectMessage == '' ? '' : redirectMessage + redirectMessageSeconds + ' segundos.' }}</b-alert>
      </div>
      <hr>
    </div>
  </div>


  <!-- end:: Header -->
</template>

<script>
import { mapGetters } from "vuex";
import KTTopbar from "@/view/layout/header/Topbar.vue";
import KTLayoutHeader from "@/assets/js/layout/base/header.js";
import { ACCOUNTS_GET_ALL, SET_ACTIVE_ACCOUNT} from "@/core/services/store/account.module";
import { LOGOUT } from "@/core/services/store/auth.module";

export default {
  name: "KTHeader",
  components: {
    KTTopbar,
    KTMenu
  },
  data(){
    return{
      personalAccounts: [],
      companyAccounts: [],
      currentAccount: {label:'O'},
      activeAccountType: null,
      activeAccountId: null,
      mainAlert: false,
      mainAlertVariant: "",
      mainAlertMessage: "",
      redirectMessageSeconds: 3,
      redirectMessage: '',
    }
  },
  methods:{
    getAllAccounts () {
      this.$store
          .dispatch(ACCOUNTS_GET_ALL)
          .then((data) => {
              if (data.code != 200){
                  this.showMainAlert('danger', 'Error desconocido al obtener todos los perfiles.')
                  return;
              }

              this.personalAccounts = data.data.personalAccounts;
              for (let i = 0; i < this.personalAccounts.length; i++) {
                  let label = this.personalAccounts[i].name + ' ' + this.personalAccounts[i].surname;
                  let matches = label.match(/\b(\w)/g); // ['J','S','O','N']
                  this.personalAccounts[i].label = matches.join('.'); // J.S.O.N
              }

              this.companyAccounts = data.data.companyAccounts;
              for (let i = 0; i < this.companyAccounts.length; i++) {
                  let label = this.companyAccounts[i].business_name;
                  let matches = label.match(/\b(\w)/g); // ['J','S','O','N']
                   this.companyAccounts[i].label = matches.join('.'); // J.S.O.N
              }
              this.activeAccountType = data.data.activeAccountType;
              this.activeAccountId = data.data.activeAccountId;
              this.getCurrentAccount()
          })
          .catch((err) => {
              this.showMainAlert('danger', err)
          });
    },
    getCurrentAccount(){
      if(this.activeAccountType == 1){
        this.companyAccounts.map((item) => {
          if(item.id == this.activeAccountId){
            this.currentAccount = item;

          }
        })
      }else{
        this.personalAccounts.map((item) => {
          if(item.id == this.activeAccountId){
            this.currentAccount = item;
            this.currentAccount.fullName = `${item.name} ${item.surname}`
          }
        })
      }
      this.currentAccount.type = this.activeAccountType;
      this.$store.currentAccount = this.currentAccount;
    },
    changeActiveAccount (e, id, type) {
                e.preventDefault();

                let data = {
                    active_account_type: type,
                    active_account: id
                };

                this.$store
                    .dispatch(SET_ACTIVE_ACCOUNT, data)
                    .then((data) => {
                        if (data.code != 200){
                            this.showMainAlert('danger', 'Error desconocido al cambiar la cuenta activa.')
                            return;
                        }

                        // close modal
                        this.showMainAlert('success', 'Perfil activo cambiado correctamente!')
                        this.redirectTimer(' . Recargando página en: ');
                    })
                    .catch((err) => {
                        this.showMainAlert('danger', err)
                    });
    },
    
    showSavedAlert(variant, message) {
      this.savedAlertVariant = variant;
      this.savedAlertMessage = message;
      this.savedAlert = true;
    },


    showMainAlert(variant, message) {
      this.mainAlertVariant = variant;
      this.mainAlertMessage = message;
      this.mainAlert = true;
      window.scrollTo(0,0);
    },

    redirectTimer (redirectMessage) {
      this.redirectMessage = redirectMessage;
      this.wizardActionsDisabled = true;
      let _this = this;

      let redirectTime = window.setInterval(function () {
            if (_this.redirectMessageSeconds === 0) {
                 _this.redirectMessageSeconds = 0;
                window.clearInterval(redirectTime);
                location.reload();
            } else {
                _this.redirectMessageSeconds -= 1;
            }
        }, 1000);
    },
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    },
  },
  mounted() {
    // Init Desktop & Mobile Headers
    KTLayoutHeader.init("kt_header");
    this.getAllAccounts();
    // Init Header Menu
    // KTLayoutHeaderMenu.init(
    //   this.$refs["kt_header_menu"],
    //   this.$refs["kt_header_menu_wrapper"]
    // );
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses","currentUser"]),

    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },
    /**
     * Get extra classes for header based on the options
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Get extra classes for header menu based on the options
     * @returns {null|*}
     */
    headerMenuClasses() {
      const classes = this.getClasses("header_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    }
  }
};
</script>
