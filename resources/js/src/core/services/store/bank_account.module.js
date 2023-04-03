import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const BANK_ACCOUNTS_STORE = "bank_accounts_store";
export const BANK_ACCOUNTS_GET_ALL = "bank_accounts_get_all";
export const BANK_ACCOUNTS_GET_ALL_TO_TRANSFER = "bank_accounts_get_all_to_transfer";
export const BANK_ACCOUNTS_DELETE = "bank_accounts_delete";
export const BANK_ACCOUNTS_RESTORE = "bank_accounts_restore";
export const BANK_ACCOUNTS_UPDATE = 'bank_accounts_update';

const actions = {
    [BANK_ACCOUNTS_GET_ALL](_, query = '') {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/bank-accounts" + query)
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar las cuenta bancarias.');
                });
            }
        });
    },
    [BANK_ACCOUNTS_GET_ALL_TO_TRANSFER](_) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/bank-accounts/to-transfer")
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar las cuenta bancarias para transferir.');
                });
            }
        });
    },
    [BANK_ACCOUNTS_STORE](_, body) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.post("api/bank-accounts", body)
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(( { response } ) => {
                    switch (response.status) {
                        case 400:
                            reject(response.data.error)
                            break;
                        default:
                            reject('Ocurrió un error desconocido al intentar guardar la cuenta bancaria.');
                            break;
                    }
                });
            }
        });
    },
    [BANK_ACCOUNTS_DELETE](_, id) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.delete("api/bank-accounts/" + id)
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
                        reject('Ocurrió un error desconocido al intentar eliminar la cuenta bancaria.');
                        break;
                }
                });
            }
        });
    },
    [BANK_ACCOUNTS_RESTORE](_, id) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/bank-accounts/" + id + '/restore')
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
                            reject('Ocurrió un error desconocido al intentar restaurar la cuenta bancaria.');
                            break;
                    }
                });
            }
        });
    },
    [BANK_ACCOUNTS_UPDATE](_, body) {
        return new Promise((resolve, reject) => {
            let id = body.id;
            delete body.id;
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.put("api/bank-accounts/" + id, body)
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
                            reject('Ocurrió un error desconocido al intentar actualizar la cuenta bancaria.');
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
