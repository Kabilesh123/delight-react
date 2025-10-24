import logo from './logo.svg';
import './App.css';

import HomeLayout from './layout/HomeLayout';
import SweetsLayout from './layout/SweetsLayout';

import SnacksLayout from './layout/SnacksLayout';
import LoginLayout from './layout/LoginLayout'; 
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout/>}/>
          <Route path='/sweets' element={<SweetsLayout/>}/>
          <Route path='/snacks' element={<SnacksLayout/>}/>
          <Route path='/login' element={<LoginLayout/>}/>
          <Route path='*'  element={<h1>Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    
      
      
      
     </>
    </div>
  );
}

export default App;
