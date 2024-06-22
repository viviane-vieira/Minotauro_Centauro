
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import HomeCategory from './Pages/HomeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSignup';


function App() {
  return (
    <div >

    <BrowserRouter>   
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/femininos' element={<HomeCategory category="feminino"/>}/>
        <Route path='/masculinos' element={<HomeCategory category="masculino"/>}/>
        <Route path='/infantis' element={<HomeCategory category="ifantil"/>}/>
        <Route path='/quem somos' element={<HomeCategory category="quem somos"/>}/>        
        <Route path='product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup/>}/>

      </Routes>    
    </BrowserRouter>
    </div>
  );
}

export default App;
