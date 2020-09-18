import styles from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const savedStatus = <span onClick={activateEditMode}>{props.status}</span>
    const emptyStatus = <span className={styles.emptyStatus} onClick={activateEditMode}>change status</span>

    return (
        <div>
            {!editMode &&
            <div className={styles.statusWrap}>
                {props.status
                    ? savedStatus
                    : emptyStatus
                }
            </div>
            }

            {editMode &&
            <div className={styles.statusWrap}>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;