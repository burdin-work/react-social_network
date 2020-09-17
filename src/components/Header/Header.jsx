import React from  'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../../src/assets/images/logo2.jpg'
import slide1 from '../../../src/assets/images/slides/0.jpg'
import slide2 from '../../../src/assets/images/slides/1.jpg'
import slide3 from '../../../src/assets/images/slides/2.jpg'
/*import slide4 from '../../../src/assets/images/slides/3.jpg'
import slide5 from '../../../src/assets/images/slides/4.jpg'
import slide6 from '../../../src/assets/images/slides/5.jpg'
import slide7 from '../../../src/assets/images/slides/6.jpg'
import slide8 from '../../../src/assets/images/slides/7.jpg'
import slide9 from '../../../src/assets/images/slides/8.jpg'
import slide10 from '../../../src/assets/images/slides/9.jpg'
import slide11 from '../../../src/assets/images/slides/10.jpg'
import slide12 from '../../../src/assets/images/slides/11.jpg'
import slide13 from '../../../src/assets/images/slides/12.jpg'
import slide14 from '../../../src/assets/images/slides/13.jpg'
import slide15 from '../../../src/assets/images/slides/14.jpg'
import slide16 from '../../../src/assets/images/slides/15.jpg'
import slide17 from '../../../src/assets/images/slides/16.jpg'*/
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