import CarouselComponent from "../../components/Carousel/Carousel";
import OilComponent from "../../components/Oil/Oil";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <CarouselComponent />
      <OilComponent />
    </div>
  );
}

export default Home;
