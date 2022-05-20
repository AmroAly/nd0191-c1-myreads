import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import ShelvesList from "./components/ShelvesList";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ShelvesList />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
