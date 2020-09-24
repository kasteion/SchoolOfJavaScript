import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ title, children }) => {
  return (
    <section className='list'>
      <div className='list--container'>
        <h1 className='list-title'>{title}</h1>
        <div className='carousel--container'>
          { children }
        </div>
      </div>
    </section>
  );
};

export default Carousel;
