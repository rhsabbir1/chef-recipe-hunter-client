import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='w-25 mx-auto py-4' >
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" >Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required />
                </div>

                <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <p>Already Have an account please <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Registration;