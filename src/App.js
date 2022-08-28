import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

//<Route path="/search" component={<SearchPage />} />
//

export default App;