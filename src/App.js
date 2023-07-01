import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Components/Pages/Home.js';
import Projects from './Components/Pages/Projects.js'
import Contact from './Components/Pages/Contact.js'
import Container from './Components/Layouts/Container.js'
import BodyContainer from './Components/Layouts/BodyContainer.js';
import Navbar from './Components/Layouts/Navbar.js';
import Info from './Components/Layouts/Info.js';

import Style from './App.module.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Navbar />
          <BodyContainer>
            <Info />
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/projects' element={<Projects />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
          </BodyContainer>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
