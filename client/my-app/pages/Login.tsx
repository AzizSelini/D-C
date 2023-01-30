import Link from 'next/link'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
// import User from "../../../server/model/user"



  
function Login() {
  const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const routes = useRouter()

async function handleSubmit(event: React.FormEvent){
event.preventDefault();
try {
  event.preventDefault();

  const user = await axios.post("http://localhost:8080/login", {
    email,
    password,
  });
  console.log(user);
  
if(user) {
  routes.push('/')
  localStorage.setItem('token',user.data)
  
}
} catch (error) {
  console.log(error);
}
}


  return (
    <div
      style={{
        backgroundColor: "white",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form onSubmit={handleSubmit}>
        <section className="h-100 gradient-form">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div
                  className="card rounded-3 toggleColor"
                  style={{ backgroundColor: "black" }}
                >
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          <img
                            src="One Click Pick png.png"
                            style={{ width: "185px" }}
                            alt="logo"
                          />
                          <h4 className="mt-1 mb-5 pb-1">
                            We are The AWH Team
                          </h4>
                        </div>

                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            E-mail
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            id="form2Example22"
                            className="form-control"
                            placeholder="Please enter your password"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-outline-warning toggleColor mb-3"
                            type="submit"
                          >
                            Login
                          </button>
                          {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link href="/Register">
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              Create new
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 d-flex align-items-center gradient-custom-2"
                      style={{
                        backgroundImage:
                          "url(" +
                          "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?cs=srgb&dl=pexels-spencer-selover-428338.jpg&fm=jpg" +
                          ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4"></h4>
                        <p className="small mb-0">.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
export default Login;