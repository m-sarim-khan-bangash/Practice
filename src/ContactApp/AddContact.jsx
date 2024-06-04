import React, { useState } from "react";

const AddContact = ({ addContact }) => {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (contactData.name === "" || contactData.email === "") {
      alert("Please fill in all the fields");
      return;
    }
    // console.log(contactData);
    addContact(contactData);
    setContactData({ name: "", email: "" }); // Clear the form
  };

  return (
    <div className="container">
      <h2 className="heading">Add Contact</h2>
      <form className="form">
        <input
          type="text"
          className="input"
          placeholder="Name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          className="input"
          placeholder="Email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
        <button className="button" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
