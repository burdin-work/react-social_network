import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css';
import s from './Login.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}

            {/*<div className={s.formCheckbox}>{createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}</div>*/}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input)}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}

            <div>
                <button className={s.authButton}>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {

    const onSubmit = ({email, password, rememberMe, captcha}) => {
        login(email, password, rememberMe, captcha);
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={s.loginWrap}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }

}

export default connect(mapStateToProps, {login})(Login);