import { useStore } from 'react-redux'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import SolicitationBox from '../components/SolicitationBox'
import { SolicitationContainer } from '../styles/pages/Solicitation'
import PrimaryButton from '../components/PrimaryButton'

const Solicitation: React.FC = () => {
    const router = useRouter()
    const globalState = useStore()
    const store = globalState.getState()

    const cardFinal = store.card?.cardNumber.split('').splice(14, 6)

    return (
        <SolicitationContainer>
            <Header />
            <SubHeader />
            <h2>Solicitação Realizada com Sucesso</h2>
            <main>
                <h4>Resumo da Solicitação</h4>
                <article>
                    <SolicitationBox
                        kindOf="client"
                        title={store.client?.name}
                        value={store.client?.phone}
                    />
                    <SolicitationBox
                        kindOf="installment"
                        title="Taxa de Juros"
                        value={store.installment?.interest}
                        installmentColor="orange"
                    />
                </article>
                <article>
                    <SolicitationBox
                        kindOf="client"
                        title={cardFinal}
                        value={store.card?.expirationDate}
                        isCard={true}
                    />
                    <SolicitationBox
                        kindOf="installment"
                        title="Parcelas"
                        value={store.installment?.installment}
                        installmentColor="orange"
                    />
                </article>
                <article>
                    <SolicitationBox
                        kindOf="installment"
                        title="Valor Desejado"
                        value={store.installment?.totalValue}
                    />
                    <SolicitationBox
                        kindOf="installment"
                        title="Valor da Parcela"
                        value={store.installment?.installmentValue}
                    />
                </article>
            </main>
            <fieldset>
                <SolicitationBox
                    kindOf="installment"
                    title="Valor Total do Empréstimo"
                    value={store.installment?.totalValue}
                />
                <PrimaryButton
                    size="low-medium"
                    style={{ marginTop: 30, marginBottom: 30, fontSize: 24}}
                    onClick={() => router.push('/details')}
                >
                    Detalhes da Solicitação
                </PrimaryButton>
                <h4>O CredFica avaliará a solicitação</h4>
            </fieldset>
        </SolicitationContainer>
    )
}

export default Solicitation