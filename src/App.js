import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
    localStorage.setItem("formData", JSON.stringify([...formData, data]));
  };

  const handleEdit = (index, data) => {
    const updatedData = [...formData];
    updatedData[index] = data;
    setFormData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <Form handleFormSubmit={handleFormSubmit} />
      <Table
        formData={formData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
