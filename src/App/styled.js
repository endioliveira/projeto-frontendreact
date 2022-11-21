import styled from "styled-components";
import background from "../assets/fundo-home.png";

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;

  h2 {
    color: #fff;
  }
`;

export const SectionHome = styled.section`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 90px; */
  margin-bottom: 2rem;

  background-image: url(${background});
  background-size: cover;
  height: 75vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;

  .typing {

    margin-top: 6rem;
    text-align: center;
    font-size: 7rem;
    margin-left: 15rem;
    padding: 3px;
    color: #ffff;
    text-shadow: 0 0 15px #fff;
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
