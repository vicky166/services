import BeforeAfter from "@/components/before_after";
import BlogSection from "@/components/blog";
import DoctorsSection from "@/components/doctors";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Form from "@/components/form";
import GoogleReviews from "@/components/google";
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
    <GoogleReviews/>
    <DoctorsSection/>
    <BlogSection/>
    <Footer/>
    </>
  );
}
