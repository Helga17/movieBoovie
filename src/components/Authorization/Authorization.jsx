import classes from './Authorization.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Authorization = (props) => {

    const onSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login', { email: 'kokochan1@gmail.com', password: '123456' })
            .then(result => {
                console.log(result, 'login');
                props.setUser(result.data.user);
                localStorage.setItem('passport', result.data.access_token);
                window.location.href = '/';
            });
    }

    return (
        <div className={classes.forma}>
            <div ><NavLink to="/"  className={classes.close} title="закрити">X</NavLink></div>
            <form onSubmit={onSubmit}>
                <div className={classes.title}>MovieBoovie</div>
                <div><input type="text" name="name" id="name" placeholder="Введіть Ім'я" /></div>
                <div><input type="password" name="password" id="password" placeholder="Введіть пароль" /></div>
                <div><input type="submit" value="Увійти" className={classes.btn}/></div>
            </form>
        </div>
    );
}

export default Authorization;