import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'

import '../../App.css'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(getAuth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
            <form onSubmit={signIn} action="/home">
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="first_name" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}

export default SignIn;