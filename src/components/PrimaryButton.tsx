import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from '../styles/components/PrimaryButton'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size: 'small' | 'medium' | 'large'
}

const PrimaryButtonButton: React.FC<ButtonProps> = ({ size, children, ...rest }) => {
    return (
        <ButtonContainer
            size={size}
            {...rest}
        >
            {children}
        </ButtonContainer>
    )
}

export default PrimaryButtonButton