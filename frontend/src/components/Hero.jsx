import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowTurnDown } from "react-icons/fa6";

const ImageList = [
  {
    id: 1,
    title: "Unleash Your Creative Spirit",
    description:
      "For those who see the world through the lens of art – discover, explore, and express your passion for creativity.",
  },
  {
    id: 2,
    title: "Where Art Meets Passion",
    description:
      "Whether you're an artist, a collector, or an admirer, this is your space to celebrate and connect with the vibrant world of art.",
  },
  {
    id: 3,
    title: "Art is a Journey, Not a Destination",
    description:
      "For the artists, the dreamers, and the curious minds who see beauty in every stroke, every color, and every canvas.",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center  duration-200 ">
      {/* background pattern */}
      <div className="h-[650px] w-[100%] bg-gray-700/10 absolute left-0 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="flex justify-center mx-20">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className=" sm:text-6xl lg:text-7xl  text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,#818cf8,#e0e7ff,#38bdf8,#e879f9,#38bdf8,#e0e7ff,#818cf8)]"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm flex justify-center "
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <Link to={"/"} className="flex justify-center">
                      <button className=" flex bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                        Explore More
                        <span className="flex items-center mt-2"><FaArrowTurnDown /></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
