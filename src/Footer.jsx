import "./Footer.css";
export default function Footer({contactRef}) {
  return (
    <div className="w-ful bg-zinc-700 text-white mt-10 py-5 px-3 lg:flex lg:justify-around " id="footer">
    <div className="lg:w-[20%] lg:mt-5">
    <div className="flex gap-5 items-center ">
        <img src="/app.png" alt="" className="w-10 h-10"/>
        <img src="/logo-type.svg" alt="" className="w-28"/>
    </div>
     <p className="mt-5 text-sm text-stone-300">
     ما برآنیم تا با پیشرو بودن در فرآیند تولید نوع و کیفیت محصول خدمات و توزیع برای تولید کنندگان ایرانی باشیم و به رجع فرهنگ قهوه در ایران تبدیل شویم.می پنداریم که نظر مردم و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می کوشیم.
     </p>
     </div>
     <div className="mt-5 lg:w-[28%]">
     <p className="text-xl font-bold lg:text-center">دسترسی سریع</p>
     <ul className="flex flex-wrap text-stone-300 gap-5 mt-4 text-xs px-3 items-center justify-center" id="footerNav">
       <li >حریم خصوصی</li>
       <li>عودت کالا</li>
       <li>شرایط استفاده</li>
       <li>ثبت سفارش</li>
       <li>پرسش های متداول</li>
       <li>فرصت های شغلی</li>
       <li>ضمانت نامه ها</li>
       <li>ارتباط با ما</li>
     </ul>
     </div>
     <div className="mt-5 " ref={contactRef}>
        <p className="text-xl font-bold">در تماس باشیم</p>
        <div className="flex gap-3 mt-4">
            <img src="/location4.png" className="w-5"/>
            <p className="text-sm text-stone-300">
                تهران _ فردوس  _ پلاک 31
            </p>
        </div>
        <div className="flex gap-3 mt-3 items-center">
            <img src="/email1.png" className="w-[23px] h-[23px]"/>
            <p className="text-orange-300 text-sm">
                    GoldenCoffe@gmail.com
            </p>
        </div>
        <div className="flex gap-3 items-center  mt-3 ">
        <img src="/phoneFooter.png" className="w-[23px]"/>
        <div className="text-sm text-stone-300 mt-1.5">0999999999</div>
        <div className="text-sm text-stone-300 mt-1.5">021-5583469</div>
        </div>
        <div className="flex gap-3 mt-3">
           <div className="bg-transparent border-[1px] border-orange-200 w-36 h-8 rounded-xl px-3 py-1 flex gap-1.5 items-center">
             <img src="/insta.png" alt="" className="w-5"/>
             <p className="text-orange-200 text-xs mt-0.5">GoldenCoffee@</p>
           </div>
           <div className="bg-orange-200 w-36 h-8 rounded-xl px-3 py-1 flex gap-1.5 items-center">
            <img src="/telegram.svg" alt="" className="w-5"/>
            <p className="text-xs text-black mt-0.5">GoldenCoffee@</p>
           </div>
        </div>
     </div>
    </div>
  )
}
