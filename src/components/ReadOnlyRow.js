import React from "react";

function ReadOnlyRow({ contact, handleEditClick, handleDeleteClick }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.adress}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={()=>handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ReadOnlyRow;
