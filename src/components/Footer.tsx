import { FooterContainer } from '../styles/components/Footer'
import SecondaryButton from './SecondaryButton'
import Link from 'next/link'

interface IFooterInfo {
    name: string
    installments: number
    installmentValue: string
}

const Footer: React.FC<IFooterInfo> = ({ name, installments, installmentValue }) => {
    return (
        <FooterContainer>
            <span>Nome: {name}</span>
            <span>Parcelas: {installments}</span>
            <span>Valor da Parcela: {installmentValue}</span>

            <Link href="/client">
                <SecondaryButton>
                    Avançar
            </SecondaryButton>
            </Link>
        </FooterContainer>
    )
}

export default Footer