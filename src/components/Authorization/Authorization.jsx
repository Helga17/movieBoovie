import classes from './Authorization.module.css';
import { NavLink } from 'react-router-dom';

const Authorization = (props) => {
    return (
        <div className={classes.forma}>
            <div ><NavLink to="/"  className={classes.close} title="закрити">X</NavLink></div>
            <form>
                <div className={classes.title}>MovieBoovie</div>
                <div><input type="text" name="name" id="name" placeholder="Введіть Ім'я" /></div>
                <div><input type="password" name="password" id="password" placeholder="Введіть пароль" /></div>
                <div><input type="submit" value="Увійти" className={classes.btn}/></div>
            </form>
        </div>
    );
}

export default Authorization;