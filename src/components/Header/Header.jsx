import React from  'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../../src/assets/images/logo.jpg'
import slide1 from '../../../src/assets/images/slides/0.jpg'
import slide2 from '../../../src/assets/images/slides/1.jpg'
import slide3 from '../../../src/assets/images/slides/2.jpg'
/*import slide4 from '../../../src/assets/images/slides/3.jpg'
import slide5 from '../../../src/assets/images/slides/4.jpg'
import slide6 from '../../../src/assets/images/slides/5.jpg''*/
import {Carousel} from "react-bootstrap";

const Header = (props) => {
    return (
        <nav className={styles.header + ' app-container'}>

            <img className={styles.logo} src={logo} alt="logo"/>

            <div className={styles.HeaderPictureWrap}>


                <Carousel slide={false} fade controls={false} indicators={false} interval={10000}>
                    <Carousel.Item>
                        <img className={styles.headerPicture} src={slide1} alt="slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.headerPicture} src={slide2} alt="slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.headerPicture} src={slide3} alt="slide"/>
                    </Carousel.Item>
                </Carousel>

            </div>

            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>
                        <div></div>
                        <div className={styles.headerLogin}>{props.login}</div>
                        <div
                        ><a className={styles.authButton} onClick={props.logout}>Log out</a>
                        </div>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </nav>
    )
}

export default Header;