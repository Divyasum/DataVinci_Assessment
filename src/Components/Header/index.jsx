
import { MdMenu } from 'react-icons/md';
import { GoPerson } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import {
    Nav,
    Hamburger,
    ChooseManuka,
    Logo,
    Icons,
    
  
    Menu,
    BagWrapper,
    Badge,
  } from './styledComponent';
  
  const Header = () => {
    return (
      <Nav>
        <Hamburger>
        <MdMenu size={24} /></Hamburger>
        <ChooseManuka>WHICH MANUKA IS FOR ME</ChooseManuka>
  
        
  
        <Menu>
          <li>Shop</li>
          <li>Explore</li>
          </Menu>

          <Logo src="https://newzealandhoneyco.com/cdn/shop/files/new_zealand_honey_logo.svg?v=1746510803&width=300" alt="NZ Honey Logo" />
          <Menu>
          <li>About</li>
          <li>Rewards</li>
          <li>Contact</li>
        </Menu>
  
        <Icons>
          <CiSearch size={24} />
          </Icons>
          <GoPerson size={24} />
          <Icons>
          <BagWrapper>
            <PiShoppingBagLight size={24} />
            <Badge>0</Badge>
          </BagWrapper>
        </Icons>
      </Nav>
    );
  };
  
  export default Header;