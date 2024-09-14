import Link from "next/link"
import Image from "next/image"
import telegram from '../../../public/assets/icons/telegram.svg'
import twitter from '../../../public/assets/icons/twitter.svg'
import youtube from '../../../public/assets/icons/youtube.svg'
import enemad from '../../../public/assets/enemad.bak.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="text-[#4c5e60] pb-[150px] lg:pb-[25px] mt-[50px]">
            <div>
                <div className=" lg:grid lg:grid-cols-12  pr-[25px] pl-[25px] mb-[25px] rounded-[15px] shadow-[0_5px_8px_-3px_rgba(166,196,198.35)]">
                    <div className="pl-[15px] pr-[15px] lg:col-span-8 lg:self-center">
                        <div className="pr-[15px] pl-[15px]  sm:grid md:grid lg:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5">
                            <div className="mb-2 mt-2 pr-[15px] lg:pr-0 pl-[15px] md:grid sm:col-span-4 md:col-span-1 lg:col-span-1">
                                <strong className="text-nowrap">عضویت در خبرنامه</strong>
                            </div>
                            <input className="lg:col-span-3 md:col-span-2 sm:col-span-3 mb-2 sm:mb-0 bg-[#ebebeb] pl-[5px] pt-[10px] pb-[10px] pr-[20px] w-[100%] rounded-[35px]" placeholder="آدرس ایمیل خود را وارد نمایید" type="text" />
                            <div className="lg:col-span-1 md:col-span-2 sm:col-span-1 border-2 rounded-full border-[#25ac9e] ">
                                <button className="m-2 ml-auto mr-auto flex text-center pr-[6px] pl-[6px] pt-[1px] pb-[1px]">
                                    <FontAwesomeIcon className='text-[#25ac9e] m-auto size-[14px]' icon={faEnvelope} />
                                    <span className="text-[#25ac9e] mr-1">عضویت</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:lg:col-span-1 lg:border-r-2"></div>
                    <div className="lg:lg:col-span-3 lg:justify-center justify-between mb-[25px] mt-[50px] pl-[15px] pr-[15px] flex">
                        <Link className="w-[50px] h-[50px] mb-[25px] rounded-[10px] mr-[5px] ml-[5px] bg-[#46b0ec] place-content-center " href={'https://www.t.me/lioncomputer'}>
                            <Image className="w-[25px] ml-auto  mr-auto" src={telegram} />
                        </Link>
                        <Link className="w-[50px] h-[50px] mb-[25px] rounded-[10px] mr-[5px] ml-[5px] bg-[#edfbfc] place-content-center " href={'https://www.twitter.com/intent/follow?screen_name=lioncomputercom'}>
                            <Image className="w-[25px] ml-auto  mr-auto " src={twitter} />
                        </Link>
                        <Link className="w-[50px] h-[50px] mb-[25px] rounded-[10px] mr-[5px] ml-[5px] bg-[#46b0ec] place-content-center " href={'https://www.youtube.com/c/Lioncomputercom'}>
                            <Image className="w-[25px] ml-auto  mr-auto" src={youtube} />
                        </Link>
                    </div>
                </div>

                <div>
                    <Link href={'/'}></Link>
                    <Link href={'/'}></Link>
                    <Link href={'/'}></Link>
                </div>
                <div className="pr-[15px] pl-[15px] lg:flex">
                    <div className="lg:w-1/4 mt-[25px]">
                        <h6>
                            <FontAwesomeIcon className='size-[15px] bg-[#4b987f] text-[#dbf7e9] rounded-full' icon={faDotCircle} />
                            <span className="pr-[15px]">آدرس فروشگاه</span>
                        </h6>
                        <ul className="pr-[10px] mt-[25px] mb-[14px]">
                            <li>
                                <FontAwesomeIcon className='w-[11px] h-[11px] p-[4px] text-[#4b987f] align-middle ml-[10px] rounded-full bg-[#dbf7e9]' icon={faMapPin} />
                                <span className="">
                                    <strong>دفتر مرکزی</strong>
                                    - تهران، خیابان ولیعصر، بالاتر از زرتشت، کوچه جاوید، پلاک ۲۴
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='w-[11px] h-[11px] p-[4px] text-[#4b987f] align-middle ml-[10px] rounded-full bg-[#dbf7e9]' icon={faEnvelope} />
                                <span>کد پستی: 1594843812</span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='w-[11px] h-[11px] p-[4px] text-[#4b987f] align-middle ml-[10px] rounded-full bg-[#dbf7e9]' icon={faPhone} />
                                <Link href={'tel:02191005666'}>شماره تماس: 02191005666 </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-2/4 mt-[25px]">
                        <h6>
                            <FontAwesomeIcon className='size-[15px] bg-[#4b987f] text-[#dbf7e9] rounded-full' icon={faDotCircle} />
                            <span className="pr-[15px]">شماره‌های تماس</span>
                            <strong className="text-[#4b987f] mr-[14px]">( ساعات کاری از ۹:۳۰ صبح الی ۱۸ و پنجشنبه از ۹:۳۰ تا ۱۴ )</strong>
                        </h6>
                        <ul className="pr-[10px] mt-[25px] mb-[14px]">
                            <li>
                                <FontAwesomeIcon className='w-[11px] h-[11px] p-[4px] text-[#4b987f] align-middle ml-[10px] rounded-full bg-[#dbf7e9]' icon={faPhone} />
                                <Link href={'tel:02191005666'}>تلفن: 02191005666 </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:hidden pr-[15px] pl-[15px] ">
                        <div className=" mt-[50px] mb-[50px] ">
                            <a className=" items-center" href="">
                                <Image className="ml-auto mr-auto w-[90px] h-[97px] " src={enemad} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-[42px] pr-[42px] pl-[42px] flex justify-between">
                    <Link href={'/'}>لیون کامپیوتر</Link>
                    <Link href={'/'}>چرا لیون کامپیوتر</Link>
                    <Link href={'/'}>تالار گفتمان</Link>
                    <Link href={'/'}>تماس با‌ ما</Link>
                    <Link href={'/'}>راهنمای خرید و مقررات</Link>
                    <Link href={'/'}>شرایط گارانتی</Link>
                    <Link href={'/'}>اخبار</Link>
                    <Link href={'/'}>درباره ما</Link>
                </div>
                <div>
                    <p className="mt-[42px] pr-[25px] pl-[25px] text-center text-gray-400">
                        تمامی حقوق فروشگاه لیون کامپیوتر برای شرکت پیشرو رایانه هوشمند لیما محفوظ می‌باشد و هرگونه کپی‌برداری مستلزم کسب اجازۀ کتبی بوده و پیگرد قانونی خواهد داشت.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer