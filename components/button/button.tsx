import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Button: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <div>Button</div>;
}

export default Button;
