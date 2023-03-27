import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 2000,
});

const Landingscreen = () => {
  return (
    <div className="row landing">
      <div className="col-md-12 text-center">
        <h2 data-aos="zoom-in" className="landing-banner">
          Prince Astroscale
        </h2>
        <h4 className="landing-desc">
          There are no passengers on spaceship earth. We are all crew
        </h4>
      </div>
    </div>
  );
};

export default Landingscreen;
