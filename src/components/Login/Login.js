import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const{signInUsingGoogle,
        user,
        error,
        setError,
        logOut,
        isLoading,
        email,
        setEmail,
        password,
        setPassword,
        isLogin,
        setIsLogin,
        registerNewUser,
        processLogin,} = useAuth();

        const handleRegistration = (e) =>{
            e.preventDefault();
        
            if(password.length < 6){
              setError('Password must be 6 character long');
              return;
            }
            
            if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
              setError('Password must contain 2 upper case');
              return;
            }
        
            isLogin ?  processLogin(email, password) : registerNewUser(email, password);
        
          }
        
        
          registerNewUser(email, password);
          processLogin  (email, password);
    
          const toggleLogin = (e) => { 
            setIsLogin(e.target.checked); //checkbox value
          }
        
          const handleEmailChange = (e) =>{
            setEmail(e.target.value);
          }

          const handlePasswordChange = (e) =>{
            setPassword(e.target.value);
          }
        
          
          
        
          
    return (
        <div className="container mt-5 p-5 login-page-style">
            <div className="text-center">
                <button  onClick={signInUsingGoogle} className="btn btn-success"><i class="fas fa-sign-in-alt"></i> Google Sign In</button>
            </div>
            <br/><br/><br/>

            <div>
            <form onSubmit = {handleRegistration}>
                <h3 className="text-success">Please {isLogin ? 'Login' : 'Register'}</h3>

                

                <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input required onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" />
                </div>
                </div>

                <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input required onBlur={handlePasswordChange} type="password" className="form-control " id="inputPassword3"/>
                </div>
                </div>
                
                <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" htmlFor="gridCheck1">
                        Already Registered?
                    </label>
                    </div>
                </div>
                </div>

                <div className="row mb-3">
                
                <h6 className="text-danger">{error}</h6>
                </div>
                <button type="submit" className="btn btn-success"><i class="fas fa-sign-in-alt"></i> {isLogin ? 'Login' : 'Register'}</button> <br/>
                
            </form>
            </div>
        </div>
    );
};

export default Login;