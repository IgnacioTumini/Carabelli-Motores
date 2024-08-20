import CarouselComponent from "../../components/Carousel/Carousel";
import OilComponent from "../../components/Oil/Oil";
import SecondSection from "../../components/SecondSection/SecondSection";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <CarouselComponent />
      <OilComponent />
      <SecondSection />
    </div>
  );
}

export default Home;
