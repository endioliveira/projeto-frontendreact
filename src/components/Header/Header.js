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
import atendimento from "../../assets/icon-atendimento.png";
import iconX from "../../assets/x-icon.png";
import remove from "../../assets/remove-icon.png";

import { priceFormatter } from "../../utils/priceFormatter";

export function Header(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

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
        <div className="contact">
          {/* <span className="contactEmail">medeiros_eo</span> */}
          <img className="icon-contact" src={atendimento} alt="" />
        </div>
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
            <h3>Carrinho de Compras</h3>

            <Content>
              {props.cart.map((item, index) => {
                return (
                  <div className="boxProducts" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="boxInfos">
                      <p>{item.name}</p>
                      <p>{priceFormatter.format(item.price)}</p>
                      <div className="boxQuantity">
                        <div className="cardInfosQuantity">
                          <span className="defineQuantity" onClick={() => props.removeQuantity(index)}>
                            -
                          </span>
                          <span className="itemQuantity">{item.quantity}</span>
                          <span className="defineQuantity" onClick={() => props.addQuantity(index)}>
                            +
                          </span>
                        </div>
                      <div className="remove">
                        <img
                          className="removeItem"
                          src={remove}
                          onClick={() => props.removeItem(index)}
                          alt=""
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <h2>Total do carrinho: {priceFormatter.format(props.totalOfProducts)}</h2>

            </Content>
          </ContainerSidebar>
        )}
      </ContainerIcons>
    </ContainerHeader>
  );
}
