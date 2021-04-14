// import logo from './logo.svg';
import React from "react";
import './App.css';
import NavigationComponent from './components/NavigationComponent';
import SideBarComponent from './components/SideBarComponent';
import DataComponent from './components/DataComponent';
import ClassDemo from './components/ClassDemo';
import ControlleComponent from './components/ControlleComponent';
import UncontrolleComponent from './components/UncontrolledComponent';
import ContentComponent from './components/Content';
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const userData = {
  "FirstName": "Hardik",
  "LastName": "Makwana"
};

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <NavigationComponent />
        <Switch>
          <ContentComponent />
        </Switch>
      </Router>
      <div>
        {/* <EvenNumbers />
      <DataComponent userData={userData} />
      <ClassDemo /> */}
        {/* <LogInFormComponent /> */}
        {/* <ControlleComponent /> */}
        {/* <UncontrolleComponent /> */}
        {/* <ParentComponent /> */}
      </div>
    </div>
  );
}

export default App;
