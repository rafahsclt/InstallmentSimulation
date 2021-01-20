import { useState } from 'react'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import YellowButton from '../components/YellowButton'
import Input from '../components/Input'
import { HomeContainer, HomeContent } from '../styles/pages/HomePage'

const Home:React.FC = () => {
  const [desiredValue, setDesiredValue] = useState(0)
  return (
    <HomeContainer>
      <Header />
      <SubHeader />
      <HomeContent>
        <h2>Valor Desejado</h2>
        <section>
          <Input 
            kindof="currency" 
            onChange={v => setDesiredValue(Number(v))}
          />
          <YellowButton
            
          >Calcular</YellowButton>
        </section>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home