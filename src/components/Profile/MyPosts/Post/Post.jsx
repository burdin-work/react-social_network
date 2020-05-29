import React from 'react';
import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.item}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="image"/>
            post 1
            <div>like</div>
        </div>
    )
};

export default Post;