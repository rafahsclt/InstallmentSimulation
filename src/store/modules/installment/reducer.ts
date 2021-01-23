import { Reducer } from "redux"

import { IRow } from './types'

const INITIAL_STATE = null

const installmentInfo: Reducer<IRow | null> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SAVE_INSTALLMENT_TYPE': {
            console.log(action)
            const { installmentType } = action.payload

            if(installmentType) {
                return {
                    ...installmentType
                }
            }

            return null
        }
        default: {
            return state
        }
    }

    
}

export default installmentInfo