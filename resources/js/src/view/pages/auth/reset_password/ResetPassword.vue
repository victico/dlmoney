<template>
    <div class="d-flex flex-column flex-root">
        <div class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white">
            <!--begin::Aside-->
            <div class="login-aside d-flex flex-column flex-row-auto" style="background-color: #F2C98A;">
                <div class="d-flex flex-column-auto flex-column pt-lg-15 pt-15">
                    <a class="text-center mb-10">
                        <img src="media/logos/logo-letter-1.png" class="max-h-70px" alt="" />
                    </a>
                    <h3 class="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style="color: #986923;">
                        Discover Amazing Metronic <br />with great build tools
                    </h3>
                </div>
                <div class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
            </div>
            <!--begin::Aside-->
        <!--begin::Content-->
        <div class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
            <div class="d-flex flex-column-fluid flex-center">
                <!--begin::Signup-->
                <div class="login-form reset_password_form">
                    <form class="form" novalidate="novalidate" id="kt_reset_password_form">
                        <div class="pb-13 pt-lg-0 pt-5">
                            <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                                Restablecer contraseña
                            </h3>
                            <p class="text-muted font-weight-bold font-size-h4">
                                Rellene con sus datos para restablecer la contraseña
                            </p>
                        </div>
                        <div role="alert" v-if="resetPasswordData.message" v-bind:class="{show: resetPasswordData.show && resetPasswordData.message, 'alert-success': resetPasswordData.status == 'ok', 'alert-danger': resetPasswordData.status == 'error'}" class="alert fade">
                            <div class="alert-text">
                                {{ resetPasswordData.message }}
                            </div>
                        </div>
                        <div role="alert" v-if="Object.values(resetPasswordData.errors).length" v-bind:class="{show: resetPasswordData.show && Object.values(resetPasswordData.errors).length}" class="alert fade alert-danger">
                            <div class="alert-text" v-for="(error, i) in Object.values(resetPasswordData.errors)" :key="i">
                                {{ error[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="hidden" v-model="token" name="token" ref="token" autocomplete="off" />
                        </div>
                        <div class="form-group">
                            <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="email" placeholder="Ingrese el email" name="email" ref="email" autocomplete="off" />
                        </div>
                        <div class="form-group">
                            <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="password" placeholder="Ingrese la contraseña" name="password" ref="password" autocomplete="off" />
                        </div>
                        <div class="form-group">
                            <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="password" placeholder="Confirme la contraseña" name="password_confirmation" ref="password_confirmation" autocomplete="off" />
                        </div>
                        <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                            <button :disabled="reset_password_submit_disabled" ref="kt_reset_password_submit" class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4" style="width:170px;">
                                Restablecer
                            </button>
                            <button type="button" id="kt_reset_password_cancel" class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3" v-on:click="pushLogin">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
                <!--end::Signup-->
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
import { RESET_PASSWORD, LOGOUT } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
    data() {
        return {
            token: '',
            reset_password_submit_disabled: false,
            resetPasswordData: {
                show: false,
                status: null,
                message: null,
                errors: {}
            },
        };
    },
    computed: {
        backgroundImage() {
            return (
                process.env.BASE_URL + "media/svg/illustrations/login-visual-1.svg"
            );
        }
    },
    mounted() {
        const reset_password_form = KTUtil.getById("kt_reset_password_form");
        this.token = this.$route.params.token;

        this.fv = formValidation(reset_password_form, {
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
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: "La contraseña es requerida"
                        }
                    }
                },
                password_confirmation: {
                    validators: {
                        notEmpty: {
                            message: "La confirmación de contraseña es requerida"
                        },
                        identical: {
                            compare: function() {
                                return reset_password_form.querySelector('[name="password"]').value;
                            },
                            message: "La contraseña y su confirmacion no coinciden"
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
            const token = this.$refs.token.value;
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;
            const password_confirmation = this.$refs.password_confirmation.value;

            this.resetPasswordData = {
                show: false,
                status: null,
                message: null,
                errors: {}
            };

            // clear existing errors
            this.$store.dispatch(LOGOUT);

            // set spinner to submit button
            const submitButton = this.$refs["kt_reset_password_submit"];
            submitButton.classList.add("spinner", "spinner-light", "spinner-right");

            // dummy delay
            setTimeout(() => {
                // send reset password request
                this.$store
                .dispatch(RESET_PASSWORD, { token, email, password, password_confirmation })
                // go to which page after successfully reset password
                .then((data) => {
                    this.removeSpinnerFromSubmitButton(submitButton);

                    this.resetPasswordData.show = true;
                    this.resetPasswordData.status = data.status;
                    if(data.errors){
                        this.resetPasswordData.errors = data.errors;
                    }
                    else{
                        this.resetPasswordData.message = data.message;
                    }

                    if(this.resetPasswordData.status === 'ok'){
                        this.reset_password_submit_disabled = true;
                        setTimeout(() => {
                            this.pushLogin();
                        }, 1500);
                    }
                })
                .catch(() => {
                    this.removeSpinnerFromSubmitButton(submitButton);
                });
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
    },
    methods: {
        pushLogin(){
            this.$router.push({ name: "login" })
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
