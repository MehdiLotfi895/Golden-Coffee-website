import { useNavigate, useSearchParams,NavLink } from "react-router-dom"

export default function ShoppingNavDesktop() {
    const[searchParams,setSearchParams]=useSearchParams();
    const cssString=(searchParams.get("dark")==1)?"bg-zinc-700 text-white":"bg-white text-black";
    const Navigate=useNavigate();
  return (
    <div onMouseEnter={()=>{setSearchParams({dark:searchParams.get("dark"),hoverNav:1})}} onMouseLeave={()=>{Navigate("/")}}>
    <div className="fixed top-[81.5px] right-48 w-42 h-20 rounded-xl bg-orange-400 z-20 lg:right-50 xl:right-67">
    </div>
      <div className={`fixed top-21 right-48 w-42 h-60 rounded-xl text-sm p-5 z-20 lg:right-50 xl:right-67 ${cssString}`} >
        <ul className="flex flex-col gap-4 duration-500">
            <li><a href="#" className="hover:text-orange-400">قهوه ویژه</a></li>
            <li><a href="#" className="hover:text-orange-400">ویژه در سطح جهانی</a></li>
            <li><a href="#" className="hover:text-orange-400">قهوه درجه یک</a></li>
            <li><a href="#" className="hover:text-orange-400">ترکیبات تجاری</a></li>
            <li><a href="#" className="hover:text-orange-400">کپسول قهوه</a></li>
            <li><a href="#" className="hover:text-orange-400">قهوه زینو برزیلی</a></li>
        </ul>
    </div>
    </div>

  )
}
