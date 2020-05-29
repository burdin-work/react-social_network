import React from  'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div><a href="">Profiles</a></div>
            <div><a href="">Messages</a></div>
            <div><a href="">News</a></div>
            <div><a href="">Music</a></div>
            <div><a href="">Settings</a></div>

        </nav>
    )
}

export default Navbar;