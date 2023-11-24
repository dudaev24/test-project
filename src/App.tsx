
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './pages/login/Login';
import { useState,useEffect } from "react";
import SupShops from './pages/menu/supShops/SupShops';
import SupList from './pages/menu//supplierList/SupList';
import NavCol from './pages/menu/navCol/NavCol';

function App() {

  const [isLoggedIn] = useState (false)

  return (
    <Router>
      <div className='App'>
        {/* {isLoggedIn ?  */}
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
            {/* :  */}
          <div style={{display: 'flex', flexDirection:'row'}}>
            <NavCol/>
            <Routes>
              <Route path='/sapplierList' element={<SupList/>} />
              <Route path='/sapShops/:code' element={<SupShops/>} />
            </Routes>
          </div>
        {/* } */}
      </div>
      
    </Router>
  )
}

export default App;


