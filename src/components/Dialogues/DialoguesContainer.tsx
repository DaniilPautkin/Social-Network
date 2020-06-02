import { connect } from 'react-redux'
import { actions } from '../../redux/dialogue-reducer'
import Dialogues from './Dialogues'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'

let mapStateToProps = (state: AppStateType) => {
    return {
        dialoguesPage: state.dialoguesPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { sendMessage: actions.createMessage }),
    withAuthRedirect
)(Dialogues)
