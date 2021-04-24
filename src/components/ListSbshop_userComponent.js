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
    this.props.history.push("/add-sbshop_user/_add");
  }

  render() {
    return (
      <>
        <h2
          className="text-center"
          style={{
            fontFamily: "Georgia, serif",
            marginLeft: "50px",
            fontWeight: "900",
            fontSize: "40px",
          }}
        >
          User List
        </h2>
        <div className="row">
          <button className="btn btn-success" onClick={this.addSbshop_user}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 10 }}
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
              <path
                fill-rule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              ></path>
            </svg>
            Add User
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th align="center">ID</th>
                <th align="center">First Name</th>
                <th align="center">Last Name</th>
                <th align="center">Address</th>
                <th align="center">Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.sbshop_user.map((sbshop_user) => (
                <tr key={sbshop_user.user_id}>
                  <td>{sbshop_user.user_id}</td>
                  <td>{sbshop_user.user_firstname}</td>
                  <td>{sbshop_user.user_lastname}</td>

                  <td>{sbshop_user.user_address}</td>
                  <td>{sbshop_user.user_phone_number}</td>
                  <td>
                    <button
                      onClick={() => this.editsbshop_user(sbshop_user.user_id)}
                      className="btn btn-info"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginRight: 10 }}
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-gear-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
                      </svg>
                      Update
                    </button>

                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() =>
                        this.deletesbshop_user(sbshop_user.user_id)
                      }
                      className="btn btn-danger"
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
                      Delete
                    </button>

                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewsbshop_user(sbshop_user.user_id)}
                      className="btn btn-light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                      </svg>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
