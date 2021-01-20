import { HeaderContainer } from '../styles/components/Header'

import logoKlutch from '../assets/logo-klutch.png'

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <img 
                src={logoKlutch} 
                alt="logo" 
                color="#fff"
                width={120}
                height={30}
            />
        </HeaderContainer>
    )
}

export default Header