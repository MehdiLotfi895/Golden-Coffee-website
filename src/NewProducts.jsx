import Product from "./Product.jsx";
export default function NewProducts({dark,shoppingList,setShoppingList,newProducts,shopNumber,setShopNumber,mainRef}) {
  return (
    <div className="p-[4vw] flex flex-col gap-3 mt-5 items-center break-5:bg-[url('./body-bg.png')] break-5:bg-contain bg-no-repeat" ref={mainRef}>
      <div className="w-full break-1:w-94.25 break-2:w-143.25 break-3:w-[768.4px] xl:w-270">
        <div className={`font-bold text-[min(5vw,20px)] ${dark?"text-white":"text-stone-700"} xl:text-3xl`}>جدید ترین محصولات</div>
        <div className="flex justify-between ">
            <p className="text-[min(3.5vw,15px)] xl:text-xl">فرآوری شده از دانه قهوه</p>
            <div className="flex items-center gap-1"><p className="text-[min(3.5vw,15px)] text-orange-400 xl:text-xl">مشاهده همه</p>
            <img src="flesh.png" alt="" className="w-[min(3.5vw,15px)] "/>
            </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-[min(4vw,16px)] mt-5 justify-center break-3:w-[768.4px] xl:w-270">
          
          {
             
              newProducts.map((value,index)=>{
                return(<Product name={value.name} weight={value.weight} offPercent={value.offPercent} value={value.value} img={value.img} exist={value.exist} score={value.score} dark={dark} shoppingList={shoppingList} setShoppingList={setShoppingList} productType="newProducts" shopNumber={shopNumber} setShopNumber={setShopNumber}/>)
              })
            
          }
        </div>
    </div>
  )
}
