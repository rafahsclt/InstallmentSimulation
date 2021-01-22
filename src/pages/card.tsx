import { CardContainer, CardContent } from '../styles/pages/Card'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import CardInput from '../components/CardInput'
import PrimaryButtonButton from '../components/PrimaryButton'

const Card: React.FC = () => {
    return (
        <CardContainer>
            <Header />
            <SubHeader />
            <CardContent>
                <section>
                    <h4>Insira os dados do cartão</h4>
                    <CardInput kindof="name" placeholder="Nome no cartão" />
                    <CardInput kindof="card" />
                    <CardInput kindof="date" />
                    <CardInput kindof="cvc" />
                </section>
                <section>
                    <h4>Faça o upload dos anexos do cartão</h4>
                    <CardInput kindof="photo" photoPlaceholder="Cartão de crédito (Frente)" />
                    <CardInput kindof="photo" photoPlaceholder="Cartão de crédito (Verso)" />
                    <CardInput kindof="photo" photoPlaceholder="Selfie com cartão de crédito" />
                    <span>Atenção: As fotos devem estar legíveis com todas as informações visíveis do cartão.</span>
                </section>
            </CardContent>
            <PrimaryButtonButton
                size="medium"
            >
                Continuar
            </PrimaryButtonButton>
        </CardContainer>
    )
}

export default Card