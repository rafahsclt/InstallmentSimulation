import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from '../styles/components/PrimaryButton'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size: 'small' | 'medium' | 'large' | 'low-medium'
    isDisabled?: boolean
    revertColor?: boolean
}

const PrimaryButton: React.FC<ButtonProps> = ({ size, isDisabled, revertColor = false,children, ...rest }) => {
    return (
        <ButtonContainer
            size={size}
            isDisabled={isDisabled}
            revertColor={revertColor}
            {...rest}
        >
            {children}
        </ButtonContainer>
    )
}

export default PrimaryButton