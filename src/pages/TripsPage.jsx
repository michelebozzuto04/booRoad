import React from "react";
import { trips } from "../assets/data";
import { Link } from "react-router-dom";

function TripsPage() {
  return (
    <>
      <div className="container">
        <h1>I nostri viaggi</h1>
        <div className="row my-3">
          {trips.map((trip) => {
            return (
              <div key={trip.id} className="col-4 g-3">
                <Link
                  className="text-decoration-none text-reset"
                  to={`trips/${trip.id}`}
                >
                  <div className="card h-100">
                    <img
                      src={trip.image}
                      className="card-img-top"
                      alt={trip.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{trip.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted ">
                        {trip.price}€
                      </h6>
                      <p className="card-text">{trip.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TripsPage;
