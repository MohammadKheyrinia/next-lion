import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NavA = () => {
    return (
        <div className=' pl-[15px] pr-[15px]
         sm:w-[500px]  ml-auto mr-auto fixed left-0 right-0 top-0 bg-white z-50 shadow-[0_15px_20px_-20px_rgba(0,0,0,.1)]'>
            <div className='justify-between pl-[50px] pr-[50px] flex h-28 items-center text-[#737373]'>
                <Link className='hover:text-[#25ac9e] transition duration-300 hover:-translate-y-1' href="/">فروشگاه</Link>
                <Link className='hover:text-[#25ac9e] transition duration-300 hover:-translate-y-1' href="/admin/product/create">
                    <FontAwesomeIcon className='size-[28px] w-[28px] text-white bg-[#25ac9e] rounded-full' icon={faPlus} />
                </Link>
                <Link className='hover:text-[#25ac9e] transition duration-300 hover:-translate-y-1' href="/admin">داشبورد</Link>
            </div>

        </div>
    )
}

export default NavA