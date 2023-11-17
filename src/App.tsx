
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './pages/login/Login';
import Menu from './pages/menu/Menu';

function App() {
 return (
  <Router>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  </Router>
 )
}

export default App;