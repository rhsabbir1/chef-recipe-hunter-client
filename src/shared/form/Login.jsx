import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate()
    const { login } = useContext(AuthContex)

    const handleLogin = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
                navigate(from)
            })
            .catch(err => {
                setError(err.message)
            })
        form.reset()
    }


    return (
        <div className='w-25 mx-auto py-4' >
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                </div>

                <button type="submit" className="btn btn-primary">Log in</button>
                <p className='text-danger'>{error}</p>
            </form>
            <p>New To Chif Hunt <Link to="/register">Register Now</Link></p>
        </div>
    );
};

export default Login;