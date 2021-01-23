import { Reducer } from "redux"

import { IBodyTable } from './types'

const INITIAL_STATE = []

const tableInfo: Reducer<IBodyTable> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAVE_TABLE': {
            const { table } = action.payload

            if(table.length === 0) return []

            return table
        }
        default: {
            return state
        }
    }


}

export default tableInfo