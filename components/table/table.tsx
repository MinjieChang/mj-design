import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Table: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Table</>;
};

export default Table;
