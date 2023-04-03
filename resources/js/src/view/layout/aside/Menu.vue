<template>
  <ul class="menu-nav bg-transparent">
    <router-link to="/dashboard" v-slot="{ href, navigate, isActive, isExactActive }">
      <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
        <a :href="href" class="menu-link rounded ml-1" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text"><strong>Inicio</strong></span>
        </a>
      </li>
    </router-link>
    <router-link to="/bank/accounts" v-slot="{ href, navigate, isActive, isExactActive }">
      <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
        <a :href="href" class="menu-link rounded ml-1" @click="navigate">
          <i class="menu-icon fas fa-credit-card"></i>
          <span class="menu-text"><strong>Cuentas Bancarias</strong></span>
        </a>
      </li>
    </router-link>
    <router-link v-if="isAdmin" to="/banks" v-slot="{ href, navigate, isActive, isExactActive }">
      <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
        <a :href="href" class="menu-link rounded ml-1" @click="navigate">
          <i class="menu-icon fa fa-university"></i>
          <span class="menu-text"><strong>Bancos</strong></span>
        </a>
      </li>
    </router-link>

    <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item menu-item-submenu mb-1">
      <a href="#" class="menu-link menu-toggle rounded ml-1">
        <i class="menu-icon fas fa-calculator"></i>
        <span class="menu-text"><strong>Operaciones</strong></span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav mt-1">
          <!-- <router-link v-if="isAdmin" to="/operations/manual" v-slot="{ href, navigate, isActive, isExactActive }" >
            <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
              <a :href="href" class="menu-link rounded ml-1" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"><strong>Operación Manual</strong></span>
              </a>
            </li>
          </router-link> -->
          <router-link v-if="isAdmin" to="/all-operations" v-slot="{ href, navigate, isActive, isExactActive }" >
            <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
              <a :href="href" class="menu-link rounded ml-1" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"><strong>Todas las Operaciones</strong></span>
              </a>
            </li>
          </router-link>

          <router-link v-if="!isAdmin" to="/operations/new" v-slot="{ href, navigate, isActive, isExactActive }" >
            <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
              <a :href="href" class="menu-link rounded ml-1" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"><strong>Nueva Operación</strong></span>
              </a>
            </li>
          </router-link>
          <router-link v-if="!isAdmin" to="/my-operations" v-slot="{ href, navigate, isActive, isExactActive }" >
            <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
              <a :href="href" class="menu-link rounded ml-1" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"><strong>Mis Operaciones</strong></span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <router-link to="/profiles" v-slot="{ href, navigate, isActive, isExactActive }">
      <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
        <a :href="href" class="menu-link rounded ml-1" @click="navigate">
          <i class="menu-icon fas fa-users"></i>
          <span class="menu-text"><strong>Mis Perfiles</strong></span>
        </a>
      </li>
    </router-link>

    <li v-if="isAdmin" aria-haspopup="true" data-menu-toggle="hover" class="menu-item menu-item-submenu mb-1">
      <a href="#" class="menu-link menu-toggle rounded ml-1">
        <i class="menu-icon fas fa-users"></i>
        <span class="menu-text"><strong>Usuarios</strong></span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav mt-1">
          <router-link to="/personal/accounts" v-slot="{ href, navigate, isActive, isExactActive }" >
            <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
              <a :href="href" class="menu-link rounded ml-1" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"><strong>Cuentas Personales</strong></span>
              </a>
            </li>
          </router-link>
          <router-link to="/company/accounts" v-slot="{ href, navigate, isActive, isExactActive }" >
            <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
              <a :href="href" class="menu-link rounded ml-1" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"><strong>Cuentas Empresariales</strong></span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <router-link v-if="isAdmin" to="/exchange-rate" v-slot="{ href, navigate, isActive, isExactActive }">
      <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
        <a :href="href" class="menu-link rounded ml-1" @click="navigate">
          <i class="menu-icon fas fa-coins"></i>
          <span class="menu-text"><strong>Tipo de Cambio</strong></span>
        </a>
      </li>
    </router-link>

    <li v-if="isAdmin" aria-haspopup="true" data-menu-toggle="hover" class="menu-item menu-item-submenu mb-1">
      <a href="#" class="menu-link menu-toggle rounded ml-1">
        <i class="menu-icon flaticon-graphic"></i>
        <span class="menu-text"><strong>Reportes</strong></span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav mt-1">
          <router-link to="/report-sbs" v-slot="{ href, navigate, isActive, isExactActive }" >
            <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
              <a :href="href" class="menu-link rounded ml-1" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"><strong>SBS</strong></span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    
    <!-- <li class="menu-section">
      <h4 class="menu-text">LINKS QUE VAN EN OTROS LUGARES</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li> -->

    <router-link to="/create-account" v-slot="{ href, navigate, isActive, isExactActive }">
      <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item mb-1" :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']">
        <a :href="href" class="menu-link rounded ml-1" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text"><strong>Crear nueva cuenta</strong></span>
        </a>
      </li>
    </router-link>
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
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },

    getIsAdmin() {
      this.isAdmin = window.localStorage.getItem("is_admin") == "true" ? true : false;
    }
  },
  mounted() {
    this.getIsAdmin();
  },
};
</script>
