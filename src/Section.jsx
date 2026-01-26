import Things from "./Things";
export default function Section({dark}) {
  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center p-3 gap-6 text-xl text-white break-3:w-[768.4px] break-3:px-0 break-3:justify-between xl:w-270">
            <div className="w-[min(90vw,377px)] h-[min(45vw,183px)] bg-[url(category-right.png)] bg-cover rounded-xl pt-7 pr-7 bg-center break-2:w-143.25 break-3:w-92 xl:w-132 ">
               <p className="font-bold text-[min(5.5vw,30px)]">انواع قهوه</p>
               <p className="text-[min(5vw,25px)]">ترکیبی و خاص</p>
            </div>
            <div className="w-[min(90vw,377px)] h-[min(45vw,183px)] bg-[url(category-left.png)] bg-cover rounded-xl pt-7 pr-7 bg-center break-2:w-143.25 break-3:w-92 xl:w-132">
            <p className="font-bold text-[min(5.5vw,30px)]">پودر های فوری</p>
            <p className="text-[min(5vw,25px)]">نسکافه هات چاکلت  ماسالا</p>
            </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-[min(4.5vw,18px)] w-[min(100%,408px)] justify-center p-4 break-2:w-143.25 break-3:w-[768.4px] xl:w-270 break-2:justify-between">
                <Things img="./category1.png" name="قهوه دمی و اسپرسو" dark={dark}></Things>
                <Things img="./category2.png" name="لوازم جانبی و تجهیزات"dark={dark}></Things>
                <Things img="./category3.png" name="اسپسو ساز"dark={dark}></Things>
                <Things img="./category4.png" name="پک تستر قهوه"dark={dark}></Things>
                <Things img="./category5.png" name="قهوه ترک"dark={dark}></Things>
        </div>
    </div>
  )
}
