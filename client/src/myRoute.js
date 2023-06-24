import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Form from './Form';
import SinglePage from './SinglePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:productName" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;