import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const DISTRICTS_GET_ALL_BY_PROVINCE_ID = "districts_get_all_by_province_id";

const actions = {
    [DISTRICTS_GET_ALL_BY_PROVINCE_ID](_, provinceId) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/districts/" + provinceId)
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar los distritos.');
                });
            }
        });
    },
};

export default {
    actions
};
