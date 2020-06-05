import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(to top, mediumblue, dodgerblue,deepskyblue );
  display: flex;  
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    width: 100%;
    max-width: 315px;
    text-align: center;
  
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;  
  }
  
  input {
    background: rgba(0,0,0,0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
    
    &::placeholder {
      color: rgba(255,255,255,0.7);
    }    
  }
  span {
    color: orange;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;    
  }
  
  img#logounivali {
    width: 200px;
    padding-bottom: 30px;  
  }
  
  #sports {    
    color: darkorange;
    font-size: 30px;
  }
  
  #reserve {
    color: #fff;
    font-size: 30px;
    font-weight: 100;
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    margin: 5px 0 0;
    height: 44px;
    background: darkblue;
    font-weight: bold;
    color: white;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    
    &:hover {
      background: ${darken(0.04, 'darkblue')};
    }    
  }
  
  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
    
    &:hover {
      opacity: 1;
    }
  }    
`;