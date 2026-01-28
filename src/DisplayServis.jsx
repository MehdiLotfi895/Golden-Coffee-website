import Servis from "./Servis"
export default function DisplayServis({dark}) {
  return (
    <div className="flex justify-center ">
    <div className="flex w-full flex-wrap gap-5 p-3 justify-center mt-10 break-1:w-94.25 break-2:w-143.25 break-3:w-[768.4px] lg:justify-between xl:w-270">
        <Servis img={(dark)?"/24.png":"/support.svg"} description={["پشتیبانی شبانه روزی","7روز هفته و24 ساعته"]}dark={dark}></Servis>
        <Servis img={(dark)?"/box.png":"/express-delivery.svg"} description={["امکان تحویل اکسپرس","ارسال بسته با سرعت باد"]}dark={dark}></Servis>
        <Servis img={(dark)?"/Coffe.png":"/coffee.svg"} description={["رست تخصصی","تازه برداشت شده "]}dark={dark}></Servis>
        <Servis img={(dark)?"/parch.png":"/pitcher.svg"} description={["اکسسوری قهوه","وسایل و ادوات دم اوری"]}dark={dark}></Servis>
    </div>
    </div>
  )
}
