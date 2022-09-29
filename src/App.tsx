import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import Price from './pages/Price';
import Contact from './pages/Contact';



function App() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <Header isOpen={isOpen} toggle={toggle} />
      {isOpen && <Sidebar toggle={toggle} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/price' element={<Price />} />
        <Route path='/contact' element={<Contact />} />


        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
