<template>
  <div  class="authentication-wrapper authentication-cover authentication-bg"  :style="{ backgroundImage: `url(${backgroundImage.background})` }">
    <div id="kt_login" class="login login-1 authentication-inner row" :class="{'login-signin-on': this.state == 'signin', 'login-signup-on': this.state == 'signup', 'login-forgot-on': this.state == 'forgot'}">
      <!-- /Left Text -->
      <div class="d-none d-lg-flex col-lg-7 p-0">
        <div id="leftSide" class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center" :style="{ backgroundImage: `url(${backgroundImage.leftSide})` }">
          <img
            src="media/bg-shape-image-light.png"
            alt="auth-login-cover"
            class="platform-bg"
            data-app-light-img="illustrations/bg-shape-image-light.png"
            data-app-dark-img="illustrations/bg-shape-image-dark.png"
          />
        </div>
      </div>
      <!-- /Left Text -->

      <!-- Forms Side -->
      <div class="col-12 col-lg-5 align-items-center p-sm-5 p-4 ">
        <div class="w-px-400 mx-auto">
            <!-- Logo -->
          <div class="app-brand mb-4">
            <a href="#" class="app-brand-link gap-2">
            
              <img src="media/logos/logo-dls.png">
              
            </a>
          </div>
            <!-- /Logo -->
          <!-- Login -->
          <div class="login-form login-signin">
            <p class="mb-4">Si ya tienes una cuenta, solo ingresa.<br> ¡Te estabamos esperando!
            </p>
            <div class="">
              <form class="mb-3 form" novalidate="novalidate" id="kt_login_signin_form">
                <div role="alert" v-bind:class="{ show: errors.length }" class="alert fade alert-danger">
                  <div class="alert-text" v-for="(error, i) in errors" :key="i">
                    {{ error }}
                  </div>
                </div>
                <div class="mb-3 form-group">
                  <label for="email" class="form-label">Correo electrónico</label>
                  <input
                    type="text"
                    class="form-control"
                  
                    placeholder="Ingresa tu correo electrónico"
                    autofocus
                    name="email" 
                    ref="email" 
                    v-model="form.email"
                  />
                </div>
                <div class="mb-3 form-password-toggle form-group">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">Contraseña</label>
                    <a id="kt_login_forgot" @click="showForm('forgot')">
                      <small>¿Olvidó su contraseña?</small>
                    </a>
                  </div>
                  <div class="input-group input-group-merge">
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="**********"
                      ref="password" 
                      v-model="form.password" 
                      autocomplete="off" 
                    />
                    <span class="input-group-text cursor-pointer" @click="initPasswordToggle($event)"><i class="ti ti-eye-off"></i></span>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember-me" />
                    <label class="form-check-label" for="remember-me"> Recordar mis datos </label>
                  </div>
                </div>
                <button ref="kt_login_signin_submit" class="btn btn-primary d-grid w-100">Ingresar</button>
              </form>
            </div>
            <p class="text-center">
              <span>¿Aún no tienes cuenta?</span>
              <a id="kt_login_signup" @click="showForm('signup')" class="text-primary font-weight-bolder cursor-pointer">
                <span>Crea una aquí</span>
              </a>
            </p>
          </div>
          <!-- /Login -->
          <!-- Register -->
          <div class="login-form login-signup">
            <p class="mb-3">Solo regístrate y descubre la manera más rápida de cambiar tus soles y dólares en un clic</p>

            <form class="form mb-3" novalidate="novalidate" id="kt_login_signup_form">
              <div role="alert" v-if="registerData.message" v-bind:class="{show: registerData.show && registerData.message, 'alert-success': registerData.status == 'ok', 'alert-danger': registerData.status == 'error'}" class="alert fade">
                <div class="alert-text">
                  {{ registerData.message }}
                </div>
              </div>
              <div role="alert" v-if="Object.values(registerData.errors).length" v-bind:class="{show: registerData.show && Object.values(registerData.errors).length}" class="alert fade alert-danger">
                <div class="alert-text" v-for="(error, i) in Object.values(registerData.errors)" :key="i">
                  {{ error[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">Usuario</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Ingrese un usuario"
                  autofocus
                  name="username" 
                  ref="username" 
                  autocomplete="off"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" name="email" placeholder="Ingresar correo electrónico" ref="remail" autocomplete="off"/>
              </div>
              <div class="mb-3 form-password-toggle">
                <label class="form-label" for="password">Contraseña</label>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="********"
                    name="password" 
                    ref="rpassword" 
                    autocomplete="off"
                  />
                  <span class="input-group-text cursor-pointer" @click="initPasswordToggle($event)"><i class="ti ti-eye-off"></i></span>
                </div>
              </div>
              <div class="mb-3 form-password-toggle">
                <label class="form-label" for="cpassword">Confirmar contraseña</label>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirmar contraseña"
                    name="cpassword" 
                    ref="cpassword" 
                    autocomplete="off" 
                  />
                  <span class="input-group-text cursor-pointer" @click="initPasswordToggle($event)"><i class="ti ti-eye-off"></i></span>
                </div>
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox"  name="terms" />
                  <label class="form-check-label" for="terms-conditions">
                  <small>Autorizo recibir noticias y promociones de parte de DLS Money.</small> 
                      
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox"  name="terms" />
                  <label class="form-check-label" for="terms-conditions">
                  <small> Declaro que he leído y acepto sus
                    <a href="javascript:void(0);">políticas de privacidad</a> y sus  <a href="javascript:void(0);">Términos y condiciones</a>
                  </small> 
                  </label>
                </div>
              </div>
              <button :disabled="kt_login_signup_submit_disabled" ref="kt_login_signup_submit"  class="btn btn-primary d-grid w-100">Crear cuenta</button>
            </form>

            <p class="text-center">
              <span>¿Ya tienes una cuenta?</span>
              <a id="kt_login_signup_cancel" @click="showForm('signin')" class="text-primary font-weight-bolder cursor-pointer">
                <span>Inicia sesión</span>
              </a>
            </p>
          </div>
          <!-- /Register -->
          <!-- Forgot -->
          <div class="login-form login-forgot">
            
          </div>
          <!-- /Forgot -->
          <div class="divider my-4">
            <div class="divider-text">O ingresa con tu cuenta de</div>
          </div>

          <div class="d-flex justify-content-center">
            <a href="javascript:;" class="btn btn-icon btn-label-facebook me-3">
              <i class="tf-icons fa-brands fa-facebook-f fs-5"></i>
            </a>

            <a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3">
              <i class="tf-icons fa-brands fa-google fs-5"></i>
            </a>

             
          </div>
        </div>
      </div>
      <!-- /Form Side -->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/page-auth.scss";
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";

import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState } from "vuex";
import { LOGIN, LOGOUT, REGISTER, RESET_PASSWORD_EMAIL } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      state: "signin",
      linkToResetData: {
        show: false,
        status: null,
        message: null,
      },
      kt_login_signup_submit_disabled: false,
      registerData: {
        show: false,
        status: null,
        message: null,
        errors: {}
      },
      // Remove this dummy login info
      form: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return (
        {
          leftSide: process.env.BASE_URL + "media/illustrations/registrong.png",
          background: process.env.BASE_URL + "media/backgrounds/bg-blanco.jpg",
        }
      );
    }
  },
  mounted() {
    const signin_form = KTUtil.getById("kt_login_signin_form");
    const signup_form = KTUtil.getById("kt_login_signup_form");
    // const forgot_form = KTUtil.getById("kt_login_forgot_form");

    this.fv = formValidation(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "El email es requerido"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "La contraseña es requerida"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });

    // this.fv1 = formValidation(signup_form, {
    //   fields: {
    //     username: {
    //       validators: {
    //         notEmpty: {
    //           message: "El usuario es requerido"
    //         }
    //       }
    //     },
    //     email: {
    //       validators: {
    //         notEmpty: {
    //           message: "El email es requerido"
    //         },
    //         emailAddress: {
    //           message: "El valor ingresado no es un email válido"
    //         }
    //       }
    //     },
    //     password: {
    //       validators: {
    //         notEmpty: {
    //           message: "La contraseña es requerida"
    //         }
    //       }
    //     },
    //     cpassword: {
    //       validators: {
    //         notEmpty: {
    //           message: "La confirmación de contraseña es requerida"
    //         },
    //         identical: {
    //           compare: function() {
    //             return signup_form.querySelector('[name="password"]').value;
    //           },
    //           message: "La contraseña y su confirmacion no coinciden"
    //         }
    //       }
    //     },
    //     agree: {
    //       validators: {
    //         notEmpty: {
    //           message: "Debes aceptar los términos y condiciones"
    //         }
    //       }
    //     }
    //   },
    //   plugins: {
    //     trigger: new Trigger(),
    //     submitButton: new SubmitButton(),
    //     bootstrap: new Bootstrap()
    //   }
    // });

    // this.fv2 = formValidation(forgot_form, {
    //   fields: {
    //     email: {
    //       validators: {
    //         notEmpty: {
    //           message: "El email es requerido"
    //         },
    //         emailAddress: {
    //           message: "El valor ingresado no es un email válido"
    //         }
    //       }
    //     }
    //   },
    //   plugins: {
    //     trigger: new Trigger(),
    //     submitButton: new SubmitButton(),
    //     bootstrap: new Bootstrap()
    //   }
    // });

    this.fv.on("core.form.valid", () => {
      var email = this.form.email;
      var password = this.form.password;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send login request
        this.$store
          .dispatch(LOGIN, { email, password })
          .then( () => {
            this.$router.push('/dashboard')
            console.log('si')  // go to which page after successfully login
          })
          .catch(() => {
          });
        this.removeSpinnerFromSubmitButton(submitButton);
      }, 500);
    });

    this.fv.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Por favor, proporcione los datos correctos.",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });

    this.fv1.on("core.form.valid", () => {
      const username = this.$refs.username.value;
      const email = this.$refs.remail.value;
      const password = this.$refs.rpassword.value;
      const password_confirmation = this.$refs.cpassword.value;

      this.registerData = {
        show: false,
        status: null,
        message: null,
        errors: {}
      };

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send register request
        this.$store
          .dispatch(REGISTER, {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation
          })
          .then((data) => {
            this.removeSpinnerFromSubmitButton(submitButton);

            this.registerData.show = true;
            this.registerData.status = data.status;
            if(data.errors){
              this.registerData.errors = data.errors;
            }
            else{
              this.registerData.message = data.message;
            }

            if(this.registerData.status === 'ok'){
              this.kt_login_signup_submit_disabled = true;
              setTimeout(() => {
                  this.$router.push({ name: "dashboard" })
              }, 1500);
            }
          });
      }, 500);
    });

    this.fv1.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Por favor, proporcione los datos correctos.",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });

    // this.fv2.on("core.form.valid", () => {
    //   const email = this.$refs.fmail.value;

    //   // clear existing errors
    //   this.$store.dispatch(LOGOUT);

    //   // set spinner to submit button
    //   const submitButton = this.$refs["kt_login_forgot_submit"];
    //   submitButton.classList.add("spinner", "spinner-light", "spinner-right");

    //   this.linkToResetData = {
    //     show: false,
    //     status: null,
    //     message: null,
    //   };

    //   // send login request
    //   this.$store
    //     .dispatch(RESET_PASSWORD_EMAIL, { email })
    //     // go to which page after successfully login
    //     .then((data) => {
    //       this.removeSpinnerFromSubmitButton(submitButton);
    //       this.linkToResetData.show = true;
    //       this.linkToResetData.status = data.status;
    //       this.linkToResetData.message = data.message;
    //     })
    //     .catch(() => {
    //       this.removeSpinnerFromSubmitButton(submitButton);
    //     });
    // });

    // this.fv2.on("core.form.invalid", () => {
    //   Swal.fire({
    //     title: "",
    //     text: "Por favor, proporcione los datos correctos.",
    //     icon: "error",
    //     confirmButtonClass: "btn btn-secondary",
    //     heightAuto: false
    //   });
    // });
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__bounceInRight"
      );
      KTUtil.animateClass(
        KTUtil.getById('leftSide'),
        "animate__animated animate__bounceInLeft"
      );
      this.backgroundImage.leftSide = form == 'signin' ? 
        process.env.BASE_URL + "media/illustrations/registrong.png" : 
        form == 'signup' ? 
        process.env.BASE_URL + "media/backgrounds/fondo-registro01.jpg" : ""
    },
    initPasswordToggle(event) {
      let elx = event.srcElement;
        const formPasswordToggle = elx.closest('.form-password-toggle')
        const formPasswordToggleIcon = formPasswordToggle.querySelector('i')
        const formPasswordToggleInput = formPasswordToggle.querySelector('input')
        if (formPasswordToggleInput.getAttribute('type') == 'text') {
          formPasswordToggleInput.setAttribute('type', 'password')
          formPasswordToggleIcon.classList.replace('ti-eye', 'ti-eye-off')
        }else{
          formPasswordToggleInput.setAttribute('type', 'text')
          formPasswordToggleIcon.classList.replace('ti-eye-off', 'ti-eye')
        }
    },
    removeSpinnerFromSubmitButton(submitButton){
      submitButton.classList.remove(
        "spinner",
        "spinner-light",
        "spinner-right"
      );
    }
  }
};
</script>
