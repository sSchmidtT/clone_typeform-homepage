import React, { ButtonHTMLAttributes } from 'react';

import { Link } from './styles';

interface LinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const LinkButton: React.FC<LinkProps>  = ({title, ...rest}) => {
  return (
    <Link {...rest} >
      {title}
    </Link>
  );
};

export default LinkButton;
