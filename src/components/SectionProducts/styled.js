import styled from "styled-components";

//SECTION PRODUTOS

export const Cards = styled.section`
  position: relative;

  .card-container {
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

  .card-radius {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 197px; */
    min-height: 420px;
    background-color: #f5f5f5;
    border-radius: 20px;
    transition: all 0.2s;
    padding: 20px;
  }

  :hover .card-container {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
    width: calc(100% + 5px);
    height: calc(100% + 5px);
  }

  /* .card-radius:hover {
    transform: scale(1.1);
    border-radius: 20px;
  } */

  .card-img {
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

  .box-info {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-info {
    padding-top: 10%;
    width: 100%;
    flex: 1;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-top: 5px;
    border-top: 1px solid #ddd;
  }

  /*Text*/
  .text-title {
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

  .text-body {
    margin: 5% 0;
    font-size: 0.7em;

    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /*Button*/
  .card-button {
    border: 1px solid #252525;
    display: flex;
    padding: 0.3em;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
  }

  .card-button:hover {
    border: 1px solid #5316A5;
    background-color: #5316A5;
  }

  .card-radius:hover {
    height: max-content;
  }

  .card-radius:hover .card-info p {
    overflow: initial;
    text-overflow: initial;
    display: inline-block;
  }
`;
