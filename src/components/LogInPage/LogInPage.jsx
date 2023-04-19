import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const LogInPage = () => {

    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const {singIn} = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (event) =>{
        setError('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        singIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            alert('login successful!!')
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
            setError('⚠ User is not found')
           
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log In</h2>
            <form onSubmit={handleLogIn}>
                <div className='input-field'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required/>
                </div>
                <div className='input-field'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name='password' id='password' required/>
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                        </small></p>
                </div>
                <input className='submit' type="submit" name="submit" value='Log in' id="btn-submit" />
                <small>New to Ema-john?<Link to={'/singup'} className='go-to-login'> Create New Account</Link></small>
                <p className='error-msg'>{error}</p>
            </form>
        </div>
    );
};

export default LogInPage;