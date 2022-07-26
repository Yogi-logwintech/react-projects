import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import LifeCycle from './components/LifeCycle'
import Form from './components/Form'
import GetApi from './components/GetApi';
import PostApi from './components/PostApi';
import UseEffect from './components/UseEffect';
import UseMemo from './components/UseMemo';
import HOC from './components/HOC';
import UseSearchParams from './components/UseSearchParams';
import UseLocation from './components/UseLocation';
import Login from './components/Login';
import ContextApiA from './components/ContextApiA';
import ContextApiB from './components/ContextApiB';

function App() {
  let isLogged = true;
  return (
    <Router>
      <nav className='position-sticky fixed-top'>
        <ul className='menu'>
          <li><NavLink className='link' to='/'>Home</NavLink></li>
          <li><NavLink className='link' to='/login'>Login</NavLink></li>
          <li><NavLink className='link' to='/lifecycle'>LifeCycle</NavLink></li>
          <li><NavLink className='link' to='/form'>Form</NavLink></li>
          <li><NavLink className='link' to='/getdata'>Getdata</NavLink></li>
          <li><NavLink className='link' to='/postdata'>Postdata</NavLink></li>
          <li><NavLink className='link' to='/useeffect'>useEffect</NavLink></li>
          <li><NavLink className='link' to='/usememo'>useMemo</NavLink></li>
          <li><NavLink className='link' to='/hoc'>HigherOrderComponent</NavLink></li>
          <li><NavLink className='link' to='/ermfd'>TestWrongRouter</NavLink></li>
          <li><NavLink className='link' to='/usesearchparams'>useSearchParams</NavLink></li>
          <li><NavLink className='link' to='/uselocation'>useLocation</NavLink></li>
          <li><NavLink className='link' to='/contextapia'>ContextApiA</NavLink></li>
          <li><NavLink className='link' to='/contextapib'>ContextApiB</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={isLogged ? <Home /> : <h1>Please login to access</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/lifecycle' element={isLogged ? <LifeCycle /> : <h1>Please login to access</h1>} />
        <Route path='/form' element={isLogged ? <Form /> : <h1>Please login to access</h1>} />
        <Route path='/getdata' element={isLogged ? <GetApi /> : <h1>Please login to access</h1>} />
        <Route path='/postdata' element={isLogged ? <PostApi /> : <h1>Please login to access</h1>} />
        <Route path='/useeffect' element={isLogged ? <UseEffect /> : <h1>Please login to access</h1>} />
        <Route path='/usememo' element={isLogged ? <UseMemo /> : <h1>Please login to access</h1>} />
        <Route path='/hoc' element={isLogged ? <HOC /> : <h1>Please login to access</h1>} />
        <Route path='/usesearchparams' element={isLogged ? <UseSearchParams /> : <h1>Please login to access</h1>} />
        <Route path='/uselocation' element={isLogged ? <UseLocation /> : <h1>Please login to access</h1>} />
        <Route path='/contextapia' element={isLogged ? <ContextApiA /> : <h1>Please login to access</h1>} />
        <Route path='/contextapib' element={isLogged ? <ContextApiB /> : <h1>Please login to access</h1>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      {/* { isLogged ? <button onClick={()=>{isLogged = false}} className='btn btn-dark my-4'>Logout</button> : ''} */}
    </Router>
  );
}

export default App;

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      <NavLink className='btn btn-dark' to='/uselocation?name=yogi' state={{name: 'yogi', address: 'B-1, 301, Gangotri Residency'}}>Go to check useLocation hook</NavLink>
    </div>
  );
}