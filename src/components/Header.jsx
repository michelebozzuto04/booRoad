import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav
            className="navbar navbar-expand-sm navbar-dark bg-dark "
        >
            <div className="container d-flex justify-content-between">
                <Link to={'/'} className="navbar-brand">BooRoad</Link>
                <div>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/'} aria-current="page"
                                >Home
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/trips'} aria-current="page"
                                >Viaggi
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/companions'} aria-current="page"
                                >Accompagnatori
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header