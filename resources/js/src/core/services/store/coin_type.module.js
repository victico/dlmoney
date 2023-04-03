import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const COIN_TYPES_GET_ALL = "coin_types_get_all";

const actions = {
    [COIN_TYPES_GET_ALL](_) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/coin-types")
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar los tipos de moneda.');
                });
            }
        });
    },
};

export default {
    actions
};
