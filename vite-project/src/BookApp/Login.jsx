import React, { useState, useEffect } from "react";
import './App.css';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let navigate = useNavigate();
    
        useEffect(() => {
            localStorage.setItem("email", email);
        }, [email]);
        
        useEffect(() => {
            localStorage.setItem("password", password);
        }, [password]);
        
        function handleSumbit(e) {
            e.preventDefault();
        
            if (!email.includes('@')) {
                setError('(@) jok')
                return;
            }
            if(password.length<6) {
                setError('6 sannan az');
                return;
              }
            setError("")
            alert('Form satti ayaqtaldu')
        }
        
        return (



          
            <form className="login" onSubmit={handleSumbit}>

              <h2>Welcome to back</h2>
              <p>Login to your Bookshelf account</p>
                <label>Email</label>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn" type="sumbit" onClick={()=>{navigate('/home')}}>Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}

            </form>
        )    
}

export default Login;