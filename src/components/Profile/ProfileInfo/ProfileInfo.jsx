import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} />
            </div>
        </div>
    )
};

export default ProfileInfo;