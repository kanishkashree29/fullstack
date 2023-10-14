import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './layout/Navbar';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import HeaderComponent from './components/HeaderComponent';
import Home from './pages/Home';
import About from './components/About';
import Menu from './pages/Menu';
import LoginForm from './components/login';
import SignupForm from './components/signup';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Layout><HeaderComponent /></Layout>} />
          <Route path="/admin" element={<><Navbar /><Home /></>} />
          <Route path="/adduser" element={<><Navbar /><AddUser /></>} />
          <Route path="/edituser/:id" element={<><Navbar /><EditUser /></>} />
          <Route path="/viewuser/:id" element={<><Navbar /><ViewUser /></>} />
          <Route path="/about" element={<><About/></>}/>
          <Route path="/menu" element={<><Menu/></>}/>
          <Route path="/login" element={<><LoginForm/></>}/>
          <Route path="/signup" element={<><SignupForm/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
