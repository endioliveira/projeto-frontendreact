import React from 'react'
import iconX from "../../assets/x-icon.png"
import { Container, Content } from './styled'

const Sidebar = ({ active }, props) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <img src={iconX} alt="" onClick={closeSidebar} />  
      <Content>
      <p> {props.cart.map(item => (
        <div>{item.id}</div>
      ))} </p>
      </Content>
    </Container>
  )
}

export default Sidebar