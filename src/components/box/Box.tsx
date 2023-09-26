import React from 'react';
import './Box.css'

interface Props {
  sx?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[]
  customClass?: string
}

const Box: React.FC<Props> = ({ sx, children, customClass }) => {

  const styles = {
    ...defaultStyles,
    ...sx,
  };

  return <div className={(!!customClass ? customClass : "")} style={styles}>{children}</div>;
};

const defaultStyles: React.CSSProperties = {
  padding: '12px',
  borderRadius: '12px'
};

export default Box;