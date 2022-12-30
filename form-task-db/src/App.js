
import React from "react";
import Layout from "./pages/layout/Layout";
import Header from "./pages/home/Header";
import Error from "./pages/Error/Error";
import Form from './pages/form/Form'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/success/Success";






function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/applyForm" element={<Form />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
