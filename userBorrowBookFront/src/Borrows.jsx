import React, { useState, useEffect } from 'react';
import axios from "./api";
import { Card, CardContent, Typography, Paper, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Borrows = () => {
  const [borrows, setBorrows] = useState([]); // we could create useloading and useerror
  // usestate for users
  const [users, setUsers] = useState([]);
  // usestate for books
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // useeffect calling fetch books, users and borrows
  
  const fetchBorrows = async () => {
    try {
      const response = await axios.get("/borrows");
      setBorrows(response.data);
    } catch (error) {
      console.error("Error fetching borrows:", error);
    }
  };
  
  const fetchBooks = async () => {
    try {
      const response = await axios.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchBooks();
    fetchBorrows();
  }, []);

  //createborrow that navigates to component create borrow and passes the books and users in the state as props

  const createBorrow = () => {
    navigate("/borrows/create", {
      state: {
        books,
        users,
      },
    });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Box sx={{ marginBottom: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={createBorrow}
          sx={{ marginBottom: 2 }}
        >
          Create New Borrow
        </Button>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {borrows.map((borrow) => (
          <Box
            key={borrow.id}
            sx={{
              gridColumn: {
                xs: "span 12",
                sm: "span 6",
                md: "span 4",
              },
            }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  Borrow ID: {borrow.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  User: {borrow.user.userAppName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Book: {borrow.book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Borrow Date: {borrow.borrowDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Returned: {borrow.returned ? 'Yes' : 'No'}
                </Typography>
                <Box sx={{ marginTop: 1 }}>
                  <Button
                    color="primary"
                    onClick={() => updateBorrow()}
                    sx={{ marginRight: 1 }}
                  >
                    Return Book
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => deleteBorrow()}
                  >
                    Delete Borrow
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

export default Borrows;
