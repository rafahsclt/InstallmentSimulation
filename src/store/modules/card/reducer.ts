import { Reducer } from "redux"

import { ICard } from './types'

const INITIAL_STATE = null

const cardInfo: Reducer<ICard | null> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SAVE_CARD': {
            const { card } = action.payload

            if(card) {
                return {
                    ...card
                }
            }

            return null
        }
        default: {
            return state
        }
    }

    
}

export default cardInfo