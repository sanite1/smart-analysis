import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import ErrorPage from "./Pages/ErrorPage";
import Signup from "./Pages/Signup";

function App() {

  return (
      <div className="App">
      
        <div className="">
            <Router>
                <Routes>
                  <Route exact path="/login" element={<Login/>} />
                  <Route exact path="/signup" element={<Signup />} />
                  <Route element={<ProtectedRoutes />}>

                      <Route exact path="/home/:menu" element={<Home/>} />
                      <Route path="*" element={<ErrorPage/>} />
                      
                  </Route>
                
                </Routes>
            </Router>
        </div>
        
      </div>
  );
}

export default App;