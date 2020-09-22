import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Contact} from "./ProfileInfo";
import styles from './ProfileInfo.module.css';
import {reduxForm} from "redux-form";
import commonStyles from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return(
    <div className={styles.descriptionRight}>
    <form className={styles.profileInfoForm} onSubmit={handleSubmit}>

        {error && <div className={commonStyles.formSummaryError}>
            {error}
        </div>}

        <div className={styles.formName}>
            <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
        </div>

        <div className={styles.formJobWrap}>
            <b className={styles.formJobKey}>Looking for a job</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional skills:</b> {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
        </div>

        <b>Contacts:</b>
        <div className={styles.contactsWrap}>
            {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={styles.contact}>
                <span>{key}</span>
                {createField(key, "contacts." + key, [], Input)}
            </div>
            //<Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>


        <div><button className={styles.saveButton}>save</button></div>

    </form>
    </div>
    )
}

export const ProfileDataFormInfo = reduxForm({form: 'info_edit-profile', enableReinitialize: true})(ProfileDataForm);
export const ProfileDataFormSettings = reduxForm({form: 'settings_edit-profile', enableReinitialize: true})(ProfileDataForm);