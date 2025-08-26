import React from 'react'
import { Link } from 'react-router-dom'
import { trips, companions } from '../assets/data'

function HomePage() {
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold">Benvenuti</h1>
                    <p className="col-md-8 fs-4">
                        Benvenuto su booRoad, il portale dedicato agli amanti dell’avventura e della scoperta! Qui troverai ispirazione per viaggi indimenticabili, itinerari personalizzati e consigli utili per ogni destinazione. Esplora nuove culture, paesaggi mozzafiato e esperienze autentiche pensate per te.
                    </p>
                    <Link to='/trips' className="btn btn-primary btn-lg" type="button">
                        vedi viaggi
                    </Link>
                </div>
            </div>
            <div className="container mb-4">
                <section id='trips'>

                    <h1>Viaggi in evidenza</h1>
                    <div className="row mt-3">
                        {trips.map(trip => {
                            if (!trip.highlighted) return

                            return (
                                <div key={trip.id} className="col-3">
                                    <Link className='text-decoration-none text-reset' to={`trips/${trip.id}`}>
                                        <div className="card h-100">
                                            <img src= {trip.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{trip.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted ">{trip.price}€</h6>
                                                <p className="card-text">{trip.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )

                        })}
                    </div>
                </section>
                <section id='about_us'>

                    <h2>About Us...</h2>
                    <div className="row">
                        <div className="col-4">
                            <h6>indirizzo</h6>
                            <p>via baldo degli ubaldi, 18</p>
                        </div>
                        <div className="col-4">
                            <h6>E-mail</h6>
                            <p>booroad@gmail.com</p>
                        </div>
                        <div className="col-4">
                            <h6>Telefono</h6>
                            <p>365-125-4782</p>
                        </div>
                    </div>




                </section>
            </div>




        </>

    )
}

export default HomePage