import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./api";
import { TextField, Button, Paper } from "@mui/material";

const CreateUserForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      age: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8080/api/v1/users", formData);
        alert("User created successfully!");
        navigate("/users"); // Redirect back to the users list
      } catch (error) {
        console.error("Error creating user:", error);
        alert("Failed to create user.");
      }
    };

    return (
      <Paper style={{ padding: "16px" }}>
        <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="userAppName"
          value={formData.userAppName}
          onChange={handleChange}
          placeholder="Name"
        />
        <TextField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <TextField
          type="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />  
        <Button type="submit">Create User</Button>      
      </form>
    </Paper>
    );
  };

  export default CreateUserForm;