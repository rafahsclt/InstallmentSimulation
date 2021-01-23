import { combineReducers } from "redux";

import client from './client/reducer'
import card from './card/reducer'
import table from './table/reducer'
import installment from './installment/reducer'

export default combineReducers({
    client: client,
    table: table,
    installment: installment,
    card: card
})