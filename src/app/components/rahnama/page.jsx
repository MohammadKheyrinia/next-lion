import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import NavA from "../Nav";
import Footer from '../Footer'


const chera = () => {
    return (
        <div>
            <article>
                <div>
                    <NavA />
                    <div className='text-[#4c5e60] mt-[150px] rounded-xl pt-4 pb-4 pr-12 pl-12 shadow-[0_5px_8px_3px_rgba(0,0,0,.15)]'>
                        <div className='flex place-content-center items-center p-5 mt-5 mb-5'>
                            <FontAwesomeIcon className=' size-[15px] bg-[#4b987f] text-[#dbf7e9] rounded-full' icon={faDotCircle} />
                            <h1 className='text-3xl font-bold pr-5'>راهنمای خرید</h1>
                        </div>
                        <div>
                            <p className='text-[#4b987f]'>زمان ارسال سفارش:</p>
                            <p>در خصوص کالاهایی که نیاز به اسمبل یا کاستوم ندارند:</p>
                            <div>
                                <p>سفارش‌ها ۲ تا ۳ روز کاری پس از ثبت و پرداخت سفارش، آماده و ارسال خواهند شد.</p>
                                <strong>در خصوص کالاهایی که نیاز به اسمبل یا کاستوم دارند:</strong>
                                <p>کالاهایی که نیاز به اسمبل و یا کاستوم داشته باشند، حداکثر ظرف ۷ روز کاری پس از ثبت و پرداخت سفارش، آماده و ارسال خواهند شد.</p>
                            </div>
                            <ul className='pt-7 pr-3'>
                                <li>
                                    زمانی که قصد دریافت کالای خود را از شرکت حمل و نقل کالا دارید، در صورت مشاهدۀ هر گونه آسیب فیزیکی در بسته‌بندی، از تحویل گرفتن مرسوله خودداری نمایید در صورتی که کالای آسیب دیده توسط مشتری از شرکت حمل و نقل مانند کالارسان تحویل گرفته شود، مسئولیت پیگیری به عهدۀ مشتری است
                                </li>
                                <li>
                                برای پیگیری سفارش خود در روزها و ساعات کاری با شماره 02191005666 واحد ارتباط با مشتریان تماس حاصل فرمایید و یا از طریق چت انلاین  با کارشناسان بخش مربوطه ارتباط برقرار نمایید
                                </li>
                                <li>
                                در صورت نیاز به هرگونه تغییر در سفارش اعم از تغییر در کالا یا روش ارسال، مراتب از طریق تماس تلفنی به اطلاع مشتری خواهد رسید
                                </li>
                                <li>
                                ارسال رایگان تهران در ساعت‌های مشخصی در روز انجام می‌شود، قبل از ارسال مرسوله از واحد ارسال هماهنگی‌های لازم از طریق تماس تلفنی با مشتری انجام می‌شود، در صورتی که مشتری پاسخ‌گوی تلفن خود نباشد ارسال مرسوله به روز بعد موکول خواهد شد.
                                </li>
                                <li>
                                کالاهای ارسالی شهر تهران درب منزل مشتری (درب ورودی ساختمان) تحویل داده خواهند شد
                                </li>
                                <li>
                                اگر چنانچه مغایرتی در کالای دریافتی با کالای سفارش داده شده وجود دارد، از باز کردن کالا خودداری فرموده و بلافاصله کارشناسان واحد پیگیری را از این مسئله مطلع نمایید
                                </li>
                                <li>
                                کیس‌های اسمبل شده با روش ارسال باربری ارسال می‌شوند
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </article>
        </div>
    )
}

export default chera