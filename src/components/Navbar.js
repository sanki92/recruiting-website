import React from "react";

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Hire It
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    Customer profiles
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Tools
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Diversity Audit
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            One Soft Landing
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            JD Rewriter
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Rejection Emails
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Recruiting Emails
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    Careers
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    LogIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
