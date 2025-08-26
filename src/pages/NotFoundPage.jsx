import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className="container d-flex align-items-center flex-column">
        <h1>Pagina non trovata</h1>
        <p>La pagina che stai cercando non esiste.</p>
        <Link to="/" className="btn btn-primary">
          Torna alla Home page
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
