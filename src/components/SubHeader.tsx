import { SubHeaderContainer, Title } from '../styles/components/SubHeader'
import ConfirmationBox from './ConfirmationBox'

import plusIcon from '../assets/plus-icon.png'
import archiveIcon from '../assets/archive-icon.png'

interface SubHeaderProps {
    tableVisible?: boolean
}

const SubHeader: React.FC<SubHeaderProps> = ({ tableVisible = false }) => {
    return (
        <SubHeaderContainer>
            <div>
                <img src={plusIcon} alt="Plus-Icon" width={45} height={60} />
                <img src={archiveIcon} alt="Plus-Icon" width={90} height={110} />
                <Title>Simulação <br />de taxas</Title>
            </div>
            <div />
            {tableVisible &&
                <div>
                    <ConfirmationBox
                        title="Tabela"
                        value="Tabela Padrão"
                        size="small"
                        backColor="grey"
                    />

                </div>
            }
        </SubHeaderContainer>
    )
}

export default SubHeader