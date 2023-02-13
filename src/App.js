import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/layout/Navbar";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import NotFound from "./Component/Pages/NotFound";
import Downpage from "./Component/layout/Downpage";
import { GithubProvider } from "./Component/Context/Github/GithubContext";

function App() {
  return (
    <GithubProvider>
    <BrowserRouter>
            <div className="flex flex-col justify-between h-screen">
              <Navbar/>
              
              <main className="container mx-auto px-3 pb-12">
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/*" element={<NotFound/>} />
                </Routes>
              </main>

                <Downpage/>
            </div>
    </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
