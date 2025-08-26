import React from "react";
import { trips, companions } from "../assets/data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleTripPage() {
  const { id } = useParams();
  const trip = trips.find((trip) => trip.id === parseInt(id));

  const tripCompanions = trip.companions_id.map((companionId) => {
    return companions.find((companion) => companion.id === companionId);
  });

  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={trip.image}
                className="img-fluid rounded-start h-100"
                alt={trip.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title mb-4">{trip.title}</h5>
                <p className="card-text">{trip.description}</p>
                <p className="card-text">Inizio: {trip.start_date}</p>
                <p className="card-text">Fine: {trip.end_date}</p>
                <p>Prezzo: {trip.price}€</p>
                <h6>Accompagnatori</h6>
                <div className="row">
                  {tripCompanions.map((companion) => {
                    return (
                      <>
                        <div className="col-4" key={companion.id}>
                          <Link to={`/companions/${companion.id}`}>
                            <p className="card-title mb-4">
                              {companion.name} {companion.surname}
                            </p>
                          </Link>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={()=>{alert('registrazione avvenuta con successo')}}>
          <h3 className="mt-5">form di iscrizione al viaggio</h3>
          <div class="form-group">
            <div className="row">
              <div className="col-4"><label for="exampleInputEmail1">nome</label>
                <input type="text" class="form-control" id="Nome" aria-describedby="emailHelp" placeholder="Nome" />
              </div>
              <div className="col-4"><label for="exampleInputEmail1">nome</label>
                <input type="text" class="form-control" id="Cognome" aria-describedby="emailHelp" placeholder="Cognome" />
              </div>
              <div className="col-6">
                <div class="form-group">
                  <label htmlFor="Email">Email</label>
                  <input type="Email" class="form-control" id="Email" placeholder="Email" />
                </div>
              </div>
              <div className="col-3">
                <label htmlFor="">numero di telefono</label>
                <input type="number" class="form-control" id="Number" placeholder="Numero di telefono" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary my-3">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SingleTripPage;
