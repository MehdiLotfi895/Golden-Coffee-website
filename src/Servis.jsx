export default function Servis({img,description}) {
  return (
    <div className="w-30 h-30 flex flex-col items-center gap-3 lg:flex-row lg:w-42.5 lg:gap-0">
         <img src={img} alt="" className="w-15 h-15"/>
         <div className="flex flex-col gap-3 items-center">
         <p className="text-xs font-bold">{description[0]}</p>
         <p className="text-[10px]">{description[1]}</p>
         </div>
    </div>
  )
}
