import React from "react";
import { companions } from "../assets/data";
import { Link } from "react-router-dom";

function CompanionsPage() {
    return (
        <>
            <div className="container my-3">
                <h1>I nostri accompagnatori</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
                    {companions.map((companion) => {
                        return (
                            <div key={companion.id} className="col g-3">
                                <Link
                                    className="text-decoration-none text-reset"
                                    to={`${companion.id}`}
                                >
                                    <div className="card h-100">
                                        <img
                                            src={companion.image}
                                            className="card-img-top"
                                            alt={companion.name}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {companion.name}{" "}
                                                {companion.surname}
                                            </h5>
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

export default CompanionsPage;
