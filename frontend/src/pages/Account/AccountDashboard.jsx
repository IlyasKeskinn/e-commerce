import { connect } from "react-redux"
import "./Account.css"

const AccountDashboard = ({auth}) => {
  return (
    <div className="page-content my-account__dashboard">
      <p>Hello <strong>{auth.user.user.userName}</strong></p>
      <p>From your account dashboard you can view your <a href="#">recent orders</a>, manage your <a href="#">shipping and billing addresses</a>, and edit your <a href="#">password and account details</a>.</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth,
  }
}
export default connect(mapStateToProps)(AccountDashboard)

