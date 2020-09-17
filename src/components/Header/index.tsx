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
        <div className="nav-bar">
          <LinkButton title="Templates" />
          <LinkButton title="Connect" />
          <LinkButton title="Pricing" />
          <LinkButton title="Help" />
          <LinkButton title="Blog" />
        </div>
      </div>
    </HeaderCustom>
  );
};

export default Header;
