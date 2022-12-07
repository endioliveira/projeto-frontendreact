import React from "react";
import { ContainerFooter } from "./styled";
import imgEmail from "../../assets/icon-email.png";
import iconInsta from "../../assets/instagram.png";
import astronaut from "../../assets/mascote-astronauta.png";

export function Footer() {
  return (
    <ContainerFooter>
      <div className="section">
        <section className="about">
          <h2>Sobre a SpaceZone</h2>
          <p className="paragraph">
            Lojinha de camisetas com tema espacial com um toque de fofura,
            desenvolvida por Endi Oliveira no curso da Labenu utilizando React.{" "}
          </p>
        </section>

        <section className="contact">
          <h2>Entre em contato!</h2>
          <div className="container-contact">
            <div>
              <img className="iconsSocial" src={imgEmail} alt="ícone do e-mail"/>
              <span>eomedeiros21@gmail.com</span>
            </div>
            <div>
                  <img className="iconsSocial" src={iconInsta} alt="ícone do instagram"/>
                  <span>@medeiros_eo</span>
            </div>
          </div>
        </section>
      </div>

      <div className="img">
        <img className="astronaut" src={astronaut} alt="" />
      </div>
    </ContainerFooter>
  );
}
