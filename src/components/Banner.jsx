import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/learn-japanese-1.jpg";
import image2 from "../assets/learn-japanese-2.webp";
import image3 from "../assets/learn-japanese-3.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { src: image1, alt: "Learn Japanese - Immersive Techniques", caption: "Explore Japanese Language" },
    { src: image2, alt: "Interactive Japanese Lessons", caption: "Engage with Interactive Lessons" },
    { src: image3, alt: "Master Japanese Vocabulary", caption: "Master Vocabulary with Ease" },
  ];

  return (
    <div className="w-11/12 mx-auto py-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full md:h-[650px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;