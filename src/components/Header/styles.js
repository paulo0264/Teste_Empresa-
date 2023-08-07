import styled from 'styled-components';

export const Container = styled.div`
  
  padding: 1.5rem;
  background-color: #fff;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(122, 23, 220);
  margin-right: 1rem;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }

`;

export const Links = styled.div`
  display: flex;

  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    margin-right: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #555;
    }
  }

  @media (max-width: 900px) {
    a {
      font-size: 16px;
    }
  }

`;

export const Banner = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;


