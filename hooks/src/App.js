import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';
import UseReducer from './components/UseReducer';
import UsdToInr from './components/UsdToInr';
import InputForm from './components/InputForm';
import Axios from './components/Axios';

function App() {
  let isLogged = true;
  return (
    <Router>
      <div className="App">
        <nav className='position-sticky fixed-top'>
          <h3>Hooks</h3>
          <ul className='menu'>
            <li><NavLink className='link' to='/'>Home</NavLink></li>
            <li><NavLink className='link' to='/usestate'>useState</NavLink></li>
            <li><NavLink className='link' to='/useeffect'>useEffect</NavLink></li>
            <li><NavLink className='link' to='/useref'>useRef</NavLink></li>
            <li><NavLink className='link' to='/usememo'>useMemo</NavLink></li>
            <li><NavLink className='link' to='/usecallback'>useCallback</NavLink></li>
            <li><NavLink className='link' to='/usereducer'>useReducer</NavLink></li>
            <li><NavLink className='link' to='/usdtoinr'>USD to INR</NavLink></li>
            <li><NavLink className='link' to='/inputform'>Form List</NavLink></li>
            <li><NavLink className='link' to='/useaxios'>useAxios</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={isLogged ? <Home /> : <h1>Please login to access</h1>} />
          <Route path='/usestate' element={isLogged ? <UseState /> : <h1>Please login to access</h1>} />
          <Route path='/useeffect' element={isLogged ? <UseEffect /> : <h1>Please login to access</h1>} />
          <Route path='/useref' element={isLogged ? <UseRef /> : <h1>Please login to access</h1>} />
          <Route path='/usememo' element={isLogged ? <UseMemo /> : <h1>Please login to access</h1>} />
          <Route path='/usecallback' element={isLogged ? <UseCallback /> : <h1>Please login to access</h1>} />
          <Route path='/usereducer' element={isLogged ? <UseReducer /> : <h1>Please login to access</h1>} />
          <Route path='/usdtoinr' element={isLogged ? <UsdToInr /> : <h1>Please login to access</h1>} />
          <Route path='/inputform' element={isLogged ? <InputForm /> : <h1>Please login to access</h1>} />
          <Route path='/useaxios' element={isLogged ? <Axios /> : <h1>Please login to access</h1>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  );
}