import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import News from './News'

class NewsContainer extends React.Component<any> {
    render() {
        return <News />
    }
}
// todo: fix
let mapStateToProps = (userId: any) => ({
    key: userId,
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, { withAuthRedirect })
)(NewsContainer)
