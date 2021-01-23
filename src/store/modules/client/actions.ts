import { IClient } from './types'

export function saveSelectedClient(client: IClient | null) {
    return {
        type: 'SAVE_SELECTED_CLIENT',
        payload: {
            client
        }
    }
}