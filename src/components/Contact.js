import React, { Component } from "react";
import "../components/Contact.css";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    toggler: false
  };

  render() {
    const { name, email, phone, address } = this.props.contact;
    const { toggler } = this.state;
    return (
      <div>
        sdfgh
        <div className="contactSection  container p-4">
          <div className="card p-4">
            <ul className="list-group">
              <h5 className="list-group-item bg-primary text-white name">
                <i className="fas fa-user-circle fa-2x py-2 " /> <br />
                {name}
                <i
                  className="fas fa-angle-down ml-3 button"
                  onClick={() =>
                    this.setState({ toggler: !this.state.toggler })
                  }
                />
              </h5>

              {toggler ? (
                <div>
                  <li className="list-group-item">
                    <b> Email:</b> {email}
                  </li>
                  <li className="list-group-item">
                    <b>Phone:</b>
                    {phone}
                  </li>
                  <li className="list-group-item">
                    <b>Address:</b>
                    {address}
                  </li>
                </div>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
