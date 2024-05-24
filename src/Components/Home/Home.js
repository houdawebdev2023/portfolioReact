import React from 'react';
// import Image from './image/imagereact.png';  // Chemin vers votre image

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My React App</h1>
      <img src={Image} alt="React Logo" className="react-logo"style={{ width: '500px', height: 'auto' }} />
      </div>
      );
    };
    
    export default Home;