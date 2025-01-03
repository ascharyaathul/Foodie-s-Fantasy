import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    LANDING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    MENU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TEAM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}
