// import Layout from "../../components/layout/Layout";
import {useContext} from "react";
import Category from "../../components/cartegory/Cartegory";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/navbar/layout/Layout";
import Testimonial from "../../components/testimonial/Teatimonial";
import Track from "../../components/track/Track";
import Loader from "../../components/loader/Loader";


const HomePage = () => {
   
    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <Testimonial/>
            <Loader/>
            <Footer/>
            
        </Layout>
    );
}

export default HomePage;