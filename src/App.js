
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import Services from './Page/Home/Services/Services';
import Header from './Page/Shared/Header/Header';
import Footer from './Page/Shared/Footer/Footer'
import About from './Page/About/About';
import Login from './Page/Login/Login';
import ServiceDetail from './Page/Home/ServiceDetaile/ServiceDetail';
import NotFound from './Page/NotFound/NotFound';
import Register from './Page/Home/Register/Register';
import RequireAuth from './Page/Login/RequarAuth/RequireAuth';
import Checkout from './Page/Checkout/Checkout';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
