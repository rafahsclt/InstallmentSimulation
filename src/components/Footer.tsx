import { FooterContainer } from '../styles/components/Footer'
import SecondaryButton from './SecondaryButton'
import { useRouter } from 'next/router'

interface IFooterInfo {
    name: string
    installments: number
    installmentValue: string
}

const Footer: React.FC<IFooterInfo> = ({ name, installments, installmentValue }) => {
    const router = useRouter()
    return (
        <FooterContainer>
            <span>Nome: {name}</span>
            <span>Parcelas: {installments}</span>
            <span>Valor da Parcela: {installmentValue}</span>
            <SecondaryButton
                onClick={() => router.push('/client')}
            >
                Avançar
            </SecondaryButton>
        </FooterContainer>
    )
}

export default Footer