import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const BANKS_STORE = "banks_store";
export const BANKS_GET_ALL = "banks_get_all";
export const BANKS_DELETE = "banks_delete";
export const BANKS_RESTORE = "banks_restore";
export const BANKS_UPDATE = 'banks_update';

const actions = {
  [BANKS_GET_ALL](_, query = '') {
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.get("api/banks" + query)
        .then(( { data } ) => {
          resolve(data);
        })
        .catch(() => {
          reject('Ocurrió un error desconocido al intentar mostrar los bancos.');
        });
      }
    });
  },
  [BANKS_STORE](_, body) {
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.post("api/banks", body)
        .then(( { data } ) => {
          resolve(data);
        })
        .catch(( { response } ) => {
          switch (response.status) {
            case 400:
              reject(response.data.error)
              break;
            default:
              reject('Ocurrió un error desconocido al intentar guardar el banco.');
              break;
          }
        });
      }
    });
  },
  [BANKS_DELETE](_, id) {
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.delete("api/banks/" + id)
        .then(( { data } ) => {
          resolve(data);
        })
        .catch(( { response } ) => {
          switch (response.status) {
            case 400:
              reject(response.data.error)
              break;
            case 404:
              reject(response.data.error)
              break;
            default:
              reject('Ocurrió un error desconocido al intentar eliminar el banco.');
              break;
          }
        });
      }
    });
  },
  [BANKS_RESTORE](_, id) {
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.get("api/banks/" + id + '/restore')
        .then(( { data } ) => {
          resolve(data);
        })
        .catch(( { response } ) => {
          switch (response.status) {
            case 400:
              reject(response.data.error)
              break;
            case 404:
              reject(response.data.error)
              break;
            default:
              reject('Ocurrió un error desconocido al intentar restaurar el banco.');
              break;
          }
        });
      }
    });
  },
  [BANKS_UPDATE](_, body) {
    return new Promise((resolve, reject) => {
      let id = body.get('bank_id');
      body.delete('bank_id')
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.post("api/banks/" + id + "?_method=PUT", body)
        .then(( { data } ) => {
          resolve(data);
        })
        .catch(( { response } ) => {
          switch (response.status) {
            case 400:
              reject(response.data.error)
              break;
            case 404:
              reject(response.data.error)
              break;
            default:
              reject('Ocurrió un error desconocido al intentar actualizar el banco.');
              break;
          }
        });
      }
    });
  },
};

export default {
  actions
};
