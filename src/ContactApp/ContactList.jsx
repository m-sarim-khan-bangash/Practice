import React from "react";

const ContactList = (props) => {
  const { contact, removeContact } = props;
  console.log(contact, "From ContactList");

  return (
    <>
      {contact.map((contact, index) => (
        <div key={index} className="contact-list">
          <div className="contact-card ">
            <div className="contact-name">{contact.data.name}</div>
            <div className="contact-email">{contact.data.email}</div>
            <button
              onClick={() => removeContact(contact.id)}
              className="del-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactList;
