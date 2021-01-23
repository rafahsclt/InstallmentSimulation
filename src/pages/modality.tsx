import { ModalityContainer } from '../styles/pages/Modality'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import PrimaryButton from '../components/PrimaryButton'

const Modality: React.FC = () => {
    const router = useRouter()

    return (
        <ModalityContainer>
            <Header />
            <SubHeader />
            <main>
                <h2>Escolha a modalidade</h2>
                    <PrimaryButton
                        onClick={() => router.push('/card')}
                        size="medium"
                    >
                        Cartão de Crédito
                    </PrimaryButton>
                <h3>Ou</h3>
                <section>
                    <PrimaryButton
                        size="medium"
                        isDisabled
                    >
                        Crédito Consignado
                </PrimaryButton>
                    <span>Em breve...</span>
                </section>
            </main>
        </ModalityContainer>
    )
}


export default Modality