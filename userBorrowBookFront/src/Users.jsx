import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./api";
import { Card, CardContent, Typography, Grid, Paper, Button } from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete a user by ID

  //Update user
    //Redirect to update form

  //Create user
  const createUser = () => {
    navigate("/users/create");
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Paper style={{ padding: "16px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={createUser}
        style={{ marginBottom: "20px" }}
      >
        Create User
      </Button>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {user.userAppName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {user.age}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Users;
