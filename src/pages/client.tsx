import { useState, useCallback } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { saveSelectedClient } from '../store/modules/client/actions'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Input from '../components/Input'

import { ClientContainer, ClientContent } from '../styles/pages/Client'
import PrimaryButtonButton from '../components/PrimaryButton'
import { IState } from '../store'

interface IClient {
    id: number
    name: string
    phone: string
    cpf: string
    bank: {
        label: string
        accountTypeLabel: string
        accountNumber: string
    }
}

const Client: React.FC = () => {
    const [clientExists, setClientExists] = useState<boolean>(true)
    const [clientCPF, setClientCPF] = useState('')
    const [formattedCPF, setFormattedCPF] = useState('')

    const dispatch = useDispatch()
    const foundClient = useSelector<IState, IClient>(state => state.client)

    const router = useRouter()

    const handleSearchClient = useCallback(() => {
        if (clientCPF) {
            axios.get(`/api/client/${clientCPF}`).then(response => {
                if (response.data.length !== 0) {
                    setClientExists(true)
                    const clientInfo = response.data[0] as IClient

                    const stringCpf = clientInfo.cpf
                    const CPFArray = []

                    stringCpf.split('').forEach((num, idx) => {
                        if (idx === 3 || idx === 6) CPFArray.push(`.${num}`)
                        else if (idx === 9) return CPFArray.push(`-${num}`)
                        else return CPFArray.push(`${num}`)
                    })

                    setFormattedCPF(CPFArray.join(''))

                    dispatch(saveSelectedClient(clientInfo))
                }
                else {
                    setClientExists(false)
                    dispatch(saveSelectedClient(null))
                    setFormattedCPF('')
                }
            })
        }
        else {
            setClientExists(false)
            dispatch(saveSelectedClient(null))
            setFormattedCPF('')
        }
    }, [axios, dispatch, clientCPF])

    return (
        <ClientContainer>
            <Header />
            <SubHeader />

            <ClientContent>
                <section>
                    <Input
                        kindof="cpf"
                        onChange={event => setClientCPF(event.target.value.replaceAll('.', '').replace('-', ''))}
                        style={{ width: 350 }}
                    />
                    <PrimaryButtonButton
                        size="small"
                        onClick={handleSearchClient}
                    >
                        Buscar
                    </PrimaryButtonButton>
                </section>

                {foundClient &&
                    <article>
                        <h3>Cliente Encontrado</h3>
                        <span>{formattedCPF}</span>
                        <p>{foundClient.name}</p>
                        <PrimaryButtonButton
                            size="medium"
                            onClick={() => router.push('/modality')}
                        >
                            Solicitar
                            </PrimaryButtonButton>
                    </article>
                }

                {!clientExists &&
                    <article>
                        <h4>Cliente</h4>
                        <h4>não</h4>
                        <h4>Encontrado</h4>
                    </article>
                }
            </ClientContent>
        </ClientContainer>
    )
}

export default Client