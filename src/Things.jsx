function Things({img,name,dark}){
    const cssString=(dark)?"text-white":"text-black"
    return(
        <div className="w-[max(80px,8.5%)] flex flex-col items-center break-2:w-[17%] xl:w-35">
           <img src={img} className="w-full"/>
           <div className={`mt-1 text-xs font-medium text-center ${cssString} break-2:text-sm`}>{name}</div>
        </div>
    )
}

export default Things;