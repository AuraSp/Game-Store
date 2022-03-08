import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import react, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import Product from './Product/Product';
import Support from './Components/Support/Support';


function App() {
  let [page, setPage] = useState("main")
  let [currentUser, setCurrentUser] = useState(0);
  let [product, setProduct] = useState(
    {name: "",
     price: 0,
     videoURL: ""}
  )
  

  console.log(page)

  function changePage(page){
    setPage(page)
    console.log(page);
  }
  
  function settingProduct(prodName, prodPrice, prodUrl){
    let tempProduct = {
      name: prodName,
      price: prodPrice,
      videoUrl: prodUrl
    }
    setProduct(tempProduct)
    setPage("product")
  }

  function setUser(userCredential){
    console.log(userCredential);
    setCurrentUser(userCredential)
  }
  return (
    <div className="App">
      <Header setPage = {changePage} user={currentUser}/>

      {page == "main" && <Main setProduct={settingProduct}/>}
      {page == "login" && <Login setPage = {changePage} setUser = {setUser}/>}
      {page == "register" && <Register setPage = {changePage} setUser = {setUser}/>}
      {page == "product" && <Product setPage = {changePage} productInfo = {product}/>}


      
      <Footer/>
    </div>
  );
}

export default App;
