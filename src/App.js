import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import react, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';


function App() {
  let [page, setPage] = useState("main")
  let [currentUser, setCurrentUser] = useState(0);
  

  console.log(page)

  function changePage(page){
    setPage(page)
    console.log(page);
  }

  function setUser(userCredential){
    console.log(userCredential);
    setCurrentUser(userCredential)
  }
  return (
    <div className="App">
      <Header setPage = {changePage} user={currentUser}/>

      {page == "main" && <Main/>}
      {page == "login" && <Login setPage = {changePage} setUser = {setUser}/>}
      {page == "register" && <Register setPage = {changePage} setUser = {setUser}/>}
      {/* <Footer/> */}
      <Footer/>
    </div>
  );
}

export default App;
