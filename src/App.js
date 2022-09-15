import './App.css';
import Login from './views/Aunt/Login';
import ResetPassword from './views/Aunt/password/ResetPassword';
import {
   BrowserRouter,
   Routes,
   Route,
 } from "react-router-dom";
import './Sass/App.sass';

function App() {
 return <div>
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="reset" element={<ResetPassword/>}></Route>
         </Routes>
      </BrowserRouter>
 </div>
}

export default App;
