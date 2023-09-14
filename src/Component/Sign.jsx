import { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Birth from '../pages/Birth';
import './Sign.css'



function Sign() {
  const [erroremail, setErrorEmail] = useState("");
  const [errorpassword, setErrorPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [products, setProducts] = useState(true);

  function handleFormSubmit(event) {
    event.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    if (!email && !password) {
      setFlag(true);

    } else if (email !== mail || password !== pass) {
      setFlag(true);

    } else {
      setProducts(!products)
      setFlag(false);
    }
  }

  return (
    <div className='Register'>
      {" "}
      {products ?
        (
          <Form onClick={handleFormSubmit}>
            <h1>Login</h1>
            <label>Email</label>
            <input type="text" className="email" value={email} onChange={(event) => {
              setEmail(event.target.value);
              var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
              if (email === "") {
                setErrorEmail("valid")
              } else if (email === "") {
                setErrorEmail("");
              } else if (!regex.test(email)) {
                setErrorEmail("invalid");
              } else {
                setErrorEmail("");
              }
            }
            }
              placeholder="email" /><br />
            {erroremail}<br />
            <label>Password</label>

            <input type="password" className="password" value={password} onChange={(event) => {
              setPassword(event.target.value);
              var regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
              if (password === "") {
                setErrorPassword("valid")
              } else if (password === "") {
                setErrorPassword("Invalid");
              } else if (regex.test(password)) {
                setErrorPassword("");
              } else {
                setErrorPassword("");
              }
            }
            }
              placeholder="password" /><br />
            {errorpassword}<br />
            <button className="btn3" >Login</button>
            {
              flag && (<Alert></Alert>)
            }
          </Form>
        ) : (
           <Birth/>
        )}
    </div>
  )
}

export default Sign;