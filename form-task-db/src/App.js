
import React, { useEffect, useState } from "react";
import Layout from "./pages/layout/Layout";
import Header from "./pages/home/Header";
import Error from "./pages/Error/Error";
import Form from './pages/form/Form'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/success/Success";
import AppManage from "./components/AppManage";






function App() {

  //All Application
  const [applications, setApplications] = useState([{}]);

  console.log(applications);




  return (

    <BrowserRouter>
      <Layout applications={applications}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/applyForm" element={<Form setApplications={setApplications} />} />
          <Route path="/applications" element={<AppManage applications={applications} setApplications={setApplications} />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
