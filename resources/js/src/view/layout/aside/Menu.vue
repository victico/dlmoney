<template>
  <ul class="menu-inner py-4">
    <!-- Dashboards -->
    <router-link to="/dashboard" v-slot="{ href, navigate, isActive, isExactActive }">
      <li class="menu-item" aria-haspopup="true" data-menu-toggle="hover"  :class="[isActive && 'active', isExactActive && 'active']" >
        <a  :href="href" class="menu-link" @click="navigate">
          <i class="fa-solid fa-house"></i>
          <div>&nbsp; &nbsp;INICIO</div>
        </a>
      </li>
    </router-link>
    <!-- Apps & Pages -->
    <router-link v-if="!isAdmin" to="/my-operations" v-slot="{ href, navigate, isActive, isExactActive }">
      <li class="menu-item" aria-haspopup="true" data-menu-toggle="hover" :class="[isActive && 'active', isExactActive && 'active']" >
        <a  :href="href" class="menu-link" @click="navigate">
          <i class="fa-solid fa-file-lines"></i>
          <div>&nbsp; &nbsp;Mis movimientos</div>
        </a>
      </li>
    </router-link>
    <router-link v-if="isAdmin" to="/banks" v-slot="{ href, navigate, isActive, isExactActive }">
      <li class="menu-item" aria-haspopup="true" data-menu-toggle="hover" :class="[isActive && 'active', isExactActive && 'active']" >
        <a  :href="href" class="menu-link" @click="navigate">
          <i class="fa-solid fa-building-columns"></i>
          <div>&nbsp; &nbsp;Bancos</div>
        </a>
      </li>
    </router-link>
    
    <router-link v-if="isAdmin" to="/all-operations" v-slot="{ href, navigate, isActive, isExactActive }" >
      <li class="menu-item" aria-haspopup="true" data-menu-toggle="hover" :class="[isActive && 'active', isExactActive && 'active']" >
        <a  :href="href" class="menu-link" @click="navigate">
          <i class="fa-solid fa-receipt"></i>
          <div>&nbsp; &nbsp;Todas la operaciones</div>
        </a>
      </li>
    </router-link>
    <router-link v-if="!isAdmin" to="/operations/new" v-slot="{ href, navigate, isActive, isExactActive }" >
      <li class="menu-item" aria-haspopup="true" data-menu-toggle="hover" :class="[isActive && 'active', isExactActive && 'active']" >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="fa-solid fa-money-bill-transfer"></i>
          <div>&nbsp; &nbsp;Cambiar divisas</div>
        </a> 
      </li>
    </router-link>
    <router-link to="/bank/accounts" v-slot="{ href, navigate, isActive, isExactActive }">
      <li  class="menu-item" aria-haspopup="true" data-menu-toggle="hover" :class="[isActive && 'active', isExactActive && 'active']" >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="fa-solid fa-wallet "></i>
          <div>&nbsp; &nbsp;Mis cuentas</div>
        </a>  
      </li>
    </router-link>
    <li v-if="isAdmin"  class="menu-item menu-father" >
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="fa-solid fa-file-lines"></i>
          <div>&nbsp; &nbsp;Reporte</div>
        </a>

        <ul class="menu-sub">
          <router-link to="/report-sbs" v-slot="{ href, navigate, isActive, isExactActive }" >
            <li class="menu-item" aria-haspopup="true" data-menu-toggle="hover" :class="[isActive && 'active', isExactActive && 'active']" >
              <a  :href="href" class="menu-link" @click="navigate">
                <div>&nbsp; &nbsp;Reporte SBS</div>
              </a>
            </li>
          </router-link>
        </ul>
    </li>
    <router-link v-if="!isAdmin" to="/profiles" v-slot="{ href, navigate, isActive, isExactActive }" >
      <li class="menu-item" aria-haspopup="true" data-menu-toggle="hover" :class="[isActive && 'active', isExactActive && 'active']" >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="fa-solid fa-users"></i>
          <div>&nbsp; &nbsp;Mis Perfiles</div>
        </a> 
      </li>
    </router-link>
    <!-- Misc -->
    <li class="menu-header small text-uppercase">
      <span class="menu-header-text">&nbsp; &nbsp;Ayuda</span>
    </li>
    <li class="menu-item" aria-haspopup="true" data-menu-toggle="hover"  >
      <a href="https://pixinvent.ticksy.com/" target="_blank" class="menu-link">
        <i class="menu-icon tf-icons ti ti-lifebuoy"></i>
        <div>&nbsp; &nbsp;Whatsapp</div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  data() {
    return {
      isAdmin: false,
    }
  },
  
  methods: {
    activeChildren(){
      setTimeout(()=>{
        const child = document.querySelector('.menu-item.active');
        
        try{
          const father = child.closest('.menu-father');
          father.classList.add("open","active");
        } catch {
          
        }
        
      }, 200)
    },
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },

    getIsAdmin() {
      this.isAdmin = window.localStorage.getItem("is_admin") == "true" ? true : false;
    }
  },
  mounted() {
    this.getIsAdmin();
    this.activeChildren();
  },
};
</script>
