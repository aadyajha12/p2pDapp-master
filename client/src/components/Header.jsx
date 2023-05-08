// Import React and Link from the react-router-dom library
import React from "react";
import { Link } from "react-router-dom";

// Define the Header component
const Header = () => {
  // Return the component's JSX
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         {/* Create a Link component for the brand name, linking to the homepage*/}
        <Link to="/" className="navbar-brand">
          Peer To Peer Lending
        </Link>
         {/*Create a button for collapsing the navbar on small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> Get started</span>
        </button>
         {/* Create a div for the collapsed navigation items*/}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
             {/* Create a Link component for the Home navigation item*/}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
             {/* Create a Link component for the Borrower navigation item */}
            <li className="nav-item">
              <Link to="/borrower" className="nav-link">
                Borrower
              </Link>
            </li>
             {/*Create a Link component for the Investor navigation item */}
            <li className="nav-item">
              <Link to="/lender" className="nav-link">
                Investor
              </Link>
            </li>
             {/* Create a Link component for the Admin navigation item */}
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

// Export the Header component
export default Header;