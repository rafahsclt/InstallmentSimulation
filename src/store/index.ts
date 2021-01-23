import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './modules/rootReducer'
import { IClient } from './modules/client/types'
import { IBodyTable } from './modules/table/types'
import { IRow } from './modules/installment/types'


export interface IState {
    client: IClient,
    table: IBodyTable,
    installment: IRow
}

const makeStore = () =>  {
    const store = createStore(rootReducer)

    return store
}

export default createWrapper(makeStore, { debug: false })