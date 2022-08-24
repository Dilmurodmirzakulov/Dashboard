import React from 'react'
import '../style/styles.css'
import '../style/login.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';


const Login = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = () => navigate('/dashboard');


    return (
        <div className='login-wrapper'>
            <div className='login-data-wrapper'>
                <form id='form' className='login-data-container' onSubmit={handleSubmit(onSubmit)}>
                    <input className='login-info' type="text" {...register("username", { required : true, minLength: 2 })} placeholder='Username' />
                    <input className='login-info' type="text" {...register("password", { required : true, minLength: 8 })} placeholder='Password' />
                    {errors.username?.type === "required" && "Username is required"}<br/>
                    {errors.username?.type === "minLength" && "Username more then 2 characters"}<br />
                    {errors.password?.type === "required" && "Password is required"}<br/>
                    {errors.password?.type === "minLength" && "Password is more then 8 characters"}<br/>
                    <button className='login-btn'>LOGIN</button>
                </form>



            </div>
            <div className='login-logo-container'>
                <img className='login-logo' src={require('../images/shaffof.png')} alt = 'shaffof logo' />
            </div>
        </div>
    )
}

export default Login