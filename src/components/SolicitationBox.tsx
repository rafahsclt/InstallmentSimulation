import { FaCheck, FaCreditCard } from 'react-icons/fa'

interface SolicitationBoxProps {
    title: string
    value: string
    kindOf: 'client' | 'installment'
    installmentColor?: 'orange' | 'green'
    isCard?: boolean
}

import { SolicitationBoxContainer } from '../styles/components/SolicitationBox'

const SolicitationBox: React.FC<SolicitationBoxProps> = ({ title, value, kindOf, installmentColor = 'green', isCard = false }) => {
    return (
        <SolicitationBoxContainer
            kindOf={kindOf}
            installmentColor={installmentColor}
        >
            {isCard && <FaCreditCard size={52} color='#ef9c4b' />}
            <strong>{title}</strong>
            <section>
                <span>{value}</span>
                <FaCheck color="#228a95" size={32} />
            </section>
        </SolicitationBoxContainer>
    )
}

export default SolicitationBox