import React from 'react';
import './ContactUs.css'
import TextInput from '../../../components/text-input/TextInput';

interface Props {
    sx?: React.CSSProperties;
    children?: JSX.Element | JSX.Element[]
    customClass?: string
    items?: [{ icon?: string, text?: string, link: string }]
}

const ContactUs: React.FC<Props> = ({ sx }) => {

    const styles = {
        ...defaultStyles,
        ...sx
    };

    return <div style={styles}>
        <div className='contact-header'>
            <div className='preface-text'>Get in touch</div>
            <div className='middle-text'>with our</div>
            <div className='suffix-text'>Experts</div>
        </div>
        <div className='contact-form'>
            <div className='form-input-group'>
                <div className='form-input-label'>
                    Name
                </div>
                <div className='form-input-field'>
                    <TextInput id='name' sx={{ fontSize: 'larger', fontWeight: '100', width: '100%' }} />
                </div>
            </div>
            <div className='form-input-group'>
                <div className='form-input-label'>
                    Phone
                </div>
                <div className='form-input-field'>
                    <TextInput id='name' sx={{ fontSize: 'larger', fontWeight: '100', width: '100%' }} />
                </div>
            </div>
            <div className='form-input-group'>
                <div className='form-input-label'>
                    Email
                </div>
                <div className='form-input-field'>
                    <TextInput id='name' sx={{ fontSize: 'larger', fontWeight: '100', width: '100%' }} />
                </div>
            </div>
            <div className='form-input-group'>
                <div className='form-input-label'>
                    Plot Location
                </div>
                <div className='form-input-field'>
                    <TextInput id='name' sx={{ fontSize: 'larger', fontWeight: '100', width: '100%' }} />
                </div>
            </div>
        </div>
    </div>;
};

const defaultStyles: React.CSSProperties = {
    display: 'flex',
    height: '100%',
    width: '100%'
};

export default ContactUs;