import styled from "styled-components";

export const Cards = styled.section`
  position: relative;

  .cardContainer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #3c44ff;
    background-image: linear-gradient(
      225deg,
      #3c44ff 0%,
      #784ba0 50%,
      #2b86c5 100%
    );

    border-radius: 20px;
    transition: all 0.3s;
    z-index: -1;
  }

  .cardRadius {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 420px;
    background-color: #f5f5f5;
    border-radius: 20px;
    transition: all 0.2s;
    padding: 20px;
  }

  :hover .cardContainer {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
    width: calc(100% + 5px);
    height: calc(100% + 5px);
  }

  .cardImg {
    background: rgb(84, 23, 162);
    background: linear-gradient(
      41deg,
      rgba(84, 23, 162, 1) 0%,
      rgba(67, 9, 226, 1) 100%
    );

    height: 55%;
    width: 100%;
    border-radius: 0.5rem;
    transition: 0.3s ease;
  }

  .boxInfo {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .cardInfo {
    padding-top: 10%;
    width: 100%;
    flex: 1;
  }

  .cardButton > img {
    width: 15px;
    height: 15px;
  }

  .cardFooter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-top: 5px;
    border-top: 1px solid #ddd;
  }

  .textTitle {
    margin: 2% 0;
    font-weight: 700;
    font-size: 0.9em;
    line-height: 1.2;

    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .textBody {
    margin: 5% 0;
    font-size: 0.7em;

    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .cardButton {
    border: 1px solid #252525;
    display: flex;
    margin-top: 4px;
    padding: 0.3em;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    align-items: center;
  }

  .cardButton:hover {
    border: 1px solid #5316a5;
    background-color: #5316a5;
    color: #f5f5f5;
  }

  .cardButton:hover .svgIcon {
    filter: invert(100%);
  }

  .cardRadius:hover {
    height: max-content;
  }

  .cardRadius:hover .cardInfo p {
    overflow: initial;
    text-overflow: initial;
    display: inline-block;
  }

  .svgIcon {
    margin-top: 2px;
  }

  .textAddToCart {
    font-size: 10px;
    margin-top: 0.1rem;
    margin-left: 3px;
  }
`;
