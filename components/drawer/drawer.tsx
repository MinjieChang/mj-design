import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Drawer: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Drawer</>;
};

export default Drawer;
