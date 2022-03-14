import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import react, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import Product from './Product/Product';
import Support from './Components/Support/Support';
import Search from './Components/Search/Search';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
import Cart from './Components/Cart/Cart';


function App() {
  let [page, setPage] = useState("main")
  let [currentUser, setCurrentUser] = useState(0);
  let [searchable, setSearchable] = useState("");
  let [product, setProduct] = useState(
    {name: "",
     price: 0,
     videoURL: ""}
  )

  let [cart, setCart] = useState([])

  const firebaseConfig = {
    apiKey: "AIzaSyDA9Ez4i7vSWvq8uzvmmy8CMQ54x-EDRfs",
    databaseURL: "https://derrastore-default-rtdb.europe-west1.firebasedatabase.app/",
    authDomain: "derrastore.firebaseapp.com",
    projectId: "derrastore",
    storageBucket: "derrastore.appspot.com",
    messagingSenderId: "70390486239",
    appId: "1:70390486239:web:f0e884d634f8114597856a"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase(app);


  function changeCart(tempCart){
    console.log(tempCart)
    setCart(tempCart)
  }
  
  function addToCart(name){
    let tempCart = [...cart];
    tempCart.push(name);
    setCart(tempCart)
  }

  function changePage(page){
    setPage(page)
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
      <Header setPage = {changePage} user={currentUser} setSearch={setSearchable} setUser = {setUser}/>

      {page == "main" && <Main setProduct={settingProduct}/>}
      {page == "login" && <Login setPage = {changePage} setUser = {setUser} auth={auth}/>}
      {page == "register" && <Register setPage = {changePage} setUser = {setUser} auth={auth}/>}
      {page == "product" && <Product setPage = {changePage} addToCart = {addToCart} productInfo = {product}/>}
      {page == "search" && <Search setProduct={settingProduct} searchTerm={searchable}/>}
      {page == "cart" && <Cart cart={cart} setCart={changeCart} setPage = {changePage}/>}


      
      <Footer db={db}/>
    </div>
  );
}

export default App;
