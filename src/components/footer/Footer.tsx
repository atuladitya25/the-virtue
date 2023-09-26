import React from 'react';
import './Footer.css'

interface Props {
  sx?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[]
  customClass?: string
  items?: [{ icon?: string, text?: string, link: string }]
}

const Footer: React.FC<Props> = ({ sx, customClass }) => {

  const styles = {
    ...defaultStyles,
    ...sx
  };

  return <div className={(!!customClass ? customClass : "")} style={styles}>
    
  </div>;
};

const defaultStyles: React.CSSProperties = {
  backgroundColor: '#1C110A',
  minHeight: '400px',
};

export default Footer;