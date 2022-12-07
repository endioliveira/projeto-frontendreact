import styled from "styled-components";
import backgroundModel2 from "../assets/fundo-home2.png";

export const SectionHome = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background-image: url(${backgroundModel2});
  background-size: cover;
  height: 75vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;

  .typing {
    margin-top: 6rem;
    text-align: center;
    font-size: 7rem;
    margin-left: 5rem;
    padding: 3px;
    color: #ffff;
    text-shadow: 0 0 15px #fff;
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  h2 {
    color: #fff;
    font-size: 2rem;
  }
`;

export const ContainerProducts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 255px);
  justify-content: center;
  justify-items: center;
  padding: 30px;
  grid-gap: 30px;
`;
