import React from "react";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from "./../../redux/profile-reducer"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.UserId;
    if (!userId) {
      userId = this.props.loggedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    );
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loggedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer)
