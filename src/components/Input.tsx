import { InputHTMLAttributes } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { InputContainer } from '../styles/components/Input'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    kindof: 'currency' | 'cpf' | 'card'
}

const currencyMaskOptions = {
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

const Input: React.FC<InputProps> = ({ kindof, size, ...rest }) => {
    const currencyMask = createNumberMask(currencyMaskOptions)
    
    return (
        <InputContainer kindof={kindof}>
            {kindof === 'currency' &&
            <MaskedInput 
                kindof={kindof}
                placeholder="R$ 0,00"
                mask={currencyMask}
                {...rest}
            />
            }
            {kindof === 'cpf' &&
            <MaskedInput 
                kindof={kindof}
                placeholder="000.000.000-00"
                mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-',/\d/, /\d/]}
                {...rest}
            />
            }
        </InputContainer>
    )
}

export default Input