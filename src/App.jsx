import './app.css'
import { BrowserRouter, Routes, Route  } from "react-router";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Error404 from './Pages/Error404';
import Layout from './Common/Layout';

function App() {
  return (
    <BrowserRouter>
   <Routes>
<Route element={<Layout/>}> 
        <Route path={"/"} element={<Home/>} />
       <Route path={"/About-Us"} element={<About/>} />
        <Route path={"/Contact-Us"} element={<Contact/>} />
       <Route path={"/login"} element={<Login/>} />
        <Route path={"/cart"} element={<Cart/>} />
        <Route path="*" element={<Error404 />} />
</Route>
    </Routes>
    </BrowserRouter >
  )
}

export default App
