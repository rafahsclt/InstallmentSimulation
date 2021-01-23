import { useCallback, useState } from 'react'
import { CardContainer, CardContent } from '../styles/pages/Card'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'


import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import CardInput from '../components/CardInput'
import PrimaryButton from '../components/PrimaryButton'
import { saveCard } from '../store/modules/card/actions'

export type ICard = {
    cardName: string
    cardNumber: string
    expirationDate: string
    cardCVC: number
    cardFront: string
    cardBack: string
    cardSelfie: string
}

const Card: React.FC = () => {
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [cardCVC, setCardCVC] = useState(0)
    const [cardFront, setCardFront] = useState('')
    const [cardBack, setCardBack] = useState('')
    const [cardSelfie, setCardSelfie] = useState('')

    const router = useRouter()

    const dispatch = useDispatch()

    const handleSaveCard = useCallback(() => {
        const cardObject: ICard = {
            cardName,
            cardNumber,
            expirationDate,
            cardCVC,
            cardFront,
            cardBack,
            cardSelfie
        }

        dispatch(saveCard(cardObject))

        router.push('/confirmation')
    }, [dispatch, cardName, cardNumber, expirationDate, cardCVC, cardFront, cardBack, cardSelfie, router])

    return (
        <CardContainer>
            <Header />
            <SubHeader />
            <CardContent>
                <section>
                    <h4>Insira os dados do cartão</h4>
                    <CardInput kindof="name" placeholder="Nome no cartão" onChange={(e) => setCardName(e.target.value)}/>
                    <CardInput kindof="card" onChange={(e) => setCardNumber(e.target.value)}/>
                    <CardInput kindof="date" onChange={(e) => setExpirationDate(e.target.value)}/>
                    <CardInput kindof="cvc"  onChange={(e) => setCardCVC(Number(e.target.value))}/>
                </section>
                <section>
                    <h4>Faça o upload dos anexos do cartão</h4>
                    <CardInput kindof="photo" photoPlaceholder="Cartão de crédito (Frente)" onChange={(e) => setCardFront(e.target.value)}/>
                    <CardInput kindof="photo" photoPlaceholder="Cartão de crédito (Verso)" onChange={(e) => setCardBack(e.target.value)}/>
                    <CardInput kindof="photo" photoPlaceholder="Selfie com cartão de crédito" onChange={(e) => setCardSelfie(e.target.value)}/>
                    <span>Atenção: As fotos devem estar legíveis com todas as informações visíveis do cartão.</span>
                </section>
            </CardContent>
                <PrimaryButton
                    onClick={handleSaveCard}
                    size="medium"
                >
                    Continuar
            </PrimaryButton>

        </CardContainer>
    )
}

export default Card