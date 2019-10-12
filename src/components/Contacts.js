import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "methew dewis",
        email: "meth@exl.com",
        phone: "555-3333-888",
        address: "9086/430 oxford street"
      },

      {
        id: 2,
        name: "rashel lewis",
        email: "rls@exl.com",
        phone: "555-3333-222",
        address: "9086/431 oxford street"
      },

      {
        id: 3,
        name: "henry cris",
        email: "hcris@exl.com",
        phone: "555-3333-666",
        address: "96/4 Verona street"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
export default Contacts;
