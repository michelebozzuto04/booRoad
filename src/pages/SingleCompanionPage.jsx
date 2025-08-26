import React from "react";
import { companions } from "../assets/data";
import { useParams } from "react-router-dom";

function SingleCompanionPage() {
    const { id } = useParams();
    const companion = companions[id - 1];

    return (
        <>
            <div className="container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={companion.image}
                                className="img-fluid rounded-start"
                                alt={companion.name}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title mb-4">
                                    {companion.name} {companion.surname}
                                </h5>
                                <p className="card-text">
                                    Età: {companion.age}
                                </p>
                                <p className="card-text">
                                    Nazionalità: {companion.nationality}
                                </p>
                                <p className="card-text">
                                    Interessi: {companion.interests.join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleCompanionPage;
