import React from "react";
import { ContainerFooter } from "./styled";
import imgEmail from "../../assets/icon-email.png"
import iconInsta from "../../assets/instagram.png"
import creditCard  from "../../assets/cartao-credito.png"
import pix  from "../../assets/pix.png"
import onlinepayment  from "../../assets/pagamento-online.png"
import astronaut from "../../assets/mascote-astronauta.png"

export function Footer() {
    return (
    <ContainerFooter>
        <div className="section">
            <section className="contact">
                <h2>Entre em contato!</h2>
                <div className="container-contact">
                    <div>
                        <img src={imgEmail} alt=""/>
                        <span>eomedeiros21@gmail.com</span>
                    </div>
                    <div>
                        <img src={iconInsta} alt=""/>
                        <span>@medeiros_eo</span>
                    </div>
                </div>
            </section>
            <section className="about">
                <h2>Sobre a SpaceZone</h2>
                <p className="paragraph">Lojinha de camisetas com tema espacial com um toque de fofura, desenvolvida por Endi Oliveira no curso da Labenu utilizando React. </p>
            </section>

            <section className="payment-methods">
                <h2>Formas de Pagamento</h2>
                <div>
                    <img src={creditCard} alt=""/>
                    <img src={pix} alt=""/>
                    <img src={onlinepayment} alt=""/>
                </div>
            </section>
        </div>

        <div className="img">
            <img className="astronaut" src={astronaut} alt=""/>
        </div>
            

        
    </ContainerFooter>
    )
}