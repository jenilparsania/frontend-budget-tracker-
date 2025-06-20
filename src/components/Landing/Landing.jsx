import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const handleLinkClick = (destination) => {
    console.log('Link clicked, navigating to:', destination);
  };

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">BudgetTracker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary ms-3" to="/signup" onClick={() => handleLinkClick('/signup')}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">Take Control of Your Finances</h1>
              <p className="hero-description">Track your expenses, set budgets, and achieve your financial goals with our easy-to-use budget tracker. Start your journey to financial freedom today.</p>
              <div className="d-flex gap-3">
                <Link to="/signup" className="btn btn-primary btn-lg" onClick={() => handleLinkClick('/signup')}>Get Started</Link>
                <Link to="/" className="btn btn-outline-primary btn-lg" onClick={() => handleLinkClick('/')}>Learn More</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://placehold.co/600x400" alt="Budget Tracker Dashboard" className="img-fluid hero-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <h2 className="text-center mb-5">Why Choose Our Budget Tracker?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature-card">
              <div className="card-body text-center p-4">
                <div className="feature-icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <h3 className="feature-title">Smart Analytics</h3>
                <p className="feature-description">Get detailed insights into your spending patterns and financial health with our advanced analytics tools.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <div className="card-body text-center p-4">
                <div className="feature-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3 className="feature-title">Secure & Private</h3>
                <p className="feature-description">Your financial data is encrypted and protected with bank-level security measures and privacy controls.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <div className="card-body text-center p-4">
                <div className="feature-icon">
                  <i className="bi bi-phone"></i>
                </div>
                <h3 className="feature-title">Mobile Friendly</h3>
                <p className="feature-description">Access your budget anywhere, anytime with our responsive design and mobile-first approach.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="hero-description mb-5">Join thousands of users who have already taken control of their finances and achieved their financial goals.</p>
          <Link to="/signup" className="btn btn-light btn-lg" onClick={() => handleLinkClick('/signup')}>Sign Up Now</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="mb-3">BudgetTracker</h5>
              <p className="footer-text">Your personal finance companion for a better financial future.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="footer-text mb-0">&copy; 2024 BudgetTracker. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;