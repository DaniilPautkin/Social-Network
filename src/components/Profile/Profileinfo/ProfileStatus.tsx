import Text from 'antd/lib/typography/Text'
import React, { ChangeEvent, useEffect, useState } from 'react'
import {
    Status,
    StatusLine,
    StyledSpan,
    StyledStatusInput,
} from '../../../styles/Profile-styles'

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
    }, [props.status])

    return (
        <div>
            {!editMode && (
                <Status>
                    <StatusLine>Status: </StatusLine>
                    <StyledSpan onDoubleClick={activateEditMode}>
                        {props.status || <Text code>No status</Text>}
                    </StyledSpan>
                </Status>
            )}
            {editMode && (
                <Status>
                    <StatusLine>Status: </StatusLine>
                    <StyledStatusInput
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        value={status}
                    />
                </Status>
            )}
        </div>
    )
}

export default ProfileStatus
