import styles from './users.module.css';
import userDefaultPhoto from '../../assets/images/defaultUser.jpg'
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {

    return (
        <div className={styles.userWrap}>

            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userDefaultPhoto} alt="photo"
                         className={styles.userPhoto}/>
                </NavLink>
            </div>

            <div className={styles.usersInfoWrap}>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
            </div>

            <div className={styles.buttonWrap}>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>
                }
            </div>

        </div>
    )
}

export default User;