import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
// HashRouter - for loading pages on the Github Pages without 404 error
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsContainer from "./components/Settings/SettingsContainer";
import NotFound from "./components/404/notFound";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured")
        //console.error(promise)
    }

    componentDidMount() {
        this.props.initializeApp();

        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillMount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="page">
                <div className="header-wrap">
                    <HeaderContainer/>
                </div>
                <div className="app-container">
                    <div className="main">
                        <Navbar/>
                        <div className="content">

                            <Switch>
                                <Route exact path='/' render={() =>
                                    <Redirect to={"/profile"}/>}/>
                                <Route path='/settings' render={() => <SettingsContainer/>}/>
                                <Route path='/music' render={() => <Music/>}/>
                                <Route path='/news' render={() => <News/>}/>
                                <Route path='/dialogs'
                                       render={withSuspense(DialogsContainer)}/>
                                <Route path='/profile/:userId?' render={() =>
                                    <ProfileContainer/>}/>
                                <Route path='/users' render={() =>
                                    < UsersContainer/>}/>
                                <Route path='/login' render={() =>
                                    < Login/>}/>
                                <Route path='*' render={() =>
                                    <NotFound/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


const SamuraiJSApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SamuraiJSApp;