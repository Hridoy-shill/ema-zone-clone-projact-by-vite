import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const SingUp = () => {
    
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('')
        if(password !== confirm){
            setError('⚠ password did not match')
            return;
        }
        else if(password.length < 6){
            setError('⚠ password must be 6 characters or longer')
            return;
        }

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>SingUp</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-field'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required/>
                </div>
                <div className='input-field'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' required/>
                </div>
                <div className='input-field'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' id='confirm-password' required/>
                </div>
                <input className='submit' type="submit" name="submit" value='Sing up' id="btn-submit" />
                <small>Already have an account? <Link to={'/login'} className='go-to-login'>Login</Link></small>
                <p className='error-msg'>{error}</p>
            </form>
        </div>
    );
};

export default SingUp;