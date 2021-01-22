import { useState, useCallback } from 'react'
import axios from 'axios'
import Link from 'next/link'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Input from '../components/Input'

import { ClientContainer, ClientContent } from '../styles/pages/Client'
import PrimaryButtonButton from '../components/PrimaryButton'

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
    const [foundClient, setFoundClient] = useState<IClient | undefined>()
    const [clientExists, setClientExists] = useState<boolean>(true)
    const [clientCPF, setClientCPF] = useState('')
    const [formattedCPF, setFormattedCPF] = useState('')

    const handleSearchClient = async () => {
        const { data } = await axios.get(`/api/client/${clientCPF}`)

        if (data.length !== 0) {
            setClientExists(true)
            const clientInfo = data[0] as IClient

            const stringCpf = clientInfo.cpf
            const CPFArray = []

            stringCpf.split('').forEach((num, idx) => {
                if (idx === 3 || idx === 6) CPFArray.push(`.${num}`)
                else if (idx === 9) return CPFArray.push(`-${num}`)
                else return CPFArray.push(`${num}`)
            })

            setFormattedCPF(CPFArray.join(''))

            setFoundClient(clientInfo)
        }
        else {
            setClientExists(false)
            setFoundClient(undefined)
            setClientCPF('')
            setFormattedCPF('')
        }

    }

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
                        <Link href="/modality">
                            <PrimaryButtonButton
                                size="medium"
                                onClick={() => { }}
                            >
                                Solicitar
                    </PrimaryButtonButton>
                        </Link>
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