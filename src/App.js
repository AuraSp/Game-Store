import logo from './logo.svg';
import './App.css';
import './CSS/main_part_one_style.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import react, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';


function App() {
  let [page, setPage] = useState("main")
  

  console.log(page)

  function changePage(page){
    setPage(page)
    console.log(page);
  }
  return (
    <div className="App">
      <Header setPage = {changePage}/>

      {page == "main" && <Main/>}
      {page == "login" && <Login/>}
      {page == "register" && <Register/>}
      {/* <Footer/> */}
      <Footer/>
    </div>
  );
}

export default App;
