import React from "react";

const Table = ({ formData, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>City</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((data, index) => (
          <tr key={index}>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.dateOfBirth}</td>
            <td>{data.city}</td>
            <td>{data.state}</td>
            <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
