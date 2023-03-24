import React from 'react';

const ResetPassword = () => {
    return (
        <div className='container mx-auto mt-20'>
            <form>
                <div className='text-center'>
                    <input type="email" placeholder="Enter your email" className="input input-bordered input-error w-full max-w-xs" />
                </div>

                <div className='text-center mt-2 text-white'>
                    <button className="btn btn-accent">Get reset code in your email</button>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;