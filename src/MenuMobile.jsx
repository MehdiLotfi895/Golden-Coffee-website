import {NavLink ,useNavigate,useSearchParams} from "react-router-dom"
import "./MenuMobile.css"
export default function MenuMobile({setDark,aboutRef,blogsRef,contactRef,mainRef,scrollToRef}) {
  const [searchParams,setSearchParams]=useSearchParams();
  const Navigate=useNavigate()
  const cssSring=(searchParams.get("dark")==1)?"bg-zinc-700 text-white":"bg-white";
  return (
    <>
    <div className="fixed w-screen h-screen bg-[rgba(0,0,0,0.6)] backdrop-blur-xs z-20">
    </div>
    <div className={`w-60 h-screen top-0 right-0 z-20 px-2 text-sm overflow-y-scroll  fixed ${cssSring}`}>
        <div className="flex justify-between items-center w-full h-15 ">
           <img src="./app-logo.png" alt="" className="w-8 h-auto"/>
           <img src="./app-logo-type.svg" alt="" className="w-20 h-auto"/>
           <NavLink to="/">
            {
              (searchParams.get("dark")==1)?
            <img src="./whitex.png" alt="x" className="w-2.5 h-auto"/>
            :
            <img src="./x.png" alt="x" className="w-2.5 h-auto" />
}
           </NavLink>
        </div>
        <div className="w-full h-[0.5px] bg-stone-200"> </div>
        <ul className="mt-5 ">
         <li className="menuLinks"><div className="Links" ><img src="./shopping-bag.png" alt="" className="imgLinks "/><p className="text-orange-300">فروشگاه</p></div></li>
         <li className="menuLinks"><div className="Links" ><img src="./home.png" alt="" className="imgLinks"/><p className="text-orange-300" onClick={()=>{scrollToRef(mainRef)}}>صفحه اصلی</p></div></li>
         <li className="menuLinks"><div className="Links"><p className="p">قهوه ویژه</p></div></li>
         <li className="menuLinks"><div className="flex gap-1.5"><div className="w-1.5 h-1.5 bg-orange-300 rounded-full mt-[7.5px] mr-[22px]"></div><p className="text-orange-300">ویژه در سطح جهانی</p></div></li>
         <li className="menuLinks"><div className="Links"><p className="p">قهوه درجه یک</p></div></li>
         <li className="menuLinks"><div className="Links"><p className="p">ترکیبات تجاری</p></div></li>
         <li className="menuLinks"><div className="Links"><p className="p">کپسول قهوه</p></div></li>
         <li className="menuLinks"><div className="Links"><p className="p">قهوه زینو برزیلی</p></div></li>
         <li className="menuLinks"><div className="Links items-center">{(searchParams.get("dark")==1)?<img src="./whitemessage.png" className="imgLinks"/>:<img src="./message.png" alt="" className="imgLinks"/>}<p>دیکشنری</p></div></li>
         <li className="menuLinks"><div className="Links items-center">{(searchParams.get("dark")==1)?<img src="./whitebag.png" className="imgLinks"/>:<img src="./bag.png" alt="" className="imgLinks"/>}<p onClick={()=>{scrollToRef(aboutRef);Navigate("/")}}>درباره ما</p></div></li>
         <li className="menuLinks"><div className="Links">{(searchParams.get("dark")==1)?<img src="./whitenote.png" className="imgLinks"/>:<img src="./note.png" alt="" className="imgLinks"/>}<p onClick={()=>{scrollToRef(blogsRef);Navigate("/")}}>بلاگ </p></div></li>
         <li className="menuLinks"><div className="Links">{(searchParams.get("dark")==1)?<img src="./whitephone.png" className="imgLinks"/>:<img src="./phoneformobile.png" alt="" className="imgLinks"/>}<p onClick={()=>{scrollToRef(contactRef);Navigate("/");}}>ارتباط با ما</p></div></li>
        </ul>
        <div className="w-full h-[0.5px] bg-stone-200 mt-1 "></div>
        <ul>
         <NavLink to={`/login?dark=${(searchParams.get("dark")==1)?1:0}`} className="menuLinks"><a href="" className="Links"><img src="./enter.png" alt="" className="w-5 h-5"/><p className="text-orange-300">ورود</p><p className="text-orange-300">|</p><p className="text-orange-300">ثبت نام</p></a></NavLink>
         <li className="menuLinks">{(searchParams.get("dark")==1)?<button onClick={()=>{setSearchParams({dark:0});setDark(false)}}className="Links"><img src="./sun.png" className="w-5 h-5"/><p className="text-orange-300">تم روشن</p></button>:<button onClick={()=>{setSearchParams({dark:1});setDark(true)}}className="Links"><img src="./moon.png" alt="" className="w-4 h-4"/><p className="text-orange-300">تم دارک</p></button>}</li>
         <li className="menuLinks"><NavLink to={`/shopbasket?dark=${(searchParams.get("dark")==1)?1:0}&logo=${0}`} className="Links"><img src="./orange-basket.png" alt="" className="w-[18.5px] h-[18.5px]"/><p className="text-orange-300">سبد خرید</p></NavLink></li>
        </ul>

    </div>
    </>
  )
}
