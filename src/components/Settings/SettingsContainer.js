import React from 'react';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom"
import { getUserProfile, saveProfile } from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Settings from "./Settings";

class SettingsContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.authorizedUserId;
        this.props.getUserProfile(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profile &&
            this.props.profile.userId != prevProps.profile.userId) {
            this.refreshProfile();
        }
    }


    render() {
        return  <Settings
            {...this.props}
            profile={this.props.profile}
            history={this.props.history}
        />
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, saveProfile}),
    withRouter,
    withAuthRedirect
)(SettingsContainer);