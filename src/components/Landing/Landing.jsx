
const Landing = ()=>{

    return(
        <div className="min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">BudgetTracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-light ms-2" href="#">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Take Control of Your Finances</h1>
              <p className="lead mb-4">Track your expenses, set budgets, and achieve your financial goals with our easy-to-use budget tracker.</p>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-primary btn-lg">Get Started</a>
                <a href="#" className="btn btn-outline-primary btn-lg">Learn More</a>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://placehold.co/600x400" alt="Budget Tracker Dashboard" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <h2 className="text-center mb-5">Why Choose Our Budget Tracker?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-graph-up text-primary" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="h5">Smart Analytics</h3>
                <p className="text-muted">Get detailed insights into your spending patterns and financial health.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-shield-check text-primary" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="h5">Secure & Private</h3>
                <p className="text-muted">Your financial data is encrypted and protected with bank-level security.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-phone text-primary" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="h5">Mobile Friendly</h3>
                <p className="text-muted">Access your budget anywhere, anytime with our mobile-responsive design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center py-5">
          <h2 className="mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="lead mb-4">Join thousands of users who have already taken control of their finances.</p>
          <a href="#" className="btn btn-light btn-lg">Sign Up Now</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>BudgetTracker</h5>
              <p className="text-muted">Your personal finance companion</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-muted mb-0">&copy; 2024 BudgetTracker. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    );


}

export default Landing;