import React from 'react';
import { Link, useRouteError } from 'react-router-dom'


const Errorpage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='text-center d-flex justify-content-center align-items-center'>      
            <div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/06/09/16/12/error-803716__340.png" alt="" />
                </div>
            <div className='my-8'>             
                    <h2 className=''>
                        <span className=''>Error</span>
                        {status || 404}
                    </h2>
                    <p className=''>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn btn-primary'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;