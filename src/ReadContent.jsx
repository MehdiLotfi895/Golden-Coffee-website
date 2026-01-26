export default function ReadContent({dark,img,description,date}) {
const cssString=(dark)?"bg-zinc-600 text-white":"bg-white text-stone-700";
  return (
    <div className={`w-[min(100%,400px)] h-[min(42.5vw,150px)] rounded-xl p-2.5 flex gap-3 items-center ${cssString} break-2:w-69 break-2:h-31.75 break-3:w-[48%] xl:w-[23.5%]`}>
        <img src={img} alt="" className="w-[min(30vw,130px)] h-[min(30vw,130px)] rounded-xl rounded-bl-4xl break-2:w-22.5 break-2:h-22.5 "/>
        <div className="flex flex-col gap-7 ">
            <div>
               <p className="text-[min(4vw,18px)] font-medium break-2:text-[12px] ">{description}</p>
            </div>
            <div>
                <div className="w-full h-[0.5px] bg-stone-100 mb-3"></div>
                <div className="flex justify-between items-center">
                  <p className="text-[min(3.5vw,15px)] text-teal-600 font-medium break-2:text-[10px]">{date}</p>
                  <button className="flex bg-orange-100 px-1 pt-[1.5px] rounded-sm items-center gap-[2vw] xl:gap-2">
                    <p className="text-orange-400 text-[min(3.7vw,14px)] break-2:text-[11px]">مطالعه</p>
                  <img src="./flesh.png" alt="" className="w-[min(3.4vw,14.5px)] h-[min(3.9vw,15.5px)] break-2:w-2.5 break-2:h-3"/>
                  </button>
                </div>
            </div>

        </div>
    </div>
  )
}
