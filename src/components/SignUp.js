import React from 'react'

const Login = () => {
  return (
//     <div>
//  {/* Section: Design Block */}
// <section className="text-center">
//   {/* Background image */}
//   <div className="p-5 bg-image" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")', height: 300}} />
//   {/* Background image */}
//   <div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
//     <div className="card-body py-5 px-md-5">
//       <div className="row d-flex justify-content-center">
//         <div className="col-lg-8">
//           <h2 className="fw-bold mb-5">Sign up now</h2>
//           <form>
//             {/* 2 column grid layout with text inputs for the first and last names */}
//             <div className="row">
//               <div className="col-md-6 mb-4">
//                 <div className="form-outline">
//                   <input type="text" id="form3Example1" className="form-control" />
//                   <label className="form-label" htmlFor="form3Example1">First name</label>
//                 </div>
//               </div>
//               <div className="col-md-6 mb-4">
//                 <div className="form-outline">
//                   <input type="text" id="form3Example2" className="form-control" />
//                   <label className="form-label" htmlFor="form3Example2">Last name</label>
//                 </div>
//               </div>
//             </div>
//             {/* Email input */}
//             <div className="form-outline mb-4">
//               <input type="email" id="form3Example3" className="form-control" />
//               <label className="form-label" htmlFor="form3Example3">Email address</label>
//             </div>
//             {/* Password input */}
//             <div className="form-outline mb-4">
//               <input type="password" id="form3Example4" className="form-control" />
//               <label className="form-label" htmlFor="form3Example4">Password</label>
//             </div>
//             {/* Checkbox */}
//             <div className="form-check d-flex justify-content-center mb-4">
//               <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
//               <label className="form-check-label" htmlFor="form2Example33">
//                 Subscribe to our newsletter
//               </label>
//             </div>
//             {/* Submit button */}
//             <button type="submit" className="btn btn-primary btn-block mb-4">
//               Sign up
//             </button>
//             {/* Register buttons */}
//             <div className="text-center">
//               <p>or sign up with:</p>
//               <button type="button" className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-facebook-f" />
//               </button>
//               <button type="button" className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-google" />
//               </button>
//               <button type="button" className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-twitter" />
//               </button>
//               <button type="button" className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-github" />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
    <div className='bod'>
      <div className="container h-100">
  <div className="row h-100">
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Get started</h1>
          <p className="lead">
            Start creating the best possible user experience for you customers.
          </p>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control form-control-md" type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input className="form-control form-control-md" type="text" name="company" placeholder="Enter your company name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control form-control-md" type="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control form-control-md" type="password" name="password" placeholder="Enter password" />
                </div>
                <div className="text-center mt-3">
                  <a href="index.html" className="btn btn-md btn-primary">Sign up</a>
                  {/* <button type="submit" class="btn btn-lg btn-primary">Sign up</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login