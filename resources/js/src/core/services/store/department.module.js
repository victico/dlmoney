import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const DEPARTMENTS_GET_ALL = "departments_get_all";

const actions = {
    [DEPARTMENTS_GET_ALL](_) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/departments")
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar los departamentos.');
                });
            }
        });
    },
};

export default {
    actions
};
