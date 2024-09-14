"use server"

import { Product } from '@prisma/client'
import { getProductlist } from '../../../admin/lib/action'
import Image from 'next/image';
import Link from 'next/link'
import Nav from "../../Nav";
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faAngleLeft, faAngleRight, faHeart, faRandom, faShare, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import Cpu from '../../../../../public/assets/products/1709798881-9PmA9Dx67HXPm4t0.webp'
import Cpu1 from '../../../../../public/assets/Brands/1692532282-eGr0uoryounWaHvc.webp'

const page = async (params) => {

    const id = params.id;
    const product = await getProductlist(id);

    // const slides = [Cpu, Cpu1];
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const prevSlide = () => {
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // };

    // const nextSlide = () => {
    //     const isLastSlide = currentIndex === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // };

    return (
        <div>
            <Nav />
            <div className='mt-[160px] mb-[100px] lg:mb-0 relative shadow-[0_5px_8px_-3px_rgba(166,196,198.35)] rounded-2xl'>
                {/* Slide Image */}
                <div className='lg:grid lg:grid-cols-3'>
                    <div className='lg:p-[15px] lg:border-l-2 lg:col-span-1'>
                        <div className='p-[25px]'>
                            <Link href='/'>
                                <FontAwesomeIcon className='text-gray-500 pr-1' icon={faHeart} />
                            </Link >
                            <Link href='/'>
                                <FontAwesomeIcon className='text-gray-500 pr-5' icon={faRandom} />
                            </Link >
                            <Link href='/'>
                                <FontAwesomeIcon className='text-gray-500 pr-5' icon={faShare} />
                            </Link >
                        </div>
                        <div className='pr-[25px] pl-[25px] pb-[50px] pt-[50px] '>
                            <div className='flex place-content-center'>
                                <Image src={Cpu} alt="slide image" className='lg:w-[240px] lg:h-[240px] w-[300px] h-[300px] rounded-2xl' />
                                {/* <Image src={slides[currentIndex]} alt="slide image" className='w-[300px] h-[300px] rounded-2xl' /> */}
                            </div>
                            {/* Right Arrow */}
                            <div className='relative'>
                                <button className='flex self-center absolute bottom-[150px] lg:bottom-[120px] right-0
                                z-10 text-[#008072] size-[14px] '>
                                    {/* z-10 text-[#008072] size-[14px] ' onClick={nextSlide}> */}
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </button>
                                {/* Left Arrow */}
                                <button className='flex  self-center absolute bottom-[150px] lg:bottom-[120px] left-0
                                z-10 text-[#008072] size-[14px]' >
                                    {/* z-10 text-[#008072] size-[14px]' onClick={prevSlide}> */}
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-2'>
                        <div className='pr-[45px] pl-[45px] pb-[35px] pt-[35px]'>
                            <div>
                                <h1 className='pt-[10px] text-2xl'>{product.name}</h1>
                                <h2 className='mt-[5px]'>Intel Core i3-14100 LGA 1700 14th Gen Tray Processor</h2>
                            </div>
                            <div className='lg:pl-[45px] flex justify-end'>
                                <Image src={Cpu1} className='w-[100px] h-[40px]' />
                            </div>
                        </div>
                        <div className='lg:grid lg:grid-cols-3'>
                            <div className='lg:col-span-1 pr-[45px] pl-[25px]'>
                                <div className='mb-[21px]'>
                                    پردازنده: Core i3-14100
                                    <br />
                                    سوکت: LGA-1700
                                    <br />
                                    تعداد هسته: 4 هسته
                                    <br />
                                    تعداد رشته: 8 رشته
                                    <br />
                                    فرکانس پایه: 3.5 گیگاهرتز
                                </div>
                            </div>
                            <div className='lg:col-span-2 pr-[45px] lg:pr-[65px] pl-[45px]'>
                                <div className='pr-[25px]'>
                                    <div className='mb-[14px] '>
                                        <span>کد کالا:
                                            <b>
                                                Lion-Product-770341
                                            </b>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            موجودی محصول:
                                            <b className='text-[#008072]'>
                                                موجود
                                            </b>
                                        </span>
                                    </div>
                                </div>
                                <hr className='mt-[14px] pb-[14px] mr-[25px] ml-[25px] border-t-[0.8px] text-black' />
                                <div className='p-[12px] mr-[25px] ml-[25px] bg-[#F3F3F3] rounded-lg'>
                                    <b className='text-[#008072]'>انتخاب گارانتی :</b>
                                    <div className='flex'>
                                        <FontAwesomeIcon className='mt-[2px] size-[15px] bg-[#dbf7e9] text-[#4b987f] rounded-full' icon={faDotCircle} />
                                        <h4 className='pr-[15px] mb-[14px]'>سلامت فیزیکی و اصالت کالا</h4>
                                    </div>
                                </div>
                                <div className='mt-[21px] mr-[25px]'>
                                    <small className='text-gray-500'>تعداد:</small>

                                </div>
                                <div className='mr-7 ml-7 pb-[30px]'>
                                    <strong className='text-[#25ac9e] mt-[25px] flex justify-end'>{product.price} تومان</strong>
                                    <small className='text-gray-500 mt-[14px] mb-[14px] text-xs flex justify-end'>
                                        قیمت مناسب‌تری سراغ دارید؟
                                    </small>
                                    <button className='bg-[#008072] rounded-xl w-[100%] p-[5px]  flex'>
                                        <div className='mr-[10px] mt-[5px] mb-[5px]'>
                                            <div className='bg-[#25ac9e] text-white 
                                            w-[36px] h-[36px] rounded-full ml-auto mr-auto  flex place-content-center items-center'>
                                                <FontAwesomeIcon className='size-[14px]' icon={faCartShopping} />
                                            </div>
                                        </div>
                                        <span className='text-white self-center mr-auto ml-auto'> افزودن به سبد خرید </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page