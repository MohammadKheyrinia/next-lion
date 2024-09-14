"use server"

import Image from 'next/image';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faDotCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getProductlist } from "../admin/lib/action";
import { slideLeft, slideRight } from './slide'
import Cpu from '../../../public/assets/products/1709798881-9PmA9Dx67HXPm4t0.webp'

const Newestcpuu = async (query) => {

    const Products = await getProductlist(query);

    return (

        <div className='mt-[21px] shadow-[0_5px_8px_-3px_rgba(166,196,198.35)] rounded-[10px] relative'>
            <div className='flex p-[20px] justify-between'>
                <div className='flex items-center'>
                    <FontAwesomeIcon className=' size-[15px] bg-[#4b987f] text-[#dbf7e9] rounded-full' icon={faDotCircle} />
                    <h4 className='pr-[35px]'>جدیدترین پردازنده‌ها </h4>
                </div>
                <div>
                    <Link className='text-[#25ac9e]  p-[15px] text-[14px] ' href="../components/search">مشاهده همه
                        <FontAwesomeIcon className='mr-[14px] size-[14px]  text-[#4b987f]' icon={faAngleLeft} />
                    </Link>
                </div>
            </div>
            <div id='slider' className=' overflow-x-scroll overflow-y-hidden no-scrollbar lg:overflow-x-clip flex'>

                <button onClick={slideRight} className='hidden absolute w-[40px] h-[60px] rounded-l-full lg:flex items-center z-10 pr-[10px] right-0  bg-[#edfbfc] top-14 pl-[20px] mt-[118px] mb-[118px] 
                        shadow-[0_5px_8px_-3px_rgba(1,157,167.3)] shadow-[#d7f0f1]'>
                    <FontAwesomeIcon className=' text-[#25ac9e] size-[18px]' icon={faAngleRight} />
                </button>
                <button onClick={slideLeft} className='hidden absolute w-[40px] h-[60px] rounded-r-full lg:flex items-center z-10 pl-[10px] left-0 bg-[#edfbfc] top-14 pr-[20px] mt-[118px] mb-[118px] 
                        shadow-[0_5px_8px_-3px_rgba(1,157,167.3)] shadow-[#d7f0f1]'>
                    <FontAwesomeIcon className=' text-[#25ac9e] size-[18px]' icon={faAngleLeft} />
                </button>

                {Products.map((rs) => (
                    <div key={rs.id} className='pt-[15px] pb-[15px] '>
                        <div className='overflow-hidden w-64 lg:w-60 
                            rounded-[10px] hover:shadow-[0_5px_8px_-3px_rgba(166,196,198.35)]
                            mr-[12.5px] ml-[12.5px] p-[25px]'>
                            <Link className='flex mb-[25px] justify-between' href={`http://localhost:3000/components/product/${rs.id}`}>
                                <Image className='w-auto' src={Cpu} />
                            </Link>
                            <div>
                                <Link href={`./product/${rs.id}`}>
                                    <p className='flex text-center mb-[10px]'>{rs.name}</p>
                                </Link>
                                <div className='flex'>
                                    <div className='pr-[15px] pl-[15px]'>
                                        <button className=' bg-[#edfbfc] hover:bg-[#25ac9e] text-[#25ac9e] hover:text-white
                                            w-[36px] h-[36px] rounded-full ml-auto mr-auto  flex   place-content-center items-center'>
                                            <FontAwesomeIcon className='size-[14px]' icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div className='items-center flex pr-[15px] pl-[15px] '>
                                        <strong className='text-[#25ac9e]'>{rs.price} تومان</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Newestcpuu