"use client"
import { useCallback, useState, useEffect } from 'react';
import lion from '../../../public/assets/lion.svg'
import Link from 'next/link'
import Image from "next/image"
import news from '../../../public/assets/icons/news.svg'
import percent from '../../../public/assets/icons/percent.svg'
import support from '../../../public/assets/icons/support.svg'
import pc from '../../../public/assets/icons/pc.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faEllipsis, faAngleDown, faHome, faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../components/popover"

const Nav = () => {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // If scrolling down, hide the navbar
                setIsOpen(false);
            } else {
                // If scrolling up or no change, show the navbar
                setIsOpen(true);
            }
            // Remember current page location for the next move
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // Cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [controlNavbar]);



    return (
        <div id='navbarr' className=' max-w-[1380px] 2xl:min-w-[1440px] xl:min-w-[1230px] lg:w-[1022px] md:w-[798px] pl-[15px] pr-[15px]
         sm:w-[606px]  ml-auto mr-auto fixed left-0 right-0 top-0 bg-white z-50 shadow-[0_15px_20px_-20px_rgba(0,0,0,.1)]'>

            <div className='justify-between pl-[15px] pr-[15px] flex h-28 items-center text-[#737373]'>

                <div>
                    <Link href='/'>
                        <Image className='w-48' src={lion} alt="Logo Image" />
                    </Link>
                </div>

                <div>
                    <form className='hidden lg:flex relative'>
                        <input className='pl-[15px] pr-[15px] pt-1.5 pb-1.5 w-[450px] rounded-3xl
                        bg-[#ebebeb] text-right' type="text" placeholder='به دنبال چه چیزی می‌گردید؟' />
                        <button type="submit" className="flex absolute top-[28%] left-[15px] ">
                            <FontAwesomeIcon className='size-[14px] w-[14px] text-[#25ac9e]' icon={faSearch} />
                        </button>
                    </form>
                </div>

                <div className='flex'>
                    <div>
                        <p className='text-[#737373] text-[11px]'>با ما تماس بگیرید</p>
                        <a className='text-[#4c5e60] text-[14px]' href="tel:+982191005666">02191005666</a>
                    </div>
                    <div className='bg-[#edfbfc] hover:bg-[#25ac9e] text-[#25ac9e] hover:text-white
                    w-[35px] h-[35px] rounded-[50%] mr-[21px] hidden lg:flex place-content-center items-center'>
                        <Popover>
                            <PopoverTrigger className='flex'>
                                <FontAwesomeIcon className='size-[14px]' icon={faCartShopping} />
                            </PopoverTrigger>
                            <PopoverContent>سبد خرید شما خالی است.</PopoverContent>
                        </Popover>
                    </div>
                    <Link href='../components/login' className='bg-[#edfbfc] hover:bg-[#25ac9e]  text-[#25ac9e] hover:text-white
                        w-[35px] h-[35px] hover:shadow-xl shadow-teal-900 justify-items-center rounded-[50%] mr-[21px]
                        hidden lg:flex place-content-center items-center'>
                        <FontAwesomeIcon className='size-[14px]' icon={faUser} />
                    </Link>

                </div>
            </div>

            <div className={`${isOpen ? '' : 'hidden'}`}>
                <div className='justify-between pl-[15px] pr-[15px] flex items-center text-[#737373] z-40 bg-white'>
                    <div className='h-[35px] w-[556px] hidden lg:block'>
                        <ul className="flex justify-between relative">
                            <li id='blur' className='dropdownn items-center cursor-pointer '>
                                <div className='h-[35px] '>
                                    <span className='ml-[10px] '>دسته‌بندی‌ها</span>
                                    <FontAwesomeIcon className=' text-[#008072] size-[14px]' icon={faAngleDown} />
                                </div>
                                <div className=''>
                                    <ul className='h-[350px] w-[250px] p-[20px] bg-[#e6f9fd] absolute dropdown-contentt'>
                                        <li className=' mt-[5px] mb-[5px] pt-[15px] pb-[15px] pl-[25px] pr-[25px]'><Link href='/'><span>کامپیوتر و قطعات کامپیوتر</span></Link></li>
                                        <li className=' mt-[5px] mb-[5px] pt-[15px] pb-[15px] pl-[25px] pr-[25px]'><Link href='/'><span>لپ تاپ و All in one و تبلت</span></Link></li>
                                        <li className=' mt-[5px] mb-[5px] pt-[15px] pb-[15px] pl-[25px] pr-[25px]'><Link href='/'><span>کنسول، گجت، موبایل</span></Link></li>
                                        <li className=' mt-[5px] mb-[5px] pt-[15px] pb-[15px] pl-[25px] pr-[25px]'><Link href='/'><span>تجهیزات شبکه و ارتباطات</span></Link></li>
                                        <li className=' mt-[5px] mb-[5px] pt-[15px] pb-[15px] pl-[25px] pr-[25px]'><Link href='/'><span>ماشین‌های اداری و مواد مصرفی</span></Link></li>
                                    </ul>
                                    <div className='h-[350px] 2xl:min-w-[1400px] xl:min-w-[1230px] lg:w-[1022px] pl-[15px] pr-[15px]
                                    p-[25px] bg-white rounded-r-[10px] rounded-l-[5px] dropdown-contenttt absolute w-[100%] grid-cols-5 text-nowrap'>
                                        <div className=''>
                                            <div className='text-wrap lg:w-40 xl:w-auto'>
                                                <strong className='text-black'>کیس و قطعات اصلی داخل کیس</strong>
                                                <ul className='pt-[5px] pr-[5px] '>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-wrap lg:w-40 xl:w-auto'>
                                                <strong className='text-black'>کیس و قطعات اصلی داخل کیس</strong>
                                                <ul className='pt-[5px] pr-[5px] '>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-wrap lg:w-40 xl:w-auto'>
                                                <strong className='text-black'>کیس و قطعات اصلی داخل کیس</strong>
                                                <ul className='pt-[5px] pr-[5px] '>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-wrap lg:w-40 xl:w-auto'>
                                                <strong className='text-black'>کیس و قطعات اصلی داخل کیس</strong>
                                                <ul className='pt-[5px] pr-[5px] '>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-wrap lg:w-40 xl:w-auto'>
                                                <strong className='text-black'>کیس و قطعات اصلی داخل کیس</strong>
                                                <ul className='pt-[5px] pr-[5px] '>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                    <li className='mt-[10px] mr-[3px] mb-[10px]'>کیس کامپیوتر</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link href='../components/chera'>چرا لیون کامپیوتر</Link></li>
                            <li><Link href="../components/rahnama">راهنمای خرید</Link></li>
                            <li><Link href="#">ایزی پی سی</Link></li>
                            <li><Link href="#">شرایط گارانتی</Link></li>
                            <li className='relative cursor-pointer'>
                                <div className='items-center dropdown '>
                                    <div>
                                        <span className='ml-[10px]'>سایر</span>
                                        <FontAwesomeIcon className='text-[#008072] size-[14px]' icon={faEllipsis} />
                                    </div>
                                    <ul className='absolute '>
                                        <li className='w-[200px] p-[14px] dropdown-content'>
                                            <a className='pt-[10px] pb-[10px] hover:font-bold grid' href='/'>خرید اقساطی</a>
                                            <a className='pt-[10px] pb-[10px] hover:font-bold grid' href='/'>تماس با‌ ما</a>
                                            <a className='pt-[10px] pb-[10px] hover:font-bold grid' href='/'>سوالات متداول</a>
                                            <a className='pt-[10px] pb-[10px] hover:font-bold grid' href='/'>درباره ما</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='h-[35px] w-screen lg:w-[413px] '>
                        <ul className="flex justify-between items-center">
                            <li className=''><Link className='sm:flex md:flex lg:hidden' href="#">
                                <Image className='ml-[6px] w-[25px] ' src={pc} />
                                <span>ایزی پی سی</span>
                            </Link></li>
                            <li className='hidden lg:block'><Link className='flex ' href="#">
                                <Image className=' ml-[6px] w-[25px] lg:w-[15px]' src={support} />
                                <span>خرید اقساطی</span>
                            </Link></li>
                            <li><Link className='flex ' href="#">
                                <Image className='ml-[6px] w-[25px] lg:w-[15px]' src={percent} />
                                <span>فروش ویژه</span>
                            </Link></li>
                            <li><Link className='flex ' href="#">
                                <Image className='ml-[6px] w-[25px] lg:w-[15px]' src={news} />
                                <span>مجله لیون کامپیوتر</span>
                            </Link></li>
                            <li><Link className='items-center' href="#">
                                <FontAwesomeIcon className=' text-black size-[14px]' icon={faMoon} />
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className=' flex lg:hidden justify-between text-[12px] text-[#4c5e60]
                fixed left-0 right-0 z-50 bottom-0 h-[70px] bg-white items-center '>
                <div>
                    <ul className='flex w-screen'>
                        <li className='flex-col flex w-[20%] self-center items-center text-center'><Link className='' href="#">
                            <FontAwesomeIcon className='text-[#008072] size-[18.9px] ' icon={faHome} />
                            <span className='flex'>خانه</span>
                        </Link></li>
                        <li className='flex-col flex w-[20%] self-center items-center text-center'><Link className='' href="#">
                            <FontAwesomeIcon className='size-[18.9px] ' icon={faBars} />
                            <span className='flex'>دسته‌بندی‌</span>
                        </Link></li>
                        <li className='flex-col flex w-[20%] self-center items-center text-center'><Link className='items-center' href="#">
                            <FontAwesomeIcon className='size-[18.9px] ' icon={faCartShopping} />
                            <span className='flex'>سبد خرید</span>
                        </Link></li>
                        <li className='flex-col flex w-[20%] self-center items-center text-center'><Link className='items-center' href="#">
                            <FontAwesomeIcon className='size-[18.9px] ' icon={faSearch} />
                            <span className='flex'>جستجو</span>
                        </Link></li>
                        <li className='flex-col flex w-[20%] self-center items-center text-center'><Link className='items-center' href="#">
                            <FontAwesomeIcon className='size-[18.9px] ' icon={faUser} />
                            <span className='flex'>ورود</span>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Nav;