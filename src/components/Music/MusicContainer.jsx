import React from "react";
import s from "./Music.module.css";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { connect } from "react-redux";

class MusicContainer extends React.Component {
  render() { return <a href="/#" className={s.name}>Music</a> }
};

let mapStateToProps = (userId) => ({
  key: userId
})

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {})
)(MusicContainer)
