import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  background: #070b34;
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
    max-width: 500px;
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
  margin-top: 10px;

  .icon-cart {
    filter: invert(100%);
  }

  .icon-cart:hover {
    cursor: pointer;
  }

  .cartQuantity {
    position: relative;
  }

  .cartLength {
    position: absolute;
    font-size: 0.7rem;
    background-color: #8606fe;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
    top: 0;
    width: 18px;
    height: 17px;
    padding: 0;
    right: -10px;
    /* line-height: 1.2; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerSidebar = styled.div`
 
  color: white;
  background: rgb(7, 11, 52, 0.97);
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 450px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  > h3 {
    margin-top: 15px;
    margin-left: 5%;
    margin-bottom: 3%;
  }

  > img {
    position: fixed;
    width: 25px;
    height: 25px;
    margin-top: 17px;
    margin-left: 26rem;
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

overflow-y: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }

  height: 83%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .boxProducts {
    display: flex;
    margin-bottom: 2.3rem;
    width: 90%;
    font-size: 0.9rem;
    border-bottom: 1px solid #8606fe;
  }

  .boxProducts > img {
    margin-bottom: 2rem;
    width: 90px;
    height: 90px;
    border-radius: 0.5rem;
    background: rgb(84, 23, 162);
    background: linear-gradient(
      41deg,
      rgba(84, 23, 162, 1) 0%,
      rgba(67, 9, 226, 1) 100%
    );
  }

  .boxInfos {
    margin-left: 0.6rem;
  }

  .itemQuantity {
    margin: 18px;
    font-size: 1rem;
  }

  .cardInfoQuantityERemove {
    display: flex;
    flex-direction: column;
  }

  .cardInfosQuantity {
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    border: 1px solid #8606fe;
    width: 6rem;
    height: 25px;
    border-radius: 7px;
    margin-top: 1rem;
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
    margin-top: 1px;
    margin-left: 4rem;
  }

  .removeItem:hover {
    cursor: pointer;
  }

  .price {
    font-size: 1rem;
    margin-left: 1rem;
    margin-top: 1.9rem;
  }

  > h2 {
    position: fixed;
    bottom: 0%;
    margin-bottom: 0.5rem; 
  }
`;
