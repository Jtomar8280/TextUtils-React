import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

    const linkStyle=()=>props.mode === "dark" ? "#e3f2fd" : "#000509"

    return (
        <nav className="navbar navbar-expand-lg sticky-top m-0 p-0 py-2" style={{backgroundColor: props.mode === "dark" ? "#000509" : "#e3f2fd", color: props.mode === "dark" ? "#e3f2fd" : "#000509"}}>
        <div className="container-fluid">
            <a className="navbar-brand fw-bold fs-3" style={{ color: props.mode === "dark" ? "#e3f2fd" : "#000509" }} href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" style={{ color: props.mode === "dark" ? "#e3f2fd" : "#000509" }} aria-current="page" href="#">Home</a>
                </li>
            </ul>
            </div>
            <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
                <input type="color" className="form-control form-control-color" value={props.color} onChange={props.changeColor}/>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckChecked"/>
                <label className="form-check-label" style={{ color: props.mode === "dark" ? "#e3f2fd" : "#000509" }} htmlFor="switchCheckChecked">Enable {props.mode === "light" ? "Dark" : "Light"} Mode</label>
            </div>
        </div>
        </nav>
    )
}

Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string
}