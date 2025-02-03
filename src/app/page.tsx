import BeforeAfter from "@/components/before_after";
import FAQ from "@/components/faq";
import Form from "@/components/form";
// import Google from "@/components/google";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Icon from "@/components/icons";
import Laser from "@/components/laser";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import { Top } from "@/components/top";


export default function Home() {
  return (
    <>
    <Top/>
    <Navbar/>
    <Hero/>
    <Header/>
    <Icon/>
    <Laser/>
    <BeforeAfter/>
    <Reviews/>
    <FAQ/>
    <Form/>
    
    </>
  );
}
