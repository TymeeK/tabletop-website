import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
        console.log(data.password);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='user'>User name</label>
                <br />
                <input
                    name='user'
                    type='text'
                    {...register('username', { required: true })}
                />
                <br />
                <label htmlFor='password'>Password</label>
                <br />
                <input
                    name='password'
                    type='password'
                    {...register('password', { required: true })}
                />
                {errors.password?.type === 'required' && 'Password is required'}
                <br />
                <label htmlFor='confirm'>Confirm password</label>
                <br />
                <input
                    name='confirm'
                    type='password'
                    {...register('confirmPassword', { required: true })}
                />
                {errors.confirmPassword && 'Confirm password is required'}
                <br />
                <input type='submit' />
            </form>
        </div>
    );
}

export default Signup;
