import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const FUND_ORIGINS_GET_ALL = "fund_origins_get_all";

const actions = {
    [FUND_ORIGINS_GET_ALL](_) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/fund-origins")
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar los origen de fondos.');
                });
            }
        });
    },
};

export default {
    actions
};
