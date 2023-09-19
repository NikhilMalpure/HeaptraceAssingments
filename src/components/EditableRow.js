import React from "react";

function EditableRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="add a name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="adress"
          required="required"
          placeholder="add a adress"
          value={editFormData.adress}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="phone"
          required="required"null
          placeholder="add a phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="email"
          required="required"
          placeholder="add a email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
}

export default EditableRow;
