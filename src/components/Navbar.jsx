import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container justify-content-center">
            <a className="navbar-brand" href="/cotizador">COTIZADOR
            </a>
            <a className="navbar-brand" href="/historial">HISTORIAL
            </a>
        </div>
    </nav>
  )
}

export default Navbar