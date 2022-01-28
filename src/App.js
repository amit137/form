import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Recovery from './components/Forgot';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Otp from './components/Otp';


function App() {
  return (
    <>
    <Router>
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/recovery" element={<Recovery/>} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="*" element={<ErrorPage/>} />

      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
