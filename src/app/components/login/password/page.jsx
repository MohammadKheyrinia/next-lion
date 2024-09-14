import lion from '../../../../../public/assets/lion.svg'
import Link from 'next/link'
import Image from "next/image"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const loginpage = () => {
    return (
        <div className='h-[100vh] w-[448px] flex items-center m-auto '>
            <div className='w-[448px] shadow-[0_5px_8px_3px_rgba(0,0,0,.15)] rounded-xl pt-[21px] pb-[21px]'>
                <div className='pt-[25px] pb-[25px] pr-[42px] pl-[42px]'>
                    <div className='pb-5'>
                        <Link href='/'>
                            <Image className='m-auto flex w-[240px]' src={lion} alt="Logo Image" />
                        </Link>
                    </div>
                    <div className='pt-3 pb-3'>
                        <h2 className=' mb-4 text-center font-bold'>فراموشی کلمه عبور</h2>
                        <div className='mb-1'>
                            <input type="text" placeholder='ایمیل یا شماره همراه خود را وارد کنید' className='bg-[#ebebeb] w-full rounded-full mt-[21px] mb-3 pr-6 pl-6 pt-3 pb-3' />
                        </div>
                    </div>
                    <button className='text-white pt-4 pb-4 bg-[#25ac9e] w-[100%] rounded-lg'>
                        ورود
                    </button>
                </div>
            </div>
        </div>
    )
}

export default loginpage