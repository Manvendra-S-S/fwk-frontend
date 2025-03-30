import "./Signup.css";

const SignUp = () => {
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
                  <label htmlFor="inputEmail3" className="form-label">Username</label>
                  <input type="text" className="form-control" id="inputEmail3" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail3" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail3" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPhone3" className="form-label">Phone Number</label>
                  <input type="number" className="form-control" id="inputPhone3" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword3" className="form-label">Passwod</label>
                  <input type="password" className="form-control" id="inputPassword3" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  