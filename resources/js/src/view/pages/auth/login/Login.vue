<template>
    <div class="authentication-wrapper authentication-cover authentication-bg">
      <div class="authentication-inner row">
        <!-- /Left Text -->
        <div class="d-none d-lg-flex col-lg-7 p-0">
          <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
            

            <img
              src="media/bg-shape-image-light.png"
              alt="auth-login-cover"
              class="platform-bg"
              data-app-light-img="media/illustrations/bg-shape-image-light.png"
              data-app-dark-img="media/illustrations/bg-shape-image-dark.png"
            />
          </div>
        </div>
        <!-- /Left Text -->

        <!-- Login -->
        <div class="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
          <div class="w-px-400 mx-auto">
            <!-- Logo -->
            <div class="app-brand mb-4">
              <a href="index.html" class="app-brand-link gap-2">
            
                  <img src="media/logos/logo-dls.png">
              
              </a>
            </div>
            <!-- /Logo -->
            <p class="mb-4">Si ya tienes una cuenta, solo ingresa.<br> ¡Te estabamos esperando!

            </p>
            <form class="mb-3form" novalidate="novalidate" id="kt_login_signin_form">
              <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="email-username"
                  placeholder="Ingresa tu correo electrónico"
                  autofocus
                />
              </div>
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Contraseña</label>
                  <a href="auth-forgot-password-cover.html">
                    <span>¿Olvidó su contraseña?</span>
                  </a>
                </div>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    placeholder="********"
                    aria-describedby="password"
                  />
                  <span class="input-group-text cursor-pointer"><i class="ti ti-eye-off"></i></span>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="remember-me" />
                  <label class="form-check-label" for="remember-me"> Recordar mis datos </label>
                </div>
              </div>
              <button class="btn btn-primary d-grid w-100">Ingresar</button>
            </form>

            <p class="text-center">
              <span>¿Aún no tienes cuenta?</span>
              <a id="kt_login_signup" @click="showForm('signup')">
                <span>Crea una aquí</span>
              </a>
            </p>

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
        <!-- /Login -->
      </div>
    </div>
</template>

<!-- Load login custom page styles -->
<style lang="css">
@import "@/assets/css/pages/page-auth.css";
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
