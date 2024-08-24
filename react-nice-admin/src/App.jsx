function App() {
  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <Header />
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title  pb-0 fs-4">Login to Your Account</h5>
                      </div>

                      <form className="row g-3 ">
                        <div className="col-12">
                          <label className="form-label">Username</label>
                          <input type="text" name="username" className="form-control" id="yourUsername" required />
                        </div>

                        <div className="col-12">
                          <label className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword" required />
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Don't have account? <a>Create an account</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function Header() {
  return (
    <>
      <div className="d-flex justify-content-center py-4">
        <a className="logo d-flex align-items-center w-auto">
          <img src="src/assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">Fenil Patel</span>
        </a>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="credits">
        Designed & Developed by <a href="">Fenil Patel</a>
      </div>
    </>
  );
}

export default App;
