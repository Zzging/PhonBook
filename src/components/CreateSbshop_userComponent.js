import React, { Component } from "react";
import axios from "axios";
import Sbshop_userService from "../services/Sbshop_userService";
class CreateSbshop_userComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.match.params.user_id,
      user_firstname: "",
      user_lastname: "",
      user_address: "",
      user_phone_number: "",
    };

    this.changeFiratNameHandler = this.changeFiratNameHandler.bind(this);
    this.changeLastnameHandler = this.changeLastnameHandler.bind(this);
    this.changeaddressHandler = this.changeaddressHandler.bind(this);
    this.changephone_numberHandler = this.changephone_numberHandler.bind(this);
    this.saveOrUpdateSbshop_user = this.saveOrUpdateSbshop_user.bind(this);
  }

  // Step 3
  componentDidMount() {
    //staep4
    if (this.state.user_id == "_add") {
      return;
    } else {
      Sbshop_userService.getSbshop_userById(this.state.user_id).then((res) => {
        let sbshop_user = res.data;
        this.setState({
          user_firstname: sbshop_user.user_firstname,
          user_lastname: sbshop_user.user_lastname,
          user_address: sbshop_user.user_address,
          user_phone_number: sbshop_user.user_phone_number,
        });
      });
    }
  }

  saveOrUpdateSbshop_user = (s) => {
    s.preventDefault();
    let sbshop_user = {
      user_firstname: this.state.user_firstname,
      user_lastname: this.state.user_lastname,
      user_address: this.state.user_address,
      user_phone_number: this.state.user_phone_number,
    };
    console.log(JSON.stringify(sbshop_user));
    // step5
    console.log(this.state.user_id);
    if (this.state.user_id == "_add") {
      console.log("true");
      Sbshop_userService.createSbshop_user(sbshop_user).then((res) => {
        this.props.history.push(`/sbshop_user`);
      });
    } else {
      console.log("else");
      Sbshop_userService.updatesbshop_user(sbshop_user, this.state.user_id)
        .then((res) => {
          this.props.history.push(`/sbshop_user`);
        })
        .catch((e) => console.log(e));
    }

    // axios
    //   .post("http://localhost:8080/api/sbshop_user", sbshop_user)
    //   .then((res) => this.props.history.push("/sbshop_user"))
    //   .catch((e) => console.log(e));
  };

  changeFiratNameHandler = (event) => {
    this.setState({ user_firstname: event.target.value });
  };
  changeLastnameHandler = (event) => {
    this.setState({ user_lastname: event.target.value });
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

  getTitle() {
    if (this.state.user_id == "_add") {
      return (
        <h3
          className="text-center"
          style={{
            fontFamily: "Georgia, serif",
            marginLeft: "50px",
            fontWeight: "900",
            fontSize: "30px",
          }}
        >
          Add User
        </h3>
      );
    } else {
      return (
        <h3
          className="text-center"
          style={{
            fontFamily: "Georgia, serif",
            marginLeft: "50px",
            fontWeight: "900",
            fontSize: "30px",
          }}
        >
          Update User
        </h3>
      );
    }
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      placeholder="First Name"
                      name="user_firstname"
                      className="form-control"
                      value={this.state.user_firstname}
                      onChange={this.changeFiratNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      placeholder="Last Name"
                      name="user_lastname"
                      className="form-control"
                      value={this.state.user_lastname}
                      onChange={this.changeLastnameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      placeholder="Phone Number"
                      name="user_phone_number"
                      className="form-control"
                      value={this.state.user_phone_number}
                      onChange={this.changephone_numberHandler}
                    />
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
                    onClick={this.saveOrUpdateSbshop_user}
                    style={{ marginLeft: "10px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: 10 }}
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-download"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
                    </svg>
                    Save
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: 10 }}
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                    </svg>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CreateSbshop_userComponent;
