import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const EXCHANGE_RATES_STORE = "exchange_rates_store";
export const EXCHANGE_RATES_GET_ALL = "exchange_rates_get_all";
export const EXCHANGE_RATES_GET_LAST = "exchange_rates_get_last";
export const EXCHANGE_RATES_DELETE = "exchange_rates_delete";
export const EXCHANGE_RATES_RESTORE = "exchange_rates_restore";
export const EXCHANGE_RATES_UPDATE = 'exchange_rates_update';

const actions = {
    [EXCHANGE_RATES_GET_ALL](_, last) {
        let lastQuery = "";
        if (last != null) {
            lastQuery = "?last=" + last
        }
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/exchange-rates" + lastQuery)
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar los tipos de cambio.');
                });
            }
        });
    },
    [EXCHANGE_RATES_GET_LAST](_) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/exchange-rates/last")
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar los tipos de cambio.');
                });
            }
        });
    },
    [EXCHANGE_RATES_STORE](_, body) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.post("api/exchange-rates", body)
                    .then(( { data } ) => {
                        resolve(data);
                    })
                    .catch(( { response } ) => {
                        switch (response.status) {
                            case 400:
                                reject(response.data.error)
                                break;
                            default:
                                reject('Ocurrió un error desconocido al intentar guardar el tipo de cambio.');
                                break;
                        }
                    });
            }
        });
    },
    [EXCHANGE_RATES_DELETE](_, id) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.delete("api/exchange-rates/" + id)
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
                                reject('Ocurrió un error desconocido al intentar eliminar el tipo de cambio.');
                                break;
                        }
                    });
            }
        });
    },
    [EXCHANGE_RATES_RESTORE](_, id) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/exchange-rates/" + id + '/restore')
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
                                reject('Ocurrió un error desconocido al intentar restaurar el tipo de cambio.');
                                break;
                        }
                    });
            }
        });
    },
    [EXCHANGE_RATES_UPDATE](_, body) {
        let id = body.get('exchange_rate_id');
        body.delete('exchange_rate_id')
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.put("api/exchange-rates/" + id, body)
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
                            reject('Ocurrió un error desconocido al intentar actualizar el tipo de cambio.');
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
