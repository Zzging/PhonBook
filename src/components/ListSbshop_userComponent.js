import React, { Component } from "react";
import Sbshop_userService from "../services/Sbshop_userService";
import UpdateSbshop_userComponent from "../components/UpdateSbshop_userComponent";

export default class ListSbshop_userComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sbshop_user: [],
    };
    this.addSbshop_user = this.addSbshop_user.bind(this);
    this.editsbshop_user = this.editsbshop_user.bind(this);
    this.deletesbshop_user = this.deletesbshop_user.bind(this);
  }
  deletesbshop_user(user_id) {
    Sbshop_userService.deleteSbshop_user(user_id).then((res) => {
      this.setState({
        sbshop_user: this.state.sbshop_user.filter(
          (sbshop_user) => sbshop_user.user_id !== user_id
        ),
      });
    });
  }

  viewsbshop_user(user_id) {
    this.props.history.push(`/view-sbshop_user/${user_id}`);
  }
  editsbshop_user(user_id) {
    this.props.history.push(`/add-sbshop_user/${user_id}`);
  }

  componentDidMount() {
    Sbshop_userService.getsbshop_user().then((res) => {
      this.setState({ sbshop_user: res.data });
    });
  }

  addSbshop_user() {
    this.props.history.push("/add-Sbshop_user/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">User List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addSbshop_user}>
            Add User
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-boodered">
            <thead>
              <tr>
                <th>user_firstname</th>
                <th>user_lastname</th>
                <th>user_username</th>
                <th>user_password</th>
                <th>user_status_id</th>
                <th>user_address</th>
                <th>user_phone_number</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.sbshop_user.map((sbshop_user) => (
                <tr key={sbshop_user.user_id}>
                  <td>{sbshop_user.user_firstname}</td>
                  <td>{sbshop_user.user_lastname}</td>
                  <td>{sbshop_user.user_username}</td>
                  <td>{sbshop_user.user_password}</td>
                  <td>{sbshop_user.user_status_id}</td>
                  <td>{sbshop_user.user_address}</td>
                  <td>{sbshop_user.user_phone_number}</td>
                  <td>
                    <button
                      onClick={() => this.editsbshop_user(sbshop_user.user_id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>

                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() =>
                        this.deletesbshop_user(sbshop_user.user_id)
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>

                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewsbshop_user(sbshop_user.user_id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
