import styled from 'styled-components';

export const Container = styled.div`
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
`;