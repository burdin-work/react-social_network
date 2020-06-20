import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {

    return (
        <div className={styles.item}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="image"/>
            {props.message}
            <div>likes {props.likesCount}</div>
        </div>
    )
};

export default Post;