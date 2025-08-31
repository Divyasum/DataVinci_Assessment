import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;
export const Hamburger = styled.div`
@media (max-width:768px){
  display: flex;
  cursor: pointer;
}

  @media (min-width: 1024px) {
    display: none; 
  }
`;


export const ChooseManuka =styled.p`
@media (max-width:768px){
  display:none;
}

  @media (min-width: 1024px) {
    border : 2px solid black;
    border-radius: 30px;
    color: grey;
    padding: 10px; 
  }
`;

export const Logo = styled.img`
  height: 70px;
`;

export const Icons = styled.div`
@media (max-width:768px){
  display: flex;
  gap: 1rem;
  align-items: center;
}

  @media (min-width:1024px){
    display:none;
  }
  
`;


export const Menu = styled.ul`
@media (max-width:768px){
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
}

  @media (min-width: 1024px) {
    display: flex;
    gap: 2rem;
    list-style: none;
    position: static;
  }
`;
  
export const BagWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: #d79e3e; /* honey gold */
  color: white;
  border-radius: 50%;
  font-size: 12px;
  padding: 2px 6px;
  font-weight: bold;
`;