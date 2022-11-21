import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  background:#070b34;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoSpaceZone = styled.img`
  width: 6%;
  padding: 3px;
  margin-left: 10px;
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 5px;

  input {
 color: #8707ff;
 border: 2px solid #8707ff;
 border-radius: 10px;
 padding: 10px 25px;
 background: transparent;
 max-width: 190px;
}

input:active {
 box-shadow: 2px 2px 15px #8707ff inset;
}

`;

export const ButtonPesquisar = styled.button`
  width: 5vw;
  height: 6vh;
  border-radius: 10px;
  border: none;
  padding: 5px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 25px;

  .icon-cart {
    filter: invert(100%);
  }

  .icon-cart:hover {
    cursor: pointer;
  }

  .icon-contact {
    filter: invert(100%);
  }
`;
