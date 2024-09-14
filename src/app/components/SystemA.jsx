import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import gaming from '../../../public/assets/sysas/1645021167-YtBpvbdGqtLqROUd.webp'
import render from '../../../public/assets/sysas/1645021193-kx3mPmi9xYerXoR7.webp'
import cheap from '../../../public/assets/sysas/1645021224-1Y5OSjHrbRjbZApT.webp'
import office from '../../../public/assets/sysas/1645021251-Djrh8qT6Lu1CdIqH.webp'

const SystemA = () => {
    return (

        <div className='rounded-[10px] shadow-[0_5px_8px_-3px_rgba(166,196,198.35)] mt-[21px]'>
            <div className='p-[20px] flex items-center'>
                <FontAwesomeIcon className=' size-[15px] bg-[#4b987f] text-[#dbf7e9] rounded-full' icon={faDotCircle} />
                <h4 className='pr-[35px]'>سیستم‌های اسمبل شده</h4>
            </div>
            <div>
                <ul className='flex items-center justify-center m-0 p-0'>
                    <li className='duration-300 hover:scale-110 pr-[15px] pl-[15px] pt-[20px] pb-[20px] border-l-[0.8px]'>
                        <Link href="#">
                            <Image className='w-[100px] h-[100px]' src={gaming} />
                            <h3 className='mt-[20px] text-[#4c5e60]'>سیستم‌های گیمینگ</h3>
                        </Link>
                    </li>
                    <li className='duration-300 hover:scale-110 pr-[15px] pl-[15px] pt-[20px] pb-[20px] border-l-[0.8px]'>
                        <Link href="#">
                            <Image className='w-[100px] h-[100px]' src={render} />
                            <h3 className='mt-[20px] text-[#4c5e60]'>سیستم‌های رندرینگ</h3>
                        </Link>
                    </li>

                    <li className='duration-300 hover:scale-110 pr-[15px] pl-[15px] pt-[20px] pb-[20px] border-l-[0.8px]'>
                        <Link href="#">
                            <Image className='w-[100px] h-[100px]' src={cheap} />
                            <h3 className='mt-[20px] text-[#4c5e60]'>سیستم‌های بصرفه</h3>
                        </Link>
                    </li>
                    <li className='duration-300 hover:scale-110 pr-[15px] pl-[15px] pt-[20px] pb-[20px] border-l-[0.8px]'>
                        <Link href="#">
                            <Image className='w-[100px] h-[100px]' src={office} />
                            <h3 className='mt-[20px] text-[#4c5e60]'>سیستم‌های اداری</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>



    )
}

export default SystemA