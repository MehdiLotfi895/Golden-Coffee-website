import { useState } from "react";

export default function Product({name,weight,offPercent,value,img,exist,score,dark,shoppingList,setShoppingList,productType,shopNumber,setShopNumber}) {

  const cssString =(dark)?"bg-zinc-700 text-white":"bg-white";
  const sureWidth=(productType=="newProducts")? "w-[50%] ":" w-[74%]";
  let arr1=[];
  for(let i=1;i<=score;i++)
    arr1.push(i)
  let arr2=[];
  for (let i=1;i<=5-score;i++)
    arr2.push(i);
  const[successMessage,setSuccesMessage]=useState(false)
    const[failureMessage,setFailurMessage]=useState(false)
  return (
    <div className={`${cssString}  flex flex-col px-2.5 pt-7 pb-1 w-[min(44vw,180px)]  rounded-xl gap-4 items-center xl:w-64 xl:pb-5`}>
      {
            (successMessage)?<div className=" fixed top-[90%] left-[5%] bg-[rgba(46,204,113,0.2)] text-green-500 px-3 py-2 rounded-sm z-50 text-xs">
                کالا با موفقیت به سبد خرید اضافه شد
            </div>:<></>
        }
        {
            (failureMessage)?<div className="fixed top-[90%] left-[5%] bg-[rgba(231,76,60,0.15)] text-red-500 px-3 py-2 rounded-sm z-50 text-xs ">
           به دلیل عدم موجودی کالا به سبد خرید اضافه نشد
        </div>:<></>
        }
      <img src={img} alt="product" className={sureWidth}/>
      <div className="flex flex-col gap-1">
      <p className="text-[min(4vw,16px)] font-medium xl:text-xl">قهوه بن مانو {weight} گرم</p>
      <p className="text-[min(4vw,16px)] font-medium xl:text-xl">{name}</p>
      <div className="flex items-center gap-[1vw]">
      {(exist)?<p className="text-[min(3vw,12px)] text-teal-700 xl:text-[16px]"><span className="text-[min(4vw,16px)] font-bold xl:text-xl">{value-(value*offPercent/100)}</span> تومان</p>:<p className="text-[min(4vw,16px)] text-red-500 font-medium xl:text-xl">فعلا موجود نیست</p>}
      {(offPercent!=0)?<del className="text-red-600"><p className="text-[min(4vw,16px)] text-stone-400 font-medium xl:text-xl">{value}</p></del>:<></>}
      </div>
      <div className="flex items-center"> 
        <button className="bg-gray-100 rounded-full w-[min(6vw,30px)] h-[min(6vw,30px)] flex justify-center items-center " onClick={()=>{
          if(exist){
            let si=true;
            shoppingList.map((value,index)=>{
                if(value.name==name){
                   let newArr=[...shoppingList];
                   newArr[index].number=newArr[index].number+1;
                   setShoppingList(newArr);
                   si=false;
                }
            })
            if(si){
        setShopNumber(shopNumber+1);
        let newArr=[...shoppingList];
        const objecet ={name:name,weight:weight,offPercent:offPercent,value:value,img:img,exist:exist,score:score,number:1};
        newArr.push(objecet);
        setShoppingList(newArr);}
        setSuccesMessage(true)
        setTimeout(() => {
            setSuccesMessage(false)
        }, 2000);
          }
          else{
            setFailurMessage(true);
            setTimeout(() => {
                setFailurMessage(false)
            }, 2000);
          }      
        }}>
          <img src="./black-basket.png" alt="" className="w-[min(4.4vw,19px)]"/>
        </button>
        <img src="./arrow.png" className="w-[min(8vw,33px)]"/>
        {
          arr2.map(value=>{
           return (<img src="./graystar.png" className="w-[min(4.7vw,19px)] xl:w-6"/>)})
        }
        {
          arr1.map(value=>{
            return(<img src="./star.png" className="w-[min(4.7vw,19px)] xl:w-6"/>)
          })
        }
      </div>
      </div>
      {/* {(offPercent!=0)?<div className="relative  top-[-225.5px] bg-orange-400 rounded-xl text-white w-9 h-5 text-xs text-center"><p className="mt-0.5">{offPercent}%</p></div>:<></>} */}
    </div>
  )
}
