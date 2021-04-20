import React, { Component } from "react";
import Sbshop_userService from "../services/Sbshop_userService";

class ViewSbshop_userComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.match.params.user_id,
      sbshop_user: {},
    };
  }

  componentDidMount() {
    Sbshop_userService.getSbshop_userById(this.state.user_id).then((res) => {
      this.setState({ sbshop_user: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <div className="taxt-center">View User Details</div>
          <div className="card-body">
            <div className="row">
              <label>User First Name :</label>
              <div>{this.state.sbshop_user.user_firstname}</div>
            </div>

            <div className="row">
              <label>User Last Name :</label>
              <div>{this.state.sbshop_user.user_lastname}</div>
            </div>

            <div className="row">
              <label>User Name :</label>
              <div>{this.state.sbshop_user.user_username}</div>
            </div>

            <div className="row">
              <label>Password :</label>
              <div>{this.state.sbshop_user.user_password}</div>
            </div>

            <div className="row">
              <label>Status_ID:</label>
              <div>{this.state.sbshop_user.user_status_id}</div>
            </div>

            <div className="row">
              <label>Address :</label>
              <div>{this.state.sbshop_user.user_address}</div>
            </div>

            <div className="row">
              <label>Phone Numbe :</label>
              <div>{this.state.sbshop_user.user_phone_number}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewSbshop_userComponent;
