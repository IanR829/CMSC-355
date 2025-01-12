// Filename - App.js
 
import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 
import { useForm } from "react-hook-form";
// import Home component
import Home from "./components/Home";
// import About component
import Grades from "./components/Grades";
// import ContactUs component
import Lunch from "./components/Lunch";
import Login from "./components/Login";
import Librarary from "./components/Librarary";
 
function App() {
    return(
    <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route
          exact 
          path = "/"
          element = {<Login/>}
          />
                    <Route
                        path="/Home"
                        element={<Home />}
                    />
 
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/Lunch"
                        element={<Lunch />}
                    />
 
                    {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
                    <Route
                        path="/Grades"
                        element={<Grades />}
                    />
                    <Route
                        path="/Librarary"
                        element={<Librarary />}
                    />
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </>
    );
}
 
export default App;
