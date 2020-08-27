import styles from './users.module.css';
import userDefaultPhoto from '../../assets/images/defaultUser.jpg'
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, followingInProgress, follow, unfollow,  ...props}) => {

    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount}
                       pageSize={pageSize}
            />

            { users.map(u => <User
                user={u}
                followingInProgress={followingInProgress}
                follow={follow}
                unfollow={unfollow} key={u.id}/>) }
        </div>
    )
}

export default Users;