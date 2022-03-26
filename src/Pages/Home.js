import '../App.css';
import './HomePageCss.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loginImage from './SVG/login2.svg';


function Home_Page() {
    document.title = "Home"
  return (
      <div class = "Parent">
        <div class = "Account-Info">
          <div class = "Logo">
          <h1> 🌱 </h1>
          </div>
          <center>
          <h1> Welcome to Seedling. </h1>
          <h2> All your links in one place! 🌱 </h2>

          <div class = "Login-Form">
          <h4>Log in to your Seedling account</h4>
          <input class = "Field" type="text" id="fusername" name="fusername" placeholder = "Username"/>
          <input class = "Field" type="password" id="fpassword" name="fpassword" placeholder = "Password"/>
          
          <button class = "Login-Button" id="Blogin" name="Blogin" type= "button"> Log in </button>
          </div>

          </center>


        </div>

        <img src= {loginImage} alt=" Login Image" class = "Image-Section"/>


      </div>
  );
}

export default Home_Page;
