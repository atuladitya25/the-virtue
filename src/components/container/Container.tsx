import React from 'react';
import './Container.css'

interface Props {
  sx?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[]
  customClass?: string
}

const Container: React.FC<Props> = ({ sx, children, customClass }) => {

  const styles = {
    ...defaultStyles,
    ...sx,
  };

  return <div className={(!!customClass ? customClass : "")} style={styles}>{children}</div>;
};

const defaultStyles: React.CSSProperties = {
  padding: '12px'
};

export default Container;