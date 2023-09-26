import React from 'react';
import './Loader.css'

interface Props {
    sx?: React.CSSProperties;
    children?: JSX.Element | JSX.Element[]
    customClass?: string
    items?: [{ icon?: string, text?: string, link: string }]
}

const Loader: React.FC<Props> = ({ sx, customClass }) => {

    const styles = {
        ...defaultStyles,
        ...sx
    };

    return <div className={(!!customClass ? customClass : "")} style={styles}>
        <div className='build-plot'>
            <div>
                <div className='brick slide-4'></div>
                <div className='brick slide-3'></div>
                <div className='brick slide-2'></div>
                <div className='brick slide-1'></div>
            </div>
            <div>
                <div className='brick slide-6'></div>
                <div className='brick slide-5'></div>
            </div>
        </div>
    </div>;
};

const defaultStyles: React.CSSProperties = {
    height: 'inherit',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

export default Loader;