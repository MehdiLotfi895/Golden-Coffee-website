import Product from "./Product"
export default function Pupuler({dark,bestSeller,shoppingList,setShoppingList,shopNumber,setShopNumber}) {
    const cssSring=(dark)?"text-white":"text-stone-600"
  return (
    <div className="p-[4vw] flex flex-col gap-3 mt-5 items-center">
      <div className="w-full break-1:w-94.25 break-2:w-143.25 break-3:w-[768.4px] xl:w-270">
        <p className={`font-bold text-[min(5vw,20px)] ${dark?"text-white":"text-stone-700"} xl:text-3xl`}>محصولات پر فروش</p>
        <p className="text-[min(3.5vw,15px)] xl:text-xl">پیشنهاد قهوه خور ها ...</p>
      </div>
        <div className="flex flex-wrap gap-[min(4vw,16px)] mt-5 justify-center break-3:w-[768.4px] xl:w-270">
       {
                    
                     bestSeller.map((value,index)=>{
                       return(<Product name={value.name} weight={value.weight} offPercent={value.offPercent} value={value.value} img={value.img} exist={value.exist} score={value.score} dark={dark} shoppingList={shoppingList} setShoppingList={setShoppingList} productType="pupulerProducts" shopNumber={shopNumber}setShopNumber={setShopNumber}/>)
                     })
                   
                 }
        </div>
    </div>
  )
}
