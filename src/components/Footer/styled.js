import styled from "styled-components";

export const ContainerFooter = styled.div`
  margin: 10%;
  color: #fff;
  display: flex;
  flex-direction: column;

  img {
    width: 32px;
    height: 32px;
  }

  .section {
    display: flex;
    justify-content: center;
    justify-content: space-around;
  }

  h2 {
    margin-bottom: 4%;
  }

  .paragraph {
    width: 400px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  .about,
  .contact,
  .payment-methods {
    text-align: center;
    align-items: center;
  }

  .container-contact div, .payment-methods div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
  }

  .img {
    display: flex;
    justify-content: center;
  }

  .astronaut {
    width: 20%;
    height: 5%;
  }
`;
