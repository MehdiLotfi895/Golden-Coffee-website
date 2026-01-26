import { useNavigate,NavLink, useSearchParams,} from "react-router-dom";
export default function MobileHeader({dark,setDark,shopNumber,setShopNumber,aboutRef, blogsRef,contactRef, mainRef ,scrollToRef}) {
  const cssString=(dark)?"bg-neutral-800 text-white":"bg-gray-50 text-black";
  const [searchParams,setSearchParams]=useSearchParams();
  const Hidden=(searchParams.get("logo")==0)?"hidden":"";
  const Navigate=useNavigate();
  return (
    <div>
    <div className={`fixed top-0  w-screen h-14 flex justify-between items-center px-3 py-3 z-10 ${cssString} md:hidden`}>
        <NavLink to={`menu?dark=${(dark)?1:0}&logo=${0}`}>
          {
            dark?
            <img src="./whitemenu.png" alt="menu" className="w-5 h-5  " /> 
            :
            <img src="./menu.png" className="w-5 h-5  " />
          }
        </NavLink> 
       <img src="./app-logo-type.svg" alt="site-logo" className={`w-20 ${Hidden}`}/>
        <NavLink to={`shopbasket?dark=${(dark)?1:0}&logo=${0}`}>
          {
            dark?
            <img src="white-basket.png" alt="baskte" className="w-5 h-5 "/>
            :
            <img src="./black-basket.png" className="w-5 h-5 "/>
          }
        </NavLink>
    </div>
    <div className="bg-[url('./headerBgMobile.webp')] w-full h-[calc(100vw/1.94)] bg-contain bg-no-repeat flex flex-col justify-center p-4 mt-14 md:mt-0 md:bg-[url('./headerBgDesktop.webp')] " >
    <div className="hidden fixed top-7 right-[5vw] w-[90vw] h-17 bg-[rgba(0,0,0,0.6)] backdrop-blur-xs rounded-2xl  z-10  items-center justify-between px-5 md:flex xl:h-19 xl:px-8" >
    <ul className="flex gap-4 text-white items-center text-sm xl:text-[16px] xl:gap-6">
         <li><img src="./app-logo.png" alt="" className="w-9 xl:w-12"/></li>
         <li><button onClick={()=>{scrollToRef(mainRef)}}>صفحه اصلی</button></li>
         <li onMouseEnter={()=>{Navigate(`shoppingNavDesktop?dark=${(dark)?1:0}&hoverNav=${0}`)}} onMouseLeave={()=>{if(searchParams.get("hoverNav")==0){Navigate("/")}}} className="h-16 flex items-center"><NavLink to={`shoppingNavDesktop?dark=${(dark)?1:0}`}><p >فروشگاه</p></NavLink></li>
         <li className="hidden lg:block"><button>دیکشنری</button></li>
         <li><button onClick={()=>{scrollToRef(aboutRef)}}>درباره ما</button></li>
         <li><button onClick={()=>{scrollToRef(blogsRef)}}>بلاگ </button></li>
         <li><button onClick={()=>{scrollToRef(contactRef)}}>ارتباط با ما</button></li>
      </ul>
      <ul className="flex gap-4 text-[#ebd3ab] items-center text-sm xl:text-[16px] xl:gap-6">
        <li><NavLink to={`shopbasket?dark=${(dark)?1:0}`} className="flex" onClick={()=>{setShopNumber(0)}}>{(shopNumber!=0)?<div className=" relative top-3 right-2 w-3 h-3 bg-orange-500 z-30 text-white text-xs text-center rounded-full xl:w-4 xl:h-4 xl:text-sm">{shopNumber}</div>:<></>}<img src="./basketDesktop.png" alt="" className="w-5 xl:w-6"/></NavLink></li>
        <li>{(!dark)?<img src="./moonDesktop.png" alt="" className="w-5 xl:w-6" onClick={()=>{setDark(true);setSearchParams({dark:1})}}/>:<img src="./sunDesktop.png" className="w-5 xl:w-6" onClick={()=>{setDark(false);setSearchParams({dark:0})}}/>}</li>
        <li><div className="w-[1px] h-10 bg-[#ebd3ab]"></div></li>
        <NavLink to={`login?dark=${(dark)?1:0}`} className="flex gap-2"><img src="./enterDesktop.png" alt="" className="w-5 hidden lg:block xl:w-6" /><p>ورود</p><p>|</p><p>ثبت نام</p></NavLink>
      </ul>
    </div>
    <div className="mr-[40%] w-[min(60%,350px)] md:mr-[60%] md:w-[min(40%,370px)]">
      <h1 className="text-[min(6.5vw,45px)] text-stone-100 font-black md:text-[min(50px,3.5vw)]" id="headerDes">قهوه عربیکا تانزانیا</h1>
      <p className="text-white text-[min(5vw,35px)] md:text-[min(35px,2.7vw)]">یک فنجان بالانس!</p>
      <div className="w-[60%] h-[0.5px] bg-orange-200 my-[2vh] "></div>
      <p className="text-white text-[min(3.2vw,18px)] md:text-[min(20px,2vw)]">قطعا نام اشنای عربیکا را شنیده اید.عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند  قهوه کشت میشود</p>
    </div>
    </div>
    </div>
  )
}

