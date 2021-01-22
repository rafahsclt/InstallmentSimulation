import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from '../styles/components/SecondaryButton'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const SecondaryButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <ButtonContainer
            {...rest}
        >
            {children}
        </ButtonContainer>
    )
}

export default SecondaryButton