import React from 'react'
import { useSelector } from 'react-redux'
import { getIsFetching } from '../../redux/users-selectors'
import Preloader from '../common/Preloader/Preloader'
import { Users } from './Users'

type UsersPagePropsType = {}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return <>{isFetching ? <Preloader /> : <Users />}</>
}
