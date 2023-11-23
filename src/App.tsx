
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './pages/login/Login';
import Menu from './pages/menu/Menu';
import SapShops from './pages/menu/sapShops/SapShops';

function App() {
 return (
  <Router>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/sapShops/:code' element={<SapShops/>} />
      </Routes>
    </div>
  </Router>
 )
}

export default App;

