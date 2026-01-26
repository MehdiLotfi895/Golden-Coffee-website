import { Outlet} from "react-router-dom";
import MobileHeader from "./MobileHeader";
import { useEffect, useState,useRef } from "react";
import Section from "./Section";
import NewProducts from "./NewProducts"
import Pupuler from "./Pupuler";
import CoffeClubForMobile from "./CoffeClubForMobile";
import Content from "./Content";
import About from "./About";
import DisplayServis from "./DisplayServis";
import Footer from "./Footer";
export default function MainPage({dark,setDark,shoppingList,setShoppingList,newProducts,bestSeller,shopNumber,setShopNumber,aboutRef,blogsRef,contactRef,mainRef,scrollToRef}) {
  useEffect(()=>{
    localStorage.setItem("dark",JSON.stringify(dark));
  },[dark])
  return (
    <div>
        <Outlet />
        <MobileHeader dark={dark} setDark={setDark} shopNumber={shopNumber} setShopNumber={setShopNumber} aboutRef={aboutRef} blogsRef={blogsRef} contactRef={contactRef} mainRef={mainRef} scrollToRef={scrollToRef}/>
        <NewProducts dark={dark} shoppingList={shoppingList} setShoppingList={setShoppingList} newProducts={newProducts} shopNumber={shopNumber}setShopNumber={setShopNumber} mainRef={mainRef}/>
        <Section dark={dark}/>
        <Pupuler dark={dark} bestSeller={bestSeller} shoppingList={shoppingList} setShoppingList={setShoppingList} shopNumber={shopNumber}setShopNumber={setShopNumber}/>
        <CoffeClubForMobile/>
        <Content dark={dark} blogsRef={blogsRef}/>
        <About aboutRef={aboutRef}/>
        <DisplayServis dark={dark}/>
        <Footer contactRef={contactRef}/>
    </div>
  )
}
