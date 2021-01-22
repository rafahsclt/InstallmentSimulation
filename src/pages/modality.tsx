import { ModalityContainer } from '../styles/pages/Modality'
import Link from 'next/link'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import PrimaryButtonButton from '../components/PrimaryButton'

const Modality: React.FC = () => (
    <ModalityContainer>
        <Header />
        <SubHeader />
        <main>
            <h2>Escolha a modalidade</h2>
            <Link href="/card">
                <PrimaryButtonButton
                    size="medium"
                >
                    Cartão de Crédito
                    </PrimaryButtonButton>
            </Link>
            <h3>Ou</h3>
            <section>
                <PrimaryButtonButton
                    size="medium"
                    isDisabled
                >
                    Crédito Consignado
                </PrimaryButtonButton>
                <span>Em breve...</span>
            </section>
        </main>
    </ModalityContainer>
)


export default Modality