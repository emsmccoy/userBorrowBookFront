import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./api";
import { Card, CardContent, Typography, Grid, Paper, Button, Box } from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/users"); // we can also use fetch ()
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete a user by ID

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      // other way would be to use fetchUsers function again
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  //Update user
  //Redirect to update form
  const updateUser = async (user) => {
    navigate(`/users/update/${user.id}`, { state: { user } });
  };

  //Create user
  const createUser = () => {
    navigate("/users/create");
  }

  //Show details 
  const showUserDetails = (user) => {
    navigate(`/users/${user.id}`, { state: { user } });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Paper sx={{ padding: 2 }}>
      <Box sx={{ marginBottom: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={createUser}
          sx={{ marginBottom: 2 }}
        >
          Create User
        </Button>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {users.map((user) => (
          <Box
            key={user.id}
            gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3" }}
          >
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
                <Box sx={{ marginTop: 1 }}>
                  <Button
                    variant = "text"
                    onClick={() => showUserDetails(user)}
                    sx = {{ marginRight: 1 }}>
                    Show details
                  </Button>
                </Box>
                <Box sx={{ marginTop: 1 }}>
                  <Button
                    color="primary"
                    onClick={() => updateUser(user)}
                    sx={{ marginRight: 1 }}
                  >
                    Update
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default Users;
