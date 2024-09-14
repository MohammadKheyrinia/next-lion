import lion from '../../../../public/assets/lion.svg'
import Link from 'next/link'
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const loginpage = () => {
  return (
    <div className=''>
      <div className='h-[100vh] w-[448px] flex  items-center m-auto '>
        <div className='shadow-[0_5px_8px_3px_rgba(0,0,0,.15)] rounded-xl pt-[21px] pb-[21px]'>
          <div className='pt-[25px] pb-[25px] pr-[42px] pl-[42px]'>
            <div className='pb-[35px]'>
              <Link href='/'>
                <Image className='m-auto flex w-[240px]' src={lion} alt="Logo Image" />
              </Link>
            </div>
            <div className='pt-3 pb-3'>
              <h2 className=' mb-[25px] text-center font-bold'>ورود   |   ثبت نام</h2>
              <div className='mb-3'>
                <span className='pr-1'>لطفا شماره موبایل خود را وارد کنید</span>
                <input type="text" placeholder='شماره موبایل' className='bg-[#ebebeb] w-full rounded-full mt-[21px] mb-3 pr-6 pl-6 pt-3 pb-3' />
              </div>
            </div>
            <div className='text-[#25ac9e] pb-4 '>
              <Link className='flex items-center' href='/'>
                فراموشی رمزعبور
                <FontAwesomeIcon className='mr-1 size-[14px] w-[14px]' icon={faAngleLeft} />
              </Link>
            </div>
            <button className='shadow-[0_10px_20px_-10px_rgba(59,201,167,.5)] text-white pt-4 pb-4 mt-2  bg-[#25ac9e] w-[100%] rounded-lg'>
              ورود
            </button>
            <p className='mt-4 mb-4 text-center '>
              با ورود به لیون کامپیوتر، کلیه
              <Link href='/' className=' font-bold'>&#160;قوانین و مقررات </Link>
              را می‌پذیرم
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default loginpage