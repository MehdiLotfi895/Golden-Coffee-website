export default function CoffeClubForMobile() {
  return (
    <div className="w-full flex justify-center ">
    <div className="w-[min(90%,369px)] h-[min(70vw,287px)] my-7 bg-club rounded-xl px-2.5  text-white flex flex-col justify-center break-2:w-143.25 break-3:w-[768.4px] break-3:flex-row break-3:items-center break-3:h-34 break-3:justify-between xl:w-270 xl:pl-10">
       <div className="flex gap-2.5 font-medium ">
       <img src="./diamond.png" className="w-[min(21vw,86px)] max-h-25"/>
        <div>
        <div className="text-[min(8vw,33px)]  font-bold xl:text-[40px]">کافی کلاب</div>
        <div className="text-[min(4vw,17px)] break-3:text-[15px] xl:text-[17px]">میدونستی میتونی با امتیاز هات قهوه بگیری؟</div>
        </div>
       </div>
       <div className="flex gap-2.5 mt-7 break-3:my-auto " >
       <div className="flex text-center w-[75%] gap-1 xl:ml-30">
            <div className="w-[min(18.6vw,76px)] h-[min(21vw,86px)] bg-white text-green-800 flex flex-col items-center rounded-[10px]  pb-1 xl:w-23"><img src="./Discovery.svg" className="w-[50%] mt-2.5"/><div className="text-[min(3.3vw,14px)] mt-1.5">چرخ و بخت</div></div>
            <div className="w-[min(18.6vw,76px)] h-[min(21vw,86px)] bg-white text-green-800 flex flex-col items-center rounded-[10px]  pb-1 xl:w-23"><img src="./Activity.svg" className="w-[50%] mt-2.5"/><div className="text-[min(3.3vw,14px)] mt-1.5">ماموریت ها</div></div>
            <div className="w-[min(18.6vw,76px)] h-[min(21vw,86px)] bg-white text-green-800 flex flex-col items-center rounded-[10px]  pb-1 xl:w-23"><img src="./Ticket-Star.svg" className="w-[50%] mt-2.5"/><div className="text-[min(3.3vw,14px)] mt-1.5">جایزه ها</div></div>
        </div>
        <div className="flex justify-center flex-col text-white w-[25%] gap-1.5">
            <div className="font-bold text-[min(4.7vw,20px)]">500</div>
            <div className="text-[min(3.3vw,14px)] mt-[-3px] mb-[3px]">امتیاز شما</div>
            <button className="text-stone-100 bg-orange-400 rounded-[3.3vw] text-[min(14px,3.3vw)] w-[min(21vw,86px)] h-[min(6.5vw,26px)] font-medium ">
                دریافت جایزه
            </button>
           </div>
       </div>
    </div>
    </div>
  )
}
