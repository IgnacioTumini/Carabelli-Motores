import React from "react";
import "./NotFoundScreen.css";

const NotFoundScreen: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Pagina no encontrada</p>
    </div>
  );
};

export default NotFoundScreen;
