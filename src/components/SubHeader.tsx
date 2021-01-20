import { SubHeaderContainer, Title } from '../styles/components/SubHeader'

import plusIcon from '../assets/plus-icon.png'
import archiveIcon from '../assets/archive-icon.png'

const SubHeader:React.FC = () => {
    return (
        <SubHeaderContainer>
            <img src={plusIcon} alt="Plus-Icon" width={60} height={70} />
            <img src={archiveIcon} alt="Plus-Icon" width={110} height={120} />
            <Title>Simulação <br/>de taxas</Title>
        </SubHeaderContainer>
    )
}

export default SubHeader