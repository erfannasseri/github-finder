import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/layout/Navbar";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import NotFound from "./Component/Pages/NotFound";
import User from "./Component/Pages/User";
import Downpage from "./Component/layout/Downpage";
import { GithubProvider } from "./Component/Context/Github/GithubContext";
import { AlertProvider } from "./Component/Context/Alert/AlertContext";
import Alert from "./Component/layout/Alert";

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <BrowserRouter>
            <div className="flex flex-col justify-between h-screen">
              <Navbar/>
              
              <main className="container mx-auto px-3 pb-12">
                <Alert/>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/user/:login" element={<User/>} />
                  <Route path="/*" element={<NotFound/>} />
                </Routes>
              </main>

                <Downpage/>
            </div>
    </BrowserRouter>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
