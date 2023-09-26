import React, { useEffect, useState } from 'react';
import './Caraousel.css'

interface Props {
    sx?: React.CSSProperties;
    children: JSX.Element[]
    customClass?: string;
    rotationTime?: number;
}

const Caraousel: React.FC<Props> = ({ sx, children, customClass, rotationTime = 5000 }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
        }, rotationTime);

        return () => clearInterval(interval);
    }, [children.length, rotationTime]);

    const styles = {
        ...defaultStyles,
        ...sx,
    };

    return (
        <div className={customClass ?? ''} style={styles}>
          <div style={currentStyle}>{children[activeIndex]}</div>
          {/* <div style={nextStyle}>{children[(activeIndex+1)%children.length]}</div> */}
        </div>
      );
};

const defaultStyles: React.CSSProperties = {
    position: 'relative',
    height : 'fit-content'
};

const currentStyle: React.CSSProperties = {
    height: 'fit-content',
    opacity: '1',
};

export default Caraousel;