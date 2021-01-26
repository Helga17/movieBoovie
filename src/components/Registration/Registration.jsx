import classes from './Registration.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Registration = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);

        const isValidEmail = validateEmail(event.target.value);

        if (!isValidEmail && event.target.value.length > 0) {
            errors['email'] = 'Not valid email.';
        } else {
            errors['email'] = '';
        }
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        axios.post('http://127.0.0.1:8000/api/register', { name: name, email: email, password: password, password_confirmation: confirmPassword })
            .then(result => {
                props.setUser(result.data.user);
                localStorage.setItem('passport', result.data.access_token);
                window.location.href = '/';
            });
    }

    const validatePassword = () => {
        if (confirmPassword !== password) {
            errors['confirmPassword'] = 'not valid passw';
        } else {
            errors['confirmPassword'] = '';
        }
        setErrors(errors);
    }

    return (
        <div className={classes.forma}>
            <div ><NavLink to="/" className={classes.close} title="закрити">X</NavLink></div>
            <form onSubmit={onSubmit} >
                <div className={classes.title}>MovieBoovie</div>
                <div><input type="text" name="name" id="name" onChange={onChangeName} placeholder="Введіть Ім'я" /></div>
                <div><input type="email" name="email" id="email" onChange={onChangeEmail} placeholder="Введіть пошту" /></div>
                <div><p>{errors['email']}</p></div>
                <div><input type="password" name="password" id="password" onChange={onChangePassword} placeholder="Введіть пароль" /></div>
                <div><input type="password" name="password_confirmation" id="password_confirmation" onChange={onChangeConfirmPassword} onBlur={validatePassword} placeholder="Введіть повторно пароль" /></div>
                <div><p>{errors['confirmPassword']}</p></div>
                <div><input type="submit" value="Зареєструватися" className={classes.btn} /></div>
            </form>
        </div>
    );
}

export default Registration;