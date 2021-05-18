import styled from 'styled-components';

const Card = styled.div`
  flex-flow: column wrap;
  justify-content: stretch;
  align-items: center;
  text-align: center;
  max-width: 290px;
  min-height: 380px;
  box-sizing: border-box;
  padding:0.714rem;
  img {
    display: block;
    max-width: 100%;
    width: 60%;
    margin: 0 auto;
  }
  h3{
    font-size: 1.05rem;
    line-height: 1.2287;
    text-overflow: ellipsis;
    color: #333;
    font-weight: 500;
  }
  span{
    font-size: 2rem;
    color:#333;
  }
`;

export default Card;
