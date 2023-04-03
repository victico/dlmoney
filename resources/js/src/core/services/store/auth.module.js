import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";
export const RESET_PASSWORD = 'resetPassword'
export const RESET_PASSWORD_EMAIL = 'resetPasswordEmail'

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_TOKEN = "setToken";
export const SET_HAS_ACCOUNT = "setHasAccount";
export const SET_IS_ADMIN = "setIsAdmin";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

const state = {
  errors: [],
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("api/login", credentials)
        .then(( { data } ) => {
          if(!data.access_token){
            throw data;
          }
          context.commit(SET_TOKEN, data.access_token);
          if (JwtService.getToken()) {
            ApiService.setHeader();
            ApiService.get("api/user")
              .then(( { data } ) => {
                context.commit(SET_AUTH, data);
                context.commit(SET_HAS_ACCOUNT, data);
                context.commit(SET_IS_ADMIN, data);
                resolve(data);
              })
              .catch(( response ) => {
                context.commit(SET_ERROR, response.errors);
              });
          }
        })
        .catch(( { response } ) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    return new Promise(resolve => {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.post("api/logout")
          .then(() => {
            context.commit(PURGE_AUTH);
            resolve();
          });
      }
    });
  },
  [REGISTER](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("api/register", credentials)
        .then(({ data:dataRegister }) => {
          if(dataRegister.status === 'error'){
            resolve(dataRegister);
            return;
          }

          ApiService.post("api/login", credentials)
          .then(( { data } ) => {
            if(!data.access_token){
              throw data;
            }
            context.commit(SET_TOKEN, data.access_token);
            context.commit(SET_AUTH, dataRegister.user);
            context.commit(SET_HAS_ACCOUNT, dataRegister.user);
            context.commit(SET_IS_ADMIN, dataRegister.user);

            resolve(dataRegister);
          })
          .catch(( { data } ) => {
            context.commit(SET_ERROR, data.errors);
          });
        })
        .catch(({ data }) => {
          context.commit(SET_ERROR, data.errors);
        });
    });
  },
  [RESET_PASSWORD_EMAIL](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("api/password/reset/email", credentials)
        .then(( { data } ) => {
          resolve(data);
        })
        .catch(( data ) => {
          // console.log(data);
          // context.commit(SET_ERROR, data.errors);
        });
    });
  },
  [RESET_PASSWORD](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("api/password/reset", credentials)
        .then(( { data } ) => {
          resolve(data);
        })
        .catch(( data ) => {
          // console.log(data);
          // context.commit(SET_ERROR, data.errors);
        });
    });
  },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_TOKEN](state, token) {
    JwtService.saveToken(token);
  },
  [SET_HAS_ACCOUNT](state, user) {
    window.localStorage.setItem("has_account", user.active_account_type == 0 || user.active_account_type == 1 ? true : false);
  },
  [SET_IS_ADMIN](state, user) {
    window.localStorage.setItem("is_admin", user.roles.findIndex(role => role.name == 'admin') > -1 ? true : false);
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
  },
  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    window.localStorage.removeItem("has_account");
    window.localStorage.removeItem("is_admin");
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
