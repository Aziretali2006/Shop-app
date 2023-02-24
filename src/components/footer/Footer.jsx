
import React from 'react';
import { Link } from 'react-router-dom';
import { aboutCompany, forBuyerList, partnerList, socielNet } from '../../utils/List';
import Container from '../Container/Container';

import cls from "./Footer.module.scss";

function Footer() {
  return (
    <footer>
      <Container>
        <div className={cls.footer}> 
          <ul>
            <h2>For Buyers</h2>
              {
                forBuyerList.map(item => (
                  <li key={item.id}>
                    <Link to={""}>
                      {item.caption}
                    </Link>
                  </li>
                ))
              }
          </ul>

          <ul>
            <h2>Partner</h2>
              {
                  partnerList.map(item => (
                    <li key={item.id}>
                      <Link to={""}>
                        {item.caption}
                      </Link>
                    </li>
                  ))
              }
          </ul>

          <ul>
            <h2>About</h2>
              {
                aboutCompany.map(item => (
                  <li key={item.id}>
                    <Link to={""}>
                      {item.caption}
                    </Link>
                  </li>
                ))
              }
          </ul>

          <ul>
            <h2>Sociel Network</h2>
              {
                socielNet.map(item => (
                  <li key={item.id}>
                    <Link to={""}>
                      {item.caption}
                    </Link>
                  </li>
                ))
              }
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;