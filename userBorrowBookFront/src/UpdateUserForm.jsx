//imports

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "./api";
import { TextField, Button, Paper, Typography } from "@mui/material";

//define component

const UpdateUserForm = () => {

    //hooks
  const location = useLocation();
  const navigate = useNavigate();
  // get user data from state
  const user = location.state?.user || {};

  const [formData, setFormData] = useState({
    userAppName: user.userAppName || "",
    email: user.email || "",
    password: user.password || "",
    age: user.age || "",
    address: user.address || "",
    archived: user.archived || false,
    dob: user.dob || "", 
  });
//handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
//handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/v1/users/${user.id}`,
        formData
      );
      alert("User updated successfully!");
      navigate("/users");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <Typography variant="h5">Update User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="User App Name"
          name="userAppName"
          value={formData.userAppName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Update User
        </Button>
      </form>
    </Paper>
  );
};

export default UpdateUserForm;
