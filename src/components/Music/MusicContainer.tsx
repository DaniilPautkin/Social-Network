import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Music from './Music'

class MusicContainer extends React.Component {
    render() {
        return <Music />
    }
}
// todo: fix
let mapStateToProps = (userId: any) => ({
    key: userId,
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {})
)(MusicContainer)
