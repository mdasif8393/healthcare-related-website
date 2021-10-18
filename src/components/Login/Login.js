import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const{user, signInUsingGoogle} = useAuth();
    console.log(user);
    return (
        <div>
            <h1>This is a login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;