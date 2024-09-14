import Image from 'next/image'
import Link from 'next/link'
import xbox from '../../../public/assets/icons/1614425362-2BPlFTd9O54X2Bs6.svg'
import cpu from '../../../public/assets/icons/1617872751-rAU2KUy6iVaeJeg3.svg'
import gpu from '../../../public/assets/icons/1617872469-i9Uc4dUKenSJjj77.svg'
import MK from '../../../public/assets/icons/1617872751-KB6PIc5RD5e7TxFU.svg'
import monitor from '../../../public/assets/icons/1617872635-hVfvRyiQHoJFiakv.svg'
import mboard from '../../../public/assets/icons/1617872635-VAQtOlnLCHklPhsn.svg'

const Categories_card = () => {
    return (
        <>
            <div className='max-w-[1380px] 2xl:w-[1440px] xl:w-[1200px] lg:w-[992px] md:w-[768px] sm:w-[576px] 
            text-[14px] leading-normal font-BYekan font-medium text-[#4c5e60] pl-[15px] ml-auto mr-auto
            pr-[15px] overflow-x-auto text-center rounded-[10px] pt-[21px] shadow-lg overflow-y-hidden no-scrollbar
            '>
                <div>
                    <ul className='flex'>
                        <li className='items-center  duration-300 hover:scale-110 flex w-96
                         border-l-[0.8px] '>
                            <Link className='pl-[15px] pr-[15px] pt-[20px] pb-[20px] ml-auto mr-auto' href="">
                                <Image className='ml-auto mr-auto' src={xbox} />
                                <h3 className='mt-[20px]'>کنسول بازی</h3>
                            </Link>
                        </li>
                        <li className='items-center  duration-300 hover:scale-110 flex w-96
                         border-l-[0.8px] '>
                            <Link className='pl-[15px] pr-[15px] pt-[20px] pb-[20px] ml-auto mr-auto' href="">
                                <Image className='ml-auto mr-auto' src={gpu} />
                                <h3 className='mt-[20px]'>کارت گرافیک</h3>
                            </Link>
                        </li>
                        <li className='items-center  duration-300 hover:scale-110 flex w-96
                         border-l-[0.8px] '>
                            <Link className='pl-[15px] pr-[15px] pt-[20px] pb-[20px] ml-auto mr-auto' href="">
                                <Image className='ml-auto mr-auto' src={mboard} />
                                <h3 className='mt-[20px]'>مادربرد</h3>
                            </Link>
                        </li>
                        <li className='items-center  duration-300 hover:scale-110 flex w-96
                         border-l-[0.8px] '>
                            <Link className='pl-[15px] pr-[15px] pt-[20px] pb-[20px] ml-auto mr-auto' href="">
                                <Image className='ml-auto mr-auto' src={monitor} />
                                <h3 className='mt-[20px]'>مانیتور</h3>
                            </Link>
                        </li>
                        <li className='items-center  duration-300 hover:scale-110 flex w-96
                         border-l-[0.8px] '>
                            <Link className='pl-[15px] pr-[15px] pt-[20px] pb-[20px] ml-auto mr-auto' href="">
                                <Image className='ml-auto mr-auto' src={cpu} />
                                <h3 className='mt-[20px]'>پردازنده</h3>
                            </Link>
                        </li>
                        <li className='items-center  duration-300 hover:scale-110 flex w-96   '>
                            <Link className='pl-[15px] pr-[15px] pt-[20px] pb-[20px] ml-auto mr-auto' href="">

                                <Image className='ml-auto mr-auto' src={MK} />
                                <h3 className='mt-[20px]'>کیبورد و موس</h3>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Categories_card