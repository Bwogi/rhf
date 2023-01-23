import React, { useEffect } from 'react';

// import Carousel01 from '../images/carousel-01.jpg';
// import Carousel02 from '../images/carousel-02.jpg';
// import Carousel03 from '../images/carousel-03.jpg';
// import Carousel04 from '../images/carousel-04.jpg';
// import Carousel05 from '../images/carousel-05.jpg';
// import Carousel06 from '../images/carousel-06.jpg';
// import Carousel07 from '../images/carousel-07.jpg';
// import Carousel08 from '../images/carousel-08.jpg';
// import Avatar01 from '../images/carousel-avatar-01.jpg';
// import Avatar02 from '../images/carousel-avatar-02.jpg';
// import Avatar03 from '../images/carousel-avatar-03.jpg';
// import Avatar04 from '../images/carousel-avatar-04.jpg';
// import Avatar05 from '../images/carousel-avatar-05.jpg';
// import Avatar06 from '../images/carousel-avatar-06.jpg';
// import Avatar07 from '../images/carousel-avatar-07.jpg';
// import Avatar08 from '../images/carousel-avatar-08.jpg';
// import Avatar09 from '../images/carousel-avatar-09.jpg';
// import Avatar10 from '../images/carousel-avatar-10.jpg';
// import Avatar11 from '../images/carousel-avatar-11.jpg';
// import Avatar12 from '../images/carousel-avatar-12.jpg';
// import Avatar13 from '../images/carousel-avatar-13.jpg';
// import Avatar14 from '../images/carousel-avatar-14.jpg';
// import Avatar15 from '../images/carousel-avatar-15.jpg';
// import Avatar16 from '../images/carousel-avatar-16.jpg';
// import Avatar17 from '../images/carousel-avatar-17.jpg';
// import Avatar18 from '../images/carousel-avatar-18.jpg';

// Import Swiper
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
Swiper.use([Navigation]);

const sermons = [
  {
    id: 1,
    title: 'The fruits of the Spirit',
    desc: 'This sermon by Pastor Somebody describes the fruits of the Spirit and how to apply them in our daily lives.',
    image: '/images/carousel-01.jpg',
  },
  {
    id: 2,
    title: 'The fruits of the Spirit',
    desc: 'This sermon by Pastor Somebody describes the fruits of the Spirit and how to apply them in our daily lives.',
    image: '/images/carousel-02.jpg'
  },
  {
    id: 3,
    title: 'The fruits of the Spirit',
    desc: 'This sermon by Pastor Somebody describes the fruits of the Spirit and how to apply them in our daily lives.',
    image: '/images/carousel-02.jpg'
  },
  {
    id: 4,
    title: 'The fruits of the Spirit',
    desc: 'This sermon by Pastor Somebody describes the fruits of the Spirit and how to apply them in our daily lives.',
    image: '/images/carousel-02.jpg'
  },
  {
    id: 5,
    title: 'The fruits of the Spirit',
    desc: 'This sermon by Pastor Somebody describes the fruits of the Spirit and how to apply them in our daily lives.',
    image: '/images/carousel-02.jpg'
  },
  {
    id: 6,
    title: 'The fruits of the Spirit',
    desc: 'This sermon by Pastor Somebody describes the fruits of the Spirit and how to apply them in our daily lives.',
    image: '/images/carousel-02.jpg'
  },
  {
    id: 7,
    title: 'The fruits of the Spirit',
    desc: 'This sermon by Pastor Somebody describes the fruits of the Spirit and how to apply them in our daily lives.',
    image: '/images/carousel-02.jpg'
  },
  {
    id: 8,
    title: 'The fruits of the Spirit',
    desc: 'This sermon by Pastor Somebody describes the fruits of the Spirit and how to apply them in our daily lives.',
    image: '/images/carousel-02.jpg'
  },
]

function Carousel() {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
  }, []);

  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">Past Sermons</h2>
          </div>
          <div className="carousel swiper-container max-w-sm mx-auto sm:max-w-none ">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              {sermons.map((sermon) => (
                <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <img className="w-full aspect-[7/4] object-cover" src={sermon.image} width="259" height="148" alt="Carousel 01" />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                
                  {/* Title */}
                  <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">{sermon.title}</a>
                  <div className="text-sm text-gray-500 italic">{sermon.desc}</div>
                </div>
              </div>
              ))}
              
             
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
