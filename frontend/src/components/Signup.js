import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navbar } from "./Navbar";

const Signup=()=>{

    const [userName,setUserName]=useState();
    const [password,setPassword]=useState();

    const navigate=useNavigate();

    const [error,setError]=useState(null);

    const {user,dispatch}=useAuthContext();

    useEffect(()=>{
        if(user){
            navigate('/');
        }
    },[user])

    function signupUser(e){
        e.preventDefault();

        axios.post('http://localhost:8080/signup',{userName,password})
        .then((r)=>{
            localStorage.setItem('user',JSON.stringify(r.data));
            dispatch({type:'LOGIN',payload:r.data});
            navigate('/');
        })
        .catch((e)=>{
            setError(e.response.data.error);
        })
    }

    return(
        <div>
            <Navbar/>
            <div className="row justify-content-center">
                <div className="col-4">
                    <h1 className="text-center my-3">Signup User</h1>
                    <form onSubmit={signupUser}>
                        <div className="mb-3">
                            <label className="form-label">Enter Username</label>
                            <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Enter Password</label>
                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Signup</button>
                        </div>

                        <div className="text-center my-2">
                            <span>If already register </span><Link to={'/login'}>Login</Link>
                        </div>

                        {error && <div className="text-danger">{error}</div>}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;