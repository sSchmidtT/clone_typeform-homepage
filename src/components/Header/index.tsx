import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { HeaderCustom } from './styles';
import imgLogo from '../../assets/image/pngwave.png';
import LinkButton from '../LinkButton';

const Header: React.FC = () => {
  const { scrollYProgress} = useViewportScroll();
  const headerY = useTransform(scrollYProgress,
    [0.188, 0.198],
    ['0%', '-100%']);
    
  return (
    <HeaderCustom  style={{ y: headerY}}>
      <div className="header-container">
        <div style={{width:'30%'}}>
          <img src={imgLogo} alt="Logo" style={{width:'40%', alignItems: 'center', justifyContent: 'center'}}/>
        </div>
        <nav className="nav-bar">
            <ul className="menu">
                <li><LinkButton title="Templates" href="#" /></li>
                <li><LinkButton title="Connect" href="#"/></li>
                <li><LinkButton title="Pricing" href="#"/></li>
                <li><LinkButton title="Help" href="#"/></li>
                <li><LinkButton title="Blog" href="#"/></li>
            </ul>
          
        </nav>
      </div>
    </HeaderCustom>
  );
};

export default Header;
