import React, { Component } from "react";
import Sbshop_userService from "../services/Sbshop_userService";
import axios from "axios";

class UpdateSbshop_userComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.match.params.user_id,
      user_firstname: "",
      user_lastname: "",
      user_username: "",
      user_password: "",
      user_status_id: "",
      user_address: "",
      user_phone_number: "",
    };
    this.changeFiratNameHandler = this.changeFiratNameHandler.bind(this);
    this.changeLastnameHandler = this.changeLastnameHandler.bind(this);
    this.changeusernameHandler = this.changeusernameHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.changestatus_idHandler = this.changestatus_idHandler.bind(this);
    this.changeaddressHandler = this.changeaddressHandler.bind(this);
    this.changephone_numberHandler = this.changephone_numberHandler.bind(this);
    this.updateSbshop_user = this.updateSbshop_user.bind(this);
  }

  componentDidMount() {
    Sbshop_userService.getSbshop_userById(this.state.user_id).then((res) => {
      let sbshop_user = res.data;
      this.setState({
        user_firstname: sbshop_user.user_firstname,
        user_lastname: sbshop_user.user_lastname,
        user_username: sbshop_user.user_username,
        user_password: sbshop_user.user_password,
        user_status_id: sbshop_user.user_status_id,
        user_address: sbshop_user.user_address,
        user_phone_number: sbshop_user.user_phone_number,
      });
    });
  }

  updateSbshop_user = (s) => {
    s.preventDefault();
    let sbshop_user = {
      user_firstname: this.state.user_firstname,
      user_lastname: this.state.user_lastname,
      user_username: this.state.user_username,
      user_password: this.state.user_password,
      user_status_id: this.state.user_status_id,
      user_address: this.state.user_address,
      user_phone_number: this.state.user_phone_number,
    };
    console.log(JSON.stringify(sbshop_user));
    Sbshop_userService.updatesbshop_user(sbshop_user, this.state.user_id).then(
      (res) => {
        this.props.history.push("/sbshop_user");
      }
    );

    axios
      .post("http://localhost:8080/api/sbshop_user", sbshop_user)
      .then((res) => this.props.history.push("/sbshop_user"))
      .catch((e) => console.log(e));
    // Sbshop_userService.CreateSbshop_user(sbshop_user).then((res) => {
    //   this.props.history.push("/sbshop_user");
    // });
  };

  changeFiratNameHandler = (event) => {
    this.setState({ user_firstname: event.target.value });
  };
  changeLastnameHandler = (event) => {
    this.setState({ user_lastname: event.target.value });
  };
  changeusernameHandler = (event) => {
    this.setState({ user_username: event.target.value });
  };
  changepasswordHandler = (event) => {
    this.setState({ user_password: event.target.value });
  };
  changestatus_idHandler = (event) => {
    this.setState({ user_status_id: event.target.value });
  };

  changeaddressHandler = (event) => {
    this.setState({ user_address: event.target.value });
  };
  changephone_numberHandler = (event) => {
    this.setState({ user_phone_number: event.target.value });
  };

  cancel() {
    this.props.history.push("/sbshop_user");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Updast User</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6">
                        <label>First Name</label>
                        <input
                          placeholder="First Name"
                          name="user_firstname"
                          className="form-control"
                          value={this.state.user_firstname}
                          onChange={this.changeFiratNameHandler}
                        />
                      </div>
                      <div className="col-6">
                        <label>Last Name</label>
                        <input
                          placeholder="Last Name"
                          name="user_lastname"
                          className="form-control"
                          value={this.state.user_lastname}
                          onChange={this.changeLastnameHandler}
                        />
                      </div>
                      <div className="col-6">
                        <label>User Name</label>
                        <input
                          placeholder="User Name"
                          name="user_username"
                          className="form-control"
                          value={this.user_username}
                          onChange={this.changeusernameHandler}
                        />
                      </div>
                      <div className="col-6">
                        <label>Password</label>
                        <input
                          placeholder="Password"
                          name="user_password"
                          className="form-control"
                          value={this.state.user_password}
                          onChange={this.changepasswordHandler}
                        />
                      </div>
                      <div className="col-6">
                        <label>Status ID</label>
                        <input
                          placeholder="Status ID"
                          name="user_status_id"
                          className="form-control"
                          value={this.state.user_status_id}
                          onChange={this.changestatus_idHandler}
                        />
                      </div>
                      <div className="col-6">
                        <label>Phone Number</label>
                        <input
                          placeholder="Phone Number"
                          name="user_phone_number"
                          className="form-control"
                          value={this.state.user_phone_number}
                          onChange={this.changephone_numberHandler}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <input
                      placeholder="Address"
                      name="user_address"
                      className="form-control"
                      value={this.state.user_address}
                      onChange={this.changeaddressHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateSbshop_user}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateSbshop_userComponent;
