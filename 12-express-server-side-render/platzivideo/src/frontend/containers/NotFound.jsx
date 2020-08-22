import React from 'react'
import Header from '../components/Header'
import '../assets/styles/components/NotFound.scss'

const NotFound = () => (
    <React.Fragment>
        <Header />
        <section className="notfound">
            <h1 className="notfound--title">404</h1>
            <p className="notfound--message">La página que estás buscando no existe...</p>
            <a className="notfound--anchor" href="#">Volver...</a>
        </section>
    </React.Fragment>
)

export default NotFound