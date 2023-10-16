import React from "react";

import { Article, Brand, Feature, Navbar } from "./components";
import { Blog, Features, Footer, Header, WhatVisip } from "./containers";
import "./App.css";

const app = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatVisip />
      <Features />
      <Footer />
    </div>
  );
};

export default app;
