import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signin } from '../../services/api';
import './Signin.css'

const Signin = () => {
    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        username : '',
        password : ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [serverError , setServerError] = useState('');

    const validateForm = () => {
        const newErrors = {};
        if(!formData.username){
            newErrors.username = 'Email is required';
        }
        if(!formData.password){
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }))

        if(errors[name]){
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        if(serverError){
            setServerError('');
        }
    };

    const handleSubmit = async(e)=> {
        e.preventDefault();

        if(!validateForm()){
            return;
        }

        setIsLoading(true);
        setServerError('');

        try{
            const response = await signin(formData);
            console.log('Signin successful:' , response);

            // Store any necessary data ( like token) in localStorage or state management

            if(response.token){
                localStorage.setItem('token',response.token);
            }

            navigate('/dashboard');
            
        }catch (error){
            console.error('Signin error : ',error);
            setServerError(error.message || "Failed to sign-in. Please try again");
        }finally{
            setIsLoading(false);
        }
    };

    return(
        <div className='signin-container'>
            <div className='signin-card'>
                <div className='signin-headder'>
                    <h1>Login</h1>
                    <p> Join Budget Tracker and take control of your finances</p>
                </div>

                <form onSubmit={handleSubmit} className='signin-form'>
                    <div className='form-group'>
                        <label htmlFor='username'>Email</label>
                        <input 
                            type='email'
                            id='username'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            className={errors.username ? 'error' : ''}
                            placeholder='Enter your email'
                            disabled={isLoading}
                        />
                        {errors.username && <span className='error-message'>{errors.username}</span>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? 'error' : ''}
                            placeholder='Enter your password'
                            disabled={isLoading}
                        />
                        {errors.password && <span className='error-message'>{errors.password}</span>}
                    </div>

                    {serverError && (
                        <div className='error-message submit-error'>{serverError}</div>
                    )}

                    <button 
                        type="submit"
                        className="signin-button"
                        disabled={isLoading}
                    > 
                        {isLoading ? 'Checking Credentials...' : 'Login Account'}
                    </button>

                </form>

                <div className='signin-footer'>
                    <p>New to the Budget Tracker <Link to='/signup'>Sign up</Link> </p>
                </div>
            </div>
        </div>
    )
    
}

export default Signin;