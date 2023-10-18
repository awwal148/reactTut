import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {  Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import {  Contact } from "./pages/Contact"
import {  Navbar } from "./Navbar"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, createContext } from 'react';

export const AppContext = createContext()

function App() {
  const client = new QueryClient({defaultOptions: {
    refectOnWindowFocus: false,
  }})
  const [userName, setUserName] = useState("Dee vibes")
  return (
    <div className="App">
      <AppContext.Provider value={{userName, setUserName}}>
        <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/profile" element={<Profile />} />
          <Route path= "/contact" element={<Contact />} />
          <Route path= "*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
      </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
