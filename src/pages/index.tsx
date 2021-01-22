import { useState, useCallback } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import OrangeButton from '../components/OrangeButton'
import Input from '../components/Input'
import Footer from '../components/Footer'
import { HomeContainer, HomeContent, Table } from '../styles/pages/HomePage'

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

const Home:React.FC = () => {

  const [desiredValue, setDesiredValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [availableTable, setAvailableTable] = useState<IRow[]>([])
  const [selectedRow, setSelectedRow] = useState()

  const fillTable = useCallback((
    installments: number,
    initialInterest: number, 
    interestOfInterest: number,
    desiredValue: number
      ) => {
        const bodyTable: IRow[] = [] 

        for(var x = 1; x <= installments; x++) {
          const percentageOfInterest = initialInterest + interestOfInterest * (x - 1)
          const interestMultiplier = (percentageOfInterest / 100) + 1
          const total = (desiredValue * interestMultiplier)

          const row: IRow = {
            installment: x,
            interest: `${percentageOfInterest.toFixed(2)} %`,
            installmentValue: `R$ ${((desiredValue / x) * interestMultiplier).toFixed(2)}`,
            totalValue: `R$ ${total.toFixed(2)}`,
            comission: `R$ ${(total - desiredValue).toFixed(2)}`
          }

          setAvailableTable(state => [...state, row])
      }
  },[availableTable, setAvailableTable])

  const caculateValue = useCallback(async () => {
    const value = Number(desiredValue.replace('R$ ', '').replace('.', '').replace(',', '.'))
    if(value > 10000 || value < 300) {
      setErrorMessage('Valor deve ser maior que 300 e menor que 10.000')
    } else {
      setErrorMessage('')

      const { data } = await axios.get('/api/table')
      const tableInfo = data as ITableInfo

      fillTable(tableInfo.installments, tableInfo.initialInterest, tableInfo.interestOnInterest, value)
    }
  }, [desiredValue])

  return (
    <HomeContainer>
      <Header />
      <SubHeader />
      <HomeContent>
        <h2>Valor Desejado</h2>
        <span>{errorMessage}</span>
        <section>
          <Input 
            kindof="currency" 
            onChange={v => setDesiredValue(v.target.value)}
          />
          <OrangeButton
            onClick={caculateValue}
          >
            Calcular
          </OrangeButton>
        </section>
        <Table>
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
            {availableTable.forEach((row: IRow) => (
              <tr key={row.installment}>
                <td>{row.installment}</td>
                <td>{row.interest}</td>
                <td>{row.installmentValue}</td>
                <td>{row.totalValue}</td>
                <td>{row.comission}</td>
              </tr>
            ))}
            <tr onClick={() => {}}>
              <td>1</td>
              <td>15%</td>
              <td>R$ 150,02</td>
              <td>R$ 150,03</td>
              <td>2%</td>
            </tr>
          </tbody>
        </Table>
      </HomeContent>
      <Footer />
    </HomeContainer>
  )
}

export default Home