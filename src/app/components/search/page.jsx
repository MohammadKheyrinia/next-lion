"use server"

import Nav from '../Nav'
import Link from 'next/link'
import Image from "next/image"
import { getProductlist } from "../../admin/lib/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCartShopping, faHeart, faRandom, faSearch, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import Cpu from '../../../../public/assets/products/1709798881-9PmA9Dx67HXPm4t0.webp'
import { Slider } from "./slider"

const page = async (query) => {
    const Products = await getProductlist(query);

    return (
        <div>
            <Nav />
            <div className='pt-48 text-nowrap '>
                <div className='shadow-[0_5px_8px_3px_rgba(0,0,0,.15)] p-4 rounded-lg flex items-center'>
                    <Link href='/'>صفحه اصلی</Link>
                    <FontAwesomeIcon className='text-[#25ac9e] mr-2 ml-2 size-[14px] w-[14px]' icon={faAngleLeft} />
                    <Link href='/'>قطعات کامپیوتر</Link>
                    <FontAwesomeIcon className='text-[#25ac9e] mr-2 ml-2 size-[14px] w-[14px]' icon={faAngleLeft} />
                    <Link href='/'>کیس و قطعات اصلی داخل کیس</Link>
                    <FontAwesomeIcon className='text-[#25ac9e] mr-2 ml-2 size-[14px] w-[14px]' icon={faAngleLeft} />
                    <Link href='/'>پردازنده - سی پی یو</Link>
                </div>
                <div className='lg:grid lg:grid-cols-5 lg:gap-10'>
                    <aside className='hidden lg:flex mt-[35px] lg:col-span-1'>
                        <div className='w-[100%]'>
                            <div className='mb-3 flex '>
                                <input className='shadow-[0_5px_8px_3px_rgba(0,0,0,.15)] w-[100%]
              p-3 rounded-lg' type="text" placeholder='جستجو در بین نتایج...' />
                                <button type="submit" className="-mr-8">
                                    <FontAwesomeIcon className='size-[14px] w-[14px] text-[#25ac9e]' icon={faSearch} />
                                </button>
                            </div>
                            <div className='mt-3 mb-3 pb-8 shadow-[0_5px_8px_3px_rgba(0,0,0,.15)] rounded-lg'>
                                <div className='flex items-center pt-4 pb-2 pr-3 pl-3 '>
                                    <FontAwesomeIcon className='ml-3 size-[15px] bg-[#4b987f] text-[#dbf7e9] rounded-full' icon={faDotCircle} />
                                    <h5 className='font-semibold'>محدوده قیمت</h5>
                                </div>
                                <div className='pr-5 pl-5'>
                                    <Slider defaultValue={[0]} max={100} step={1} />
                                </div>
                            </div>
                            <div className='pb-5 shadow-[0_5px_8px_3px_rgba(0,0,0,.15)] rounded-lg'>
                                <div className='flex items-center pt-4 pb-2 pr-3 pl-3 '>
                                    <FontAwesomeIcon className='ml-3 size-[15px] bg-[#4b987f] text-[#dbf7e9] rounded-full' icon={faDotCircle} />
                                    <h5 className='font-semibold'>موجودی محصول</h5>
                                </div>
                                <form id='radio' className=' items-center'>
                                    <div className='flex items-center'>
                                        <input className='' type='radio' id='available' name='availability' />
                                        <label htmlFor='available' className='mr-3'>موجود</label>
                                    </div>
                                    <div className='flex items-center pt-2'>
                                        <input type='radio' id='all' name='availability' />
                                        <label htmlFor='all' className='mr-3'>همه</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </aside>
                    <div className='lg:col-span-4'>
                        <div className='shadow-[0_5px_8px_3px_rgba(0,0,0,.15)] rounded-lg flex items-center 
            mt-10 pt-3 pb-3 pr-4 pl-4 '>
                            <span>مرتب‌سازی بر اساس:</span>
                            <Link href='' className='pt-2 pb-2 pr-4 pl-4 ml-1 focus:bg-[#edfbfc] disabled:bg-white
              focus:text-[#25ac9e] focus:font-bold rounded-lg'>جدیدترین</Link>
                            <Link href='' className='pt-2 pb-2 pr-4 pl-4 ml-1 focus:bg-[#edfbfc] disabled:bg-white
              focus:text-[#25ac9e] focus:font-bold rounded-lg'>بیشترین تخفیف</Link>
                            <Link href='' className='pt-2 pb-2 pr-4 pl-4 ml-1 focus:bg-[#edfbfc] disabled:bg-white
              focus:text-[#25ac9e] focus:font-bold rounded-lg'>گران‌ترین</Link>
                            <Link href='' className='pt-2 pb-2 pr-4 pl-4 ml-1 focus:bg-[#edfbfc] disabled:bg-white
              focus:text-[#25ac9e] focus:font-bold rounded-lg'>ارزان‌ترین</Link>
                            <Link href='' className='pt-2 pb-2 pr-4 pl-4 ml-1 focus:bg-[#edfbfc] disabled:bg-white
              focus:text-[#25ac9e] focus:font-bold rounded-lg'>محبوب‌ترین</Link>
                        </div>
                        <div className='pt-3 lg:grid lg:grid-cols-4 lg:gap-6'>
                            {Products.map((rs) => (
                                <div className=''>
                                    <div key={rs.id} className='pt-[5px] pb-[15px] '>
                                        <div className='w-[100%] p-[25px] 
                    rounded-[10px] shadow-[0_5px_8px_3px_rgba(0,0,0,.15)]'>
                                            <Link className='flex mb-[25px]  justify-between' href={`http://localhost:3000/components/product/${rs.id}`}>
                                                <Image className='w-[150px] mr-auto ml-auto' src={Cpu} />
                                            </Link>
                                            <div>
                                                <Link href={`./product/${rs.id}`}>
                                                    <p className='flex text-center mb-[10px]'>{rs.name}</p>
                                                </Link>
                                                <div className='text-left pr-[15px]'>
                                                    <strong className='text-[#25ac9e]'>{rs.price} تومان</strong>
                                                </div>
                                                <div className='relative flex pt-4 justify-between'>
                                                    <div>
                                                        <button className=' bg-[#edfbfc]  hover:bg-[#25ac9e] text-[#25ac9e] hover:text-white
                                            w-[36px] h-[36px] rounded-full  flex   place-content-center items-center'>
                                                            <FontAwesomeIcon className='size-[14px]' icon={faCartShopping} />
                                                        </button>
                                                    </div>
                                                    <div className='flex'>
                                                        <div>
                                                            <button className=' bg-red-100 hover:bg-red-500 text-red-500 hover:text-white
                              w-[36px] h-[36px] rounded-full  flex   place-content-center items-center'>
                                                                <FontAwesomeIcon className='size-[14px]' icon={faHeart} />
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className='mr-2 bg-orange-100 hover:bg-orange-500 text-orange-500 hover:text-white
                                            w-[36px] h-[36px] rounded-full  flex   place-content-center items-center'>
                                                                <FontAwesomeIcon className='size-[14px]' icon={faRandom} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page