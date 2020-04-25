import React from "react"
import s from "./News.module.css"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { connect } from "react-redux"

class NewsContainer extends React.Component {
  render() { return <a href='/#' className={s.name}>News</a> }
}

let mapStateToProps = (userId) => ({
  key: userId
})

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { withAuthRedirect })
)(NewsContainer)
