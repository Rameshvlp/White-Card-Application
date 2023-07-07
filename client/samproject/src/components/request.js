import React,{useState} from 'react'
import './crud.css'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [name, setName] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [driving, setDriving] = useState("");
    const [pan, setPan] = useState("");
    const [voter, setVoter] = useState("");

    const navigate = useNavigate();

    const handlesubmit= (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:8070/card',{
            name:name,
            aadhar:aadhar,
            driving:driving,
            pan:pan,
            voter:voter
        }).then(res=>{
            console.log('Got the Response : ',res.data);
            alert("Got the Response Successfully");
            sessionStorage.setItem("aadhar",aadhar); 
            sessionStorage.setItem("driving",driving); 
            sessionStorage.setItem("pan",pan); 
            sessionStorage.setItem("voter",voter); 
            navigate("/home");
        }).catch((e)=>{
            console.log('Error occured in insert.js', e);
            alert("Something went wrong");
        })
    }

    const aadharvalid= (e)=>{
      e.preventDefault();
      Axios.post('http://localhost:8070/aadharvalid',{
      name:sessionStorage.getItem("name"),
      aadhar:aadhar       
      }).then(res=>{
          console.log('Got the Response : ',res.data.status);
          if(res.data.status === "ok"){
          alert("Aadhar successfully verified");        
          }else{
              alert(res.data.error);
          }
      }).catch((e)=>{
          console.log('Error occured in viewUser.js', e);
          alert("Invalid Details");
      })
  }

  const drivingvalid= (e)=>{
    e.preventDefault();
    Axios.post('http://localhost:8070/drivingvalid',{
    name:sessionStorage.getItem("name"),
    driving:driving       
    }).then(res=>{
        console.log('Got the Response : ',res.data.status);
        if(res.data.status === "ok"){
        alert("Driving Licenece successfully verified");        
        }else{
            alert(res.data.error);
        }
    }).catch((e)=>{
        console.log('Error occured in viewUser.js', e);
        alert("Invalid Details");
    })
}


const panvalid= (e)=>{
  e.preventDefault();
  Axios.post('http://localhost:8070/panvalid',{
  name:sessionStorage.getItem("name"),
  pan:pan       
  }).then(res=>{
      console.log('Got the Response : ',res.data.status);
      if(res.data.status === "ok"){
      alert("Pan successfully verified");        
      }else{
          alert(res.data.error);
      }
  }).catch((e)=>{
      console.log('Error occured in viewUser.js', e);
      alert("Invalid Details");
  })
}


const votervalid= (e)=>{
  e.preventDefault();
  Axios.post('http://localhost:8070/votervalid',{
  name:sessionStorage.getItem("name"),
  voter:voter       
  }).then(res=>{
      console.log('Got the Response : ',res.data.status);
      if(res.data.status === "ok"){
      alert("Voter ID successfully verified");        
      }else{
          alert(res.data.error);
      }
  }).catch((e)=>{
      console.log('Error occured in viewUser.js', e);
      alert("Invalid Details");
  })
}

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handlesubmit}>
          <h3>Register</h3>
          <div className="mb-3">            
            <label>Name</label>
            <br/>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={sessionStorage.getItem("name")}
              onChange={(e) => setName(e.target.value)}
              disabled
              required
            />
            <br/><br/>
          </div>
          <div className="mb-3">
            <label>AADHAR</label>
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder="Enter"
              onChange={(e) => setAadhar(e.target.value)}
              onBlur={aadharvalid}
              value={aadhar}
              pattern="[0-9]{12}"
              required
            />
          </div>
          <br/>
          <div className="mb-3">
            <label>DRIVING</label>
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder="Enter "
              onChange={(e) => setDriving(e.target.value)}
              onBlur={drivingvalid}
              required
            />
          </div>
          <br/>
          <div className="mb-3">
            <label>PAN</label>
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder="Enter "
              onChange={(e) => setPan(e.target.value)}
              onBlur={panvalid}
              required
            />
          </div>
          <br/>
          <div className="mb-3">
            <label>VOTER ID</label>
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder="Enter"
              onChange={(e) => setVoter(e.target.value)}
              onBlur={votervalid}
              required
            />
          </div>
          <br/><br/>
          <div className="d-grid">
            <center>
            <button type="submit" className="btn btn-primary" onClick={handlesubmit}>
              Register
            </button>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup