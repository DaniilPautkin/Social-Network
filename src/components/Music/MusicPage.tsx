import Text from 'antd/lib/typography/Text'
import React from 'react'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const MusicPage: React.FC = () => {
    return <Text code>In Progress</Text>
}

export default compose<React.ComponentType>(withAuthRedirect)(MusicPage)
