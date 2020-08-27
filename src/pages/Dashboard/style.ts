import styled, { css } from 'styled-components';
import { shade } from 'polished'

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;

  font-size: 48px;
  color: #3a3a3a;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  border: 2px solid #fff;




  input{
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder{
      color: #a8a8b3;
    }

    ${
  (props) =>
    props.hasError &&
    css`
           border: 2px solid red;
        `
  }
  }
  button{
    width: 210px;
    height: 70px;
    background:#04d361;
    border-radius: 0px 5px 5px 0px;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  display: flex;
  flex-direction: column;



`;

export const Repository = styled.span`
  display:flex;

   /*estilo aplicado a todos os elementos (a), a partir do segundo*/
   & + & {
    margin-top:16px;
  }

  a{
    background: #FFF;
    border-radius: 5px;
    width: 90%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;

    &:hover{
      transform: scale(1.05);
    }

    img{
      width:64px;
      height:64px;
      border-radius: 50%;
    }

    div{
      margin-left: 16px;
      strong{
        font-size: 20px;
        color: #3D3D4D;
      }

      p{
        font-size: 18px;
        color: #A8A8B3;
      }


    }

    svg{
        margin-left: auto;
        color: #cbcbd6;
    }
  }
  button{
    width: 10%;
    background: red;
    color: white;
    border: none;
    border: 0;
    border-radius: 5px 5px 5px 5px;

    transition: transform 0.2s;


    &:hover{
      transform: scale(1.05);
      background: ${shade(0.2, "#04d361")};
    }
  }
`

export const Error = styled.span`
  display: block;
  color: red;

`;




