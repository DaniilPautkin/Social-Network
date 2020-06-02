import React, { useState, useEffect, ChangeEvent } from 'react'
import s from './ProfileStatus.module.css'

type PropsType = {
    updateStatus: (newStatus: string) => void
    status: string
}

const ProfileStatus = (props: PropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [])

    return (
        <div>
            {!editMode && (
                <div>
                    <b className={s.statusLine}>Status: </b>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || '-------'}
                    </span>
                </div>
            )}
            {editMode && (
                <div>
                    <b className={s.statusLine}>Status: </b>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        value={status}
                    />
                </div>
            )}
        </div>
    )
}

export default ProfileStatus
