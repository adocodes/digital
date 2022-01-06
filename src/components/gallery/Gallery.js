import React from 'react';
import './Gallery.css';
import Dope1 from '../../assets/images/dope-1.jpeg';
import Dope2 from '../../assets/images/dope-2.jpeg';
import Dope3 from '../../assets/images/dope-3.jpg';
import Dope4 from '../../assets/images/dope-4.jpg';
import Dope5 from '../../assets/images/dope-5.jpg';
import Dope6 from '../../assets/images/dope-6.jpg';

const Gallery = () => {
  return (
    <div class="grow">
      <div class="container">
        <section class="image-gallery">
          <div class="gallery-item">
            <img src={Dope1} alt="Office" />
          </div>
          <div class="gallery-item">
            <img src={Dope2} alt="Desktop" />
          </div>
          <div class="gallery-item">
            <img src={Dope3} alt="Laptop" />
          </div>
          <div class="gallery-item">
            <img src={Dope4} alt="Coding" />
          </div>
          <div class="gallery-item">
            <img src={Dope5} alt="Gaming" />
          </div>
          <div class="gallery-item">
            <img src={Dope6} alt="Operational Environment" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
