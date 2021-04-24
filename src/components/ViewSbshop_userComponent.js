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
      <>
        <h2
          className="text-center"
          style={{
            marginTop: "90px",
            fontFamily: "Georgia, serif",
            marginLeft: "50px",
            fontWeight: "900",
            fontSize: "30px",
          }}
        >
          View User Details
        </h2>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <div className="card-body">
            <div className="row">
              <label style={{ fontWeight: "500", fontSize: "18px" }}>
                First Name :
              </label>

              <div>{this.state.sbshop_user.user_firstname}</div>
            </div>

            <div className="row">
              <label style={{ fontWeight: "500", fontSize: "18px" }}>
                Last Name :
              </label>
              <div>{this.state.sbshop_user.user_lastname}</div>
            </div>

            <div className="row">
              <label style={{ fontWeight: "500", fontSize: "18px" }}>
                Address :
              </label>
              <div>{this.state.sbshop_user.user_address}</div>
            </div>

            <div className="row">
              <label style={{ fontWeight: "500", fontSize: "18px" }}>
                Phone Numbe :
              </label>
              <div>{this.state.sbshop_user.user_phone_number}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ViewSbshop_userComponent;
