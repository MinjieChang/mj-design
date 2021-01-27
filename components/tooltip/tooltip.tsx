import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Tooltip: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Tooltip</>;
};

export default Tooltip;
