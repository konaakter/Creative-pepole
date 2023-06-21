import React from 'react';
import { Link } from 'react-router-dom'


const ErrorPage = () => {

    

    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <div className='max-w-md text-center'>
                     <p className=' text-8xl'>404</p>    <Link to='/' className='btn bg-primary'>
                            Back to homepage
                        </Link>
                    </div>
                    </div>
                
            </section>
        </div>
    );
};

export default ErrorPage;