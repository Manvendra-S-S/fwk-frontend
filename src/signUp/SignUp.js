import axios from "axios";
import "./Signup.css";
import React, { useState} from "react";
const SignUp = () => {

  const [username , setUsername] = useState("");
  const [ email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [phonenumber , setPhonenumber] = useState("");
  const submitDetails = async(e) => {
    e.preventDefault();
    const userData = {
      username : username,
      email : email,
      password : password,
      phonenumber : phonenumber,
    };
  
    await axios
        .post("http://localhost:8081/user/signUp",
          userData
        )
        .then((response) => {
    alert("User registered Successfully")
  })
    .catch((error) => {
      alert(error.response.data)
    });
  };

    return (
      <div
        className="modal fade"
        id="signUp"
        tabIndex="-1"
        aria-labelledby="signUpLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center w-100" id="signUpLabel">Ready to Register</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" 
                  onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail3" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail3" 
                  onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPhone3" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="inputPhone3" 
                  onChange={(event) => setPhonenumber(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword3" className="form-label">Passwod</label>
                  <input type="password" className="form-control" id="inputPassword3" 
                  onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary"
                onClick={submitDetails}
                >Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  