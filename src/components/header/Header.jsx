
import React from 'react';
import Container from '../Container/Container';
import Logo from '../logo/Logo';
import { AiOutlineShoppingCart , AiOutlineUserAdd } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { VscSignOut } from "react-icons/vsc";
import { Hooks } from '../../hooks';

import cls from "./Header.module.scss";

function Header() {
  const { actions } = Hooks.useLocation();
  const { currentUser , logOut } = Hooks.useUser();

  return (
    <header>
      <Container>
        <div className={cls.navbar}>
          <Logo />

          <div className={cls.navbar_icons}>
            {
              currentUser && (
                <React.Fragment>
                  <VscSignOut onClick={logOut}/>
                  <AiOutlineShoppingCart onClick={actions.goToCart}/>
                  <GrFavorite onClick={actions.goToFavorite}/>
                </React.Fragment>
              )
            }

            {!currentUser && <AiOutlineUserAdd onClick={actions.goToRegister}/>}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;
