import React from "react";
import { useState } from "react";
import {
  ContainerHeader,
  LogoSpaceZone,
  ContainerInput,
  ContainerIcons,
} from "./styled";
import logo from "../../assets/logo-spacezone1.png";
import carrinho from "../../assets/icon-carrinho.png";
import atendimento from "../../assets/icon-atendimento.png";
import Sidebar from "../Sidebar/Sidebar";

export function Header(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

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
        <img className="icon-contact" src={atendimento} alt=""/>
        <img className="icon-cart" onClick={showSiderbar} src={carrinho} alt="" />
        {sidebar && <Sidebar active={setSidebar} cart={props.cart} />}
      </ContainerIcons>
        <p> {props.cart.map(item => (
        <div>{item.id}</div>
      ))} </p>
    </ContainerHeader>
  );
}
