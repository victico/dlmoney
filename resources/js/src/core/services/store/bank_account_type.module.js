import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const BANK_ACCOUNT_TYPES_GET_ALL = "bank_account_types_get_all";

const actions = {
    [BANK_ACCOUNT_TYPES_GET_ALL](_) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/bank-account-types")
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar las cuenta bancarias.');
                });
            }
        });
    },
};

export default {
    actions
};
