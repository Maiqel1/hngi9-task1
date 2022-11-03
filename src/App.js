import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Links from './components/Links';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Links/>}>

          </Route>
        <Route path='/contact' element={
          <Contact/>
        }/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
