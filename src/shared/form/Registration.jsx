import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';




const Registration = () => {

    const [error, setError] = useState('')
    const { registation, profail } = useContext(AuthContex)


    const handleForm = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            return setError('Your Passwor did not match')
        }

        else if (password.length < 6) {
            return setError('Password must be 6 caracters or longer')
        }

        else {
            registation(email, password)
                .then(result => {
                    const creatUser = result.user;
                    profail(name ,photoUrl )
                    console.log(creatUser)
                })
                .catch(err => {
                    setError(err.message)
                })

           
        }

        form.reset()
    }


    return (
        <div className='w-25 mx-auto py-4' >
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Name</label>
                    <input type="text" name='name' placeholder='Your name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Photo Url</label>
                    <input type="text" name='photoUrl' placeholder='Photo Url' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Email address</label>
                    <input type="email" name='email' placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' placeholder='Password' className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Confirm Password' className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <p className='text-danger'>{error}</p>
            </form>
            <p>Already Have an account please <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Registration;