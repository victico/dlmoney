import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const PROVINCES_GET_ALL_BY_DEPARTMENT_ID = "provinces_get_all_by_department_id";

const actions = {
    [PROVINCES_GET_ALL_BY_DEPARTMENT_ID](_, departmentId) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/provinces/" + departmentId)
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar las provincias.');
                });
            }
        });
    },
};

export default {
    actions
};
