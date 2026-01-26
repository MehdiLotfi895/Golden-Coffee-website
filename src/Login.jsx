import { useNavigate ,NavLink,useSearchParams} from "react-router-dom"
export default function Login() {
  const Navigate=useNavigate()
   const[searchParams,setSearchParams]=useSearchParams();
   const state=(searchParams.get("dark")==1);
  return (
    <div className={`w-screen h-screen flex items-center lg:justify-center ${state?"bg-zinc-800":"bg-white"}`}>
    <div className={` w-full flex flex-col justify-center gap-12 px-4 py-8 break-6:gap-14 lg:w-95 lg:border-2 lg:border-stone-200  lg:rounded-xl lg:px-9 `}>
    <button onClick={()=>{Navigate("/")}} className="absolute top-5 right-5 lg:hidden">
        <img src="flesh.png" alt="" className="w-4 rotate-180"/>
    </button>
      <div className="w-full flex items-center gap-2 ">
        <img src="flesh.png" alt="" className="w-4 rotate-180 hidden lg:block" onClick={()=>{Navigate("/")}}/>
        <img src="app-logo.png" alt="" className="w-12 break-6:w-14 mr-8"/>
        <p className="text-logo-login font-bold break-6:text-[18px]">Golden Coffee</p>
      </div>
      <div className="flex flex-col gap-5">
        <p className={`text-sm font-semibol break-6:text-[17px] ${state?"text-white":"text-stone-800"}`}>ورود یا ثبت نام در Golden Coffee</p>
        <p className={`text-[9px] break-6:text-xs ${state?"text-white":"text-stone-500"}`}>لطفا شماره موبایل یا ایمیل خود را وارد نمایید</p>
        <input type="text" className={`w-full h-12 border-1 font-medium rounded-md text-[10px] pr-4 break-6:text-xs ${state?"text-white":"text-stone-800"}`} placeholder="شماره موبایل یا پست الکترونیک"/>
        <button className="w-full h-12 rounded-md bg-orange-400 text-white font-medium text-xs break-6:text-sm ">
          ورود به Golden Coffee
        </button>
        <p className={`text-[9px] break-6:text-xs ${state?"text-white":"text-stone-500"}`}>
          ورود شما به معنای پذیرش <NavLink className="text-blue-400">شرایط</NavLink> و <NavLink className="text-blue-400">قوانین حریم خصوصی</NavLink> است
        </p>
      </div>
    </div>
    </div>
  )
}
