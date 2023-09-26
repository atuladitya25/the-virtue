import './App.css'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import iconLogo from './assets/image/the_virtue_logo.png'
import Footer from './components/footer/Footer'
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/home/Home'));
const Contact = lazy(() => import('./pages/contact/Contact'));

function App() {

  const links = [
    { text: 'Home', link: '/home' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' }
  ];

  return (
    <Router>
      <div>
        <Header icon={iconLogo} items={links} />
        <Suspense fallback={<div>Loading...</div>}>
          <div id='page'>
            <Routes>
              <Route path='/' element={<Navigate to="/home" />} />
              <Route path='/home' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
