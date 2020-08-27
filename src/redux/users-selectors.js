import {createSelector} from 'reselect'

const getUsers = (state) => {
    return state.usersPage.users;
}

const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) =>{
    return users.filter(u => true);
})


export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}


