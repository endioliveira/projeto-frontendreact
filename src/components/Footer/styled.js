import styled from "styled-components";

export const ContainerFooter = styled.div`
  margin-top: 5%;
  color: #fff;
  display: flex;
  margin-bottom: 2%;

  .iconsSocial {
    width: 28px;
    height: 28px;
  }

  .section {
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }

  .about {
    margin-bottom: 20px;
  }

  .about, .contact {
    margin-left: 25%;
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

  .container-contact div {
    display: flex;
    gap: 3%;
  } 

  .astronaut {
    width: 35%;
    margin-left: 50%;
  }
`;
