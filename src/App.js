import Login from "./Login";
import Register from "./Register";
// import Reset from "./Reset";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./UserAuthContext";
import Render from "./Render.js";
import ProtectedRoute from "./ProtectedRoute";


function App() {
  return (
    <Router>
       {/* <Routes> */}

        {/* {login} */}

        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}

        {/* {register} */}
        {/* <Route exact path="/register" element={<Register />} /> */}

        {/* {reset} */}
        {/* <Route exact path="/reset" element={<Reset />} /> */}

        {/* landing page */}
        {/* <Route path="/home" element={<Home />} /> */}
      {/* </Routes> */}

      {/* <Topbar /> */}

      {/* <div className="container"> */}
        {/* <Sidebar /> */}
      {/* </div>  */}
       <UserAuthContextProvider>
       <Routes>
         <Route
           path="/home"
           element={
             <ProtectedRoute>
                < Render/> 
             </ProtectedRoute>
           }
         />
         <Route path="/" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Routes>
     </UserAuthContextProvider>
    </Router>
  );
}

export default App;
