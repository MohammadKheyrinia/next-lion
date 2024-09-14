"use client"
import Image from 'next/image';
import Link from 'next/link'
import pic from '../../../public/assets/Brands/1645608648-SR0hBz44ND6vp7ye.webp'
import pic1 from '../../../public/assets/Brands/1657368481-O5fTp8c0zgmCSMFn.webp'
import pic2 from '../../../public/assets/Brands/1667389888-MSh15PuCQnVsS6NH.svg'
import pic3 from '../../../public/assets/Brands/1667389918-hb70Blw6W5J4yrUb.svg'
import pic4 from '../../../public/assets/Brands/1667389948-UwpxcR85xT8Hc5WG.svg'
import pic5 from '../../../public/assets/Brands/1667390502-kSfocZeaDGDUWeuA.svg'
import pic6 from '../../../public/assets/Brands/1683465772-ozDlsyKb1gYQaU9K.webp'
import pic7 from '../../../public/assets/Brands/1683467069-S02Ad4ffAAaaYXWd.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {

    const slideLeft = () => {
        var sliderB = document.getElementById('sliderB')
        sliderB.scrollLeft = sliderB.scrollLeft - 215
    }

    const slideRight = () => {
        var sliderB = document.getElementById('sliderB')
        sliderB.scrollLeft = sliderB.scrollLeft + 215
    }

    return (
        <div id='sliderB' className='pl-[15px] ml-auto mr-auto pr-[15px] rounded-[10px] pt-[21px] shadow-lg overflow-x-scroll overflow-y-hidden no-scrollbar lg:overflow-x-clip flex relative'>
            <button onClick={slideRight} className='hidden absolute w-[40px] h-[60px] rounded-l-full lg:flex
                 items-center z-10 pr-[10px] right-0  bg-[#edfbfc] bottom-2 pl-[20px] mt-[40px] mb-[40px] 
                        shadow-[0_5px_8px_-3px_rgba(1,157,167.3)] shadow-[#d7f0f1] ' href="/">
                <FontAwesomeIcon className=' text-[#25ac9e] size-[18px]' icon={faAngleRight} />
            </button>
            <button onClick={slideLeft} className='hidden absolute w-[40px] h-[60px] rounded-r-full lg:flex
                 items-center z-10 pl-[10px] left-0 bg-[#edfbfc] bottom-2 pr-[20px] mt-[40px] mb-[40px] 
                        shadow-[0_5px_8px_-3px_rgba(1,157,167.3)] shadow-[#d7f0f1] ' href="/">
                <FontAwesomeIcon className=' text-[#25ac9e] size-[18px]' icon={faAngleLeft} />
            </button>

            <div className='flex h-[140px]'>
                <div className='pr-[25px] pl-[25px] w-48 self-center'>
                    <Link className=' pb-[30px] pt-[30px]' href='/'>
                        <Image className='h-[70px] w-[100%]' src={pic2} />
                    </Link>
                </div>
                <div className='pr-[25px] pl-[25px] w-48 self-center'>
                    <Link className=' pb-[30px] pt-[30px]' href='/'>
                        <Image className='h-[70px] w-[100%]' src={pic3} />
                    </Link>
                </div>
                <div className='pr-[25px] pl-[25px] w-48 self-center'>
                    <Link className=' pb-[30px] pt-[30px]' href='/'>
                        <Image className='h-[70px] w-[100%]' src={pic4} />
                    </Link>
                </div>
                <div className='pr-[25px] pl-[25px] w-48 self-center'>
                    <Link className=' pb-[30px] pt-[30px]' href='/'>
                        <Image className='h-[70px] w-[100%]' src={pic5} />
                    </Link>
                </div>
                <div className='pr-[25px] pl-[25px] w-48 self-center'>
                    <Link className=' pb-[30px] pt-[30px]' href='/'>
                        <Image className='h-[36px] w-[100%]' src={pic6} />
                    </Link>
                </div>
                <div className='pr-[25px] pl-[25px] w-48 self-center'>
                    <Link className=' pb-[30px] pt-[30px]' href='/'>
                        <Image className='h-[58px] w-[100%]' src={pic7} />
                    </Link>
                </div>
                <div className='pr-[25px] pl-[25px] w-48 self-center'>
                    <Link className=' pb-[30px] pt-[30px]' href='/'>
                        <Image className='h-[130px] w-[100%]' src={pic} />
                    </Link>
                </div>
                <div className='pr-[25px] pl-[25px] w-48 self-center'>
                    <Link className=' pb-[30px] pt-[30px]' href='/'>
                        <Image className='h-[70px] w-[100%]' src={pic1} />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Brands