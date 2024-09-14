import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (

    <main>
      <Nav />
      <div className="pt-[150px]">
        <div className="rounded-[10px] shadow-[0_5px_8px_-3px_rgba(166,196,198.35)] p-[42px] top-0 right-0 left-0 bottom-0 pt-[50px]">
          <div className="flex-col justify-center">
            <div className="flex justify-center pt-[50px]">
              <div className="flex relative justify-center   bg-red-100 h-[200px] w-[200px] rounded-full">
                <FontAwesomeIcon className='absolute top-[35%] text-red-600' size="4x" icon={faTimes} />
              </div>
            </div>
            <h1 className="flex justify-center mt-[21px] pt-[50px] mb-[14px]">
              صفحه مورد نظر یافت نشد
            </h1>
            <p className="mb-[14px] flex justify-center">
              متاسفانه صفحه‌ای که به دنبال آن بودید حذف یا منتقل شده است.
            </p>
            <div className=" flex justify-center">
              <button className="flex rounded-[3.5px] mt-[130px] pr-[20px] pl-[20px] pb-[10px] pt-[10px] bg-[rgb(0,128,114)] ">
                <FontAwesomeIcon className='mr-[10px] ml-[50px] text-white mt-1' icon={faArrowLeft} />
                <Link className=" text-white" href={'/'} >
                  رفتن به صفحه اصلی
                </Link>
              </button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
// bg-[#edfbfc] rounded-t-full bg-bottom
  )
}
