import React from 'react';
import styles from './Invites.module.css';
import userDefaultPhoto from '../../../assets/images/defaultUser.jpg'

// Since the api has not yet been finalized, unfortunately there is no way to get a list of all users to which you are subscribed by using a request to the server.
const Invites = () => {
    return (
        <div className={styles.invitesWrap}>
            <div className={styles.invitesCount}></div>
            <div className={styles.invitesUsers}>
                <div><img src={userDefaultPhoto} alt="user"/></div>
                <div><img src={userDefaultPhoto} alt="user"/></div>
                <div><img src={userDefaultPhoto} alt="user"/></div>
                <div><img src={userDefaultPhoto} alt="user"/></div>
                <div><img src={userDefaultPhoto} alt="user"/></div>
                <div><img src={userDefaultPhoto} alt="user"/></div>
            </div>
        </div>
    );
};

export default Invites;