import './App.css';
import MainDashboard from './pages/MainDashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <Routes>
      
       <Route path='/' element={<MainDashboard />}/>
      
      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
