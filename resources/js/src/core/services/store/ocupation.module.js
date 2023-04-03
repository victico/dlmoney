import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const OCUPATIONS_GET_ALL = "ocupations_get_all";

const actions = {
    [OCUPATIONS_GET_ALL](_) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/ocupations")
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar las ocupaciones.');
                });
            }
        });
    },
};

export default {
    actions
};
