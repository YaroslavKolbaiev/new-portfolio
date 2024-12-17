import classes from './Stack.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import stack from '../../data/stack.json';
import backend from '../../data/back.json';

export const Stack = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 1,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    rtl: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 1,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="stack" className={classes.stack}>
      <h1 className={classes.title}>STACK</h1>
      <div className="divider" />
      <div className={classes.container}>
        <h2 className={classes.subtitle}>Frontend</h2>

        <Slider {...settings}>
          {stack.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className={classes.image}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={classes.container}>
        <h2 className={classes.subtitle}>Backend</h2>

        <Slider {...settings2}>
          {backend.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className={classes.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
