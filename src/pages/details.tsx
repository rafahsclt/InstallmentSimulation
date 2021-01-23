import { DetailContainer, GeneralInfo, ModalSection, TitleSection, ValuesSection, YellowCard, BlueCard, RedCard } from '../styles/pages/Detail'
import { FaCreditCard, FaFileImage, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { useStore } from 'react-redux'

import Header from '../components/Header'
import archiveIcon from '../assets/archive-icon.png'

const Details: React.FC = () => {
    const globalState = useStore()
    const store = globalState.getState()

    return (
        <DetailContainer>
            <Header />
            <div>
                <img src={archiveIcon} alt="Archive-Icon" width={90} height={110} />
                <h1>Detalhe de <br />Solicitação</h1>
            </div>
            <main>
                <TitleSection>
                    <span>Solicitação Geranda por</span>
                    <strong>Sistema CredFica</strong>
                </TitleSection>

                <TitleSection>
                    <span>Fluxo de Solicitação:</span>
                    <strong>Manual</strong>
                </TitleSection>
            </main>
            <main>
                <ValuesSection>
                    <span>Valor Total</span>
                    <h3>{store.installment?.totalValue}</h3>
                    <span></span>
                </ValuesSection>
                <ValuesSection>
                    <span>Valor a Depositar</span>
                    <h3>{store.installment?.totalValue}</h3>
                    <span></span>
                </ValuesSection>
                <ModalSection>
                    <p>Modalidade:</p>
                    <h4>Cartão de Crédito <FaCreditCard size={26} color='#ef9c4b' /></h4>
                    <span>Número do Cartão : {store.card?.cardNumber}</span>
                    <span>Validade: {store.card?.expirationDate} --- CVC: {store.card?.cardCVC}</span>
                    <span>{store.installment?.installment} parcela de <strong>{store.installment?.installmentValue}</strong></span>
                    <span>Tabela: Tabela Padrão</span>
                </ModalSection>
            </main>
            <main>
                <ValuesSection>
                    <span>Frente do Cartão</span>
                    <FaFileImage color="#ef9c4b" size={90} />
                    <h5>Ver Comporvante</h5>
                </ValuesSection>
                <ValuesSection>
                    <span>Verso do Cartão</span>
                    <FaFileImage color="#ef9c4b" size={90} />
                    <h5>Ver Comporvante</h5>
                </ValuesSection>
                <ModalSection>
                    <p>Informações do cliente:</p>
                    <span>Nome: {store.client?.name}</span>
                    <span>CPF: {store.client?.cpf}</span>
                    <span>Agencia: {store.client?.name}</span>
                    <span>Banco: {store.client?.bank.label}</span>
                    <span>Tipo de Conta: {store.client?.bank.accountTypeLabel}</span>
                    <span>Número da Conta: {store.client?.bank.accountNumber}</span>
                </ModalSection>
            </main>
            <main>
                <ValuesSection>
                    <span>Selfie com Cartão</span>
                    <FaFileImage color="#ef9c4b" size={90} />
                    <h5>Ver Comporvante</h5>
                </ValuesSection>
                <GeneralInfo>
                    <p>Informações Gerais</p>
                    <YellowCard>
                        <FaExclamationCircle size={24} color="#fff" />
                        <span>Aguardando</span>
                    </YellowCard>
                    <BlueCard>
                        <FaCheckCircle size={24} color="#fff" />
                        <span>Pré Aprovar</span>
                    </BlueCard>
                    <RedCard>
                        <FaExclamationCircle size={24} color="#fff" />
                        <span>Reprovar</span>
                    </RedCard>
                </GeneralInfo>
            </main>
        </DetailContainer>
    )
}

export default Details