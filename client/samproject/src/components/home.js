import React,{useState} from 'react'
import './crud.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const Inserthandlesubmit=(e)=>{
        e.preventDefault();
        navigate("/request");
    }
    
    const Deletehandlesubmit=(e)=>{
        e.preventDefault();
        navigate("/index ");
    }

    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./";
      };
  return (
    <div className="auth-wrapper">
    <div className="auth-inner">
    <center>
        <br/><br/>
        <p>----- WHITE CARD APPLICATION -----</p>
        <br/><br/>
        <button onClick={Inserthandlesubmit}>REQUEST</button>
        <br/><br/>
        <button onClick={Deletehandlesubmit}>VIEW</button>
        <br/><br/>
        <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
    </center>
    </div>
    </div>
  )
}

export default Home