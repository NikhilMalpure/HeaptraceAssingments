import React, { Fragment, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormdata, setaddFormdata] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
  });
  const [editContactid, setEditContactid] = useState(null);

  const [editFormData, setEditFormData] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
  });
  const handleAddformchages = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieledValue = event.target.value;

    const newFormData = { ...addFormdata };
    newFormData[fieldName] = fieledValue;

    setaddFormdata(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieledValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieledValue;

    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: addFormdata.nanoid,
      name: addFormdata.name,
      adress: addFormdata.adress,
      phone: addFormdata.phone,
      email: addFormdata.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactid(contact.id);

    const formValues = {
      name: contact.name,
      adress: contact.adress,
      phone: contact.phone,
      email: contact.email,
    };
    setEditFormData(formValues);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactid,
      name: editFormData.name,
      adress: editFormData.adress,
      phone: editFormData.phone,
      email: editFormData.email,
    };
    const newContacts = { ...contacts };

    const index = contacts.findIndex((contact) => contact.id === editContactid);
    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactid(null);
  };
  const handleCancelClick = () => {
    setEditContactid(null);
  };

  const handleDeleteClick = (contactid) =>{
    const newContacts = { ...contacts };

    const index = contacts.findIndex((contact) => contact.id === contactid);
    
    contacts.splice(index,1);

    setContacts(newContacts);
  }
  return (
    <div className="app-container">
      onChange={handleAddformchages}
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Adress</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactid === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick = {handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a data </h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="add a name"
          onChange={handleAddformchages}
        ></input>
        <input
          type="text"
          name="adress"
          required="required"
          placeholder="add a adress"
          onChange={handleAddformchages}
        ></input>
        <input
          type="text"
          name="phone"
          required="required"
          placeholder="add a phone"
          onChange={handleAddformchages}
        ></input>
        <input
          type="text"
          name="email"
          required="required"
          placeholder="add a email"
          onChange={handleAddformchages}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
