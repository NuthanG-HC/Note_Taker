
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signin from "./component/login/Signin";
import Signup from "./component/login/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;