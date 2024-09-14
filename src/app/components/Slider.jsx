"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import pic1 from '../../../public/assets/1692447309-u8zk3kTs0jzEeeUi.webp'
import pic2 from '../../../public/assets//1706624501-0WtJtpcUBnpvxi6V.webp'
import Intel from '../../../public/assets//1703408647-chsDemhxMRF5dsQZ.webp';
import Razer from '../../../public/assets//1703409826-hBN7zxzvas99h3WM.webp';
import corsair from '../../../public/assets//1703496166-Qmmj2k3WfG1T0zBF.webp';
import Dlink from '../../../public/assets//1703496613-TA82ThADKgEpMBdD.webp';

const Slider = () => {
  const slides = [Intel, Razer, Dlink, corsair];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    
      <div className='lg:flex mb-[25px] mt-[145px] '>
        <div className='mb-[25px] lg:mb-0 relative shadow-[0_5px_8px_-3px_rgba(166,196,198.35)] rounded-2xl'>
          {/* Slide Image */}
          <Image src={slides[currentIndex]} alt="slide image" className='w-full h-full rounded-2xl' />

          {/* Right Arrow */}
          <button className='flex self-center absolute top-0 bottom-0 right-[25px]
          z-10 text-[#008072] size-[14px] ' onClick={nextSlide}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>

          {/* Left Arrow */}
          <button className=' flex  self-center  absolute top-0 bottom-0 left-[25px]
          z-10 text-[#008072] size-[14px]' onClick={prevSlide}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </div>
        <div className='flex lg:flex-col lg:pr-[25px]'>
          <div className='lg:mb-5 shadow-[0_5px_8px_-3px_rgba(166,196,198.35)] rounded-2xl ml-[5px]'>
            <Image className='rounded-2xl' src={pic1} />
          </div>
          <div className='shadow-[0_5px_8px_-3px_rgba(166,196,198.35)] rounded-2xl ml-[5px]'>
            <Image className='rounded-2xl' src={pic2} />
          </div>
        </div>
      </div>
    
  );
};

export default Slider;
