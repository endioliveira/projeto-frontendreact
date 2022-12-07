import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  background: #070b34;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoSpaceZone = styled.img`
  margin-top: 1px;
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

  /* input:active {
    box-shadow: 2px 2px 15px #8707ff inset;
  } */
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
  margin-top: 10px;

  .icon-cart {
    filter: invert(100%);
  }

  .icon-cart:hover {
    cursor: pointer;
  }

  .icon-contact {
    filter: invert(100%);
    position: relative;
  }

  .icon-contact:hover {
    cursor: pointer;
  }

  /* .contact > span {
    font-size: 0.8rem;
    position: absolute;
    bottom: 0;
    right: 60px;
    color: white;
    display: none;
  } */

  /* .contact:hover > span{
    display: block;
  } */

  .cartQuantity {
    position: relative;
  }

  .cartLength {
    font-size: 0.8rem;
    background-color: #8606fe;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
    top: 0;
    width: 15px;
    height: 15px;
    padding: 0;
    right: -10px;
    line-height: 1.2;
    position: absolute;
  }
`;

export const ContainerSidebar = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }


  color: white;
  background: #070b34;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 400px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  > h3 {
    text-align: center;
    margin-top: 15px;
    margin-right: 40%;

  }
  > img {
    position: fixed;
    width: 20px;
    height: 20px;
    margin-top: 15px;
    margin-left: 160px;
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
  margin-top: 30px;


  .boxProducts {
    display: flex;
    padding: 2px;
    margin: 1rem;
    width: 90%;
    justify-content: space-between;
  }

  img {
    width: 90px;
    height: 90px;
  }

  .boxInfos {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  .boxQuantity {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    margin-left: 20px;
    justify-content: center;
  }
  
  .itemQuantity {
    margin: 20px;
    font-size: 0.8rem;
  }

  .cardInfosQuantity {
    border: 1px solid #8606fe;
    width: 8rem;
    border-radius: 7px;
    padding: 2px;
  }

  .defineQuantity {
    font-size: 1rem;
    font-weight: bold;
  }

  .defineQuantity:hover {
    cursor: pointer;
    color: #8606fe;
  }

  .removeItem {
    width: 20px;
    height: 20px;
    margin-top: 4px;
    margin-left: 10px;
  }

  .removeItem:hover {
    cursor: pointer;
  }
`;
