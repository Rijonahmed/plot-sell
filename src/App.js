
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import Services from './Page/Home/Services/Services';
import Header from './Page/Shared/Header/Header';
import Footer from './Page/Shared/Footer/Footer'
import About from './Page/About/About';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
