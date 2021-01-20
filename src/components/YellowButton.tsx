import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from '../styles/components/Button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const YellowButton: React.FC<ButtonProps> = ({ children }) => {
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
}

export default YellowButton