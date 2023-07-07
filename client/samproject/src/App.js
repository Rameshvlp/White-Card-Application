import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home';
// import Insert from './components/insert';
// import Delete from './components/delete';
// import Display from './components/view';
// import Disp from './components/viewUser';
// import Update from './components/update';
import Index from './components/index';
import Signup from './components/signup';
import Login from './components/login';
import Request from './components/request';

function App() {
  // const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
      <Routes>
      {/* <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <Home /> : <Login />}
          /> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/index" element={<Index/>}/>
      </Routes>
    </div>
  );
}

export default App;