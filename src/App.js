import './App.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Links from './components/Links';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/' element={
          <>
          <Header/>
          <Links/>
          
          </>
        }>

          </Route>
        <Route path='/contact' element={
          <Contact/>
        }/>
      </Routes>
      <Footer/>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
