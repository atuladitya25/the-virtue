import React from 'react';
import './Contact.css'
import Box from '../../components/box/Box';
import Container from '../../components/container/Container'
import Loader from '../../components/loader/Loader';

const Contact: React.FC = () => {

  return (
    <Container sx={{ marginTop: '72px' }}>

      <Box sx={{ backgroundColor: 'white', marginTop: '8px', padding: '0px 0px 12px 0px', minHeight:'300px'}}>

        <Loader/>
      </Box>
    </Container>
  )
};

export default Contact;