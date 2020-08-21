import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;

    svg{
      margin-right: 4px;
    }

    &:hover{
      color: #666;
    }
  }

`;

export const RepoInfo = styled.section`
  margin-top: 80px;

  header{
    display: flex;
    align-items: center;
    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div{
      margin-left: 24px;
      strong{
        font-size:36px;
        color: #3d3d4d;
      }
      p{
        font-size:18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul{
    display:flex;
    list-style: none;

    li{
      & + li {
        margin-left:80px;
      }
      strong{
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span{
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;
   /*estilo aplicado a todos os elementos (a), a partir do segundo*/
  a + a {
    margin-top:16px;
  }

  a{
    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;

    &:hover{
      transform: translateX(10px);
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
`;
