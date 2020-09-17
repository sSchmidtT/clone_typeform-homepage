import React, { AnchorHTMLAttributes } from 'react';

import { Link } from './styles';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
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
