import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TwoFAGoogle from './components/TwoFAGoogle';
import TwoFASMS from './components/TwoFASMS';

import ForgetPassword from './components/ForgetPassword';
import MainDashboard from './pages/MainDashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Login />}/>
       <Route path='/Register' element={<Register/>}/>
       <Route path='/TwoFAGoogle' element={<TwoFAGoogle/>}/>
       <Route path='/TwoFASMS' element={<TwoFASMS/>}/>
       <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
       <Route path='/MainDashboard' element={<MainDashboard />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
