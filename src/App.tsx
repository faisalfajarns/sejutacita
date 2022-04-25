import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import NavBar from "./component/NavBar";
import Book from "./pages/Book";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="book/*" element={<Book />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
