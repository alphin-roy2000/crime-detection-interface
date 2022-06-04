import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Main from './pages/Main/main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
