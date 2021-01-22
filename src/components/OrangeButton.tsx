import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from '../styles/components/Button'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean
}

const OrangeButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <ButtonContainer
            {...rest}
        >
            {children}
        </ButtonContainer>
    )
}

export default OrangeButton