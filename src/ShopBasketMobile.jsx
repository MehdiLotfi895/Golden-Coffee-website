import { useEffect } from "react";
import {useSearchParams,NavLink } from "react-router-dom"
import "./ShopBasket.css"
export default function ShopBasketMobile({shoppingList,setShoppingList}) {
  const [searchParams,setSearchParams]=useSearchParams();
  let sum=0;
    for(let i=0;i<=shoppingList.length-1;i++)
        sum+=(Number(shoppingList[i].value)*Number(shoppingList[i].number)*(100-shoppingList[i].offPercent)/100);
  const cssSring=(searchParams.get("dark")==1)?"bg-zinc-700 text-stone-200":"bg-white ";
  useEffect(()=>{
     localStorage.setItem("shoppingList",JSON.stringify(shoppingList));
   },[shoppingList])
  return (
    <>
     <div className="fixed w-screen h-screen bg-[rgba(0,0,0,0.6)] backdrop-blur-xs z-20 md:hidden">
    </div>
    <div className="hidden w-64 h-20 bg-orange-400 rounded-xl fixed top-[85.5px] z-20 md:left-56 lg:left-66 xl:left-83 md:block">
    </div>
    <div className={`top-0 left-0 w-64 h-screen z-20 p-3 fixed md:h-80 lg:h-100 xl:h-110 md:left-56 lg:left-66 xl:left-83 md:top-22 md:rounded-xl ${cssSring}`} >
        <div className="flex justify-between items-center pb-3 h-9">
        <NavLink to="/">
        {(searchParams.get("dark")==1)?
            <img src="./whitex.png" alt="x" className="w-2.5"/>
            :
            <img src="./x.png" alt="x" className="w-2.5" />
        }
        </NavLink>
        <p className="text-sm">سبد خرید</p>
        </div>
        <div className="w-full h-[0.5px] bg-stone-200 "> </div>
        <div className="mt-1 w-full h-[80vh] pb-1 overflow-y-scroll md:h-52 lg:h-72 xl:h-82 " id="scroolCss">
          {
            (shoppingList.length==0)?
             <div className="flex flex-col items-center mt-10 ">
                <div>
                <svg width="64px" height="64px" viewBox="-2.88 -2.88 21.76 21.76" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={(searchParams.get("dark")==1)?"#3e4046":"#ffffff"} stroke-width="0.64"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#bfbfbf"> <path fill-rule="evenodd" d="M1.25 1.5a.75.75 0 000 1.5h1.154a.75.75 0 01.736.604l.874 4.413.405 2.15A2.25 2.25 0 006.63 12h6.095a2.25 2.25 0 002.214-1.848l.727-4A2.25 2.25 0 0013.453 3.5H4.648l-.037-.187A2.25 2.25 0 002.404 1.5H1.25zm4.237 6.236L4.945 5h8.508a.75.75 0 01.738.884l-.728 4a.75.75 0 01-.738.616H6.63a.75.75 0 01-.737-.611l-.406-2.153z" clip-rule="evenodd"></path> <path d="M7.5 13.75c0 .69-.56 1.25-1.25 1.25h-.01a1.25 1.25 0 110-2.5h.01c.69 0 1.25.56 1.25 1.25zM14 13.75c0 .69-.56 1.25-1.25 1.25h-.01a1.25 1.25 0 110-2.5h.01c.69 0 1.25.56 1.25 1.25z"></path> </g> </g></svg>
                </div>
                <div className="text-xs font-medium">
                  هنوز محصولی به سبد خرید اضافه نشده
                </div>
                <button className="text-white  bg-teal-600 px-4 py-3 border-none rounded-[7px] mt-10 text-xs hover:bg-teal-800">
                   مشاهده صفحه فروشگاه
                </button>
             </div>
             :
             <>
             <div>
              {
                shoppingList.map((value,index)=>{
                   return(
                    <>
                    <div className="flex items-center w-full px-[5%] h-28 gap-2.5">
                         <img src={value.img} alt="product" className="w-8 h-auto"/>
                         <div className="flex flex-col gap-2.5">
                          <div className="text-xs">
                              <p>{value.name} {value.weight} گرمی</p>
                          </div>
                          <div className="flex items-center gap-2">
                             <div className="bg-transparent border-2 border-stone-300 w-16 h-8 rounded-3xl flex justify-around items-center text-yellow-500 ">
                              <button 
                              onClick={()=>{
                                let newArr=[...shoppingList];
                                newArr[index].number=newArr[index].number+1;
                                setShoppingList(newArr);
                            }}><img src="./pos.png" className="w-4 "/></button>
                              <p className=" text-orange-400 text-[18px] mt-0.5">{value.number}</p>
                              <button
                              onClick={()=>{
                                if(shoppingList[index].number>1){
                                let newArr=[...shoppingList];
                                newArr[index].number=newArr[index].number-1;
                                setShoppingList(newArr);}
                                else if(shoppingList[index].number==1){
                                  let newArr=[];
                                  for(let i=0;i<shoppingList.length;i++){
                                    if(i==index)
                                      continue;
                                    newArr.push(shoppingList[i])
                                  }
                                  setShoppingList(newArr);
                                }}}>{(shoppingList[index].number!=1)?<img src="./neg.png" className="w-4"/>:<img src="./gar.png" className="w-4"/>}</button>
                             </div>
                             <div className="flex flex-col gap-2">
                               {(value.offPercent!=0)?<p className="text-[9px] text-teal-600 "><span className="text-xs font-medium">{Number(value.offPercent)*Number(value.value)/100}</span> تومان تخفیف</p>:<></>}
                               <p className="text-[10px] text-stone-400"><span className={` font-bold  ${(searchParams.get("dark")==1)?"text-white":"text-stone-800"} text-xs`}>{value.value}</span> تومان</p>
                             </div>
                          </div>
                    </div>
                    </div>
                    <div className="w-full h-[0.5px] bg-stone-300"></div>
                    </>
                   )
                })
              }
            </div>
            </>
          }
        </div>
        {
          (shoppingList.length !=0)?
        <div className="flex justify-between items-center px-1.5 h-16 ">
              <button className="bg-teal-600 text-white px-3.5 py-2 rounded-lg text-xs font-medium hover:bg-teal-800 ">ثبت سفارش</button>
              <div>
                <p className="text-[11px] text-stone-400">مبلغ قابل پرداخت</p>
                <p className="text-[10px] text-stone-400"><span className={`text-sm font-medium ${(searchParams.get("dark")==1)?"text-white":"text-black"}`}>{sum}</span> تومان</p>
              </div>
        </div>
        :
        <></>
       }
    </div>
    </>
  )
}
