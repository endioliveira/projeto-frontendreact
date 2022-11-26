import React from "react";
import { useState } from "react";
import {
  ContainerHeader,
  LogoSpaceZone,
  ContainerInput,
  ContainerIcons,
  ContainerSidebar,
  Content,
} from "./styled";
import logo from "../../assets/logo-spacezone1.png";
import carrinho from "../../assets/icon-carrinho.png";
// import atendimento from "../../assets/icon-atendimento.png";
// import Sidebar from "../Sidebar/Sidebar";

import iconX from "../../assets/x-icon.png";
// import { ContainerSidebar, Content } from "./styled";

import { priceFormatter } from "../../utils/priceFormatter";

export function Header(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  // const [price, setPrice] = useState(0);
  const closeSidebar = () => {
    setSidebar(false);
  };


  return (
    <ContainerHeader>
      <LogoSpaceZone src={logo} alt="logo spacezone" />

      <ContainerInput>
        <input
          type="text"
          placeholder="Digite um produto.."
          value={props.searchProducts}
          onChange={(event) => {
            props.setSearchProducts(event.target.value);
          }}
        />
      </ContainerInput>

      <ContainerIcons>
        {/* <img className="icon-contact" src={atendimento} alt="" /> */}
        <div className="cartQuantity">
          <img
            className="icon-cart"
            onClick={showSiderbar}
            src={carrinho}
            alt=""
          />
          <span className="cartLength">{props.cart.length}</span>
        </div>
        {sidebar && (
          <ContainerSidebar sidebar={sidebar}>
            <img src={iconX} alt="" onClick={closeSidebar} />
            <Content>
              {props.cart.map((item, index) => {
                return (
                  <div className="boxProducts" key={item.id}>
                    <img src={item.image} alt={item.name}/>
                    <div className="boxInfos">
                      <p>{item.name}</p>
                      <p>{priceFormatter.format(item.price)}</p>
                      <div className="boxQuantity">
                        <span onClick={() => props.removeQuantity(index)}> - </span>
                        <span>{item.quantity}</span>
                        <span onClick={() => props.addQuantity(index)}> + </span>
                        <span onClick={() => props.removeItem(index)}>Remover</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Content>
          </ContainerSidebar>
        )}
      </ContainerIcons>
    </ContainerHeader>
  );
}
