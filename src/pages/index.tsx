import YellowButton from '../components/YellowButton'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import { HomeContainer, HomeContent } from '../styles/pages/HomePage'

const Home:React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <SubHeader />
      <HomeContent>
        <h2>Valor Desejado</h2>
        <section>
          <input type="text"/>
          <YellowButton>Calcular</YellowButton>
        </section>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home