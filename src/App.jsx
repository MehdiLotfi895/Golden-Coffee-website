import { BrowserRouter, Route, Routes} from "react-router-dom"
import MenuMobile from "./MenuMobile"
import ShopBasketMobile from "./ShopBasketMobile"
import Login from "./Login.jsx"
import MainPage from "./MainPage"
import { useState ,useRef} from "react"
import ShoppingNavDesktop from "./ShoppingNavDesktop"
import "./App.css";
export default function App() {
  const [dark,setDark]=useState(()=>{
    return(localStorage.getItem("dark")=="true");
  });
  const [shoppingList,setShoppingList]=useState(()=>{
    return(JSON.parse(localStorage.getItem("shoppingList"))||[]);
  });
  //در روش درست دیتا باید از ای پی ای فتش بشود نه از ارایه استفاده بشه
  const newProducts=[
    {name:"قهوه اسپرسو پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p1.png",exist:true,score:4},
  {name:"قهوه آمریکانو پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p2.png",exist:false,score:3},
  {name:"قهوه لاته پریسکا",weight:"250",offPercent:20,value:175000,number:1,img:"./p3.png",exist:true,score:5},
  {name:"قهوه کاپوچینو پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p4.png",exist:true,score:4},
  {name:"قهوه موکا پریسکا",weight:"250",offPercent:12,value:175000,number:1,img:"./p2.png",exist:true,score:4},
  {name:"قهوه ماکیاتو پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p3.png",exist:false,score:2},
  {name:"قهوه فلت پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p1.png",exist:true,score:5},
  {name:" قهوه ترک پریسکا",weight:"250",offPercent:30,value:175000,number:1,img:"./p4.png",exist:true,score:4},
  ]
  const bestSeller=[
    {name:"قهوه کورتادو پریسکا",weight:"250",offPercent:12,value:175000,number:1,img:"./p5.png",exist:true,score:5},
    {name:"قهوه  ایرلندی پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p7.png",exist:false,score:4},
    {name:"قهوه آفوگاتو پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p8.png",exist:true,score:4},
    {name:"قهوه ریسترتو پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p6.png",exist:true,score:4},
  ]
  const [shopNumber,setShopNumber]=useState(0);
  const aboutRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);
  const mainRef   =useRef(null);
  const scrollToRef = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' ,block: "start"});
  };
  return(
    <div className={(dark)?"bg-zinc-800 text-white":"bg-gray-100"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage dark={dark} setDark={setDark} shoppingList={shoppingList} setShoppingList={setShoppingList} newProducts={newProducts} bestSeller={bestSeller} shopNumber={shopNumber} setShopNumber={setShopNumber} aboutRef={aboutRef} blogsRef={blogsRef} contactRef={contactRef} mainRef={mainRef} scrollToRef={scrollToRef}/>}>
            <Route path="menu" element={<MenuMobile setDark={setDark} aboutRef={aboutRef} blogsRef={blogsRef} contactRef={contactRef} mainRef={mainRef} scrollToRef={scrollToRef}/>}/>  
            <Route path="shopbasket" element={<ShopBasketMobile shoppingList={shoppingList} setShoppingList={setShoppingList} scrollToRef={scrollToRef} mainRef ={mainRef }/>}/>
            <Route path="shoppingNavDesktop" element={<ShoppingNavDesktop />} />
          </Route>
          <Route path="Login"  element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
