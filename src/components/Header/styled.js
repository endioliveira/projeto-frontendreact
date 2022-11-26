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

  .cartQuantity {
    position: relative;
  }
  
  .cartLength {
    /* font-size: 1rem; */
    background-color: red;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
    top: 0;
    width: 20px;
    height: 20px;
    padding: 0;
    right: -10px;
    line-height: 1.2;
    position: absolute;
  }

`;

export const ContainerSidebar = styled.div`
  color: white;
  background: #070b34;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  right: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > img {
    position: fixed;
    /* background-color: #3c44ff;
background-image: linear-gradient(225deg, #3c44ff 0%, #784BA0 50%, #2B86C5 100%); */
    width: 20px;
    height: 20px;
    margin-top: 15px;
    margin-left: 115px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;

  .boxProducts {
    display: flex;
    border: 1px solid white;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .boxInfos {
    font-size: 0.8rem;
  }

`;
