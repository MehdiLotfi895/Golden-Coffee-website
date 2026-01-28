export default function About({aboutRef}) {
  return (
    <div className="flex justify-center" ref={ aboutRef }>
    <div className="mt-7 w-full p-3 flex flex-col break-1:w-94.25 break-2:w-143.25 md:flex-row md:items-center md:gap-5 break-3:w-[768.4px] xl:w-270">
        <div className="flex justify-center">
        <img src="/contact.png" className="w-56 md:w-100" />
        </div>
        <div>
        <div className="text-xl font-black mt-7 xl:text-3xl">یکی از بهترین قهوه ها!</div>
        <div className="text-sm xl:text-xl">کیفیت قهوه را از ما بخواهید...</div>
        <p className="text-xl font-bold">. . .</p>
        <p className="text-sm xl:text-[16px]">فضای گرم و دنج ما را احساس کنید .جایی که همه میتواند قهوه معطری پیدا کنند و دسر های خوشمزه ما را کاملا با قهوه داغ همراه شده است امتحان کنند .فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
        <button className="bg-transparent border-2 border-orange-400 rounded-3xl px-3 py-1 flex gap-2 mt-6 w-40 items-center xl:w-53 xl:py-2">
        <img src="./phone3.png" className="w-7 xl:w-8"/>
        <p className="text-orange-400 text-xs xl:text-[17px]">ثبت سفارش تلفنی</p>
        </button>
        </div>
    </div>
    </div>
  )
}
