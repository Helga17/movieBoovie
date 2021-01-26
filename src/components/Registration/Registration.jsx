import classes from './Registration.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Registration = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }  else if (event.target.name === 'name') {
            setName(event.target.value);
        }  else if (event.target.name === 'password_confirmation') {
            setConfirmPassword(event.target.value);
        }

    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('email: ', email, 'password: ', password, 'confirmPassword: ', confirmPassword); // add confirm_password

        axios.post('http://127.0.0.1:8000/api/register', {name:name, email: email, password: password, password_confirmation: confirmPassword })
        .then(result => {
            console.log(result, 'res')
        
            
        });
    }

    // functuin onsSubmit(data) {console.log()}
    return (
        <div className={classes.forma}>
             <div ><NavLink to="/"  className={classes.close} title="закрити">X</NavLink></div>
            <form onSubmit={onSubmit} >
                <div className={classes.title}>MovieBoovie</div>
                <div><input type="text" name="name" id="name" onChange={onChange} placeholder="Введіть Ім'я" /></div>
                <div><input type="email" name="email" id="email" onChange={onChange}/></div>
                <div><input type="password" name="password" id="password" onChange={onChange} placeholder="Введіть пароль" /></div>
                <div><input type="password" name="password_confirmation" id="password_confirmation" onChange={onChange} placeholder="Введіть повторно пароль" /></div>
                <div><input type="submit" value="Зареєструватися" className={classes.btn}/></div>
            </form>
        </div>
    );
}

export default Registration;