import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <>
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container py-5">
                <h1 class="display-5 fw-bold">Benvenuti</h1>
                <p class="col-md-8 fs-4">
                   Benvenuto su booRoad, il portale dedicato agli amanti dell’avventura e della scoperta! Qui troverai ispirazione per viaggi indimenticabili, itinerari personalizzati e consigli utili per ogni destinazione. Esplora nuove culture, paesaggi mozzafiato e esperienze autentiche pensate per te.
                </p>
                <Link to='/trips' class="btn btn-primary btn-lg" type="button">
                    vedi viaggi
                </Link>
            </div>
        </div>
        <section>
            
        </section>
        </>
        
    )
}

export default HomePage