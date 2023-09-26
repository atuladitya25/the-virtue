import React, { useEffect, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import grasslandImage from '../../assets/image/grassland.jpg'
import skyImage from '../../assets/image/sky-background.jpg'

interface Props {
  sx?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[]
  customClass?: string
  icon: string
  items?: { icon?: string, text?: string, link: string }[]
}

const Header: React.FC<Props> = ({ sx, children, customClass, icon, items }) => {

  const [scrollState, setScrollState] = useState({
    margin: '12px 12px 0 12px',
    width: 'calc(100% - 24px)',
    borderRadius: '12px',
    height: '60px',
  });

  const [hideTitle, setHideTitle] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offset = Math.max(0, 12 - Math.floor(scrollTop / 16));
      const newMargin = `${offset}px ${offset}px 0 ${offset}px`;
      const newWidth = `calc(100% - ${offset * 2}px`;
      const newHeight = `${48 + offset}px`;

      if(offset === 0){
        setHideTitle(true)
      }
      else{
        setHideTitle(false)
      }

      setScrollState({
        margin: newMargin,
        width: newWidth,
        borderRadius: `${offset}px`,
        height: newHeight,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    ...defaultStyles,
    ...sx,
    margin: scrollState.margin,
    width: scrollState.width,
    borderRadius: scrollState.borderRadius,
    height: scrollState.height,
  };

  return <div className={(!!customClass ? customClass : "")} style={styles}>
    <div className='nav-site-info'>
      {/* <div className='img-box'><img className='logo-img' src={icon} /></div> */}
      <div className={'site-name-normal '+(hideTitle ? 'show-title': 'hide-title')}>The Virtue</div>
    </div>
    <div className={'site-name-bold '+(hideTitle ? 'hide-title': 'show-title')} style={boldTextStyle}>
      <div className='virtue'>The Virtue</div>
      <div className='tagline'> Blooming your Space experience </div>
      </div>
    <div>
      {children}</div>
    <div className='nav-items'>
      {items &&
        items.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.icon && <img src={item.icon} alt='Icon' />}
            {item.text}
          </Link>
        ))}
    </div>
  </div>;
};

const defaultStyles: React.CSSProperties = {
  backgroundColor: 'transparent',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  top: 0,
  zIndex: '50'
};

const boldTextStyle: React.CSSProperties = {
  backgroundImage: `url('${skyImage}')`
};

export default Header;