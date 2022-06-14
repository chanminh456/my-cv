import { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import BirtdayRemider from "./module/Project/birthday-remider";
import Tour from "./module/Project/tour";
import MyCV from "./module/MainPage";
import ErrorPage from "./ErrorPage";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/my-cv" element={<MyCV />}></Route>
        <Route exact path="/project1" element={<BirtdayRemider />}></Route>
        <Route exact path="/tour" element={<Tour />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
