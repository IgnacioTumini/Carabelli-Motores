import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/carousel-img/Carrusel-1.jpg";
import "./Carousel.css";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="carousel-image" src={img1} alt="Imagen 1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="carousel-image" src={img1} alt="" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={img1} alt="" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
