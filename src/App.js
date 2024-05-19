
import './App.css';
import Home from './componenets/Home';
import Header from './componenets/header';
import Contact from './componenets/Contact';
import About from './componenets/About';
import { Route, Routes } from 'react-router-dom';
import Footer from './componenets/Footer';
import User from './componenets/User';
function App() {
  return (
    
      <div>
        <Header />

        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<User />} />
        
        
        </Routes>
        <Footer />
        
      </div>
    

  )
}

export default App;
