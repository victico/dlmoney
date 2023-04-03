import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import profile from "./profile.module";
import bank from "./bank.module";
import exchange_rate from "./exchange_rate.module";
import account from "./account.module";
import bank_account from "./bank_account.module";
import bank_account_type from "./bank_account_type.module";
import coin_type from "./coin_type.module";
import document_type from "./document_type.module";
import ocupation from "./ocupation.module";
import operation from "./operation.module";
import country from "./country.module";
import department from "./department.module";
import province from "./province.module";
import district from "./district.module";
import peru_consult from "./peru_consult.module";
import user from "./user.module";
import fund_origin from "./fund_origin.module";
import report from "./report.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    htmlClass,
    config,
    breadcrumbs,
    profile,
    bank,
    exchange_rate,
    account,
    bank_account,
    bank_account_type,
    coin_type,
    document_type,
    ocupation,
    operation,
    country,
    department,
    province,
    district,
    peru_consult,
    user,
    fund_origin,
    report,
  }
});
