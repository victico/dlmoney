import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const DOCUMENT_TYPES_GET_ALL = "document_types_get_all";

const actions = {
    [DOCUMENT_TYPES_GET_ALL](_) {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/document-types")
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar los tipos de documento.');
                });
            }
        });
    },
};

export default {
    actions
};
