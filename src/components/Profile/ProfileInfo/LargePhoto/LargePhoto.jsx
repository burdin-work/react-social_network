import React from 'react';
import userDefaultPhoto from "../../../../assets/images/defaultUser.jpg";
import styles from "./LargePhoto.module.css";

//



//{largePhoto, userDefaultPhoto}
const LargePhoto = (props) => {

    const largePhoto = 'https://social-network.samuraijs.com/activecontent/images/users/9170/user.jpg?v=8';



    return (
        <div className={styles.wrapperStyle}>
            <div>
                <img src={largePhoto || userDefaultPhoto} className={styles.largePhoto}/>
            </div>
        </div>
    );
};

export default LargePhoto;