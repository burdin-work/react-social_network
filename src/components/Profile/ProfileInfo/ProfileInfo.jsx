import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus.jsx";
import userDefaultPhoto from '../../../assets/images/defaultUser.jpg'
import iconDownload from '../../../assets/images/icon_download.png'
import {ProfileDataFormInfo} from "./ProfileDataForm";
import Lightbox from "./LargePhoto/Lightbox";


export const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.infoTextWrap}>
        <span className={styles.infoTextKey}>{contactTitle}:</span>
        <span className={styles.infoTextDescr}>{contactValue}</span>
    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return <div className={styles.descriptionRight}>
        <div className={styles.fullName}>
            <b>{profile.fullName}</b>
        </div>
        <ProfileStatus profile={profile} status={status} updateStatus={updateStatus}/>


        <div className={styles.mainInfoWrap}>
            {isOwner && <a className={styles.mainInfoEditLink} onClick={goToEditMode}>Edit</a>}
            <div className={styles.infoTextWrap}>
                <span className={styles.infoTextKey}>Looking for a job:</span>
                <span className={styles.infoTextDescr}>{profile.lookingForAJob ? "yes" : "no"}</span>
            </div>

            {profile.lookingForAJob &&
            <div className={styles.infoTextWrap}>
                <span className={styles.infoTextKey}>My professional skills:</span>
                <span className={styles.infoTextDescr}>{profile.lookingForAJobDescription}</span>
            </div>
            }

            <div className={styles.infoTextWrap}>
                <span className={styles.infoTextKey}>About me:</span>
                <span className={styles.infoTextDescr}>{profile.aboutMe}</span>
            </div>

            <div>
            </div>
        </div>
        <div className={styles.contactsInfoWrap}>
            {isOwner && <a className={styles.contactsInfoEditLink} onClick={goToEditMode}>Edit</a>}
            {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const ProfileInfo = ({profile, isOwner, savePhoto, saveProfile, status, updateStatus}) => {

    let mainPhoto = undefined;
    if(profile) {
        mainPhoto = profile.photos.large;
    }

    let [editMode, setEditMode] = useState(false);
    let [toogleLightbox, lightboxSet] = useState(false);


    const changeToggleLightBox = () => {
        lightboxSet(!toogleLightbox)
    }

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>

                <div className={styles.descriptionLeft}>

                    <div className={styles.changeAvatarContainer}>
                        <img src={profile.photos.large || userDefaultPhoto}
                             className={styles.mainPhoto}
                             onClick={changeToggleLightBox}
                        />
                        {isOwner
                        &&
                        <label htmlFor="avatar"
                               className={styles.changeAvatar}
                        >
                            <div className={styles.AvatarControl}>
                                <div className={styles.iconDownloadWrap}>
                                    <img src={iconDownload}
                                         alt="Download"
                                         className={styles.iconDownload}
                                    />
                                    Update photo
                                </div>
                                <input id="avatar" type="file" onChange={onMainPhotoSelected}
                                       style={{display: "none"}}/>
                            </div>
                        </label>
                        }
                    </div>

                </div>

                <Lightbox
                    mainPhoto={mainPhoto}
                    toogleLightbox={toogleLightbox}
                    changeToggleLightBox={changeToggleLightBox}
                />

                {editMode
                    ? <ProfileDataFormInfo
                        initialValues={profile}
                        profile={profile}
                        onSubmit={onSubmit}
                        prefixForName=''/>

                    : <ProfileData profile={profile}
                                   status={status}
                                   updateStatus={updateStatus}
                                   isOwner={isOwner}
                                   goToEditMode={() => setEditMode(true)}/>}


            </div>
        </div>
    )
};


export default ProfileInfo;