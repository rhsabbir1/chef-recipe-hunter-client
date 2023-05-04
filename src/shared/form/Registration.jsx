import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';

const Registration = () => {

    const [error , setError] = useState('')
    const {registation} = useContext(AuthContex)


    const handleForm =event =>{
        event.preventDefault()
        setError('')
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        registation(email , password)
        .then(result =>{
            const creatUser = result.user;
            console.log(creatUser)
        })
        .catch(err=>{
            setError(err.message)
        })


        console.log(name, photoUrl , email , password)
        form.reset()
    } 


    return (
        <div className='w-25 mx-auto py-4' >
            <form onSubmit={handleForm}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" >Name</label>
                    <input type="text" name='name' placeholder='Your name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" >Photo Url</label>
                    <input type="text" name='photoUrl' placeholder='Photo Url' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" >Email address</label>
                    <input type="email" name='email' placeholder='Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name='password' placeholder='Password' class="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
                <p className='text-danger'>{error}</p>
            </form>
            <p>Already Have an account please <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Registration;