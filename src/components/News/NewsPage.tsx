import React from 'react'
import Text from 'antd/lib/typography/Text'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const NewsPage: React.FC = () => {
    return <Text code>In Progress</Text>
}

export default compose<React.ComponentType>(
    withAuthRedirect
)(NewsPage)
