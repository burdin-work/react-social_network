import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom"
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }

        let authorizedUserId = this.props.authorizedUserId;

        if (!userId) userId = authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }


    render() {
        return <Profile
            {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
        />
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId,
        status: state.profilePage.status
    }
}

export default compose(
        connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
        withRouter,
        withAuthRedirect
    )(ProfileContainer);