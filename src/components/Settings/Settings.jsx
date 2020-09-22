import React from 'react';
import{ProfileDataFormSettings} from "../Profile/ProfileInfo/ProfileDataForm";

const Settings = ({profile, saveProfile, history}) => {

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            history.push('/profile');
        })
    }
    return (
        <div>
            { profile &&
            <ProfileDataFormSettings
                initialValues={profile}
                profile={profile}
                onSubmit={onSubmit}/>
            }
        </div>
    )
}

export default Settings;