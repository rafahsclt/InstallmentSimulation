import { IBodyTable } from './types'

export function saveTable(table: IBodyTable) {
    return {
        type: 'SAVE_TABLE',
        payload: {
            table
        }
    }
}