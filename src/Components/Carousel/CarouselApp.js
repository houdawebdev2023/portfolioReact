import '../../App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import image1 from './media/image1.jpg';


 function App() {
  const responsive = {
    SuperLargeDesktop: {
      breakpoint: { max: 4000, min: 3000},
      items: 5
    },
    Desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };
  
  return (
    
      <div className="App">
        <Carousel responsive={responsive}>
          <div><img className="carousel-image" src="./media/image5.jpg"  alt="image5"/></div>
          <div><img className="carousel-image" src="./media/image6.jpg"  alt="image6"/></div>
          <div><img className="carousel-image" src="./media/image7.jpg"  alt="image7"/></div>
          <div><img className="carousel-image" src="./media/image8.jpg"  alt="image8"/></div>
          <div><img className="carousel-image" src="./media/image9.jpg"  alt="image9"/></div>
          <div><img className="carousel-image" src="./media/image10.jpg"  alt="image10"/></div>
        

        </Carousel>
       
      </div>
   
  );
}

export default App ;
