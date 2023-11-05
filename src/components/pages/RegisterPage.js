import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import '../../App.css'


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const signUp = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(getAuth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}

export default SignUp