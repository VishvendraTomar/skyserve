import React, { useState } from 'react';
import { ReactFlowProvider } from "reactflow";
import MainRoutes from './Routes/MainRoutes';
import { BrowserRouter } from "react-router-dom";
const App = () => {


  return (
   
    <BrowserRouter>

    <ReactFlowProvider>
      <MainRoutes/>
    </ReactFlowProvider>
  </BrowserRouter>
  );
};

export default App;
