import { IRow } from './types'

export function saveInstallmentType(installmentType: IRow | null) {
    return {
        type: 'SAVE_INSTALLMENT_TYPE',
        payload: {
            installmentType
        }
    }
}