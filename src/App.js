import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import DATA_LIST from "./Data_List/Data_List.js";
import { lightTheme, darkTheme } from "./theme/Theme";

export default function App() {
  const CardComp = DATA_LIST.map((item, index) => (
    <Card
      imgURL={item.imgURL}
      title={item.title}
      secondTitle={item.secondTitle}
      key={index}
      id={index}
    />
  ));
  const [themeObj, setThemeObj] = React.useState(lightTheme);

  function themeHandler() {
    setThemeObj(themeObj.theme === "light" ? darkTheme : lightTheme);
  }
  return (
    <Router>
    <div className={`${themeObj.bgColor} ${themeObj.textColor}`}>
       <Navbar themeObj={themeObj}/>
    <Switch>
   <Route path="/Contact">
      <Contact themeObj={themeObj} />
      </Route>
       <Route path="/Home">
      <Home  themeObj={themeObj} />
       </Route>
       <Route path="/">
      <div className="container">
        <div className="row">{CardComp}</div>
      </div>
      </Route>
       </Switch>
      <Footer themeObj={themeObj} 
      themeHandler={themeHandler}/>
    
    </div>
    </Router>
  );
}
