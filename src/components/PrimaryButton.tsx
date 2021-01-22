import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from '../styles/components/PrimaryButton'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size: 'small' | 'medium' | 'large'
    isDisabled?: boolean
}

const PrimaryButtonButton: React.FC<ButtonProps> = ({ size, isDisabled,children, ...rest }) => {
    return (
        <ButtonContainer
            size={size}
            isDisabled={isDisabled}
            {...rest}
        >
            {children}
        </ButtonContainer>
    )
}

export default PrimaryButtonButton