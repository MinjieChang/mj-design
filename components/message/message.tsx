import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Message: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Message</>;
};

export default Message;
