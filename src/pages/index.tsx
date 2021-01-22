import { useState, useCallback } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import SecondaryButton from '../components/SecondaryButton'
import Input from '../components/Input'
import Footer from '../components/Footer'
import { HomeContainer, HomeContent, Table, TableBodyRow } from '../styles/pages/HomePage'

interface IRow {
  installment: number
  interest: string
  installmentValue: string
  totalValue: string
  comission: string
}

interface ITableInfo {
  id: number
  name: string
  installments: number
  initialInterest: number
  interestOnInterest: number
}

const Home: React.FC = () => {

  const [desiredValue, setDesiredValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [bodyTable, setBodyTable] = useState<IRow[]>([])
  const [tableName, setTableName] = useState('')
  const [selectedRow, setSelectedRow] = useState<IRow | undefined>()

  const fillTable = useCallback((
    installments: number,
    initialInterest: number,
    interestOfInterest: number,
    desiredValue: number
  ) => {
    for (var x = 1; x <= installments; x++) {
      const percentageOfInterest = initialInterest + interestOfInterest * (x - 1)
      const interestMultiplier = (percentageOfInterest / 100) + 1
      const total = (desiredValue * interestMultiplier)

      const row: IRow = {
        installment: x,
        interest: `${percentageOfInterest.toFixed(2).replace('.', ',')} %`,
        installmentValue: `R$ ${((desiredValue / x) * interestMultiplier).toFixed(2).replace('.', ',')}`,
        totalValue: `R$ ${total.toFixed(2).replace('.', ',')}`,
        comission: `R$ ${(total - desiredValue).toFixed(2).replace('.', ',')}`
      }

      setBodyTable(state => [...state, row])
    }
  }, [bodyTable, setBodyTable])

  const handleCaculateValue = useCallback(async () => {
    const value = Number(desiredValue.replace('R$ ', '').replace('.', '').replace(',', '.'))
    if (value > 10000 || value < 300) {
      setErrorMessage('Valor deve ser maior que 300 e menor que 10.000')
      setBodyTable([])
      setSelectedRow(undefined)
    } else {
      setErrorMessage('')
      setBodyTable([])
      setSelectedRow(undefined)

      const { data } = await axios.get('/api/table')
      const tableInfo = data as ITableInfo

      setTableName(tableInfo.name)
      fillTable(tableInfo.installments, tableInfo.initialInterest, tableInfo.interestOnInterest, value)
    }
  }, [desiredValue])

  const handleRowClick = useCallback((row: IRow) => {
    setSelectedRow(row)
  }, [])

  return (
    <HomeContainer footerVisible={!!selectedRow}>
      <Header />
      <SubHeader />
      <HomeContent>
        <h2>Valor Desejado</h2>
        <span>{errorMessage}</span>
        <section>
          <Input
            kindof="currency"
            onChange={event => setDesiredValue(event.target.value)}
          />
          <SecondaryButton
            onClick={handleCaculateValue}
          >
            Calcular
          </SecondaryButton>
        </section>
        {bodyTable.length !== 0 && (
          <>
            <Table>
              <caption>{tableName}</caption>
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
                    onClick={() => handleRowClick(row)}
                    isSelected={selectedRow?.installment === row.installment}
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
          </>
        )}
      </HomeContent>
      {selectedRow && <Footer name={tableName} installments={selectedRow.installment} installmentValue={selectedRow.installmentValue} />}
    </HomeContainer>
  )
}

export default Home