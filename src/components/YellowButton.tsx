import { ButtonContainer } from '../styles/components/Button'

const YellowButton: React.FC = ({ children }) => {
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
}

export default YellowButton