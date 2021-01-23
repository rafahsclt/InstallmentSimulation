import { InputHTMLAttributes } from 'react'
import MaskedInput from 'react-text-mask'

import { InputContainer } from '../styles/components/CardInput'

interface CardInputProps extends InputHTMLAttributes<HTMLInputElement> {
    kindof: 'name' | 'cvc' | 'card' | 'date' | 'photo'
    photoPlaceholder?: string
}

const CardInput: React.FC<CardInputProps> = ({ kindof, photoPlaceholder, size, ...rest }) => {

    return (
        <InputContainer
            kindof={kindof}
        >
            {kindof === 'name' &&
                <input
                    type="text"
                    {...rest}
                />
            }
            {kindof === 'photo' &&
                    <label htmlFor="photo">
                    {photoPlaceholder}
                    <input
                        id="photo"
                        type="file"
                        {...rest}
                    />
                    <p>Adicionar</p>
                    </label>
            }
            {kindof === 'cvc' &&
                <MaskedInput
                    kindof={kindof}
                    placeholder="CVC"
                    mask={[/\d/, /\d/, /\d/]}
                    {...rest}
                />
            }
            {kindof === 'card' &&
                <MaskedInput
                    kindof={kindof}
                    placeholder="0000 0000 0000 0000"
                    mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                    {...rest}
                />
            }
            {kindof === 'date' &&
                <MaskedInput
                    kindof={kindof}
                    placeholder="Data de Validade"
                    mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                    {...rest}
                />
            }
        </InputContainer>
    )
}

export default CardInput