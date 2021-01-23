import { HeaderContainer } from '../styles/components/Header'
import { FaAlignJustify } from 'react-icons/fa'

import logoKlutch from '../assets/logo-klutch.png'

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <FaAlignJustify color="#fff" size={30} />
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