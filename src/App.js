import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Product from "./Product/Product";
import Cart from "./Components/Cart/Cart";
import Search from "./Components/Search/Search";
import Community from "./Components/Community/Community";
import Support from "./Components/Support/Support";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
function App() {
  let [page, setPage] = useState("main");
  let [currentUser, setCurrentUser] = useState(0);
  let [searchable, setSearchable] = useState("");
  let [product, setProduct] = useState(0)

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
  
  function addToCart(name){
    let tempCart = [...cart];
    tempCart.push(name);
    setCart(tempCart)
  }

  function changePage(page) {
    setPage(page);
  }

  function settingProduct(product) {
    setProduct(product);
    setPage("product");
  }

  function setUser(userCredential) {
    console.log(userCredential);
    setCurrentUser(userCredential);
  }

  
  return (
    <div className="App">
      <Header
        setPage={changePage}
        user={currentUser}
        setSearch={setSearchable}
        setUser={setUser}
        auth={auth}
      />

      {page === "main" && <Main setProduct={settingProduct} setPage={changePage}/>}
      {page === "login" && <Login setPage={changePage} setUser={setUser} auth={auth}/>}
      {page === "register" && (
        <Register setPage={changePage} setUser={setUser} auth={auth}/>
      )}
      {page === "product" && (
        <Product setPage={changePage} productInfo={product} addToCart={addToCart} db={db} user={currentUser}/>
      )}
      {page === "search" && (
        <Search setProduct={settingProduct} searchTerm={searchable} />
      )}
      {page === "community" && <Community />}
      {page === "support" && <Support setPage = {changePage} setUser = {setUser} db={db}/>}
      {page === "cart" && <Cart cart={cart} setCart={setCart}/>}
      <Footer 
      setPage={changePage}
      db={db}/>
    </div>
  );
}

export default App;
