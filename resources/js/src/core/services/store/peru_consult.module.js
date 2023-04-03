import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const QUERY_PERSON_BY_DNI = "query_person_by_dni";
export const QUERY_COMPANY_BY_RUC = "query_company_by_ruc";

const actions = {
    [QUERY_PERSON_BY_DNI](_, documentNumber) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/peru-consult/dni/" + documentNumber)
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar obtener los datos de la persona.');
                });
            }
        });
    },
    [QUERY_COMPANY_BY_RUC](_, ruc) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/peru-consult/ruc/" + ruc)
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar obtener los datos de la empresa.');
                });
            }
        });
    },
};

export default {
    actions
};
