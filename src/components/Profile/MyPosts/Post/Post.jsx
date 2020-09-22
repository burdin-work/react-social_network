import React from 'react';
import styles from './Post.module.css';
import userDefaultPhoto from '../../../../assets/images/defaultUser.jpg'

const Post = (props) => {

    return (
        <div className={styles.item}>
            <img src={userDefaultPhoto} alt="image"/>
            {props.message}
            <div>likes {props.likesCount}</div>
        </div>
    )
};

export default Post;