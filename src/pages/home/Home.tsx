import React from 'react';
import './Home.css'
import Box from '../../components/box/Box';
import Container from '../../components/container/Container'
import bridgeImage from '../../assets/image/asset1.jpg'
import buildingImage from '../../assets/image/asset2.jpg'
import houseImage from '../../assets/image/asset3.jpg'
import interiorImage from '../../assets/image/document.jpeg'
import Caraousel from '../../components/caraousel/Caraousel';
import ContactUs from './contact-us/ContactUs';

const Home: React.FC = () => {

  return (
    <Container sx={{ marginTop: '160px' }}>
      <Box sx={{ padding: '0px', maxHeight: 'fit-content' }}>
        <Caraousel>
          {/* <img className='banner-image' src={bridgeImage} />
          <img className='banner-image' src={buildingImage} /> */}
          <img className='banner-image' src={houseImage} />
          <img className='banner-image' src={interiorImage} />
        </Caraousel>
      </Box>

      <Box sx={{ backgroundColor: 'white', marginTop: '8px', padding: '0px 0px 12px 0px' }}>

        <Box sx={{ backgroundColor: 'white', display: 'flex', gap: '18px', flexWrap: 'wrap', justifyContent: 'center', padding: '12px', paddingBottom: '0px' }}>
            <Box sx={{ maxWidth: '660px', padding: '0', boxShadow: '0 0 2px 0 rgba(0,0,0,0.5)', flex: 1 }}>
              <ContactUs/>
            </Box>
        </Box>

        <Box sx={{ backgroundColor: 'white', marginTop: '6px', display: 'flex', gap: '18px', flexWrap: 'wrap', paddingBottom: '0px' }}>
          <Box sx={{ backgroundColor: 'white', boxShadow: '0 0 2px 0 rgba(0,0,0,0.5)', flex: '1' }}>
            <Box sx={{ minHeight: '600px', minWidth: '360px', padding: '0' }}>

            </Box>
          </Box>
          <Box sx={{ backgroundColor: 'white', boxShadow: '0 0 2px 0 rgba(0,0,0,0.5)', flex: '1' }}>
            <Box sx={{ minHeight: '360px', minWidth: '360px', padding: '0' }}>

            </Box>
          </Box>
          <Box sx={{ backgroundColor: 'white', boxShadow: '0 0 2px 0 rgba(0,0,0,0.5)', flex: '1' }}>
            <Box sx={{ minHeight: '360px', minWidth: '360px', padding: '0' }}>

            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
};

export default Home;