import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const REPORT_SBS_COMPLETE_GET_PAGINATED = "report_sbs_get_all";

const actions = {
    [REPORT_SBS_COMPLETE_GET_PAGINATED](_, query = '') {
        return new Promise((resolve, reject) => {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/report-sbs", query)
                .then(( { data } ) => {
                    resolve(data);
                })
                .catch(() => {
                    reject('Ocurrió un error desconocido al intentar mostrar las operaciones.');
                });
            }
        });
    },
};

export default {
    actions
};
