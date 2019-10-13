import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

//variables
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3 rem;
    text-transform: capitalize ;
  }
`

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar- navbar-expand-sm navbar -dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/cell_phone_icon Creative
        Common (Attribution 3.0 Unported) ;
        https://www.iconfinder.com/Makoto_msk */}
        {/* display the logo */}
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>

        {/* unorder list */}
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        {/* Cart */}
        <Link to="/cart" className= "ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
       
      </NavWrapper>
    );
  }
}



export default Navbar;
