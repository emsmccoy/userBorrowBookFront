import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Books from "./Books";
import Users from "./Users";
import Borrows from "./Borrows";
import UpdateBookForm from "./UpdateBookForm";
import UpdateUserForm from "./UpdateUserForm";
import CreateBookForm from "./CreateBookForm";
import CreateUserForm from "./CreateUserForm";
import UserDetails from "./UserDetails"

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/users" element={<Users />} />
            <Route path="/borrows" element={<Borrows />} />
            <Route path="/books/update/:id" element={<UpdateBookForm />} />
            <Route path="/users/update/:id" element={<UpdateUserForm />} />
            <Route path="/books/create" element={<CreateBookForm />} />
            <Route path="/users/create" element={<CreateUserForm />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
