import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Modal: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Modal</>;
};

export default Modal;
