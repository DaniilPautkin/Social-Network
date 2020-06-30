import React, { ChangeEvent, useEffect, useState } from 'react'
import { StatusLine } from '../../../styles/Profile-styles'

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
                    <StatusLine>Status: </StatusLine>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || '-------'}
                    </span>
                </div>
            )}
            {editMode && (
                <div>
                    <StatusLine>Status: </StatusLine>
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
