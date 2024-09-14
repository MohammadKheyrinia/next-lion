import "./globals.css";

export const metadata = {
  title: "قیمت و خرید کامپیوتر و سیستم اسمبل شده | لیون کامپیوتر",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa-IR" className='antialiased relative font-BYekan overflow-x-hidden no-scrollbar text-[14px] max-w-[1380px] 2xl:w-[1440px] xl:w-[1200px] lg:w-[992px] md:w-[768px] sm:w-[576px] ml-auto mr-auto' >
      <body>{children}</body>
    </html>
  );
}
