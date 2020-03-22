import { connect } from 'react-redux';
import { createMessage } from "../../redux/dialogue-reducer";
import Dialogues from "./Dialogues";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage
  }
}

let mapDispatchToPrps = (dispatch) => {
  return {
    sendMessage: (newMassageBody) => {
      dispatch(createMessage(newMassageBody))
    }
  }
}

export default compose(connect(
  mapStateToProps, mapDispatchToPrps),
  withAuthRedirect
)(Dialogues)