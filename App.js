import Aboutpage from './Components/About';
import './App.css';
import Layout from './Components/Layout';

import FrontPage from './Components/FrontPage';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import FrontPageContent from './Components/FrontPageContent';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<FrontPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        
      </Route>
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
