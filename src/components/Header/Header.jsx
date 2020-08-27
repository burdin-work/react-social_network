import React from  'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://i.pinimg.com/originals/40/18/19/4018196360d9fd3324ceffbcc182bcc8.png" alt=""/>

            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>
                        <div>{props.login}</div>
                        <div
                        ><button onClick={props.logout}>Log out</button>
                        </div>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;