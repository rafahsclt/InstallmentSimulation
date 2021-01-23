import { ICard } from './types'

export function saveCard(card: ICard | null) {
    return {
        type: 'SAVE_CARD',
        payload: {
            card
        }
    }
}