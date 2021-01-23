import { Reducer } from "redux"

import { IClient } from './types'

const INITIAL_STATE = null

const clientInfo: Reducer<IClient | null> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SAVE_SELECTED_CLIENT': {
            const { client } = action.payload

            if(client) {
                return {
                    ...client
                }
            }

            return null
        }
        default: {
            return state
        }
    }

    
}

export default clientInfo