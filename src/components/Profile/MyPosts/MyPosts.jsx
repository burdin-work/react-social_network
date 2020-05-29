import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    New posts
                </div>
            </div>
            <div className={styles.posts}>
                <Post/>
            </div>
        </div>
    )
};

export default MyPosts;