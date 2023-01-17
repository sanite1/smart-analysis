import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import ErrorPage from "./Pages/ErrorPage";

function App() {

  return (
      <div className="App">
      
        <div className="">
            <Router>
                <Routes>
                  <Route exact path="/login" element={<Login/>} />
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