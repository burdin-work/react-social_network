import styles from './users.module.css';
import userDefaultPhoto from '../../assets/images/defaultUser.jpg'
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map( p => {
                return <span
                    className={`${styles.numPages} ${props.currentPage === p && styles.selectedPage}`}
                    onClick={(e) => {props.onPageChanged(p); }}
                >{p}</span>
            })}

            {
                props.users.map(u => <div key={u.id}>)
                    <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto} alt="photo"
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                          <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "3d128ad9-76d0-451b-a5c0-e32585964a04"
                                            }

                                        }).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.unfollow(u.id)
                                            }
                                        });
                                    }}>Unfollow</button>

                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "3d128ad9-76d0-451b-a5c0-e32585964a04"
                                            }
                                        }).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                        });
                                    }}>Follow</button>
                            }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}

export default Users;