import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src="https://www.vladmuz.ru/travel_photos/sevastopol/fiolent/fiolent-01-big.jpg" alt="image"/>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
};

export default Profile;