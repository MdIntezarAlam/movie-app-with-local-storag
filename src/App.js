import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviePage, Login, Signup } from "./component";
import { PAGE_PATH } from "./utils/cosntant";
import CompInfo from "./component/CompInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_PATH.SIGNUP} element={<Signup />} />
        <Route path={PAGE_PATH.LOGIN} element={<Login />} />
        <Route path={PAGE_PATH.MOVIEPAGE} element={<MoviePage />} />
        <Route path={PAGE_PATH.COMPINFO} element={<CompInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
