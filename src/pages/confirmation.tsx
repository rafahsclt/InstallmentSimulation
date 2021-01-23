import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import ConfirmationBox from '../components/ConfirmationBox'
import Header from '../components/Header'
import PrimaryButton from '../components/PrimaryButton'
import SubHeader from '../components/SubHeader'
import { IState } from '../store'
import { IRow } from '../store/modules/table/types'

import { ConfirmationContainer } from '../styles/pages/Confirmation'
import { Table, TableBodyRow } from '../styles/pages/Confirmation'

export const Confirmation: React.FC = () => {
    const [contractType, setContractType] = useState<'Manual' | 'Automatic'>('Manual')

    const installmentType = useSelector<IState, IRow>(state => state.installment)
    const bodyTable = useSelector<IState, IRow[]>(state => state.table)

    const router = useRouter()

    return (
        <ConfirmationContainer>
            <Header />
            <SubHeader tableVisible={true} />
            <main>
                <article>
                    <ConfirmationBox
                        title="Valor desejado"
                        value={installmentType?.totalValue}
                        backColor="green"
                    />
                    <ConfirmationBox
                        title="Valor do Empréstimo"
                        value={installmentType?.totalValue}
                        backColor="green"
                    />
                </article>
                <article>
                    <ConfirmationBox
                        title="Parcelas"
                        value={installmentType?.installment.toString()}
                    />
                    <ConfirmationBox
                        title="Valor da Parcela"
                        value={installmentType?.installmentValue.toString()}
                    />
                </article>
                <h4>Escolha o tipo de contrato</h4>
                <section>
                    <PrimaryButton
                        size="low-medium"
                        style={{ marginRight: 10 }}
                        revertColor={contractType === 'Automatic' ? false : true}
                        onClick={() => setContractType('Automatic')}
                    >
                        Automático
                    </PrimaryButton>
                    <PrimaryButton
                        size="low-medium"
                        style={{ marginRight: 10 }}
                        revertColor={contractType === 'Manual' ? false : true}
                        onClick={() => setContractType('Manual')}
                    >
                        Manual
                    </PrimaryButton>
                    <PrimaryButton
                        size="large"
                        onClick={() => router.push('/solicitation')}
                    >
                        Concluir
                    </PrimaryButton>
                </section>
                <Table>
                    <caption>Tabela Padrão</caption>
                    <thead>
                        <tr>
                            <th>Parcela</th>
                            <th>Juros da Parcela</th>
                            <th>Valor da Parcela</th>
                            <th>Valor Total</th>
                            <th>Comissão Parceiro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr />
                        {bodyTable.map((row: IRow) => (
                            <TableBodyRow
                                key={row.installment}
                            >
                                <td>{row.installment}</td>
                                <td>{row.interest}</td>
                                <td>{row.installmentValue}</td>
                                <td>{row.totalValue}</td>
                                <td>{row.comission}</td>
                            </TableBodyRow>
                        ))}
                    </tbody>
                </Table>
            </main>

        </ConfirmationContainer>
    )
}

export default Confirmation
