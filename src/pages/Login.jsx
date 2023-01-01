import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () =>{

    const navi = useNavigate();

    const [done, setDone] = useState(false);

    if(!done){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        setDone(true);
    }

   const login = async() => {
    var email = document.getElementById('lemail').value;
    var password = document.getElementById('lpassword').value;
    if(email === 'dave@gmail.com' && password === 'dave'){
        alert("Successfully LoggedIn");
        navi('/profile');
    }
    else{
        alert("Invalid credentials!")
    }
  }

        return <section id="login">
          <div className="login">
            <h1>Login</h1>
            <label htmlFor="email">Email:</label> <br />
            <input type="text" name="email" id="lemail" />
            <br />
            <br />
            <label htmlFor="password">Password:</label> <br />
            <input type="password" name="password" id="lpassword" />
            <br />
            <br />
            <button className="btn btn-primary" onClick={login} id="loginBtn">Login</button>
          </div>
        </section>;
}


export default Login;