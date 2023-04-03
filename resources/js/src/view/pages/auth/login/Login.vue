<template>
  <div class="d-flex flex-column flex-root">
    <div class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white" :class="{'login-signin-on': this.state == 'signin', 'login-signup-on': this.state == 'signup', 'login-forgot-on': this.state == 'forgot'}" id="kt_login">
      <!--begin::Aside-->
      <div class="login-aside d-flex flex-column flex-row-auto" style="background-color: #F2C98A;">
        <div class="d-flex flex-column-auto flex-column pt-lg-15 pt-15">
          <a class="text-center mb-10">
            <img src="media/logos/logo-letter-1.png" class="max-h-70px" alt="" />
          </a>
          <h3 class="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style="color: #986923;">
            Tu casa de cambio<br />sin salir de casa
          </h3>
        </div>
        <div class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
      </div>
      <!--begin::Aside-->
      <!--begin::Content-->
      <div class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        <div class="d-flex flex-column-fluid flex-center">
          <!--begin::Signin-->
          <div class="login-form login-signin">
            <form class="form" novalidate="novalidate" id="kt_login_signin_form">
              <div class="pb-13 pt-lg-0 pt-5">
                <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                  Bienvenido a Pressto Cambio
                </h3>
                <span class="text-muted font-weight-bold font-size-h4">
                  ¿Eres nuevo por aquí?
                  <a id="kt_login_signup" class="text-primary font-weight-bolder cursor-pointer" @click="showForm('signup')">
                    Crea una cuenta
                  </a>
                </span>
              </div>
              <div role="alert" v-bind:class="{ show: errors.length }" class="alert fade alert-danger">
                <div class="alert-text" v-for="(error, i) in errors" :key="i">
                  {{ error }}
                </div>
              </div>
              <div class="form-group">
                <label class="font-size-h6 font-weight-bolder text-dark">Email</label>
                <div id="example-input-group-1" label="" label-for="example-input-1">
                  <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg" type="text" name="email" ref="email" v-model="form.email" placeholder="Ingrese el email" />
                </div>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between mt-n5">
                  <label class="font-size-h6 font-weight-bolder text-dark pt-5">Contraseña</label>
                  <a class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5 cursor-pointer" id="kt_login_forgot" @click="showForm('forgot')">
                    ¿Olvido su contraseña?
                  </a>
                </div>
                <div id="example-input-group-2" label="" label-for="example-input-2">
                  <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg" type="password" name="password" ref="password" v-model="form.password" autocomplete="off" placeholder="Ingrese la contraseña" />
                </div>
              </div>
              <div class="pb-lg-0 pb-5">
                <button ref="kt_login_signin_submit" class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3">
                  Ingresar
                </button>
                <button type="button" class="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg">
                  <span class="svg-icon svg-icon-md">
                    <inline-svg src="media/svg/social-icons/google.svg"/> </span>
                    Ingresar con Google
                </button>
              </div>
            </form>
          </div>
          <!--end::Signin-->
          <!--begin::Signup-->
          <div class="login-form login-signup">
            <form class="form" novalidate="novalidate" id="kt_login_signup_form">
              <div class="pb-13 pt-lg-0 pt-5">
                <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                  Registrarse
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Rellene con sus datos para crear su cuenta
                </p>
              </div>
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
              <div class="form-group">
                <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="text" placeholder="Usuario" name="username" ref="username" autocomplete="off" />
              </div>
              <div class="form-group">
                <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" ref="remail" autocomplete="off" />
              </div>
              <div class="form-group">
                <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="password" placeholder="Contraseña" name="password" ref="rpassword" autocomplete="off" />
              </div>
              <div class="form-group">
                <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="password" placeholder="Confirmar contraseña" name="cpassword" ref="cpassword" autocomplete="off" />
              </div>
              <div class="form-group">
                <label class="checkbox mb-0">
                  <input type="checkbox" name="agree" />
                  <span class="mr-2"></span>
                  Yo acepto los
                  <a href="#" class="ml-2">terminos y condiciones</a>.
                </label>
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                <button :disabled="kt_login_signup_submit_disabled" ref="kt_login_signup_submit" class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4" style="width:170px;">
                  Registrarme
                </button>
                <button type="button" id="kt_login_signup_cancel" class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3" @click="showForm('signin')">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
          <!--end::Signup-->
          <!--begin::Forgot-->
          <div class="login-form login-forgot">
            <!--begin::Form-->
            <form class="form" novalidate="novalidate" id="kt_login_forgot_form">
              <div class="pb-13 pt-lg-0 pt-5">
                <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                  ¿Olvido su contraseña?
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Ingresa tu email para restablecer tu contraseña
                </p>
              </div>
              <div role="alert" v-bind:class="{ show: linkToResetData.show, 'alert-success': linkToResetData.status == 'ok', 'alert-danger': linkToResetData.status == 'error'}" class="alert fade">
                <div class="alert-text">
                  {{ linkToResetData.message }}
                </div>
              </div>
              <div class="form-group">
                <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="email" placeholder="Ingrese el email" name="email" ref="fmail" autocomplete="off"/>
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0">
                <button ref="kt_login_forgot_submit" class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4" style="width:170px;">
                  Restablecer
                </button>
                <button type="button" id="kt_login_forgot_cancel" class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3" @click="showForm('signin')">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
          <!--end::Forgot-->
        </div>
        <!--begin::Content footer-->
        <div class="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0">
          <a href="#" class="text-primary font-weight-bolder font-size-h5">Terminos</a>
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5">Planes</a>
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5">Contactanos</a>
        </div>
        <!--end::Content footer-->
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
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
        process.env.BASE_URL + "media/svg/illustrations/login-visual-1.svg"
      );
    }
  },
  mounted() {
    const signin_form = KTUtil.getById("kt_login_signin_form");
    const signup_form = KTUtil.getById("kt_login_signup_form");
    const forgot_form = KTUtil.getById("kt_login_forgot_form");

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

    this.fv1 = formValidation(signup_form, {
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: "El usuario es requerido"
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: "El email es requerido"
            },
            emailAddress: {
              message: "El valor ingresado no es un email válido"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "La contraseña es requerida"
            }
          }
        },
        cpassword: {
          validators: {
            notEmpty: {
              message: "La confirmación de contraseña es requerida"
            },
            identical: {
              compare: function() {
                return signup_form.querySelector('[name="password"]').value;
              },
              message: "La contraseña y su confirmacion no coinciden"
            }
          }
        },
        agree: {
          validators: {
            notEmpty: {
              message: "Debes aceptar los términos y condiciones"
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

    this.fv2 = formValidation(forgot_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "El email es requerido"
            },
            emailAddress: {
              message: "El valor ingresado no es un email válido"
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

    this.fv2.on("core.form.valid", () => {
      const email = this.$refs.fmail.value;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_forgot_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.linkToResetData = {
        show: false,
        status: null,
        message: null,
      };

      // send login request
      this.$store
        .dispatch(RESET_PASSWORD_EMAIL, { email })
        // go to which page after successfully login
        .then((data) => {
          this.removeSpinnerFromSubmitButton(submitButton);
          this.linkToResetData.show = true;
          this.linkToResetData.status = data.status;
          this.linkToResetData.message = data.message;
        })
        .catch(() => {
          this.removeSpinnerFromSubmitButton(submitButton);
        });
    });

    this.fv2.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Por favor, proporcione los datos correctos.",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
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
