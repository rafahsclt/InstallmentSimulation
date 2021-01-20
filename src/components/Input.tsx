import { InputHTMLAttributes } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { InputContainer } from '../styles/components/Input'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    kindof: string
}

const defaultMaskOptions = {
      prefix: 'R$ ',
      suffix: '',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: '.',
      allowDecimal: true,
      decimalSymbol: ',',
      decimalLimit: 2, // how many digits allowed after the decimal
      integerLimit: 5, // limit length of integer numbers
      allowNegative: false,
      allowLeadingZeroes: false,
}

const Input: React.FC<InputProps> = ({ kindof, ...rest }) => {
    const currencyMask = createNumberMask(defaultMaskOptions)
    
    return (
        <InputContainer kindof={kindof}>
            <MaskedInput 
                kindof={kindof}
                placeholder="R$ 0,00"
                mask={currencyMask}
                {...rest}
            />
        </InputContainer>
    )
}

export default Input