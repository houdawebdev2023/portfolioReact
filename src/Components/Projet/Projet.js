import React from 'react';
import { Link } from 'react-router-dom';


const Projet= () => {
  return (
    <div className="home">
      <h1>Voici mes petits projet react</h1>
      <div className="buttons">
        <Link to="/Calculatrice"><button>Calculatrice</button></Link>
        <Link to="/Carousel"><button>Caroussel</button></Link>
        <Link to="/Weather"><button>Weather App</button></Link>
        <Link to="/Convertisseur"><button>Convertisseur</button></Link>
        <Link to="/Table"><button>Table</button></Link>
        <Link to="/Drag"><button>Drag and Drop</button></Link>
        <Link to="/Calendrier"><button>Calendrier</button></Link>
      </div>
    </div>
  );
};

export default Projet;
