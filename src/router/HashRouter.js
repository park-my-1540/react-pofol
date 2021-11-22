import React from "react";
import {Route,Routes,Link} from 'react-router-dom';
import Portfolio from "../component/Portfolio"
import DetailPage from "../component/DetailPage"
/**
 * 하는 일 : Router 태그들을 감쌈.
 */

export default function HashRouter() {
  return (
  <>
   <Routes>
      <Route path="/" exact={true} element={<Portfolio/>} />
      <Route path="/project/:id" exact={true} element={<DetailPage/>} />
    </Routes>
  </>
  );
}