import axios from 'axios'
import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
function Register() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const routes = useRouter()
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/Signup", { name, email, password })
            console.log(response);
         await   routes.push('/Login')
        } 
        catch (error) {
            console.log(error);
        }
    }
    return (
        
        <section onSubmit={handleSubmit} className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration">
          <div className="card-body p-4 p-md-5">
            {/* <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3> */}
            <form>
                
            <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp "
                    style={{width: '185px'}} alt="logo" />
                  <h4 className="mt-1 mb-5 pb-1">Welcome to OneClick-Pick</h4>
                </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="firstName">Name</label>
                  <div className="form-outline">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="firstName" className="form-control form-control-lg" />
                  
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    
                  </div>

                </div>
              </div>
              <label htmlFor="birthdayDate" className="form-label">Email</label>
              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">
                
                
                  <div className="form-outline datepicker w-100">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control form-control-lg" id="birthdayDate" />
                   
                  </div>

                </div>
                <div className="col-md-6 mb-4">


                  <div className="form-check form-check-inline">
                    
                  </div>

                  <div className="form-check form-check-inline">
                    
                  </div>

                  <div className="form-check form-check-inline">
                
                  </div>

                </div>
              </div>
              <label className="form-label" htmlFor="emailAddress">Password</label>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="emailAddress" className="form-control form-control-lg" />
                    
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-12">

                </div>
              </div>

              <div >
              <button className="btn btn-outline-danger" type="submit">Login</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
)
}
export default Register

