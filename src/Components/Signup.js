import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    PageContainer,
    FormContainer,
    FormLabel,
    FormText,
} from '../Styling/Signup.Style';

function Signup() {
    const schema = Yup.object().shape({
        password: Yup.string()
            .required('Password is mandatory')
            .min(3, 'Password must be 3 char long'),
        confirmPassword: Yup.string()
            .required('Please confirm password')
            .oneOf([Yup.ref('password')], 'Passwords do not match'),
    });
    const formOptions = { resolver: yupResolver(schema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = data => {
        console.log(data);
        console.log(data.password);
    };
    return (
        <PageContainer>
            <FormContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <FormLabel htmlFor='user'>Username</FormLabel>
                        <br />
                        <input
                            name='user'
                            type='text'
                            {...register('username', { required: true })}
                        />
                    </div>

                    <div className='form-group'>
                        <FormLabel>Password</FormLabel>
                        <br />
                        <input
                            name='password'
                            type='password'
                            {...register('password')}
                            className={`form-control ${
                                errors.password ? 'is-invalid' : ''
                            }`}
                        />
                        <div className='invalid-feedback'>
                            {errors.password?.message}
                        </div>
                    </div>
                    <div>
                        <FormLabel htmlFor='confirmPassword'>
                            Confirm password
                        </FormLabel>
                        <br />
                        <input
                            name='confirmPassword'
                            type='password'
                            {...register('confirmPassword')}
                            className={`form-control ${
                                errors.confirmPassword ? 'is-invalid' : ''
                            }`}
                        />
                        <div className='invalid-feedback'>
                            {errors.confirmPassword?.message}
                        </div>
                    </div>

                    <input type='submit' />
                </form>
            </FormContainer>
        </PageContainer>
    );
}
Signup.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
};
export default Signup;
