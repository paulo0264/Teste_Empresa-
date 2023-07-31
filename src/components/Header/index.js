import { Container, Menu, Logo, Links, Banner } from './styles'

import slide from '../assets/images/slide.png'

const Header = () => {


  return (
      <>
        <Container>
          <Menu>
              <Logo>MARKET</Logo>
            <Links>
              <a href="/pages/Carrinho">Produtos</a>
              <a href="/link2">Contato</a>
              
            </Links>
          </Menu>
        </Container>
        <Banner src={slide} alt="Banner" />
        
      </>
  )
}

export default Header