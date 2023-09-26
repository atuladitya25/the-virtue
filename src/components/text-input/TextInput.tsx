import React from 'react';
import './TextInput.css'

interface Props {
  sx?: React.CSSProperties;
  customClass?: string;
  id: string;
  onChange? : (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Footer: React.FC<Props> = ({ sx, customClass, id, onChange }) => {

  const styles = {
    ...defaultStyles,
    ...sx
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(onChange) {
        onChange(event)
    }
  }

  return <input type='text' id={id ?? ''} className={(!!customClass ? customClass : "")} style={styles} onChange={handleOnChange}/>;
};

const defaultStyles: React.CSSProperties = {
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid lightgray',
    borderRadius: '1px'
};

export default Footer;