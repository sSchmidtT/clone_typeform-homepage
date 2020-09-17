import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { HeaderCustom } from './styles';

const Header: React.FC = () => {
  const { scrollYProgress} = useViewportScroll();
  const headerY = useTransform(scrollYProgress,
    [0.188, 0.198],
    ['0%', '-100%']);
    
  return (
    <HeaderCustom  style={{ y: headerY }}/>
  );
};

export default Header;
